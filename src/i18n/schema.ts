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
  problemAddressed: string;
  whatBhdProvides: string;
  whatYouReceive: string[];
  howToStart: string;
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
    tagline: string;
    heroTitle: string;
    heroSubtitle: string;
    secondaryTagline: string;
    needsApproachTitle: string;
    needsApproachBody: string;
    primaryCta: string;
    secondaryCta: string;
    pillars: { title: string; detail: string }[];
    pathways: {
      sectionKicker: string;
      sectionTitle: string;
      sectionSubtitle: string;
      business: {
        label: string;
        title: string;
        description: string;
        cta: string;
        servicesLinkLabel: string;
        projectsLinkLabel: string;
        contactLinkLabel: string;
      };
      individual: {
        label: string;
        title: string;
        description: string;
        cta: string;
        productsLinkLabel: string;
        resourcesLinkLabel: string;
        affiliateLinkLabel: string;
      };
    };
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
    affiliateClarification: string;
    starterKitOffer: {
      kicker: string;
      title: string;
      priceLabel: string;
      description: string;
      clarification: string;
      cta: string;
    };
    programmeOffer: {
      kicker: string;
      title: string;
      priceLabel: string;
      description: string;
      clarification: string;
      cta: string;
    };
    affiliateCards: {
      commissionLabel: string;
      signupLabel: string;
      noMlmTitle: string;
      noMlmLabel: string;
      selectionTitle: string;
      selectionLabel: string;
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
    starterKitNotice: {
      kicker: string;
      title: string;
      priceDisplay: string;
      description: string;
      clarification: string;
      cta: string;
      affiliateLinkLabel: string;
    };
    items: Record<'clicks-to-cash' | 'global-monetisation' | 'remote-jobs-under-18', ProductTranslation>;
  };
  affiliate: {
    kicker: string;
    title: string;
    intro: string;
    clarificationBanner: string;
    sectionA: {
      kicker: string;
      title: string;
      productName: string;
      description: string;
      bullets: string[];
      cta: string;
    };
    sectionB: {
      kicker: string;
      title: string;
      programmeName: string;
      description: string;
      bullets: string[];
      cta: string;
    };
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
    approachKicker: string;
    approachHeading: string;
    approachLead: string;
    approachSteps: { num: string; title: string; detail: string }[];
    labels: {
      problem: string;
      provides: string;
      receives: string;
      getStarted: string;
    };
    brandServicesTag: string;
    customScopedLabel: string;
    discussCta: string;
    pricingNotice: string;
    availabilityNotice: string;
    items: Record<
      | 'web-design-dev'
      | 'landing-pages'
      | 'digital-presence'
      | 'nocode-ai-solutions'
      | 'digital-business-support',
      ServiceTranslation
    >;
  };
  portfolio: {
    kicker: string;
    title: string;
    intro: string;
    emptyStateTitle: string;
    emptyStateBody: string;
    emptyStateNote: string;
    formatHeading: string;
    formatItems: string[];
    discussCta: string;
    exploreServicesCta: string;
    labels: {
      category: string;
      requirement: string;
      solution: string;
      technologies: string;
      liveLink: string;
      previewZoom: string;
      closePreview: string;
      similarProjectCta: string;
    };
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
    selectedTopicLabel: string;
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
  community: {
    kicker: string;
    title: string;
    description: string;
    cta: string;
    channelName: string;
    channelTagline: string;
    whatsappChannelName: string;
    whatsappTagline: string;
    directChannelGroupLabel: string;
    communityChannelGroupLabel: string;
    socialChannelGroupLabel: string;
  };
}
