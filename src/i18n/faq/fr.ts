import { composeFaqEntries } from './recordsMeta';
import { FaqBundle, FaqLocalizedRecord } from './types';

const recordsFr: Record<string, FaqLocalizedRecord> = {
  // A. À propos de BYHENRYDIGITALS
  'about-01': {
    question: 'Qu’est-ce que BYHENRYDIGITALS ?',
    answer: [
      'BYHENRYDIGITALS (BHD) est une marque d’éducation numérique et de solutions digitales fondée par Henry (Coach Henry). Elle aide particuliers et entreprises à découvrir des opportunités numériques concrètes, acquérir des compétences pratiques, accéder à des guides vérifiés sur Selar et concevoir des sites web fonctionnels.',
      'Tant dans ses ressources pédagogiques que dans ses services clients, BHD privilégie l’éducation numérique pratique, l’entrepreneuriat digital, la monétisation en ligne et les solutions technologiques utiles.',
    ],
    extraKeywords: ['présentation', 'éducation numérique', 'entrepreneuriat', 'solutions digitales'],
    actionLabel: 'Découvrir À propos de BHD',
  },
  'about-02': {
    question: 'Que signifie le sigle BHD ?',
    answer: [
      'BHD est le nom abrégé officiel de BYHENRYDIGITALS.',
      'Vous retrouverez « BHD » aux côtés de « BYHENRYDIGITALS » dans la navigation du site, les fiches produits, le Programme d’Affiliation BHD et cette FAQ détaillée Vanessa.',
    ],
  },
  'about-03': {
    question: 'Qui a fondé BYHENRYDIGITALS ?',
    answer: [
      'BYHENRYDIGITALS a été fondé par Henry, largement connu sous le nom de Coach Henry.',
      'Il a créé BHD afin de rendre l’éducation numérique pratique, les solutions web fonctionnelles et les modèles transparents de revenus en ligne accessibles au plus grand nombre.',
    ],
    actionLabel: 'Voir le Profil du Fondateur',
  },
  'about-04': {
    question: 'Quel est l’objectif principal de BYHENRYDIGITALS ?',
    answer: [
      'L’objectif de BHD est d’abaisser la barrière d’entrée vers les compétences numériques utiles et les outils web fiables grâce à une pédagogie claire, un commerce transparent et un accompagnement honnête.',
      'BHD aide les visiteurs à comprendre concrètement la création de valeur en ligne, via ses guides numériques, son programme d’affiliation à un seul niveau ou ses services de développement web.',
    ],
    actionLabel: 'Voir Mission et Objectifs',
  },
  'about-05': {
    question: 'Quel problème BHD cherche-t-il à résoudre ?',
    answer: [
      'De nombreuses personnes intéressées par le numérique rencontrent des promesses irréalistes, des tarifs opaques, des systèmes pyramidaux ou des sites web vitrines sans réelle utilité.',
      'BYHENRYDIGITALS répond à ce manque par une éducation sans battage trompeur, un programme d’affiliation direct à 35 % sans MLM ni achat obligatoire, et des sites conçus pour l’efficacité.',
    ],
  },
  'about-06': {
    question: 'Quelle est la vision de BYHENRYDIGITALS ?',
    answer: [
      'La vision de BHD est de bâtir un écosystème numérique international fiable reliant apprenants, créateurs et entreprises au-delà des frontières linguistiques.',
      'Cette ambition internationale s’illustre déjà par les cinq langues actives du site — anglais, igbo, yoruba, haoussa et français.',
    ],
  },
  'about-07': {
    question: 'Que signifie « Digital Solutions. Global Impact. » ?',
    answer: [
      '« Digital Solutions. Global Impact. » (« Solutions Numériques. Impact Mondial. ») est le slogan principal de BYHENRYDIGITALS. Il exprime la volonté de créer des guides, outils numériques et infrastructures web permettant de participer efficacement à l’économie numérique mondiale.',
    ],
  },
  'about-08': {
    question: 'Que signifie « We Build Digital Value That Sells. » ?',
    answer: [
      '« We Build Digital Value That Sells. » (« Nous Créons une Valeur Numérique Qui Vend. ») est le slogan secondaire de BHD. Il rappelle qu’un produit numérique ou un site web doit résoudre un besoin réel avec suffisamment de clarté pour convaincre naturellement.',
    ],
  },
  'about-09': {
    question: 'À qui s’adresse BYHENRYDIGITALS ?',
    answer: [
      'BHD s’adresse aux débutants explorant les compétences numériques, aux jeunes apprenants et parents recherchant des parcours adaptés à l’âge, aux créateurs et rédacteurs souhaitant recommander des ressources sérieuses, ainsi qu’aux entrepreneurs et organisations ayant besoin de sites web performants.',
    ],
  },
  'about-10': {
    question: 'BHD est-il une plateforme d’éducation numérique ou une marque de services digitaux ?',
    answer: [
      'BYHENRYDIGITALS réunit ces deux volets sous une même marque : (1) l’éducation numérique via ses guides vérifiés sur Selar et sa bibliothèque d’articles, et (2) les services digitaux couvrant sites web, landing pages, présence digitale et automatisations no-code.',
    ],
  },
  'about-11': {
    question: 'Où consulter le site officiel de BHD et en savoir plus sur l’organisation ?',
    answer: [
      'Vous consultez actuellement le site officiel de BYHENRYDIGITALS (BHD). Visitez la page À propos pour découvrir la mission et les principes, parcourez Produits et Services pour les offres actuelles, ou effectuez une recherche dans cette FAQ Vanessa.',
    ],
    actionLabel: 'Ouvrir la Page À propos',
  },

  // B. Produits et Ressources Pédagogiques Numériques
  'prod-01': {
    question: 'Quels produits numériques vérifiés BYHENRYDIGITALS propose-t-il actuellement ?',
    answer: [
      'BYHENRYDIGITALS met en avant trois produits numériques vérifiés sur sa boutique officielle Selar (https://selar.com/m/BYHENRYDIGITALS) : (1) Clicks-to-Cash, (2) Global Monetisation et (3) Remote Jobs for Under 18.',
      'Les tarifs en vigueur, descriptions complètes et téléchargements sont gérés directement sur Selar.',
    ],
    actionLabel: 'Voir le Catalogue Produits',
  },
  'prod-02': {
    question: 'Qu’est-ce que Clicks-to-Cash et à qui s’adresse-t-il ?',
    answer: [
      'Clicks-to-Cash est un guide numérique BHD disponible sur Selar, conçu pour présenter la conversion numérique pratique, le passage de l’attention en ligne à la valeur produit et les bases transparentes du marketing digital.',
      'Il s’adresse aux débutants et spécialistes émergents souhaitant un cadre structuré sans promesses exagérées.',
    ],
    actionLabel: 'Découvrir Clicks-to-Cash',
  },
  'prod-03': {
    question: 'Quel problème Clicks-to-Cash résout-il et qu’apporte-t-il aux apprenants ?',
    answer: [
      'Beaucoup de débutants peinent à comprendre comment transformer une audience en ligne en valeur réelle plutôt que de publier des liens au hasard. Clicks-to-Cash aborde les principes de conversion, les listes de préparation et les fondamentaux du marketing honnête.',
      'Les modules exacts et le tarif actuel figurent sur la fiche Selar officielle.',
    ],
    actionLabel: 'Voir Clicks-to-Cash sur Selar',
  },
  'prod-04': {
    question: 'Qu’est-ce que Global Monetisation et pour qui est-il conçu ?',
    answer: [
      'Global Monetisation est un produit numérique BHD sur Selar axé sur la structuration de connaissances et d’offres numériques destinées à un public international.',
      'Il convient aux créateurs, formateurs et détenteurs de compétences souhaitant toucher des clients au-delà des frontières.',
    ],
    actionLabel: 'Découvrir Global Monetisation',
  },
  'prod-05': {
    question: 'Quel besoin Global Monetisation traite-t-il et quels thèmes couvre-t-il ?',
    answer: [
      'De nombreux créateurs limitent leurs offres au marché local alors que les plateformes numériques permettent une distribution internationale. Global Monetisation explore l’accessibilité mondiale, les principes de diffusion et la création de valeur durable.',
    ],
    actionLabel: 'Voir Global Monetisation sur Selar',
  },
  'prod-06': {
    question: 'Qu’est-ce que Remote Jobs for Under 18 et à qui ce guide est-il destiné ?',
    answer: [
      'Remote Jobs for Under 18 est un guide pratique BHD sur Selar consacré aux compétences numériques adaptées aux jeunes et aux opportunités en ligne légitimes.',
      'Il s’adresse aux jeunes apprenants, aux élèves de moins de 18 ans ainsi qu’aux parents ou tuteurs soucieux d’encadrer un apprentissage numérique responsable.',
    ],
    actionLabel: 'Découvrir Remote Jobs for Under 18',
  },
  'prod-07': {
    question: 'Quels principes de sécurité et parcours aborde Remote Jobs for Under 18 ?',
    answer: [
      'Le guide met l’accent sur le repérage de compétences adaptées à l’âge, la constitution progressive d’un portfolio, le respect des règles des plateformes et des attentes réalistes.',
      'Il ne garantit aucun emploi automatique ; consultez la fiche Selar pour les détails complets.',
    ],
    actionLabel: 'Consulter la Fiche sur Selar',
  },
  'prod-08': {
    question: 'Dans quel format et quelle langue les produits Selar de BHD sont-ils publiés ?',
    answer: [
      'Les guides vedettes de BHD sur Selar (Clicks-to-Cash, Global Monetisation et Remote Jobs for Under 18) sont des ressources téléchargeables publiées en anglais.',
      'Le format exact (PDF/ebook, etc.) et les précisions d’édition sont indiqués sur chaque fiche Selar avant le paiement.',
    ],
  },
  'prod-09': {
    question: 'Comment trouver et acheter un produit numérique vérifié de BHD ?',
    answer: [
      'Rendez-vous directement sur la boutique officielle Selar (https://selar.com/m/BYHENRYDIGITALS) ou ouvrez la page Produits de ce site puis cliquez sur « Voir sur Selar ».',
      'Selar affiche le prix vérifié dans votre devise et assure la livraison numérique immédiate.',
    ],
    actionLabel: 'Ouvrir la Boutique Selar',
  },
  'prod-10': {
    question: 'BHD délivre-t-il des certificats, des cours en direct ou un placement garanti avec ses guides ?',
    answer: [
      'Non. Les produits numériques actuels de BHD sur Selar sont des guides pratiques en autonomie et non des formations certifiantes diplômantes, des cohortes en direct ou des services de placement professionnel garanti.',
    ],
  },
  'prod-11': {
    question: 'Comment les ressources BHD aident-elles à comprendre l’entrepreneuriat numérique et les ventes digitales ?',
    answer: [
      'Les guides Selar et les articles de la rubrique Ressources & Blog expliquent comment la création de valeur, la clarté de l’offre et la structure web soutiennent des ventes numériques durables.',
    ],
    actionLabel: 'Ouvrir Ressources & Blog',
  },
  'prod-12': {
    question: 'Que couvrent les ressources BHD sur le marketing d’affiliation et la monétisation en ligne ?',
    answer: [
      'Elles mettent en avant une affiliation éthique : expliquer honnêtement à qui convient un produit, quel besoin il couvre, et éviter les promesses irréalistes de gains rapides.',
    ],
    actionLabel: 'Lire les Articles',
  },
  'prod-13': {
    question: 'Que présentent les ressources BHD sur le travail à distance et les opportunités numériques ?',
    answer: [
      'Elles encouragent les compétences fondamentales — rédaction structurée, bases web, workflows no-code et création de portfolio — en complément du guide Remote Jobs for Under 18.',
    ],
    actionLabel: 'Explorer les Ressources',
  },
  'prod-14': {
    question: 'BHD traite-t-il la création de produits numériques et les revenus multidevises ?',
    answer: [
      'Oui. Global Monetisation aborde la structuration d’offres numériques pour une clientèle internationale, en s’appuyant notamment sur des boutiques multidevises comme Selar.',
    ],
  },
  'prod-15': {
    question: 'Les ressources BHD couvrent-elles la création de contenu assistée par IA ?',
    answer: [
      'Oui. Les articles IA & Technologie expliquent comment utiliser les outils d’IA pour la rédaction de plans ou d’ébauches tout en maintenant une relecture et une vérification humaines rigoureuses.',
    ],
    actionLabel: 'Voir les Guides IA & Tech',
  },

  // C. Programme d’Affiliation BHD
  'aff-01': {
    question: 'Qu’est-ce que le Programme d’Affiliation BHD ?',
    answer: [
      'Le Programme d’Affiliation BHD est le programme de recommandation direct à un seul niveau de BYHENRYDIGITALS. Les partenaires approuvés partagent les produits numériques éligibles sur Selar et perçoivent 35 % de commission sur les ventes vérifiées.',
    ],
    actionLabel: 'Voir le Programme d’Affiliation',
  },
  'aff-02': {
    question: 'Qui peut devenir affilié BYHENRYDIGITALS ?',
    answer: [
      'Les formateurs numériques, rédacteurs, créateurs de contenu et personnes souhaitant recommander sérieusement des ressources utiles sans gérer de stock peuvent demander à rejoindre le programme.',
      'Les débutants prêts à apprendre une promotion honnête (sans spam) sont les bienvenus, sous réserve d’examen par BHD.',
    ],
    actionLabel: 'Voir les Critères',
  },
  'aff-03': {
    question: 'Comment fonctionne le Programme d’Affiliation BHD étape par étape ?',
    answer: [
      'Étape 1 : Contactez directement BYHENRYDIGITALS via la page Contact, par e-mail (byhenrydigitals@gmail.com) ou sur WhatsApp (+234 708 208 8942) pour demander l’intégration.',
      'Étape 2 : Après validation, découvrez les produits Selar éligibles (avec le Starter Kit optionnel à ₦8,000 si vous le souhaitez).',
      'Étape 3 : Partagez votre lien d’affiliation Selar et gagnez 35 % de commission sur les ventes réussies éligibles.',
    ],
    actionLabel: 'Voir les Étapes',
  },
  'aff-04': {
    question: 'Comment les affiliés BHD gagnent-ils des commissions ?',
    answer: [
      'Les affiliés perçoivent une commission uniquement lorsqu’un acheteur finalise un achat éligible d’un produit numérique BHD sur Selar via leur lien affilié suivi.',
    ],
  },
  'aff-05': {
    question: 'Quel est le taux de commission du programme d’affiliation BHD ?',
    answer: [
      'Les affiliés approuvés perçoivent 35 % de commission sur chaque vente réussie éligible réalisée via Selar.',
      'Aucun palier caché ou taux multi-niveau supplémentaire n’existe au-delà de ce taux vérifié de 35 %.',
    ],
    actionLabel: 'Détails du Programme',
  },
  'aff-06': {
    question: 'Quelles ventes donnent droit à la commission d’affiliation ?',
    answer: [
      'Seules les commandes numériques éligibles, réglées et confirmées avec succès sur Selar via le lien de recommandation d’un affilié approuvé ouvrent droit à la commission de 35 %.',
    ],
  },
  'aff-07': {
    question: 'Y a-t-il des frais d’inscription pour devenir affilié BHD ?',
    answer: [
      'Non. L’inscription et la demande de partenariat sont entièrement gratuites (₦0 de frais d’entrée).',
    ],
  },
  'aff-08': {
    question: 'Un affilié doit-il acheter un produit avant de rejoindre le programme ?',
    answer: [
      'Non. Aucun achat obligatoire n’est exigé pour postuler ou participer au Programme d’Affiliation BHD.',
    ],
  },
  'aff-09': {
    question: 'Le Programme d’Affiliation BHD est-il un système de marketing multiniveau (MLM) ?',
    answer: [
      'Non. BHD n’opère aucun système MLM, réseau pyramidal ni chaîne de parrainage. C’est un programme d’affiliation direct à un seul niveau.',
    ],
  },
  'aff-10': {
    question: 'Existe-t-il des filleuls (« downline ») ou des bonus de recrutement ?',
    answer: [
      'Non. Il n’y a aucune structure de filleuls et aucune commission liée au recrutement d’autres affiliés. Les gains proviennent exclusivement des ventes éligibles sur Selar.',
    ],
  },
  'aff-11': {
    question: 'Qu’est-ce que l’Affiliate Starter Kit à ₦8,000 ?',
    answer: [
      'L’Affiliate Starter Kit à ₦8,000 est une ressource optionnelle d’accompagnement destinée aux affiliés qui souhaitent un guide structuré pour démarrer.',
    ],
  },
  'aff-12': {
    question: 'L’achat du Starter Kit est-il obligatoire pour participer ou percevoir des commissions ?',
    answer: [
      'Non. L’achat de l’Affiliate Starter Kit à ₦8,000 est strictement facultatif et n’est jamais exigé pour postuler, être accepté ou toucher 35 % de commission.',
    ],
  },
  'aff-13': {
    question: 'Comment les affiliés doivent-ils promouvoir les produits BYHENRYDIGITALS ?',
    answer: [
      'Les affiliés doivent présenter honnêtement le sujet et le public cible de chaque guide, sans spam ni promesses mensongères de richesse rapide ou d’usurpation de la marque BHD.',
    ],
  },
  'aff-14': {
    question: 'Où les affiliés trouvent-ils les descriptions vérifiées des produits à promouvoir ?',
    answer: [
      'Les titres officiels, audiences visées et liens vérifiés se trouvent sur la page Produits de ce site ainsi que sur https://selar.com/m/BYHENRYDIGITALS.',
    ],
    actionLabel: 'Consulter le Catalogue',
  },
  'aff-15': {
    question: 'Que se passe-t-il lorsqu’un client achète via mon lien d’affiliation Selar ?',
    answer: [
      'Lorsqu’un acheteur suit votre lien affilié Selar et finalise une commande éligible, Selar attribue automatiquement la vente à votre compte affilié pour le calcul de la commission de 35 %.',
    ],
  },
  'aff-16': {
    question: 'Comment les demandes d’intégration et les ventes affiliées sont-elles examinées ?',
    answer: [
      'Les demandes de partenariat sont examinées manuellement par BYHENRYDIGITALS (sans validation automatique), et les ventes éligibles sont suivies via l’enregistrement commercial Selar.',
    ],
  },
  'aff-17': {
    question: 'Comment contacter BYHENRYDIGITALS pour l’intégration ou l’assistance affilié ?',
    answer: [
      'Les formulaires Tally ont été entièrement retirés du site. Contactez BHD directement via la page Contact, par e-mail à byhenrydigitals@gmail.com ou sur WhatsApp au +234 708 208 8942.',
    ],
    actionLabel: 'Contacter BHD pour l’Affiliation',
  },

  // D. Services Numériques et Développement Web
  'srv-01': {
    question: 'Quels services numériques BYHENRYDIGITALS propose-t-il ?',
    answer: [
      'BHD intervient dans cinq domaines principaux : (1) Conception et Développement de Sites Web, (2) Landing Pages, (3) Développement de Présence Digitale, (4) Solutions No-Code et Assistées par IA et (5) Accompagnement Business Digital.',
    ],
    actionLabel: 'Explorer les Services',
  },
  'srv-02': {
    question: 'BHD conçoit-il des sites web professionnels pour entreprises et particuliers ?',
    answer: [
      'Oui. BHD développe des sites responsives pour entreprises et marques personnelles avec navigation claire, positionnement structuré et parcours de contact efficaces sur ordinateur, tablette et mobile.',
    ],
    actionLabel: 'Voir Développement Web',
  },
  'srv-03': {
    question: 'Que sont les Landing Pages BHD et quand les choisir ?',
    answer: [
      'Une Landing Page BHD est une page ciblée à objectif unique, conçue pour présenter clairement une offre précise et guider les visiteurs vers une action claire sans distractions.',
    ],
    actionLabel: 'Voir le Service Landing Pages',
  },
  'srv-04': {
    question: 'BHD peut-il aider à structurer ou connecter une boutique de produits numériques ?',
    answer: [
      'Oui. BHD aide créateurs et entreprises à organiser leurs vitrines de produits numériques (comme Selar), leurs liens d’achat et la cohérence de leur écosystème web.',
    ],
  },
  'srv-05': {
    question: 'Comment BHD aborde-t-il la planification et la structuration d’un site web ?',
    answer: [
      'BHD définit d’abord l’architecture des pages, la hiérarchie des informations, les parcours utilisateurs et la clarté des appels à l’action avant l’habillage visuel.',
    ],
  },
  'srv-06': {
    question: 'Les services web BHD incluent-ils la mise en ligne et les tests responsives ?',
    answer: [
      'Oui. Chaque réalisation inclut des vérifications techniques sur mobile, tablette et ordinateur, le test des formulaires et liens, ainsi que la qualité sémantique avant publication.',
    ],
  },
  'srv-07': {
    question: 'Quelles intégrations web BHD peut-il connecter pour ses clients ?',
    answer: [
      'BHD intègre formulaires validés, notifications webhook, redirections Selar, contacts directs WhatsApp/e-mail et passerelles no-code adaptées aux besoins du client.',
    ],
  },
  'srv-08': {
    question: 'BHD propose-t-il l’intégration de chatbot en prestation client, et BHD exploite-t-il son propre assistant IA ?',
    answer: [
      'BHD peut concevoir ou intégrer des interfaces de chatbot pour des clients qui le demandent dans le cadre de leurs propres projets.',
      'En revanche, BYHENRYDIGITALS n’exploite PAS d’assistant IA ni de chatbot conversationnel sur son propre site : ici, Vanessa est exclusivement une base FAQ structurée et consultable.',
    ],
  },
  'srv-09': {
    question: 'En quoi le Développement de Présence Digitale renforce-t-il une marque en ligne ?',
    answer: [
      'Ce service harmonise site principal, boutique en ligne, identité visuelle et réseaux sociaux afin que les visiteurs internationaux perçoivent immédiatement la crédibilité de votre marque.',
    ],
  },
  'srv-10': {
    question: 'Que recouvre l’Accompagnement Business Digital chez BHD ?',
    answer: [
      'Il apporte un soutien technique et stratégique concret aux fondateurs lançant des offres numériques, structurant leurs services ou faisant évoluer leur infrastructure web.',
    ],
  },
  'srv-11': {
    question: 'Comment sont tarifés les projets web et services numériques de BHD ?',
    answer: [
      'Chaque projet est chiffré sur mesure selon les livrables et exigences techniques lors d’une consultation. Aucun tarif forfaitaire arbitraire n’est affiché en ligne.',
    ],
    actionLabel: 'Demander un Échange Projet',
  },
  'srv-12': {
    question: 'Quelles informations fournir pour une demande de projet et comment sont fixés les délais ?',
    answer: [
      'Précisez votre objectif, les pages ou intégrations souhaitées, vos liens existants et vos attentes de calendrier via la page Contact, par e-mail (byhenrydigitals@gmail.com) ou WhatsApp (+234 708 208 8942). Les délais sont convenus selon la portée réelle du projet.',
    ],
    actionLabel: 'Discuter de Votre Projet',
  },

  // E. Entrepreneuriat Numérique et Monétisation en Ligne
  'ent-01': {
    question: 'Qu’est-ce que l’entrepreneuriat numérique ?',
    answer: [
      'L’entrepreneuriat numérique consiste à créer et gérer une activité délivrant de la valeur principalement en ligne — guides pédagogiques, services web, conseil ou ressources digitales — grâce aux outils et réseaux numériques.',
    ],
  },
  'ent-02': {
    question: 'Qu’est-ce que le marketing d’affiliation ?',
    answer: [
      'Le marketing d’affiliation est un partenariat dans lequel un créateur ou partenaire recommande le produit d’une marque via un lien suivi et perçoit une commission convenue sur les achats éligibles réalisés via ce lien.',
    ],
  },
  'ent-03': {
    question: 'Qu’est-ce que la création de produits numériques ?',
    answer: [
      'C’est le processus consistant à transformer un savoir structuré, des modèles ou des guides pratiques en ressources téléchargeables livrées automatiquement en ligne sans logistique physique.',
    ],
  },
  'ent-04': {
    question: 'Que signifie la monétisation en ligne ?',
    answer: [
      'La monétisation en ligne désigne la génération de revenus légitimes à partir de compétences, de guides éducatifs ou de services numériques en apportant une réponse utile et vérifiable à un besoin réel.',
    ],
  },
  'ent-05': {
    question: 'Que sont les ventes numériques ?',
    answer: [
      'Ce sont les transactions abouties portant sur des biens ou services digitaux (guides Selar, prestations web sur mesure), qui reposent sur la clarté de l’offre et la confiance.',
    ],
  },
  'ent-06': {
    question: 'Qu’est-ce qu’un tunnel de vente (sales funnel) ?',
    answer: [
      'Un tunnel de vente représente le parcours structuré qu’emprunte un visiteur : découverte de la marque, compréhension du problème, évaluation de l’offre, puis achat ou prise de contact.',
    ],
  },
  'ent-07': {
    question: 'Qu’est-ce qu’une landing page par rapport à un site complet ?',
    answer: [
      'Un site complet présente toute l’organisation sur plusieurs pages (Accueil, À propos, Produits, Services, FAQ, Contact), tandis qu’une landing page concentre une seule page sur une offre précise et une action unique.',
    ],
  },
  'ent-08': {
    question: 'Qu’est-ce qu’une vitrine numérique (digital storefront) ?',
    answer: [
      'Une vitrine numérique est un espace e-commerce en ligne présentant produits, descriptions, devises acceptées et livraison automatisée — comme la boutique Selar officielle de BYHENRYDIGITALS.',
    ],
  },
  'ent-09': {
    question: 'Qu’est-ce que la monétisation multidevises ?',
    answer: [
      'C’est la possibilité de vendre des ressources numériques à des clients situés dans différents pays grâce à des plateformes (telles que Selar) affichant et encaissant plusieurs devises locales ou internationales.',
    ],
  },
  'ent-10': {
    question: 'Quelles compétences aident un débutant à entrer dans l’économie numérique ?',
    answer: [
      'La rédaction claire, la culture numérique, la compréhension des besoins clients, la structuration web de base, le marketing éthique et la maîtrise raisonnée des outils de productivité sont des bases durables.',
    ],
  },
  'ent-11': {
    question: 'Que doivent savoir de manière réaliste les débutants avant de se lancer en ligne ?',
    answer: [
      'Réussir en ligne demande apprentissage, constance, travail concret et crédibilité. BHD ne promet jamais de revenus garantis ni d’argent facile sans effort.',
    ],
  },

  // F. IA et Technologie Numérique
  'ai-01': {
    question: 'Comment l’IA peut-elle soutenir la création de contenu numérique ?',
    answer: [
      'Les outils d’IA aident à structurer des plans, explorer des angles éditoriaux et rédiger des premiers jets plus rapidement, sous réserve d’une relecture et d’une vérification humaines attentives.',
    ],
  },
  'ai-02': {
    question: 'Comment utiliser la vidéo assistée par IA de façon responsable ?',
    answer: [
      'Les outils vidéo assistés par IA facilitent le script, le sous-titrage ou le découpage pédagogique tout en laissant le créateur humain garant de l’exactitude et du message.',
    ],
  },
  'ai-03': {
    question: 'Comment les outils de productivité numérique aident-ils les petites équipes ?',
    answer: [
      'Ils organisent tâches, formulaires, documentation et notifications pour limiter les erreurs manuelles et maintenir une exécution régulière.',
    ],
  },
  'ai-04': {
    question: 'Quels outils de développement web BHD privilégie-t-il ?',
    answer: [
      'BHD mise sur des technologies web propres et responsives (React, TypeScript, Tailwind CSS, HTML sémantique et API Node/Express lorsque nécessaire) pour garantir rapidité et maintenabilité.',
    ],
  },
  'ai-05': {
    question: 'Que sont les solutions no-code et low-code ?',
    answer: [
      'Ce sont des plateformes visuelles et ponts d’automatisation permettant de relier formulaires, boutiques et notifications sans développer de lourds logiciels sur mesure pour des besoins simples.',
    ],
  },
  'ai-06': {
    question: 'Quelle différence entre l’intégration de chatbot pour clients et le site actuel de BHD ?',
    answer: [
      'BHD peut intégrer des chatbots tiers à la demande sur le site d’un client, mais BYHENRYDIGITALS n’exploite pas d’assistant IA sur son propre site : Vanessa y fonctionne uniquement comme FAQ consultable.',
    ],
  },
  'ai-07': {
    question: 'Que signifie un usage responsable de l’IA chez BYHENRYDIGITALS ?',
    answer: [
      'Cela implique de ne jamais inventer de données, de ne jamais présenter un système statique comme une IA, de protéger les clés côté serveur et d’exiger une validation humaine.',
    ],
  },
  'ai-08': {
    question: 'Quelle est la différence entre contenu généré par IA et travail relu par un humain ?',
    answer: [
      'Un texte brut généré par IA peut comporter des approximations ou des affirmations inventées ; le travail relu par un humain vérifie chaque fait et respecte la précision linguistique (accents français, tons yoruba, caractères igbo).',
    ],
  },
  'ai-09': {
    question: 'Comment BHD distingue-t-il services actuels, outils utilisés et projets sur mesure ?',
    answer: [
      'Actuels : développement web, landing pages, présence digitale, workflows no-code, support business et guides Selar. Outils : technologies web modernes, Selar et outils de productivité. Les projets sur mesure sont cadrés directement selon les besoins du client.',
    ],
  },

  // G. Langues et Ressources d’Apprentissage
  'lang-01': {
    question: 'Quelles langues le site BYHENRYDIGITALS prend-il actuellement en charge ?',
    answer: [
      'Le site prend en charge cinq langues actives : anglais, igbo, yoruba, haoussa et français.',
    ],
    actionLabel: 'Explorer les Ressources',
  },
  'lang-02': {
    question: 'Des ressources et articles en anglais sont-ils disponibles sur BHD ?',
    answer: [
      'Oui. L’anglais est la langue par défaut du site, et tous les guides Selar actuels (Clicks-to-Cash, Global Monetisation, Remote Jobs for Under 18) ainsi que les articles et la FAQ Vanessa sont disponibles en anglais.',
    ],
  },
  'lang-03': {
    question: 'BHD propose-t-il des ressources et une navigation en français ?',
    answer: [
      'Oui. Sélectionnez « Français » dans le menu de langue pour traduire l’ensemble du site web, les articles du Centre de Ressources et toute cette FAQ détaillée Vanessa.',
      'En toute transparence, les produits téléchargeables actuellement vendus sur Selar sont publiés dans leur édition originale anglaise.',
    ],
    actionLabel: 'Ouvrir les Ressources',
  },
  'lang-04': {
    question: 'Comment l’accessibilité en langue igbo est-elle assurée sur BHD ?',
    answer: [
      'Le choix de l’igbo dans le sélecteur de langue met immédiatement à jour menus, pages produits, affiliation, contact et l’intégralité de la FAQ Vanessa en igbo.',
    ],
  },
  'lang-05': {
    question: 'Comment l’accessibilité en langue yoruba est-elle assurée sur BHD ?',
    answer: [
      'Le choix du yoruba traduit le site, les guides et toute la FAQ Vanessa en yoruba naturel tout en préservant les marques tonales et diacritiques appropriés.',
    ],
  },
  'lang-06': {
    question: 'Comment l’accessibilité en langue haoussa est-elle assurée sur BHD ?',
    answer: [
      'Le choix du haoussa affiche immédiatement les pages du site, le programme d’affiliation, les contacts et toute la FAQ Vanessa en haoussa sans recharger la page.',
    ],
  },
  'lang-07': {
    question: 'Les guides téléchargeables BHD sur Selar sont-ils traduits en français, igbo, yoruba ou haoussa ?',
    answer: [
      'Pas encore. Si le site web et la FAQ Vanessa sont entièrement traduits dans ces cinq langues, les fichiers numériques actuellement vendus sur Selar sont édités uniquement en anglais. BHD ne prétend jamais qu’une traduction existe si ce n’est pas le cas.',
    ],
  },
  'lang-08': {
    question: 'Comment connaître la langue d’origine d’un produit BHD avant l’achat ?',
    answer: [
      'Chaque fiche sur la page Produits indique clairement la « Langue du Contenu du Produit » (édition originale anglaise), information également confirmée sur la page Selar avant paiement.',
    ],
    actionLabel: 'Voir la Page Produits',
  },

  // H. Achats, Paiements et Support Client
  'pay-01': {
    question: 'Où acheter officiellement les produits numériques BYHENRYDIGITALS ?',
    answer: [
      'Tous les produits numériques officiels de BHD s’achètent exclusivement sur la boutique vérifiée Selar : https://selar.com/m/BYHENRYDIGITALS.',
    ],
    actionLabel: 'Visiter la Boutique Selar',
  },
  'pay-02': {
    question: 'Comment fonctionne le paiement sur la boutique Selar de BHD ?',
    answer: [
      'Sur Selar, vous consultez le tarif vérifié dans votre devise acceptée, relisez la description complète et finalisez le règlement par les moyens sécurisés proposés par Selar.',
    ],
  },
  'pay-03': {
    question: 'Comment accéder aux produits numériques après un achat sur Selar ?',
    answer: [
      'Dès la confirmation du paiement sur Selar, la plateforme fournit le lien de téléchargement de vos fichiers et envoie les instructions d’accès à votre adresse e-mail.',
    ],
  },
  'pay-04': {
    question: 'Que faire en cas de problème de paiement ou de téléchargement sur Selar ?',
    answer: [
      'Conservez votre référence de transaction et l’e-mail utilisé lors de l’achat, puis contactez directement BHD à byhenrydigitals@gmail.com ou sur WhatsApp au +234 708 208 8942.',
    ],
    actionLabel: 'Contacter le Support',
  },
  'pay-05': {
    question: 'BHD publie-t-il des délais de remboursement ou garanties de traitement sur ce site ?',
    answer: [
      'Non. Aucun délai de traitement ou politique de remboursement inventé n’est affiché ici ; les achats suivent les conditions de paiement Selar et les informations officielles de chaque fiche produit.',
    ],
  },
  'pay-06': {
    question: 'Comment poser une question sur un produit avant d’acheter ?',
    answer: [
      'Recherchez dans Vanessa FAQ, consultez la page Produits ou contactez BHD par e-mail (byhenrydigitals@gmail.com), WhatsApp (+234 708 208 8942) ou via le formulaire Contact.',
    ],
    actionLabel: 'Poser une Question Produit',
  },
  'pay-07': {
    question: 'Comment contacter directement le support client de BYHENRYDIGITALS ?',
    answer: [
      'Vous disposez de trois canaux officiels : (1) E-mail : byhenrydigitals@gmail.com, (2) WhatsApp : +234 708 208 8942 (https://wa.me/2347082088942), et (3) le formulaire de la page Contact.',
    ],
    actionLabel: 'Ouvrir la Page Contact',
  },
  'pay-08': {
    question: 'Où trouver les actualités et annonces officielles de BYHENRYDIGITALS ?',
    answer: [
      'Suivez le site web officiel, la boutique Selar et les comptes vérifiés de BHD sur Instagram, TikTok, X (Twitter) et Facebook.',
    ],
  },

  // I. Navigation du Site et Réseaux Sociaux
  'nav-01': {
    question: 'Comment naviguer sur le site web BYHENRYDIGITALS ?',
    answer: [
      'La barre supérieure et le menu mobile donnent accès à : Accueil, À propos, Produits, Programme d’affiliation, Services, Ressources et Contact, ainsi qu’au sélecteur de langue et à la bulle flottante « FAQ BHD » en bas à droite.',
    ],
  },
  'nav-02': {
    question: 'Où trouver les produits numériques et les articles pédagogiques sur le site ?',
    answer: [
      'Ouvrez « Produits » (/products) pour le catalogue Selar et « Ressources » (/resources) pour lire les articles classés en sept thématiques.',
    ],
    actionLabel: 'Voir Produits',
  },
  'nav-03': {
    question: 'Où consulter les services digitaux et demander un rendez-vous ?',
    answer: [
      'Ouvrez « Services » (/services) ou cliquez sur « Nos Solutions » dans l’en-tête pour explorer les cinq prestations et accéder directement au formulaire prérempli.',
    ],
    actionLabel: 'Voir Services',
  },
  'nav-04': {
    question: 'Comment utiliser le sélecteur de langue du site ?',
    answer: [
      'Cliquez sur le bouton Langue en haut à droite puis sélectionnez English, Igbo, Yorùbá, Hausa ou Français. Le changement est immédiat, sans rechargement de page, et mémorisé.',
    ],
  },
  'nav-05': {
    question: 'Où accéder à Vanessa — FAQ Détaillée BHD ?',
    answer: [
      'Cliquez sur la bulle flottante « FAQ BHD » située en bas à droite de n’importe quelle page (ordinateur ou mobile), ou cliquez sur « Ouvrir Vanessa FAQ » dans le pied de page ou l’accueil.',
    ],
  },
  'nav-06': {
    question: 'Comment accéder à la page Contact et aux boutons E-mail / WhatsApp ?',
    answer: [
      'Rendez-vous sur « Contact » (/contact) ou utilisez directement les boutons « Nous Écrire par E-mail » et « Discuter avec nous sur WhatsApp » présents dans le pied de page, la page Contact et cette FAQ.',
    ],
    actionLabel: 'Page Contact',
  },
  'nav-07': {
    question: 'Quels sont les comptes officiels de BYHENRYDIGITALS sur les réseaux sociaux ?',
    answer: [
      'Retrouvez BHD sur Instagram (https://www.instagram.com/byhenrydigitals/), TikTok (https://www.tiktok.com/@byhenrydigitals), X / Twitter (https://x.com/BYHENRYDIGITALS) et Facebook (https://www.facebook.com/share/1A8GpCyCt3/).',
    ],
  },
  'nav-08': {
    question: 'BYHENRYDIGITALS utilise-t-il encore des formulaires Tally sur son site ?',
    answer: [
      'Non. Tous les liens et formulaires Tally ont été définitivement supprimés. Toutes les demandes passent désormais par la page Contact, byhenrydigitals@gmail.com et WhatsApp (+234 708 208 8942).',
    ],
    actionLabel: 'Contacter BHD',
  },

  // J. Vanessa FAQ Détaillée
  'van-01': {
    question: 'Qu’est-ce que Vanessa — FAQ Détaillée BHD ?',
    answer: [
      'Vanessa — FAQ Détaillée BHD (« Votre guide consultable pour tout savoir sur BYHENRYDIGITALS. ») est le centre de questions-réponses structuré et consultable de BHD, couvrant 10 catégories et plus de 100 fiches vérifiées.',
    ],
  },
  'van-02': {
    question: 'Vanessa est-elle un chatbot IA ou un assistant conversationnel ?',
    answer: [
      'Non. Vanessa N’EST PAS un chatbot IA ni un assistant conversationnel. BYHENRYDIGITALS n’exploite actuellement aucun chatbot IA sur son site.',
      'Tous les anciens widgets Botpress ont été retirés afin que Vanessa demeure uniquement un centre d’information FAQ fiable et consultable.',
    ],
  },
  'van-03': {
    question: 'Comment fonctionne le moteur de recherche de Vanessa FAQ ?',
    answer: [
      'La recherche indexe l’ensemble des fiches publiées : titres de questions, réponses complètes, noms de catégories et mots-clés alternatifs, avec prise en charge des mots partiels et tolérance aux fautes de frappe courantes.',
    ],
  },
  'van-04': {
    question: 'Comment rechercher, filtrer par catégorie ou explorer les questions liées ?',
    answer: [
      'Saisissez un mot-clé dans la barre de recherche (« Rechercher tout sur BYHENRYDIGITALS... »), cliquez sur une suggestion ou filtrez via l’une des 10 catégories. Chaque réponse ouverte propose des questions connexes cliquables.',
    ],
  },
  'van-05': {
    question: 'Que se passe-t-il si aucune réponse ne correspond à ma recherche ?',
    answer: [
      'Vanessa affiche un état vide clair avec un bouton de réinitialisation des filtres et des liens directs vers l’e-mail officiel (byhenrydigitals@gmail.com), WhatsApp (+234 708 208 8942) et la page Contact.',
    ],
    actionLabel: 'Ouvrir la Page Contact',
  },
  'van-06': {
    question: 'Vanessa FAQ se traduit-elle lorsque je change la langue du site ?',
    answer: [
      'Oui. Le changement de langue dans l’en-tête met immédiatement à jour l’interface de recherche, les 10 catégories, les questions et les réponses en anglais, igbo, yoruba, haoussa ou français.',
    ],
  },
  'van-07': {
    question: 'Comment les fiches Vanessa FAQ sont-elles gérées et vérifiées ?',
    answer: [
      'Chaque fiche possède un identifiant unique, une catégorie, des mots-clés, une langue et un statut de publication/vérification dans un référentiel centralisé. Seules les fiches publiées et vérifiées sont affichées aux visiteurs.',
    ],
  },
};

export const faqFr: FaqBundle = {
  language: 'fr',
  bubbleLabel: 'FAQ BHD',
  closeAriaLabel: 'Fermer le panneau Vanessa FAQ',
  kicker: 'Centre d’Information Consultable BHD',
  heading: 'VANESSA — FAQ DÉTAILLÉE BHD',
  subheading: 'Votre guide consultable pour tout savoir sur BYHENRYDIGITALS.',
  nonAiNotice:
    'Bibliothèque FAQ structurée — informations BHD vérifiées (il ne s’agit pas d’un chatbot ni d’un assistant IA).',
  searchPlaceholder: 'Rechercher tout sur BYHENRYDIGITALS...',
  searchAriaLabel: 'Rechercher tout sur BYHENRYDIGITALS',
  clearSearchLabel: 'Effacer',
  allCategoriesLabel: 'Toutes les Catégories',
  categoriesHeading: 'Catégories FAQ (A–J)',
  exampleQueriesTitle: 'Recherches fréquentes :',
  exampleQueries: [
    'Qu’est-ce que BYHENRYDIGITALS ?',
    'Clicks-to-Cash',
    'commission 35%',
    'Devenir affilié BHD',
    'Développement site web',
    'Entrepreneuriat numérique',
    'Usage responsable de l’IA',
    'Ressources en français',
    'Acheter sur Selar',
    'Vanessa est-elle un chatbot IA ?',
  ],
  resultsMatchingLabel: 'réponses correspondantes',
  allTopicsCountLabel: 'fiches FAQ publiées',
  verifiedStatusLabel: 'Vérifié',
  relatedQuestionsLabel: 'Questions Associées',
  noResultsTitle: 'Aucune réponse correspondante trouvée',
  noResultsBody:
    'Aucune fiche publiée ne correspond exactement à votre recherche. Essayez d’autres mots-clés, réinitialisez les filtres ou contactez directement BYHENRYDIGITALS par e-mail ou WhatsApp.',
  resetFiltersLabel: 'Afficher Toutes les Fiches FAQ',
  escalationTitle: 'Vous ne trouvez pas votre réponse ?',
  escalationBody:
    'Contactez directement BYHENRYDIGITALS par e-mail officiel, sur WhatsApp ou via le formulaire de contact.',
  emailButtonLabel: 'Nous Écrire par E-mail',
  whatsappButtonLabel: 'WhatsApp',
  contactPageButtonLabel: 'Ouvrir le Formulaire Contact',
  expandAllLabel: 'Tout Déplier',
  collapseAllLabel: 'Tout Replier',
  categories: {
    'about-bhd': {
      title: 'A. À propos de BYHENRYDIGITALS',
      description: 'Identité, fondateur, mission, vision et positionnement.',
    },
    'products-resources': {
      title: 'B. Produits & Ressources Pédagogiques',
      description: 'Guides Selar vérifiés, publics visés, formats et thèmes.',
    },
    'affiliate-programme': {
      title: 'C. Programme d’Affiliation BHD',
      description: 'Commission de 35 %, ₦0 d’inscription, sans MLM, Starter Kit optionnel.',
    },
    'web-services': {
      title: 'D. Services Numériques & Développement Web',
      description: 'Sites web, landing pages, vitrines digitales, intégrations et devis.',
    },
    'entrepreneurship-monetisation': {
      title: 'E. Entrepreneuriat Numérique & Monétisation',
      description: 'Notions clés pour débutants, tunnels de vente et réalisme.',
    },
    'ai-technology': {
      title: 'F. IA & Technologie Numérique',
      description: 'Création assistée, no-code, usage responsable et relecture humaine.',
    },
    'languages-learning': {
      title: 'G. Langues & Ressources d’Apprentissage',
      description: 'Anglais, igbo, yoruba, haoussa, français et langue des produits.',
    },
    'payments-purchases': {
      title: 'H. Achats, Paiements & Support Client',
      description: 'Paiement Selar, accès aux fichiers et assistance directe BHD.',
    },
    'navigation-social': {
      title: 'I. Navigation du Site & Réseaux Sociaux',
      description: 'Structure du site, sélecteur de langue et comptes officiels.',
    },
    'vanessa-faq': {
      title: 'J. Vanessa FAQ Détaillée',
      description: 'Fonctionnement de la recherche FAQ et vérification des fiches.',
    },
  },
  entries: composeFaqEntries('fr', recordsFr),
};
