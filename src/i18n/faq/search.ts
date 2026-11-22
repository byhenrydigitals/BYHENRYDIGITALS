import { FaqBundle, FaqCategoryId, FaqEntry } from './types';

export interface FaqSearchMatch {
  entry: FaqEntry;
  score: number;
}

const STOP_WORDS = new Set([
  'a', 'an', 'and', 'are', 'as', 'at', 'be', 'by', 'can', 'do', 'does',
  'for', 'from', 'how', 'i', 'in', 'is', 'it', 'me', 'my', 'of', 'on',
  'or', 'the', 'to', 'what', 'when', 'where', 'which', 'who', 'why', 'with',
  'de', 'du', 'des', 'la', 'le', 'les', 'un', 'une', 'et', 'ou', 'est',
  'que', 'qui', 'quoi', 'comment', 'pour', 'dans', 'sur', 'avec',
  'na', 'nke', 'maka', 'kedu', 'gini', 'bu',
  'ni', 'ti', 'se', 'fun', 'ki', 'bawo',
  'da', 'ta', 'ya', 'ne', 'ce', 'yadda', 'mene', 'me', 'ina',
]);

function normalizeText(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\p{L}\p{N}%₦+\s-]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function tokenizeQuery(query: string): string[] {
  const normalized = normalizeText(query);
  if (!normalized) return [];
  const rawTokens = normalized.split(' ').filter(Boolean);
  const meaningful = rawTokens.filter((t) => t.length > 1 && !STOP_WORDS.has(t));
  return meaningful.length > 0 ? meaningful : rawTokens;
}

function damerauLevenshtein(a: string, b: string): number {
  const lenA = a.length;
  const lenB = b.length;
  if (Math.abs(lenA - lenB) > 2) return 3;

  const dp: number[][] = Array.from({ length: lenA + 1 }, () =>
    new Array<number>(lenB + 1).fill(0)
  );
  for (let i = 0; i <= lenA; i += 1) dp[i][0] = i;
  for (let j = 0; j <= lenB; j += 1) dp[0][j] = j;

  for (let i = 1; i <= lenA; i += 1) {
    for (let j = 1; j <= lenB; j += 1) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      );
      if (
        i > 1 &&
        j > 1 &&
        a[i - 1] === b[j - 2] &&
        a[i - 2] === b[j - 1]
      ) {
        dp[i][j] = Math.min(dp[i][j], dp[i - 2][j - 2] + 1);
      }
    }
  }
  return dp[lenA][lenB];
}

function hasTypoMatch(token: string, candidateWords: string[]): boolean {
  if (token.length < 4) return false;
  const maxDist = token.length >= 7 ? 2 : 1;
  for (const word of candidateWords) {
    if (word.length < 4) continue;
    if (Math.abs(word.length - token.length) > maxDist) continue;
    if (damerauLevenshtein(token, word) <= maxDist) {
      return true;
    }
  }
  return false;
}

export function getPublishedEntries(bundle: FaqBundle): FaqEntry[] {
  return bundle.entries.filter((entry) => entry.status === 'published');
}

export function searchFaqEntries(
  bundle: FaqBundle,
  englishEntries: FaqEntry[],
  rawQuery: string,
  selectedCategory: 'all' | FaqCategoryId
): FaqSearchMatch[] {
  const cleanQuery = normalizeText(rawQuery);
  const tokens = tokenizeQuery(rawQuery);
  const englishMap = new Map(
    englishEntries
      .filter((item) => item.status === 'published')
      .map((item) => [item.id, item])
  );

  const published = getPublishedEntries(bundle);
  const scoped =
    selectedCategory === 'all'
      ? published
      : published.filter((entry) => entry.categoryId === selectedCategory);

  if (!cleanQuery) {
    return scoped.map((entry) => ({ entry, score: 1 }));
  }

  const matches: FaqSearchMatch[] = [];

  for (const entry of scoped) {
    const enMatch = englishMap.get(entry.id);
    const questionNorm = normalizeText(entry.question);
    const answerNorm = normalizeText(entry.answer.join(' '));
    const categoryNorm = normalizeText(bundle.categories[entry.categoryId].title);
    const keywordNorm = normalizeText(
      [...entry.keywords, ...(enMatch?.keywords || [])].join(' ')
    );
    const enQuestionNorm = enMatch ? normalizeText(enMatch.question) : '';
    const enAnswerNorm = enMatch ? normalizeText(enMatch.answer.join(' ')) : '';

    const fuzzyVocab = Array.from(
      new Set(
        `${questionNorm} ${keywordNorm} ${categoryNorm} ${enQuestionNorm}`
          .split(' ')
          .filter((w) => w.length >= 4)
      )
    );

    let score = 0;

    if (questionNorm.includes(cleanQuery) || enQuestionNorm.includes(cleanQuery)) {
      score += 48;
    }
    if (keywordNorm.includes(cleanQuery)) {
      score += 36;
    }
    if (answerNorm.includes(cleanQuery) || enAnswerNorm.includes(cleanQuery)) {
      score += 22;
    }
    if (categoryNorm.includes(cleanQuery)) {
      score += 14;
    }

    let matchedTokenCount = 0;
    for (const token of tokens) {
      let tokenHit = false;
      const stem = token.length >= 5 ? token.slice(0, -1) : token;

      if (
        questionNorm.includes(token) ||
        enQuestionNorm.includes(token) ||
        (stem.length >= 4 &&
          (questionNorm.includes(stem) || enQuestionNorm.includes(stem)))
      ) {
        score += questionNorm.includes(token) ? 12 : 8;
        tokenHit = true;
      }

      if (
        keywordNorm.includes(token) ||
        (stem.length >= 4 && keywordNorm.includes(stem))
      ) {
        score += keywordNorm.includes(token) ? 10 : 6;
        tokenHit = true;
      }

      if (categoryNorm.includes(token)) {
        score += 6;
        tokenHit = true;
      }

      if (
        answerNorm.includes(token) ||
        enAnswerNorm.includes(token) ||
        (stem.length >= 4 &&
          (answerNorm.includes(stem) || enAnswerNorm.includes(stem)))
      ) {
        score += answerNorm.includes(token) ? 5 : 3;
        tokenHit = true;
      }

      if (!tokenHit && hasTypoMatch(token, fuzzyVocab)) {
        score += 4;
        tokenHit = true;
      }

      if (tokenHit) matchedTokenCount += 1;
    }

    if (tokens.length > 1 && matchedTokenCount === tokens.length) {
      score += 18;
    } else if (tokens.length > 1 && matchedTokenCount > 0) {
      score += matchedTokenCount * 2;
    }

    if (score > 0) {
      matches.push({ entry, score });
    }
  }

  matches.sort((a, b) => b.score - a.score);
  return matches;
}
