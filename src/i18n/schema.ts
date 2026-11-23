import { PageRoute, ResourceTopicId } from '../config/siteConfig';

export interface ProductTranslation {
  resourceTypeLabel: string;
  shortDescription: string;
  problemAddressed: string;
  intendedAudience: string;
  learningOutcomes: string[];
  priceDisplay: string;
  originalLanguageNote: string;
}

export interface ServiceTranslation {
  title: string;
  summary: string;
  functionalFocus: string;
  deliverables: string[];
}

export interface ArticleTranslation {
  title: string;
  publishedLabel: string;
  readTime: string;
  excerpt: string;
  body: string[];
}

export interface TranslationBundle {
  routeTitles: Record<PageRoute, string>;
  nav: {
    home: string;
    about: string;
    products: string;
    affiliate: string;
    services: string;
    resources: string;
    faq: string;
    contact: string;
    primaryCta: string;
    languageMenuLabel: string;
    activeLanguagesLabel: string;
    activeBadge: string;
    openMenuAria: string;
    closeMenuAria: string;
  };
  home: {
    kicker: string;
    heroTitle: string;
    heroSubtitle: string;
    secondaryTagline: string;
    primaryCta: string;
    secondaryCta: string;
    pillars: { title: string; detail: string }[];
    productsSectionKicker: string;
    productsSectionTitle: string;
    productsSectionDesc: string;
    viewAllProducts: string;
    selarBadge: string;
    selarLinkShort: string;
    servicesSectionKicker: string;
    servicesSectionTitle: string;
    servicesSectionDesc: string;
    exploreServices: string;
    enquireShort: string;
    affiliateSectionKicker: string;
    affiliateSectionTitle: string;
    affiliateSectionDesc: string;
    learnAffiliate: string;
    applyAffiliate: string;
    affiliateCards: {
      commissionLabel: string;
      signupLabel: string;
      noMlmTitle: string;
      noMlmLabel: string;
      starterKitLabel: string;
    };
    resourcesSectionKicker: string;
    resourcesSectionTitle: string;
    resourcesSectionDesc: string;
    browseResources: string;
    visionKicker: string;
    visionTitle: string;
    visionDesc: string;
    vanessaKicker: string;
    vanessaTitle: string;
    vanessaDesc: string;
    openVanessaFaq: string;
    contactBannerTitle: string;
    contactBannerDesc: string;
    contactBannerCta: string;
  };
  about: {
    kicker: string;
    title: string;
    intro: string;
    missionTitle: string;
    missionBody: string;
    visionTitle: string;
    visionBody: string;
    principlesTitle: string;
    principles: { title: string; body: string }[];
    founderKicker: string;
    founderTitle: string;
    founderRole: string;
    founderBio: string;
    founderNote: string;
    exploreProductsCta: string;
    contactCta: string;
  };
  products: {
    kicker: string;
    title: string;
    intro: string;
    storeBannerTitle: string;
    storeBannerDesc: string;
    visitStoreCta: string;
    problemLabel: string;
    audienceLabel: string;
    outcomesLabel: string;
    priceLabel: string;
    originalLanguageLabel: string;
    productCta: string;
    storeIntegrityNotice: string;
    brandPlatformTag: string;
    items: Record<'clicks-to-cash' | 'global-monetisation' | 'remote-jobs-under-18', ProductTranslation>;
  };
  affiliate: {
    kicker: string;
    title: string;
    intro: string;
    applyNowCta: string;
    applyNowSubject: string;
    askQuestionCta: string;
    askQuestionSubject: string;
    factsTitle: string;
    facts: { label: string; value: string }[];
    howItWorksTitle: string;
    steps: { num: string; title: string; desc: string }[];
    whoCanApplyTitle: string;
    whoCanApply: string[];
    commissionsTitle: string;
    commissionsBody: string;
    termsTitle: string;
    terms: string[];
    transparencyNotice: string;
  };
  services: {
    kicker: string;
    title: string;
    intro: string;
    philosophyTitle: string;
    philosophyBody: string;
    brandServicesTag: string;
    customScopedLabel: string;
    discussCta: string;
    pricingNotice: string;
    items: Record<
      | 'web-design-dev'
      | 'landing-pages'
      | 'digital-presence'
      | 'nocode-ai-solutions'
      | 'digital-business-support',
      ServiceTranslation
    >;
  };
  resources: {
    kicker: string;
    title: string;
    intro: string;
    allTopics: string;
    editorialNote: string;
    readArticle: string;
    closeArticle: string;
    emptyTopicTitle: string;
    emptyTopicBody: string;
    topics: Record<ResourceTopicId, string>;
    articles: Record<
      | 'functional-websites'
      | 'ethical-affiliate-basics'
      | 'practical-workflows'
      | 'digital-skills-foundation'
      | 'essential-digital-tools'
      | 'digital-entrepreneurship-value'
      | 'safe-online-learning-guide',
      ArticleTranslation
    >;
  };
  contact: {
    kicker: string;
    title: string;
    intro: string;
    formTitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitCta: string;
    submitting: string;
    successTitle: string;
    successBody: string;
    referenceLabel: string;
    sendAnother: string;
    detailsTitle: string;
    directChannelsNotice: string;
    emailChannelLabel: string;
    emailUsButton: string;
    whatsappChannelLabel: string;
    whatsappUsButton: string;
    responseChannelLabel: string;
    responseChannelValue: string;
    storefrontLabel: string;
    validation: {
      nameError: string;
      emailError: string;
      subjectError: string;
      messageError: string;
      genericSubmitError: string;
      networkError: string;
      rateLimitError: string;
      duplicateError: string;
    };
  };
  footer: {
    tagline: string;
    secondaryTagline: string;
    navigationTitle: string;
    officialLinksTitle: string;
    selarLinkLabel: string;
    emailUsLabel: string;
    whatsappUsLabel: string;
    socialTitle: string;
    languagesLabel: string;
    copyright: string;
    globalOperationLabel: string;
  };
  social: {
    kicker: string;
    heading: string;
    description: string;
  };
}
