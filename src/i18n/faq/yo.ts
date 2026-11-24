import { composeFaqEntries } from './recordsMeta';
import { FaqBundle, FaqLocalizedRecord } from './types';

const recordsYo: Record<string, FaqLocalizedRecord> = {
  // A. Nípa BYHENRYDIGITALS
  'about-01': {
    question: 'Kí ni BYHENRYDIGITALS?',
    answer: [
      'BYHENRYDIGITALS (BHD) jẹ́ ilé-iṣẹ́ ìpinnu dígítà àti ẹ̀kọ́ tí Henry (Coach Henry) dá sílẹ̀ láti dín ìdènà ìkópa dígítà kù. Ó so ẹ̀ka méjì pọ̀: BHD Academy fún ẹnìkọ̀ọ̀kan tó ń kọ́ ìmọ̀ dígítà tó wúlò, àti BHD Services fún àwọn iṣẹ́ kéékèèké tó nílò ojú-òpó wẹ́ẹ̀bù àti ìlànà iṣẹ́.',
      'Lábẹ́ ẹ̀ka méjèèjì, BHD dojú kọ ẹ̀kọ́ dígítà tó wúlò, àwọn ọjà Selar tó ṣe kedere, ètò alábàáṣepọ̀ òótọ́, àti ìpinnu wẹ́ẹ̀bù tó dá lórí àìní.',
    ],
    extraKeywords: ['àlàyé', 'bhd academy', 'bhd services', 'ẹ̀kọ́ dígítà', 'iṣẹ́ dígítà'],
    actionLabel: 'Ka Nípa BHD',
  },
  'about-02': {
    question: 'Kí ni BHD dúró fún?',
    answer: [
      'BHD ni orúkọ ìkékúrú ìṣẹ́jọba fún BYHENRYDIGITALS.',
      'Ìwọ yóò rí "BHD" lẹ́gbẹ̀ẹ́ "BYHENRYDIGITALS" ní àkójọ ìtọ́sọ́nà wẹ́ẹ̀bù, àkójọ ọjà, Ètò Alábàáṣepọ̀ BHD, àti Ìbéèrè Vanessa Kíkún.',
    ],
  },
  'about-03': {
    question: 'Ta ni olùdásílẹ̀ BYHENRYDIGITALS?',
    answer: [
      'Olùdásílẹ̀ BYHENRYDIGITALS ni Henry, tí ọ̀pọ̀ ènìyàn mọ̀ sí Coach Henry.',
      'Ó dá BHD sílẹ̀ láti jẹ́ kí ẹ̀kọ́ dígítà tó wúlò, ìkọ́lé wẹ́ẹ̀bù tó ń ṣiṣẹ́, àti ọ̀nà tó ṣe kedere láti ṣẹ̀dá iye lórí íńtánẹ́ẹ̀tì rọrùn fún gbogbo ènìyàn.',
    ],
    actionLabel: 'Pàdé Olùdásílẹ̀',
  },
  'about-04': {
    question: 'Kí ni èròngbà BYHENRYDIGITALS?',
    answer: [
      'Èròngbà BHD ni láti mú ìdíwọ́ kúrò níwájú ìmọ̀ dígítà tó wúlò àti ìpinnu wẹ́ẹ̀bù tó ṣeé gbẹ́kẹ̀lé nípasẹ̀ ẹ̀kọ́ tó ṣe kedere, òwò tó láìléwu àti ìtọ́sọ́nà olóòótọ́.',
    ],
    actionLabel: 'Wo Èròngbà Wa',
  },
  'about-05': {
    question: 'Ìṣòro wo ni BHD ń gbìyànjú láti yanjú?',
    answer: [
      'Ọ̀pọ̀ ènìyàn tí wọ́n ń wá àǹfààní lórí íńtánẹ́ẹ̀tì máa ń pàdé ìlérí èké, iye tí kò ṣe kedere, ètò MLM, tàbí ojú-òpó wẹ́ẹ̀bù tí kò ṣiṣẹ́ dáadáa.',
      'BHD yanjú èyí pẹ̀lú ẹ̀kọ́ láìsí ìfọ̀rọ̀gbọ̀ọ́rọ̀, ètò alábàáṣepọ̀ 35% tààrà láìsí MLM, àti àwọn wẹ́ẹ̀bù tó dá lórí ìwúlò gidi.',
    ],
  },
  'about-06': {
    question: 'Kí ni ìran BYHENRYDIGITALS?',
    answer: [
      'Ìran BHD ni láti kọ́ àgbáyé dígítà tó ṣeé gbẹ́kẹ̀lé tí ó ń so àwọn akẹ́kọ̀ọ́, olùṣẹ̀dá, àti ilé-iṣẹ́ pọ̀ kọjá èdè mẹ́fà tó ń ṣiṣẹ́: English, Igbo, Yorùbá, Hausa, French, àti Nigerian Pidgin.',
    ],
  },
  'about-07': {
    question: 'Kí ni "Digital Solutions. Global Impact." túmọ̀ sí?',
    answer: [
      '"Digital Solutions. Global Impact." ("Àwọn Ìpinnu Dígítà. Ipa Àgbáyé.") ni ọ̀rọ̀ ìpìlẹ̀ àkọ́kọ́ ti BHD, tó ń ṣe àfihàn kíkọ́ àwọn irinṣẹ́, ìwé ẹ̀kọ́, àti ètò wẹ́ẹ̀bù tó ń ran ènìyàn lọ́wọ́ káàkiri ayé.',
    ],
  },
  'about-08': {
    question: 'Kí ni "We Build Digital Value That Sells." túmọ̀ sí?',
    answer: [
      '"We Build Digital Value That Sells." ("À Ń Kọ́ Iye Dígítà Tó Ń Tà.") túmọ̀ sí pé ọjà dígítà tàbí ojú-òpó wẹ́ẹ̀bù gbọ́dọ̀ yanjú ìṣòro gidi dáadáa kí àwọn oníbàárà lè rí iye rẹ̀.',
    ],
  },
  'about-09': {
    question: 'Àwọn wo ló lè jàǹfààní látọ̀dọ̀ BYHENRYDIGITALS?',
    answer: [
      'BYHENRYDIGITALS ń ṣe ìrànwọ́ fún àwùjọ méjì: (1) Ẹnìkọ̀ọ̀kan nípasẹ̀ BHD Academy—àwọn olùbẹ̀rẹ̀, àwọn ọ̀dọ́ àti òbí tó ń wá ìmọ̀ tó bá ọjọ́-orí mu, àti àwọn olùṣẹ̀dá lórí ètò alábàáṣepọ̀ òótọ́; àti (2) Àwọn iṣẹ́ kéékèèké nípasẹ̀ BHD Services—àwọn oníṣòwò tó nílò wẹ́ẹ̀bù tó ń ṣiṣẹ́, ojú-ewé ìtọ́sọ́nà, àti ètò iṣẹ́ tó bá ìnáwó wọn mu.',
    ],
  },
  'about-10': {
    question: 'Ṣé pẹpẹ ẹ̀kọ́ dígítà ni BHD tàbí ilé-iṣẹ́ ìṣẹ̀dá iṣẹ́ dígítà?',
    answer: [
      'BYHENRYDIGITALS ń ṣe méjèèjì lábẹ́ àmì kan ṣoṣo: (1) BHD Academy — Kẹ́kọ̀ọ́. Kọ́. Dàgbà. fún ẹnìkọ̀ọ̀kan (àwọn ọjà Selar, Ibùdó Ohun Èlò, àti Ètò Alábàáṣepọ̀), àti (2) BHD Services — Àwọn Ìpinnu Dígítà Tó Wúlò Fún Iṣẹ́-Ajé (kíkọ́ wẹ́ẹ̀bù, ojú-ewé ìtọ́sọ́nà, ìfarahàn dígítà, no-code, àti irinṣẹ́ iṣẹ́).',
    ],
  },
  'about-11': {
    question: 'Níbo ni mo ti lè rí ojú-òpó wẹ́ẹ̀bù BHD gidi kí n sì mọ̀ sí i nípa ilé-iṣẹ́ náà?',
    answer: [
      'O wà lórí ojú-òpó wẹ́ẹ̀bù BYHENRYDIGITALS gidi báyìí. Ṣabẹ̀wò sí ojú-ewé Nípa Wa, Àwọn Ọjà, Àwọn Iṣẹ́, tàbí ṣe àwárí nínú Ìbéèrè Vanessa Kíkún.',
    ],
    actionLabel: 'Lọ sí Nípa Wa',
  },

  // B. Àwọn Ọjà àti Ohun Èlò Ìkẹ́kọ̀ọ́ Dígítà
  'prod-01': {
    question: 'Àwọn ọjà dígítà tí a fìdí múlẹ̀ wo ni BYHENRYDIGITALS ń tà báyìí?',
    answer: [
      'BHD ní ọjà mẹ́ta lórí ilé-ìtajà Selar rẹ̀ (https://selar.com/m/BYHENRYDIGITALS): (1) Clicks-to-Cash, (2) Global Monetisation, àti (3) Remote Jobs for Under 18.',
      'Iye owó lọ́wọ́lọ́wọ́ àti àlàyé kíkún wà lórí Selar.',
    ],
    actionLabel: 'Wo Àkójọ Àwọn Ọjà',
  },
  'prod-02': {
    question: 'Kí ni Clicks-to-Cash àti àwọn wo ni a ṣe é fún?',
    answer: [
      'Clicks-to-Cash jẹ́ ìwé ìtọ́sọ́nà dígítà BHD lórí Selar fún àwọn akẹ́kọ̀ọ́ tuntun tí ó ṣe àfihàn ìyípadà lórí íńtánẹ́ẹ̀tì àti ìpìlẹ̀ títà ọjà dígítà láìsí àṣejù.',
    ],
    actionLabel: 'Wo Clicks-to-Cash',
  },
  'prod-03': {
    question: 'Ìṣòro wo ni Clicks-to-Cash ń yanjú àti kí ni àwọn akẹ́kọ̀ọ́ yóò lóye?',
    answer: [
      'Ó ń kọ́ bí àfiyèsí lórí íńtánẹ́ẹ̀tì ṣe ń yí padà sí iye ọjà gidi nípasẹ̀ ìtọ́sọ́nà ìṣètò àti ìlànà ìpolówó olóòótọ́.',
    ],
    actionLabel: 'BHD Store',
  },
  'prod-04': {
    question: 'Kí ni Global Monetisation àti ta ni a kọ́ ọ fún?',
    answer: [
      'Global Monetisation jẹ́ ọjà BHD lórí Selar tó dá lórí ṣíṣe àkójọpọ̀ ìmọ̀ àti ọjà dígítà fún ọjà àgbáyé àti àwọn oníbàárà káríayé.',
    ],
    actionLabel: 'Wo Global Monetisation',
  },
  'prod-05': {
    question: 'Ìṣòro wo ni Global Monetisation ń yanjú àti àwọn kókó wo ló wà nínú rẹ̀?',
    answer: [
      'Ó ń ṣàlàyé bí olùṣẹ̀dá ṣe lè kọjá agbègbè ìbílẹ̀ láti dé ọ̀dọ̀ àwọn oníbàárà àgbáyé nípa lílo ìpínkiri pẹpẹ dígítà.',
    ],
    actionLabel: 'BHD Store',
  },
  'prod-06': {
    question: 'Kí ni Remote Jobs for Under 18 àti ta ló yẹ kó lò ó?',
    answer: [
      'Remote Jobs for Under 18 jẹ́ ìwé ìtọ́sọ́nà lórí Selar fún àwọn ọ̀dọ́ tí kò tíì pé ọdún 18, àwọn akẹ́kọ̀ọ́, àti òbí wọn láti ṣàwárí ìmọ̀ dígítà tó bá ọjọ́-orí mu àti àǹfààní lórí íńtánẹ́ẹ̀tì.',
    ],
    actionLabel: 'Wo Remote Jobs for Under 18',
  },
  'prod-07': {
    question: 'Àwọn ìlànà ààbò àti ọ̀nà ìmọ̀ wo ló wà nínú Remote Jobs for Under 18?',
    answer: [
      'Ó tẹnumọ́ mímọ agbègbè ìmọ̀ tó bá ọjọ́-orí mu, kíkọ́ portfolio pẹ̀lú ààbò, títẹ̀lé òfin pẹpẹ, àti níní ìrètí gidi láìsí ìlérí iṣẹ́ lẹ́sẹ̀kẹsẹ̀.',
    ],
    actionLabel: 'BHD Store',
  },
  'prod-08': {
    question: 'Irú fáìlì àti èdè wo ni àwọn ọjà Selar ti BHD wà nínú rẹ̀ lọ́wọ́lọ́wọ́?',
    answer: [
      'Àwọn ọjà BHD lórí Selar jẹ́ ìwé ìtọ́sọ́nà tí a lè gba sílẹ̀ ní Èdè Gẹ̀ẹ́sì (English). Irú fáìlì rẹ̀ wà ní ìtẹ́jáde Selar kọ̀ọ̀kan.',
    ],
  },
  'prod-09': {
    question: 'Báwo ni mo ṣe lè rí àti ra ọjà dígítà BHD tí a fìdí múlẹ̀?',
    answer: [
      'Ṣabẹ̀wò sí https://selar.com/m/BYHENRYDIGITALS tààrà tàbí tẹ "Wo lórí Selar" ní ojú-ewé Àwọn Ọjà.',
    ],
    actionLabel: 'BHD Store',
  },
  'prod-10': {
    question: 'Ṣé BHD ń fúnni ní ìwé-ẹ̀rí, kíláàsì tààrà, tàbí ìdánilójú iṣẹ́ pẹ̀lú àwọn ìwé rẹ̀?',
    answer: [
      'Rárá. Àwọn ọjà Selar ti BHD jẹ́ ìwé ìkẹ́kọ̀ọ́ fúnra-ẹni, kì í ṣe ilé-ẹ̀kọ́ gíga oníwé-ẹ̀rí tàbí ètò ìfúnni-ní-iṣẹ́ dandan.',
    ],
  },
  'prod-11': {
    question: 'Báwo ni àwọn ohun èlò BHD ṣe ń ran ènìyàn lọ́wọ́ láti lóye iṣẹ́-ajé dígítà àti títà dígítà?',
    answer: [
      'Àwọn ìwé Selar àti àpilẹ̀kọ Búlọ́ọ̀gì ń ṣàlàyé bí ṣíṣẹ̀dá iye àti ètò wẹ́ẹ̀bù ṣe ń mú títà tó dúró pẹ́ wá.',
    ],
    actionLabel: 'Ṣí Àwọn Ohun Èlò',
  },
  'prod-12': {
    question: 'Kí ni àwọn ohun èlò BHD sọ nípa títà alábàáṣepọ̀ àti owó lórí íńtánẹ́ẹ̀tì?',
    answer: [
      'Wọ́n ń kọ́ni ní ìṣedéédé àti ìdánilójú òótọ́—kí a má ṣe parọ́ tàbí ṣèlérí ọrọ̀ kíákíá.',
    ],
    actionLabel: 'Ka Àwọn Àpilẹ̀kọ',
  },
  'prod-13': {
    question: 'Kí ni ohun èlò BHD sọ nípa iṣẹ́ láti ọ̀nà jíjìn àti àǹfààní dígítà?',
    answer: [
      'Wọ́n tọ́ka sí àwọn ìmọ̀ ìpìlẹ̀ bíi kíkọ ọ̀rọ̀, ìkọ́lé wẹ́ẹ̀bù, àti portfolio, pẹ̀lú ìtọ́sọ́nà Remote Jobs for Under 18.',
    ],
  },
  'prod-14': {
    question: 'Ṣé BHD sọ nípa ṣíṣẹ̀dá ọjà dígítà àti owó oríṣiríṣi orílẹ̀-èdè?',
    answer: [
      'Bẹ́ẹ̀ ni. Global Monetisation ṣàlàyé bí a ṣe ń ṣètò ọjà fún oníbàárà àgbáyé lórí pẹpẹ bíi Selar.',
    ],
  },
  'prod-15': {
    question: 'Ṣé àwọn ohun èlò BHD sọ nípa ìṣẹ̀dá àkóónú pẹ̀lú ìrànlọ́wọ́ AI?',
    answer: [
      'Bẹ́ẹ̀ ni. Àwọn àpilẹ̀kọ AI àti Ìmọ̀-ẹ̀rọ ṣàlàyé bí irinṣẹ́ AI ṣe lè ran kíkọ àkọsílẹ̀ lọ́wọ́ nígbà tí ènìyàn bá ń ṣàtúnṣe rẹ̀.',
    ],
    actionLabel: 'Ka Àwọn Ohun Èlò AI',
  },

  // C. Ètò Alábàáṣepọ̀ BHD
  'aff-01': {
    question: 'Kí ni Ètò Alábàáṣepọ̀ BHD?',
    answer: [
      'Ètò Alábàáṣepọ̀ BHD jẹ́ ìlànà ìbéèrè àti ìyàn tààrà ìpele kan ṣoṣo ní BYHENRYDIGITALS (kò sí MLM). Àwọn olùfẹ́ ń fi ìbéèrè ránṣẹ́ fún àyẹ̀wò BHD, àwọn tí a yàn tí a sì fọwọ́ sí ń gba ìdá 35% lórí títà Selar tó yẹ.',
      'Ó yàtọ̀ pátápátá sí ọjà ẹ̀kọ́ ₦8,000 Affiliate Starter Kit.',
    ],
    actionLabel: 'Wo Ètò Alábàáṣepọ̀',
  },
  'aff-02': {
    question: 'Ta ló lè béèrè láti di alábàáṣepọ̀ BYHENRYDIGITALS?',
    answer: [
      'Àwọn olùkọ́ dígítà, òǹkọ̀wé, olùṣẹ̀dá àkóónú, akẹ́kọ̀ọ́, àti ẹnikẹ́ni tó fẹ́ pín àwọn ọjà tó wúlò pẹ̀lú òótọ́ lè fi ìbéèrè ránṣẹ́ fún àyẹ̀wò.',
      'Fífi ìbéèrè ránṣẹ́ kò ṣe ìdánilójú ìyàn—BYHENRYDIGITALS ń ṣàyẹ̀wò gbogbo ìbéèrè, àwọn tí a fọwọ́ sí ní ìjọba nìkan ni ó ń di alábàáṣepọ̀ BHD.',
    ],
    actionLabel: 'Béèrè Láti Di Alábàáṣepọ̀ BHD',
  },
  'aff-03': {
    question: 'Báwo ni Ètò Alábàáṣepọ̀ BHD ṣe ń ṣiṣẹ́ ní ìgbésẹ̀-sí-ìgbésẹ̀?',
    answer: [
      '1. Fi ìbéèrè ránṣẹ́ nípasẹ̀ BYHENRYDIGITALS Enquiry Form lórí ojú-ewé Kàn Sí Wa, ímeèlì (byhenrydigitals@gmail.com), tàbí WhatsApp (+234 708 208 8942). Ìbéèrè jẹ́ ọ̀fẹ́ (₦0) láìsí rírà ọjà.\n2. BYHENRYDIGITALS ń ṣàyẹ̀wò gbogbo ìbéèrè láti yan àwọn tó yẹ. Fífi ìbéèrè ránṣẹ́ kò ṣe ìdánilójú ìtẹ́wọ́gbà, o kò sì nílò láti ra ₦8,000 Starter Kit.\n3. Nígbà tí a bá ti yàn ọ́ tí a sì fọwọ́ sí ọ, pín ìjápọ̀ Selar rẹ kí o sì gba 35% lórí títà tó yẹ.',
    ],
    actionLabel: 'Wo Àwọn Ìgbésẹ̀',
  },
  'aff-04': {
    question: 'Báwo ni àwọn alábàáṣepọ̀ BHD ṣe ń rí èrè gbà?',
    answer: [
      'Wọ́n ń gba èrè nìkan nígbà tí oníbàárà bá ra ọjà dígítà BHD tó yẹ lórí Selar nípasẹ̀ ìjápọ̀ alábàáṣepọ̀ wọn.',
    ],
  },
  'aff-05': {
    question: 'Èló ni ìpín èrè alábàáṣepọ̀ BHD?',
    answer: [
      'Àwọn alábàáṣepọ̀ tí a fọwọ́ sí ń gba ìdá 35% lórí títà Selar tó yẹ.',
    ],
  },
  'aff-06': {
    question: 'Àwọn títà wo ló yẹ fún èrè alábàáṣepọ̀?',
    answer: [
      'Àwọn rírà ọjà dígítà tó pé tí a sanwó rẹ̀ lórí Selar nípasẹ̀ ìjápọ̀ alábàáṣepọ̀ tó ní àṣẹ.',
    ],
  },
  'aff-07': {
    question: 'Ṣé owó ìforúkọsílẹ̀ wà láti di alábàáṣepọ̀?',
    answer: [
      'Rárá. Owó ìforúkọsílẹ̀ jẹ́ ₦0 (ọ̀fẹ́ pátápátá).',
    ],
  },
  'aff-08': {
    question: 'Ṣé olùbéèrè gbọ́dọ̀ ra ọjà kó tó béèrè láti darapọ̀?',
    answer: [
      'Rárá. Kò sí rírà ọjà dandan kankan láti béèrè—o kò nílò láti ra ₦8,000 Affiliate Starter Kit kí o tó béèrè fún Ètò Alábàáṣepọ̀ BHD.',
    ],
  },
  'aff-09': {
    question: 'Ṣé Ètò Alábàáṣepọ̀ BHD jẹ́ ètò ìṣọ̀wọ́ abẹ́lẹ̀ (MLM)?',
    answer: [
      'Rárá. BHD kì í ṣe MLM tàbí ètò pyramid. Ètò tààrà ìpele kan ṣoṣo ni.',
    ],
  },
  'aff-10': {
    question: 'Ṣé ètò downline tàbí owó ìgbàwọlé àwọn mìíràn wà?',
    answer: [
      'Rárá. Kò sí downline tàbí owó ìpolówó fún gbígba ẹlòmíràn wọlé. Èrè wá láti inú títà Selar nìkan.',
    ],
  },
  'aff-11': {
    question: 'Kí ni Affiliate Starter Kit ti ₦8,000?',
    answer: [
      '₦8,000 Affiliate Starter Kit jẹ́ ọjà ẹ̀kọ́ dígítà aládàáni tí BYHENRYDIGITALS ń tà fún àwọn olùbẹ̀rẹ̀ tí wọ́n fẹ́ lóye bí affiliate marketing ṣe ń ṣiṣẹ́ kí wọ́n sì kọ́ òye tó wúlò fún ìrìn-àjò tiwọn.',
      'Àkíyèsí Pàtàkì: Rírà Starter Kit kò sọ ọ́ di alábàáṣepọ̀ BHD tòótọ́ láìṣàkóso, kò ṣe ìdánilójú ìtẹ́wọ́gbà sínú Ètò Alábàáṣepọ̀ BHD, kò sì pọn dandan láti fi béèrè.',
    ],
    actionLabel: 'Gba ₦8,000 Affiliate Starter Kit',
  },
  'aff-12': {
    question: 'Ṣé rírà Starter Kit jẹ́ dandan láti béèrè, kí a yàn ọ́, tàbí rí èrè?',
    answer: [
      'Rárá. Rírà ₦8,000 Affiliate Starter Kit yàtọ̀ pátápátá ó sì jẹ́ àṣàyàn—kì í ṣe dandan láti béèrè, rí ìfọwọ́sí, tàbí gba èrè 35%. Rírà rẹ̀ kò sì ṣe ìdánilójú ìyàn sínú Ètò Alábàáṣepọ̀ BHD.',
    ],
  },
  'aff-13': {
    question: 'Báwo ni alábàáṣepọ̀ ṣe yẹ kó polówó àwọn ọjà BYHENRYDIGITALS?',
    answer: [
      'Pẹ̀lú òótọ́ àti àlàyé pípé nípa ohun tí ìwé náà ń kọ́ni. Spam, ìlérí èké, àti dídá orúkọ BHD lò ní ọ̀nà àìtọ́ kò ní ààyè.',
    ],
  },
  'aff-14': {
    question: 'Níbo ni alábàáṣepọ̀ ti lè rí àlàyé ọjà tó dájú?',
    answer: [
      'Ní ojú-ewé Àwọn Ọjà lórí wẹ́ẹ̀bù yìí àti ní https://selar.com/m/BYHENRYDIGITALS.',
    ],
    actionLabel: 'Wo Àwọn Ọjà',
  },
  'aff-15': {
    question: 'Kí ló máa ń ṣẹlẹ̀ nígbà tí oníbàárà bá rà láti inú ìjápọ̀ Selar mi?',
    answer: [
      'Selar máa ń ṣe àkọsílẹ̀ títà náà sí àkọọ́lẹ̀ alábàáṣepọ̀ rẹ fún ìdá 35%.',
    ],
  },
  'aff-16': {
    question: 'Báwo ni BHD ṣe ń ṣe àyẹ̀wò ìbéèrè àti títà alábàáṣepọ̀?',
    answer: [
      'BYHENRYDIGITALS ń ṣàyẹ̀wò gbogbo ìbéèrè fúnra rẹ̀—kò sí ìdánilójú ìyàn, àwọn tí a fọwọ́ sí ní ìjọba nìkan ni ó ń di alábàáṣepọ̀ BHD. Selar ń ṣàyẹ̀wò gbogbo títà tó yẹ.',
    ],
  },
  'aff-17': {
    question: 'Báwo ni olùbéèrè tàbí alábàáṣepọ̀ ṣe lè kàn sí BHD?',
    answer: [
      'Láti fi ìbéèrè ránṣẹ́ fún Ètò Alábàáṣepọ̀ BHD tàbí béèrè ìbéèrè, lo BYHENRYDIGITALS Enquiry Form lórí ojú-ewé Kàn Sí Wa, ímeèlì (byhenrydigitals@gmail.com), tàbí WhatsApp (+234 708 208 8942).',
    ],
    actionLabel: 'Béèrè Láti Di Alábàáṣepọ̀ BHD',
  },

  // D. Àwọn Iṣẹ́ Dígítà àti Ìkọ́lé Wẹ́ẹ̀bù
  'srv-01': {
    question: 'Àwọn iṣẹ́ dígítà wo ni BYHENRYDIGITALS ń pèsè?',
    answer: [
      'BHD ń ṣe iṣẹ́ márùn-ún: (1) Ìṣẹ̀dá & Ìkọ́lé Wẹ́ẹ̀bù, (2) Ojú-ewé Ìtọ́sọ́nà (Landing Pages), (3) Ìdàgbàsókè Ìfarahàn Dígítà, (4) Ìpinnu No-Code & AI, àti (5) Ìtìlẹ́yìn Iṣẹ́ Dígítà.',
    ],
    actionLabel: 'Wo Àwọn Iṣẹ́',
  },
  'srv-02': {
    question: 'Ṣé BHD ń kọ́ wẹ́ẹ̀bù òòjọ́ fún ilé-iṣẹ́ àti ẹnìkọ̀ọ̀kan?',
    answer: [
      'Bẹ́ẹ̀ ni. BHD ń kọ́ wẹ́ẹ̀bù tó yára tí ó sì ń ṣiṣẹ́ dáadáa lórí fóònù, tábúlẹ́ẹ̀tì, àti kọ̀mpútà.',
    ],
  },
  'srv-03': {
    question: 'Kí ni BHD Landing Pages àti ìgbà wo ló yẹ?',
    answer: [
      'Ó jẹ́ ojú-ewé kan ṣoṣo tó dojú kọ ṣíṣàlàyé ìpèsè kan pàtó láti ṣamọ̀nà àlejò sí ìgbésẹ̀ kan.',
    ],
  },
  'srv-04': {
    question: 'Ṣé BHD lè ṣe ìrànlọ́wọ́ láti so ilé-ìtajà dígítà pọ̀?',
    answer: [
      'Bẹ́ẹ̀ ni. BHD ń ṣe ìrànlọ́wọ́ láti ṣètò ìsopọ̀ ilé-ìtajà Selar àti ìtọ́sọ́nà ìsanwó.',
    ],
  },
  'srv-05': {
    question: 'Báwo ni BHD ṣe ń ṣètò àti ṣàgbékalẹ̀ wẹ́ẹ̀bù?',
    answer: [
      'BHD máa ń kọ́kọ́ ṣètò àtẹ ìtọ́sọ́nà, ìkójọpọ̀ ọ̀rọ̀, àti ìrìn àlejò kí ó tó ṣe ẹ̀ṣọ́ ojú-òpó.',
    ],
  },
  'srv-06': {
    question: 'Ṣé BHD ń ṣe àyẹ̀wò àti ìtẹ̀jáde wẹ́ẹ̀bù?',
    answer: [
      'Bẹ́ẹ̀ ni. Àyẹ̀wò lórí fóònù àti kọ̀mpútà, fọ́ọ̀mù, àti ìjápọ̀ wà lára iṣẹ́ wa.',
    ],
  },
  'srv-07': {
    question: 'Àwọn ìsopọ̀ wẹ́ẹ̀bù wo ni BHD lè kọ́ fún oníbàárà?',
    answer: [
      'Fọ́ọ̀mù ìbánisọ̀rọ̀, webhook, ìjápọ̀ Selar, bọtìnì ímeèlì/WhatsApp, àti ìṣiṣẹ́ no-code.',
    ],
  },
  'srv-08': {
    question: 'Ṣé BHD ń ṣe ìsopọ̀ chatbot fún oníbàárà, àti ṣé BHD ní AI assistant tirẹ̀ báyìí?',
    answer: [
      'BHD lè kọ́ ìsopọ̀ chatbot fún oníbàárà tó bá béèrè fún un fún wẹ́ẹ̀bù tirẹ̀.',
      'Ṣùgbọ́n BYHENRYDIGITALS fúnra rẹ̀ KÒ ní AI chatbot kankan báyìí—Vanessa jẹ́ ibùdó àwárí FAQ nìkan.',
    ],
  },
  'srv-09': {
    question: 'Báwo ni Ìdàgbàsókè Ìfarahàn Dígítà ṣe ń mú àmì lágbára?',
    answer: [
      'Ó ń so wẹ́ẹ̀bù, ilé-ìtajà, àti ìkànnì àwùjọ pọ̀ di àwòrán kan tó ṣeé gbẹ́kẹ̀lé.',
    ],
  },
  'srv-10': {
    question: 'Kí ló wà nínú Ìtìlẹ́yìn Iṣẹ́ Dígítà BHD?',
    answer: [
      'Ìtọ́sọ́nà ìmọ̀-ẹ̀rọ àti ìṣètò fún olùdásílẹ̀ tó ń ṣe ìfilọ́lẹ̀ ọjà tàbí iṣẹ́ lórí íńtánẹ́ẹ̀tì.',
    ],
  },
  'srv-11': {
    question: 'Báwo ni BHD ṣe ń ṣe àgbékalẹ̀ iye owó iṣẹ́ wẹ́ẹ̀bù?',
    answer: [
      'A ń ṣe àyẹ̀wò iye owó gẹ́gẹ́ bí ohun tí iṣẹ́ kọ̀ọ̀kan béèrè lẹ́yìn ìjíròrò.',
    ],
    actionLabel: 'Jíròrò Iṣẹ́ Rẹ',
  },
  'srv-12': {
    question: 'Kí ni olùbéèrè yẹ kó pín nígbà ìbéèrè iṣẹ́?',
    answer: [
      'Pín èròngbà rẹ, àwọn ojú-ewé tí o fẹ́, àti àsìkò ní ojú-ewé Kàn Sí Wa, ímeèlì (byhenrydigitals@gmail.com), tàbí WhatsApp (+234 708 208 8942).',
    ],
  },

  // E. Iṣẹ́-ajé Dígítà àti Ìṣẹ̀dá Owó Lórí Íńtánẹ́ẹ̀tì
  'ent-01': {
    question: 'Kí ni iṣẹ́-ajé dígítà?',
    answer: [
      'Ó jẹ́ ṣíṣe iṣẹ́-ajé tó ń pèsè iye lórí íńtánẹ́ẹ̀tì—bíi ìwé ẹ̀kọ́ dígítà, iṣẹ́ wẹ́ẹ̀bù, tàbí ìmọ̀ràn.',
    ],
  },
  'ent-02': {
    question: 'Kí ni títà alábàáṣepọ̀ (affiliate marketing)?',
    answer: [
      'Ó jẹ́ ìfọwọ́sowọ́pọ̀ níbi tí alábàáṣepọ̀ ti ń tọ́ka ọjà ẹlòmíràn pẹ̀lú ìjápọ̀ pàtó láti gba ìpín èrè lórí títà òótọ́.',
    ],
  },
  'ent-03': {
    question: 'Kí ni ṣíṣẹ̀dá ọjà dígítà?',
    answer: [
      'Yíyí ìmọ̀ tàbí ìtọ́sọ́nà padà sí fáìlì lórí íńtánẹ́ẹ̀tì tí a lè rà láìsí ìfiránṣẹ́ ohun àfojúrí.',
    ],
  },
  'ent-04': {
    question: 'Kí ni ṣíṣẹ̀dá owó lórí íńtánẹ́ẹ̀tì túmọ̀ sí?',
    answer: [
      'Ṣíṣẹ̀dá owó òótọ́ láti inú ìmọ̀, ìwé ẹ̀kọ́, tàbí iṣẹ́ wẹ́ẹ̀bù nípa yíyanjú ìṣòro gidi.',
    ],
  },
  'ent-05': {
    question: 'Kí ni títà dígítà?',
    answer: [
      'Rírà àti títà ọjà tàbí iṣẹ́ lórí íńtánẹ́ẹ̀tì tó dá lórí ìgbẹ́kẹ̀lé àti àlàyé tó ṣe kedere.',
    ],
  },
  'ent-06': {
    question: 'Kí ni sales funnel?',
    answer: [
      'Ọ̀nà ìrìn tí oníbàárà ń gbà láti ìgbà tó bá mọ ilé-iṣẹ́ rẹ títí dé ìgbà tó bá ra ọjà tàbí ránṣẹ́.',
    ],
  },
  'ent-07': {
    question: 'Kí ni ìyàtọ̀ láàárín landing page àti wẹ́ẹ̀bù kíkún?',
    answer: [
      'Wẹ́ẹ̀bù kíkún ní ọ̀pọ̀ ojú-ewé fún gbogbo iṣẹ́ ilé-iṣẹ́, nígbà tí landing page jẹ́ ojú-ewé kan ṣoṣo fún ìpèsè kan pàtó.',
    ],
  },
  'ent-08': {
    question: 'Kí ni ilé-ìtajà dígítà (digital storefront)?',
    answer: [
      'Ilé-ìtajà lórí íńtánẹ́ẹ̀tì fún títà ọjà dígítà bíi ilé-ìtajà Selar ti BHD.',
    ],
  },
  'ent-09': {
    question: 'Kí ni ìṣẹ̀dá owó lóríṣiríṣi owó orílẹ̀-èdè (multi-currency monetisation)?',
    answer: [
      'Àǹfààní láti tà fún oníbàárà ní orílẹ̀-èdè ọ̀tọ̀ọ̀tọ̀ kí wọ́n lè sanwó ní owó ìbílẹ̀ wọn tàbí owó àgbáyé.',
    ],
  },
  'ent-10': {
    question: 'Àwọn ìmọ̀ wo ló lè ran akẹ́kọ̀ọ́ tuntun lọ́wọ́ ní ọrọ̀-ajé dígítà?',
    answer: [
      'Kíkọ ọ̀rọ̀ tó yéni, ìmọ̀ dígítà, ìṣètò wẹ́ẹ̀bù, ìpolówó olóòótọ́, àti lílo irinṣẹ́ ìṣiṣẹ́.',
    ],
  },
  'ent-11': {
    question: 'Kí ni àwọn olùbẹ̀rẹ̀ gbọ́dọ̀ mọ̀ kó tó bẹ̀rẹ̀ iṣẹ́ lórí íńtánẹ́ẹ̀tì?',
    answer: [
      'Ó gba ìmọ̀, sùúrù, àti ìtẹ̀síwájú. Kò sí owó lẹ́sẹ̀kẹsẹ̀ láìsí iṣẹ́.',
    ],
  },

  // F. AI àti Ìmọ̀-ẹ̀rọ Dígítà
  'ai-01': {
    question: 'Báwo ni AI ṣe lè ran ìṣẹ̀dá àkóónú dígítà lọ́wọ́?',
    answer: [
      'Ó lè ṣe ìrànlọ́wọ́ láti ṣètò kókó ọ̀rọ̀ àti ìwé àkọ́bẹ̀rẹ̀, ṣùgbọ́n ènìyàn gbọ́dọ̀ ṣàyẹ̀wò gbogbo òótọ́ inú rẹ̀.',
    ],
  },
  'ai-02': {
    question: 'Báwo ni a ṣe lè lo fídíò pẹ̀lú ìrànlọ́wọ́ AI ní ọ̀nà tó tọ́?',
    answer: [
      'Láti ṣe ìrànlọ́wọ́ nínú kíkọ àkọsílẹ̀ àti ìṣàlàyé fídíò pẹ̀lú àbójútó ènìyàn.',
    ],
  },
  'ai-03': {
    question: 'Báwo ni irinṣẹ́ ìṣiṣẹ́ dígítà ṣe ń ran àwọn ẹgbẹ́ kékeré lọ́wọ́?',
    answer: [
      'Wọ́n ń dín àṣìṣe kù nípa ṣíṣètò fọ́ọ̀mù, ìṣẹ́, àti ìfitónilétí.',
    ],
  },
  'ai-04': {
    question: 'Àwọn irinṣẹ́ ìkọ́lé wẹ́ẹ̀bù wo ni BHD tẹnumọ́?',
    answer: [
      'React, TypeScript, Tailwind CSS, àti Express níbi tí a bá ti nílò iṣẹ́ server.',
    ],
  },
  'ai-05': {
    question: 'Kí ni àwọn ìpinnu no-code àti low-code?',
    answer: [
      'Àwọn irinṣẹ́ tó ń so fọ́ọ̀mù, ilé-ìtajà, àti ìfitónilétí pọ̀ láìsí koodu líle.',
    ],
  },
  'ai-06': {
    question: 'Kí ni ìyàtọ̀ láàárín iṣẹ́ chatbot fún oníbàárà àti wẹ́ẹ̀bù BHD?',
    answer: [
      'BHD lè kọ́ chatbot fún oníbàárà tó bá béèrè rẹ̀, ṣùgbọ́n BHD fúnra rẹ̀ kò lo AI chatbot lórí wẹ́ẹ̀bù rẹ̀—Vanessa jẹ́ FAQ àwárí nìkan.',
    ],
  },
  'ai-07': {
    question: 'Kí ni lílo AI pẹ̀lú ẹ̀tọ́ túmọ̀ sí ní BHD?',
    answer: [
      'Má ṣe ṣẹ̀dá òótọ́ èké, pa àwọn kọ́kọ́rọ́ aṣírí mọ́, kí o sì ṣe àyẹ̀wò ènìyàn.',
    ],
  },
  'ai-08': {
    question: 'Kí ni ìyàtọ̀ láàárín àkọsílẹ̀ AI àti iṣẹ́ tí ènìyàn ṣàyẹ̀wò?',
    answer: [
      'Iṣẹ́ tí ènìyàn ṣàyẹ̀wò ń dáàbò bo òótọ́ àti ìṣedéédé àmì ohùn Yorùbá àti lẹ́tà èdè.',
    ],
  },
  'ai-09': {
    question: 'Báwo ni BHD ṣe ń ya iṣẹ́ lọ́wọ́lọ́wọ́, irinṣẹ́, àti iṣẹ́ àdáni sọ́tọ̀?',
    answer: [
      'Iṣẹ́ lọ́wọ́lọ́wọ́: wẹ́ẹ̀bù, landing pages, no-code, àti ìwé Selar. Irinṣẹ́: ìmọ̀-ẹ̀rọ wẹ́ẹ̀bù òde òní, Selar, àti irinṣẹ́ AI. A máa ń ṣètò iṣẹ́ àdáni gẹ́gẹ́ bí ìbéèrè oníbàárà.',
    ],
  },

  // G. Èdè àti Ohun Èlò Ìkẹ́kọ̀ọ́
  'lang-01': {
    question: 'Àwọn èdè wo ni wẹ́ẹ̀bù BYHENRYDIGITALS ń ṣe àtìlẹ́yìn fún báyìí?',
    answer: [
      'Èdè Gẹ̀ẹ́sì (English), Igbo, Yorùbá, Hausa, Faransé (French), àti Nigerian Pidgin ń ṣiṣẹ́ kíkún lórí gbogbo wẹ́ẹ̀bù àti Vanessa FAQ.',
    ],
  },
  'lang-02': {
    question: 'Ṣé ohun èlò ẹ̀kọ́ wà ní Èdè Gẹ̀ẹ́sì?',
    answer: [
      'Bẹ́ẹ̀ ni. Èdè Gẹ̀ẹ́sì ni èdè àkọ́kọ́, gbogbo ọjà Selar mẹ́tẹ̀ẹ̀ta sì wà ní Èdè Gẹ̀ẹ́sì.',
    ],
  },
  'lang-03': {
    question: 'Ṣé BHD ní àtìlẹ́yìn àti àkóónú ní Èdè Faransé?',
    answer: [
      'Bẹ́ẹ̀ ni, gbogbo wẹ́ẹ̀bù àti Vanessa FAQ wà ní Faransé. Ṣùgbọ́n àwọn ìwé Selar fúnra wọn wà ní Èdè Gẹ̀ẹ́sì báyìí.',
    ],
  },
  'lang-04': {
    question: 'Báwo ni a ṣe ń ṣe àtìlẹ́yìn fún Èdè Igbo?',
    answer: [
      'Yíyan Igbo lórí menu èdè yóò yí gbogbo ojú-ewé àti Vanessa FAQ padà sí Igbo lẹ́sẹ̀kẹsẹ̀.',
    ],
  },
  'lang-05': {
    question: 'Báwo ni a ṣe ń ṣe àtìlẹ́yìn fún Èdè Yorùbá?',
    answer: [
      'Yíyan Yorùbá ń túmọ̀ wẹ́ẹ̀bù àti Vanessa FAQ sí Yorùbá tó péye pẹ̀lú àmì ohùn àti àmì abẹ́.',
    ],
  },
  'lang-06': {
    question: 'Báwo ni a ṣe ń ṣe àtìlẹ́yìn fún Èdè Hausa?',
    answer: [
      'Yíyan Hausa ń yí wẹ́ẹ̀bù àti Vanessa FAQ padà sí Hausa lẹ́sẹ̀kẹsẹ̀ láìtún ojú-ewé gbé.',
    ],
  },
  'lang-09': {
    question: 'Báwo ni a ṣe ń ṣe àtìlẹ́yìn fún Èdè Nigerian Pidgin?',
    answer: [
      'Yíyan Nigerian Pidgin lórí menu èdè yóò yí gbogbo ojú-ewé, àpilẹ̀kọ, àti Vanessa FAQ padà sí Nigerian Pidgin lẹ́sẹ̀kẹsẹ̀. Àwọn ìwé Selar fúnra wọn wà ní Èdè Gẹ̀ẹ́sì báyìí.',
    ],
    extraKeywords: ['nigerian pidgin', 'pidgin'],
  },
  'lang-07': {
    question: 'Ṣé àwọn ọjà Selar ti BHD ti wà ní Faransé, Igbo, Yorùbá, Hausa, tàbí Nigerian Pidgin?',
    answer: [
      'Rárá. Àwọn ọjà Selar mẹ́tẹ̀ẹ̀ta wà ní Èdè Gẹ̀ẹ́sì nìkan lọ́wọ́lọ́wọ́.',
    ],
  },
  'lang-08': {
    question: 'Báwo ni àlejò ṣe lè mọ èdè gidi tí ọjà wà nínú rẹ̀ kó tó rà?',
    answer: [
      'Káàdì ọjà kọ̀ọ̀kan ní àmì "Èdè Àkóónú Ọjà" lórí ojú-ewé Àwọn Ọjà àti lórí Selar.',
    ],
    actionLabel: 'Wo Àwọn Ọjà',
  },

  // H. Rírà, Ìsanwó àti Ìtìlẹ́yìn Oníbàárà
  'pay-01': {
    question: 'Níbo ni oníbàárà ti lè ra ọjà BYHENRYDIGITALS?',
    answer: [
      'Ní ilé-ìtajà Selar gidi nìkan: https://selar.com/m/BYHENRYDIGITALS.',
    ],
    actionLabel: 'BHD Store',
  },
  'pay-02': {
    question: 'Báwo ni ìsanwó Selar ṣe ń ṣiṣẹ́?',
    answer: [
      'Selar ń fi iye hàn ní owó orílẹ̀-èdè rẹ ó sì ń gba ìsanwó láìléwu.',
    ],
  },
  'pay-03': {
    question: 'Báwo ni oníbàárà ṣe ń rí ọjà gbà lẹ́yìn ìsanwó Selar?',
    answer: [
      'Selar ń fúnni ní ìjápọ̀ ìgbàsílẹ̀ lẹ́sẹ̀kẹsẹ̀ ó sì ń fi ìtọ́sọ́nà ránṣẹ́ sí ímeèlì rẹ.',
    ],
  },
  'pay-04': {
    question: 'Kí ni oníbàárà yẹ kó ṣe bí ìṣòro bá ṣẹlẹ̀ nígbà ìsanwó tàbí ìgbàsílẹ̀?',
    answer: [
      'Kàn sí BHD ní byhenrydigitals@gmail.com tàbí WhatsApp (+234 708 208 8942) pẹ̀lú àlàyé ìsanwó rẹ.',
    ],
    actionLabel: 'Kàn Sí Ìtìlẹ́yìn',
  },
  'pay-05': {
    question: 'Ṣé BHD ṣàlàyé ìlànà ìpadàwó pàtó lórí wẹ́ẹ̀bù yìí?',
    answer: [
      'Rárá. Gbogbo òfin ìsanwó tẹ̀lé ìlànà pẹpẹ Selar àti ìtẹ́jáde ọjà kọ̀ọ̀kan.',
    ],
  },
  'pay-06': {
    question: 'Báwo ni ènìyàn ṣe lè béèrè nípa ọjà kó tó rà?',
    answer: [
      'Lo Vanessa FAQ, ojú-ewé Kàn Sí Wa, ímeèlì byhenrydigitals@gmail.com, tàbí WhatsApp (+234 708 208 8942).',
    ],
  },
  'pay-07': {
    question: 'Báwo ni ènìyàn ṣe lè kàn sí BYHENRYDIGITALS tààrà?',
    answer: [
      'Ímeèlì: byhenrydigitals@gmail.com | WhatsApp: +234 708 208 8942 (https://wa.me/2347082088942) | Fọ́ọ̀mù ojú-ewé Kàn Sí Wa.',
    ],
    actionLabel: 'Kàn Sí Wa',
  },
  'pay-08': {
    question: 'Níbo ni oníbàárà ti lè rí ìfitónilétí gidi látọ̀dọ̀ BHD?',
    answer: [
      'Lórí wẹ́ẹ̀bù yìí, ilé-ìtajà Selar, àti Instagram, TikTok, X, àti Facebook ti BHD.',
    ],
  },

  // I. Ìtọ́sọ́nà Wẹ́ẹ̀bù àti Ìkànnì Àwùjọ
  'nav-01': {
    question: 'Báwo ni mo ṣe lè lo ojú-òpó wẹ́ẹ̀bù BYHENRYDIGITALS?',
    answer: [
      'Lo àkójọ ìtọ́sọ́nà òkè tàbí ìsàlẹ̀ láti lọ sí Ilé, Nípa Wa, Àwọn Ọjà, Ètò Alábàáṣepọ̀, Àwọn Iṣẹ́, Àwọn Ohun Èlò, àti Kàn Sí Wa, kí o sì tẹ bọtìnì "Ìbéèrè BHD" ní ìsàlẹ̀ ọ̀tún láti ṣàwárí nínú Vanessa FAQ nígbà gbogbo.',
    ],
  },
  'nav-02': {
    question: 'Níbo ni mo ti lè rí ọjà dígítà àti àpilẹ̀kọ lórí wẹ́ẹ̀bù?',
    answer: [
      'Ní ojú-ewé Àwọn Ọjà (/products) àti Àwọn Ohun Èlò (/resources).',
    ],
  },
  'nav-03': {
    question: 'Níbo ni mo ti lè wo iṣẹ́ dígítà BHD kí n sì béèrè ìjíròrò?',
    answer: [
      'Ní ojú-ewé Àwọn Iṣẹ́ (/services).',
    ],
  },
  'nav-04': {
    question: 'Báwo ni mo ṣe lè lo olùyàn èdè wẹ́ẹ̀bù?',
    answer: [
      'Tẹ bọtìnì Èdè ní apá ọ̀tún òkè láti yan English, Igbo, Yorùbá, Hausa, French, tàbí Nigerian Pidgin.',
    ],
  },
  'nav-05': {
    question: 'Níbo ni mo ti lè rí Vanessa — Ìbéèrè BHD Kíkún?',
    answer: [
      'Tẹ bọtìnì "Ìbéèrè BHD" tó wà ní igun ìsàlẹ̀ ọ̀tún láti ojú-ewé èyíkéyìí, tàbí tẹ "Ṣí Ìbéèrè Vanessa" ní ìsàlẹ̀ ojú-òpó.',
    ],
  },
  'nav-06': {
    question: 'Báwo ni mo ṣe lè rí ojú-ewé Kàn Sí Wa àti bọtìnì Ímeèlì / WhatsApp?',
    answer: [
      'Lọ sí /contact tàbí tẹ bọtìnì "Fi Ímeèlì Ránṣẹ́" àti "Bá Wa Sọ̀rọ̀ lórí WhatsApp" ní ìsàlẹ̀ wẹ́ẹ̀bù tàbí nínú FAQ.',
    ],
  },
  'nav-07': {
    question: 'Àwọn ìkànnì àwùjọ gidi wo ni BYHENRYDIGITALS ń lò?',
    answer: [
      'Instagram (https://www.instagram.com/byhenrydigitals/), TikTok (https://www.tiktok.com/@byhenrydigitals), X (https://x.com/BYHENRYDIGITALS), àti Facebook (https://www.facebook.com/share/1A8GpCyCt3/).',
    ],
  },
  'nav-08': {
    question: 'Báwo ni ìbéèrè àti ìwé ìbéèrè alábàáṣepọ̀ ṣe ń ṣiṣẹ́ lórí wẹ́ẹ̀bù BHD?',
    answer: [
      'Ojú-ewé Kàn Sí Wa ní BYHENRYDIGITALS Enquiry Form gidi pẹ̀lú ímeèlì (byhenrydigitals@gmail.com) àti WhatsApp (+234 708 208 8942) fún ìbéèrè iṣẹ́, ọjà, àti Ètò Alábàáṣepọ̀ BHD.',
    ],
  },

  // J. Vanessa — Ìbéèrè BHD Kíkún
  'van-01': {
    question: 'Kí ni Vanessa — Ìbéèrè BHD Kíkún?',
    answer: [
      'Vanessa jẹ́ ibùdó àwárí FAQ ti BYHENRYDIGITALS ("Ìtọ́sọ́nà Tí O Lè Ṣàwárí Fún Ohun Gbogbo Nípa BYHENRYDIGITALS") tó ní ìsọ̀rí 10 àti ju àkọsílẹ̀ 100 lọ.',
    ],
  },
  'van-02': {
    question: 'Ṣé AI chatbot ni Vanessa tàbí olùrànlọ́wọ́ AI?',
    answer: [
      'Rárá. Vanessa KÌ Í ṢE AI chatbot tàbí olùrànlọ́wọ́ AI. BYHENRYDIGITALS kò ní AI chatbot kankan báyìí—a sì ti yọ gbogbo Botpress kúrò.',
    ],
  },
  'van-03': {
    question: 'Báwo ni ẹ̀rọ àwárí Vanessa FAQ ṣe ń ṣiṣẹ́?',
    answer: [
      'Ó ń ṣàwárí nínú àwọn ìbéèrè, ìdáhùn kíkún, àkọlé ìsọ̀rí, àti kókó ọ̀rọ̀, ó sì ń mọ apá ọ̀rọ̀ àti àṣìṣe kíkọ kékeré.',
    ],
  },
  'van-04': {
    question: 'Báwo ni àlejò ṣe lè ṣàwárí kí wọ́n sì yan ìsọ̀rí nínú Vanessa?',
    answer: [
      'Kọ kókó ọ̀rọ̀ sínú àpótí àwárí, tẹ àpẹẹrẹ ìbéèrè, tàbí yan ọ̀kan nínú ìsọ̀rí 10 náà.',
    ],
  },
  'van-05': {
    question: 'Kí ló ń ṣẹlẹ̀ bí kò bá sí ìdáhùn tó bá àwárí rẹ mu?',
    answer: [
      'Vanessa yóò fi bọtìnì ìtúnṣe hàn pẹ̀lú ìjápọ̀ tààrà sí ímeèlì (byhenrydigitals@gmail.com) àti WhatsApp (+234 708 208 8942).',
    ],
  },
  'van-06': {
    question: 'Ṣé Vanessa FAQ ń yí èdè padà nígbà tí mo bá yí èdè wẹ́ẹ̀bù padà?',
    answer: [
      'Bẹ́ẹ̀ ni. Ó ń yí padà lẹ́sẹ̀kẹsẹ̀ láàárín English, Igbo, Yorùbá, Hausa, French, àti Nigerian Pidgin.',
    ],
  },
  'van-07': {
    question: 'Báwo ni a ṣe ń tọ́jú àti ṣàyẹ̀wò àwọn àkọsílẹ̀ Vanessa FAQ?',
    answer: [
      'Àkọsílẹ̀ kọ̀ọ̀kan wà ní ibi kan ṣoṣo pẹ̀lú ID pàtó, èdè, àti ipò ìfọwọ́sí (`published`) kí àlàyé òótọ́ nìkan lè hàn.',
    ],
  },
};

export const faqYo: FaqBundle = {
  language: 'yo',
  bubbleLabel: 'Ìbéèrè BHD',
  closeAriaLabel: 'Pa Vanessa FAQ',
  kicker: 'Ibùdó Àwárí Ìfitónilétí BHD',
  heading: 'VANESSA — ÌBÉÈRÈ BHD KÍKÚN',
  subheading: 'Ìtọ́sọ́nà tí o lè ṣe àwárí fún ohun gbogbo nípa BYHENRYDIGITALS.',
  nonAiNotice:
    'Ibùdó FAQ tí a ṣètò dáadáa — ìfitónilétí BHD òótọ́ (kì í ṣe chatbot tàbí olùrànlọ́wọ́ AI).',
  searchPlaceholder: 'Ṣàwárí ohunkóhun nípa BYHENRYDIGITALS...',
  searchAriaLabel: 'Ṣàwárí ohunkóhun nípa BYHENRYDIGITALS',
  clearSearchLabel: 'Pa Á Rẹ́',
  allCategoriesLabel: 'Gbogbo Ìsọ̀rí',
  categoriesHeading: 'Àwọn Ìsọ̀rí FAQ (A–J)',
  exampleQueriesTitle: 'Àwọn àwárí tó wọ́pọ̀:',
  exampleQueries: [
    'Kí ni BYHENRYDIGITALS?',
    'Clicks-to-Cash',
    'ìdá 35%',
    'Di alábàáṣepọ̀ BHD',
    'Ìkọ́lé wẹ́ẹ̀bù',
    'Iṣẹ́-ajé dígítà',
    'Lílo AI pẹ̀lú ẹ̀tọ́',
    'Ohun èlò Faransé',
    'Rírà lórí Selar',
    'Ṣé AI chatbot ni Vanessa?',
  ],
  resultsMatchingLabel: 'ìdáhùn tó bá a mu',
  allTopicsCountLabel: 'àkọsílẹ̀ FAQ tí a tẹ̀jáde',
  verifiedStatusLabel: 'A Fìdí Rẹ̀ Múlẹ̀',
  relatedQuestionsLabel: 'Àwọn Ìbéèrè Tó Jọra',
  noResultsTitle: 'Kò sí ìdáhùn tó bá àwárí rẹ mu',
  noResultsBody:
    'A kò rí ìbámu kan pàtó nínú àwọn FAQ wa. Gbìyànjú kókó ọ̀rọ̀ mìíràn, tún ìsọ̀rí ṣe, tàbí kàn sí BYHENRYDIGITALS ní ìsàlẹ̀.',
  resetFiltersLabel: 'Fi Gbogbo FAQ Hàn',
  escalationTitle: 'O Kò Rí Ìdáhùn Rẹ?',
  escalationBody:
    'Kàn sí BYHENRYDIGITALS tààrà nípasẹ̀ ímeèlì, WhatsApp, tàbí ojú-ewé Kàn Sí Wa.',
  emailButtonLabel: 'Fi Ímeèlì Ránṣẹ́',
  whatsappButtonLabel: 'WhatsApp',
  contactPageButtonLabel: 'Ṣí Fọ́ọ̀mù Kàn Sí Wa',
  expandAllLabel: 'Ṣí Gbogbo Rẹ̀',
  collapseAllLabel: 'Pa Gbogbo Rẹ̀',
  categories: {
    'about-bhd': {
      title: 'A. Nípa BYHENRYDIGITALS',
      description: 'Ìdánimọ̀, olùdásílẹ̀, èròngbà, àti ìran.',
    },
    'products-resources': {
      title: 'B. Àwọn Ọjà àti Ohun Èlò Ìkẹ́kọ̀ọ́',
      description: 'Ìwé ìtọ́sọ́nà Selar tó dájú àti àwọn olùlò rẹ̀.',
    },
    'affiliate-programme': {
      title: 'C. Ètò Alábàáṣepọ̀ BHD',
      description: 'Ìbéèrè ọ̀fẹ́, àyẹ̀wò ìyàn BHD, ìdá 35%, kò sí MLM, àti ìyàtọ̀ Starter Kit.',
    },
    'web-services': {
      title: 'D. Àwọn Iṣẹ́ Dígítà àti Ìkọ́lé Wẹ́ẹ̀bù',
      description: 'Wẹ́ẹ̀bù, landing pages, ilé-ìtajà dígítà, àti ìtìlẹ́yìn.',
    },
    'entrepreneurship-monetisation': {
      title: 'E. Iṣẹ́-ajé Dígítà àti Owó Lórí Íńtánẹ́ẹ̀tì',
      description: 'Àlàyé tó rọrùn fún akẹ́kọ̀ọ́ tuntun láìsí àṣejù.',
    },
    'ai-technology': {
      title: 'F. AI àti Ìmọ̀-ẹ̀rọ Dígítà',
      description: 'Iṣẹ́ àkóónú, no-code, lílo AI dáadáa, àti àyẹ̀wò ènìyàn.',
    },
    'languages-learning': {
      title: 'G. Èdè àti Ohun Èlò Ìkẹ́kọ̀ọ́',
      description: 'Gẹ̀ẹ́sì, Igbo, Yorùbá, Hausa, Faransé, Nigerian Pidgin àti èdè ọjà.',
    },
    'payments-purchases': {
      title: 'H. Rírà, Ìsanwó àti Ìtìlẹ́yìn',
      description: 'Ìsanwó Selar, ìgbàsílẹ̀ ọjà, àti ìbánisọ̀rọ̀ BHD.',
    },
    'navigation-social': {
      title: 'I. Ìtọ́sọ́nà Wẹ́ẹ̀bù àti Ìkànnì Àwùjọ',
      description: 'Àwọn apá wẹ́ẹ̀bù, olùyàn èdè, àti ìkànnì gidi.',
    },
    'vanessa-faq': {
      title: 'J. Vanessa Ìbéèrè BHD Kíkún',
      description: 'Bí ẹ̀rọ àwárí FAQ ṣe ń ṣiṣẹ́ àti ìfìdímúlẹ̀.',
    },
  },
  entries: composeFaqEntries('yo', recordsYo),
};
