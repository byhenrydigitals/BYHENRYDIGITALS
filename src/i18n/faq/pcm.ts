import { composeFaqEntries } from './recordsMeta';
import { FaqBundle, FaqLocalizedRecord } from './types';

const recordsPcm: Record<string, FaqLocalizedRecord> = {
  // A. About BYHENRYDIGITALS (11)
  'about-01': {
    question: 'Wetin be BYHENRYDIGITALS?',
    answer: [
      'BYHENRYDIGITALS (BHD) na digital education and digital solutions brand wey Henry (Coach Henry) start. E dey help individuals and businesses see practical digital opportunities, learn useful digital skills, buy verified digital guides on Selar, and build functional websites plus online systems.',
      'Across both learning materials and client services, BHD focus on practical digital education, digital entrepreneurship, online monetisation, and technology-based business solutions.',
    ],
    extraKeywords: ['overview', 'about bhd', 'wetin be bhd', 'digital solutions', 'digital education'],
    actionLabel: 'Read About BYHENRYDIGITALS',
  },
  'about-02': {
    question: 'Wetin BHD stand for?',
    answer: [
      'BHD na the official short name for BYHENRYDIGITALS.',
      'You go see "BHD" alongside "BYHENRYDIGITALS" across website menus, product listings, BHD Affiliate Programme, and Vanessa — Detailed BHD FAQ.',
    ],
    extraKeywords: ['bhd meaning', 'short name', 'wetin bhd mean'],
  },
  'about-03': {
    question: 'Who start BYHENRYDIGITALS?',
    answer: [
      'Na Henry, wey plenty people call Coach Henry, start BYHENRYDIGITALS.',
      'He establish BHD to make practical digital education, functional websites, and honest online earning paths easy for learners and growing businesses to understand.',
    ],
    extraKeywords: ['founder', 'coach henry', 'who own bhd', 'leadership'],
    actionLabel: 'See Founder Info on About Page',
  },
  'about-04': {
    question: 'Wetin be the main purpose of BYHENRYDIGITALS?',
    answer: [
      'BHD main goal na to make practical digital skills and dependable website solutions easy to enter through clear teaching, honest selling, and straightforward guidance.',
      'Instead of long grammar without result, BHD dey help visitors understand how digital value dey work — whether na learning from Selar guides, joining the direct affiliate programme, or building functional client websites.',
    ],
    extraKeywords: ['mission', 'purpose', 'why bhd exist', 'goal'],
    actionLabel: 'Read Mission & Purpose',
  },
  'about-05': {
    question: 'Which problem BYHENRYDIGITALS dey try solve?',
    answer: [
      'Plenty people wey wan learn or earn online dey jam fake overnight promises, hidden charges, pyramid schemes, or fine websites wey no dey actually perform.',
      'BYHENRYDIGITALS solve am with hype-free digital education, direct 35% affiliate programme with no MLM or compulsory purchase, and websites wey built for clarity and real work.',
    ],
    extraKeywords: ['problem solved', 'no hype', 'transparency', 'fake promises'],
  },
  'about-06': {
    question: 'Wetin be BYHENRYDIGITALS vision?',
    answer: [
      'BHD vision na to build one trusted digital ecosystem wey people anywhere for world fit access easily, connecting learners, creators, and businesses across different languages and borders.',
      'Dis global plan don already show across the six languages active on dis website: English, Igbo, Yorùbá, Hausa, French, and Nigerian Pidgin.',
    ],
    extraKeywords: ['vision', 'global ecosystem', 'international reach'],
  },
  'about-07': {
    question: 'Wetin "Digital Solutions. Global Impact." mean?',
    answer: [
      '"Digital Solutions. Global Impact." na BYHENRYDIGITALS main slogan. E show say BHD focus on building useful digital guides, tools, and web systems wey fit help individuals and brands compete well anywhere for the global digital economy.',
    ],
    extraKeywords: ['main slogan', 'tagline', 'global impact'],
  },
  'about-08': {
    question: 'Wetin "We Build Digital Value That Sells." mean?',
    answer: [
      '"We Build Digital Value That Sells." na BHD second tagline. E remind say digital products, landing pages, and websites no suppose just fine for eye — dem suppose solve real customer problems clearly so buyers go naturally see their value.',
    ],
    extraKeywords: ['secondary tagline', 'digital value', 'real utility'],
  },
  'about-09': {
    question: 'Who fit benefit from BYHENRYDIGITALS?',
    answer: [
      'Beginners wey wan learn digital skills, students and parents looking for safe youth pathways, content creators and writers wey wan earn through honest affiliate links, and business owners wey need clean, functional websites.',
    ],
    extraKeywords: ['who fit benefit', 'beginners', 'business owners', 'creators', 'students'],
  },
  'about-10': {
    question: 'BHD na digital education site or digital services business?',
    answer: [
      'BYHENRYDIGITALS combine both cleanly under one name: (1) digital education and practical guides on Selar plus our website Knowledge Hub, and (2) client digital services like website design, landing pages, digital presence, no-code workflows, and digital business support.',
    ],
    extraKeywords: ['education and services', 'business model'],
  },
  'about-11': {
    question: 'Where I fit see official BYHENRYDIGITALS website info and organisation details?',
    answer: [
      'You don already enter the official BYHENRYDIGITALS (BHD) website. Check the About page for mission and operating principles, browse Products and Services pages for current offers, or search Vanessa Detailed FAQ for any specific topic.',
    ],
    extraKeywords: ['official website', 'pages', 'company info'],
    actionLabel: 'Go About Page',
  },

  // B. Products and Digital Learning Resources (15)
  'prod-01': {
    question: 'Which verified digital products BYHENRYDIGITALS get right now?',
    answer: [
      'BYHENRYDIGITALS currently get three verified digital products on our official Selar store (https://selar.com/m/BYHENRYDIGITALS): (1) Clicks-to-Cash, (2) Global Monetisation, and (3) Remote Jobs for Under 18.',
      'All live prices, full descriptions, and instant download checkout dey directly inside Selar.',
    ],
    extraKeywords: ['products list', 'selar products', 'digital guides'],
    actionLabel: 'See Product Catalogue',
  },
  'prod-02': {
    question: 'Wetin be Clicks-to-Cash and who e made for?',
    answer: [
      'Clicks-to-Cash na featured BHD digital guide on Selar wey teach beginners how online attention fit turn to honest digital sales — e explain how creators, affiliates, and buyers connect without fake hype.',
      'E good for beginners, upcoming digital marketers, and new BHD affiliates wey want strong foundation before dem start to promote products. Live price and checkout dey directly on Selar.',
    ],
    extraKeywords: ['clicks to cash', 'clicks-to-cash', 'beginners guide'],
    actionLabel: 'Check Clicks-to-Cash',
  },
  'prod-03': {
    question: 'Which problem Clicks-to-Cash dey solve and wetin you go learn?',
    answer: [
      'Many beginners dey scatter links anyhow instead of knowing how honest recommendations build buyer trust. Clicks-to-Cash cover clear product positioning, honest promotion vs link spam, and clean workflow habits.',
      'Check live price and full details directly on BHD Selar store.',
    ],
    extraKeywords: ['clicks to cash outcomes', 'affiliate fundamentals'],
    actionLabel: 'Check Clicks-to-Cash on Selar',
  },
  'prod-04': {
    question: 'Wetin be Global Monetisation and who e build for?',
    answer: [
      'Global Monetisation na BHD digital guide on Selar wey focus on packaging your skill, knowledge, or resource into digital offers wey international buyers across different currencies fit pay for.',
      'E build for creators, teachers, and skilled people wey ready to reach buyers outside their local market cleanly.',
    ],
    extraKeywords: ['global monetisation', 'global monetization', 'cross-border sales'],
    actionLabel: 'Check Global Monetisation',
  },
  'prod-05': {
    question: 'Which problem Global Monetisation dey address and wetin e cover?',
    answer: [
      'Plenty skilled people dey limit themselves to only people around them even when online platforms support buyers worldwide. Global Monetisation teach how to structure digital offers, set up multi-currency storefronts, and build steady audience distribution.',
      'Visit BHD official Selar store to check current pricing and listing details.',
    ],
    extraKeywords: ['packaging skills', 'multi-currency', 'international buyers'],
    actionLabel: 'Check Global Monetisation on Selar',
  },
  'prod-06': {
    question: 'Wetin be Remote Jobs for Under 18 and who suppose use am?',
    answer: [
      'Remote Jobs for Under 18 na BHD educational guide on Selar wey look at realistic, age-appropriate digital skills, online safety, and smart skill-building before adulthood.',
      'E designed for teenagers and students under 18 alongside parents or guardians wey want safe, guided digital learning paths.',
    ],
    extraKeywords: ['remote jobs under 18', 'teenagers', 'students', 'parents'],
    actionLabel: 'Check Remote Jobs for Under 18',
  },
  'prod-07': {
    question: 'Which safety rules and skills Remote Jobs for Under 18 dey cover?',
    answer: [
      'The guide handle issues like platform age limits, payment rules, and misleading internet promises — focusing on age-safe skills, guardian supervision, respecting platform policies, and building small sample portfolios.',
      'E no dey promise automatic job placement — check the official Selar page for live price and details.',
    ],
    extraKeywords: ['under 18 safety', 'guardian supervision', 'youth digital skills'],
    actionLabel: 'Check Listing on Selar',
  },
  'prod-08': {
    question: 'Which format and language BHD Selar products currently dey inside?',
    answer: [
      'All three featured BHD digital guides on Selar (Clicks-to-Cash, Global Monetisation, and Remote Jobs for Under 18) na downloadable digital guides wey published in English.',
      'The exact file format (like PDF/ebook download) and edition details always show clearly on each Selar product page before payment.',
    ],
    extraKeywords: ['format', 'pdf', 'english language', 'downloadable'],
  },
  'prod-09': {
    question: 'How I fit find and buy verified BHD digital product?',
    answer: [
      'Go directly to BHD official Selar store at https://selar.com/m/BYHENRYDIGITALS, or open our website Products page and tap "Check & Buy on Selar" on the product wey you want.',
      'Selar display verified live prices for supported currencies and deliver your download immediately after payment.',
    ],
    extraKeywords: ['how to buy', 'purchase', 'selar price'],
    actionLabel: 'Open Official Selar Store',
  },
  'prod-10': {
    question: 'BHD dey give certificate, live classes, or guaranteed job placement with the guides?',
    answer: [
      'No. BHD current Selar products na self-paced downloadable guides — no be school degree courses, live classes, or guaranteed job-placement agencies.',
      'Any age rule or guardian guidance (especially for under-18 learners) dey explained clearly on the product listing.',
    ],
    extraKeywords: ['certificates', 'live coaching', 'job guarantee'],
  },
  'prod-11': {
    question: 'How BHD resources dey help people understand digital entrepreneurship and digital sales?',
    answer: [
      'Both BHD Selar guides and the website Resources & Blog articles explain how real value, audience clarity, digital product packaging, and buyer trust dey drive steady online sales.',
    ],
    extraKeywords: ['digital entrepreneurship', 'digital sales', 'articles'],
    actionLabel: 'Open Resources & Blog',
  },
  'prod-12': {
    question: 'Wetin BHD guides dey teach about affiliate marketing and online monetisation?',
    answer: [
      'BHD learning content stand firmly on honest affiliate marketing — explain clearly who product fit help, which problem e solve, and set real expectations without fake overnight money talk.',
    ],
    extraKeywords: ['honest affiliate marketing', 'online earning'],
    actionLabel: 'Read Resource Articles',
  },
  'prod-13': {
    question: 'Wetin BHD resources cover about remote work and digital opportunities?',
    answer: [
      'BHD highlight foundational digital skills — like clear writing, web design basics, no-code workflows, and sample portfolios — alongside youth guidance inside Remote Jobs for Under 18.',
    ],
    extraKeywords: ['remote work', 'online work', 'digital skills'],
    actionLabel: 'Read Remote Opportunity Guides',
  },
  'prod-14': {
    question: 'BHD guides dey explain how to create digital products and collect multi-currency payments?',
    answer: [
      'Yes. Global Monetisation focus directly on turning knowledge into digital offers for cross-border audiences, and BHD itself use Selar multi-currency checkout system.',
    ],
    extraKeywords: ['create digital products', 'multi-currency payments'],
  },
  'prod-15': {
    question: 'BHD get learning articles about AI-assisted content creation?',
    answer: [
      'Yes. BHD AI & Technology articles and guides discuss how modern AI tools fit help drafting, outlining, and workflow speed when human eye still check and verify everything.',
    ],
    extraKeywords: ['ai content creation', 'ai guides'],
    actionLabel: 'Read AI & Technology Guides',
  },

  // C. BHD Affiliate Programme (17)
  'aff-01': {
    question: 'Wetin be the BHD Affiliate Programme?',
    answer: [
      'The BHD Affiliate Programme na BYHENRYDIGITALS direct one-tier referral programme. Approved partners dey recommend eligible BHD products on Selar and earn 35% commission on verified purchases.',
    ],
    extraKeywords: ['affiliate programme', 'partner', '35 percent'],
    actionLabel: 'See Affiliate Programme',
  },
  'aff-02': {
    question: 'Who fit become BYHENRYDIGITALS affiliate?',
    answer: [
      'Digital educators, writers, content creators, learners, and individuals wey want recommend useful products honestly without carrying stock fit apply.',
      'Beginners wey ready to learn ethical marketing instead of dropping spam links dey welcome; BHD dey review every request directly.',
    ],
    extraKeywords: ['who fit apply', 'affiliate eligibility'],
    actionLabel: 'Check Who Fit Apply',
  },
  'aff-03': {
    question: 'How the BHD Affiliate Programme dey work step by step?',
    answer: [
      'Step 1: Message BYHENRYDIGITALS directly through our Contact page, email (byhenrydigitals@gmail.com), or WhatsApp (+234 708 208 8942) to apply for onboarding.',
      'Step 2: After review and approval, check the eligible Selar products you wan share (you fit also get the optional ₦8,000 Affiliate Starter Kit if you want structured guide).',
      'Step 3: Recommend products using your Selar affiliate link and earn 35% commission on every eligible sale.',
    ],
    extraKeywords: ['how affiliate work', 'step by step', 'onboarding'],
    actionLabel: 'See Affiliate Steps',
  },
  'aff-04': {
    question: 'How BHD affiliates dey earn commission?',
    answer: [
      'Affiliates dey earn commission only when customer buy eligible BHD digital product on Selar through that affiliate tracked referral link.',
      'No money dey come from clicks alone, free signups, or recruiting people.',
    ],
    extraKeywords: ['how affiliates earn', 'selar tracking'],
  },
  'aff-05': {
    question: 'How much be BHD affiliate commission rate?',
    answer: [
      'Approved BHD affiliates dey earn 35% commission on eligible successful Selar sales.',
      'No hidden tier percentage or extra recruitment bonus exist outside dis verified 35% direct rate.',
    ],
    extraKeywords: ['35%', 'commission rate', 'percentage'],
    actionLabel: 'See Verified Programme Facts',
  },
  'aff-06': {
    question: 'Which sales qualify for BHD affiliate commission?',
    answer: [
      'Completed, eligible digital product sales wey pass through Selar via approved affiliate tracked referral link qualify for 35% commission.',
      'Cancelled, unfinished, or ineligible orders no dey carry commission.',
    ],
    extraKeywords: ['qualifying sales', 'eligible sales'],
  },
  'aff-07': {
    question: 'Any registration fee or signup fee dey to join BHD Affiliate Programme?',
    answer: [
      'No. Registration na completely free (₦0 to apply) for the BHD Affiliate Programme.',
    ],
    extraKeywords: ['free signup', '₦0', 'registration fee'],
  },
  'aff-08': {
    question: 'Person must buy product first before joining BHD Affiliate Programme?',
    answer: [
      'No. E no be compulsory to buy any product before you apply or participate inside the BHD Affiliate Programme.',
    ],
    extraKeywords: ['mandatory purchase', 'no compulsory buy'],
  },
  'aff-09': {
    question: 'BHD Affiliate Programme na MLM (multi-level marketing)?',
    answer: [
      'No. BHD no dey run MLM, network marketing chain, or pyramid scheme at all. E na clear direct single-tier affiliate programme.',
    ],
    extraKeywords: ['no mlm', 'network marketing', 'pyramid'],
  },
  'aff-10': {
    question: 'Any downline or referral-of-referral commission structure dey?',
    answer: [
      'No. BHD affiliates no dey build downline and nobody dey earn bonus for bringing another affiliate. Commission dey come strictly from eligible product sales on Selar.',
    ],
    extraKeywords: ['no downline', 'recruit commission'],
  },
  'aff-11': {
    question: 'Wetin be the ₦8,000 Affiliate Starter Kit?',
    answer: [
      'The ₦8,000 Affiliate Starter Kit na optional guided onboarding resource from BYHENRYDIGITALS for affiliates wey want structured step-by-step training as dem start.',
    ],
    extraKeywords: ['starter kit', '8000', '₦8,000'],
  },
  'aff-12': {
    question: 'Person must buy the Affiliate Starter Kit before dem accept am or pay commission?',
    answer: [
      'No. Buying the ₦8,000 Affiliate Starter Kit na strictly optional — e never compulsory to apply, get approved, or earn 35% commission on eligible Selar sales.',
    ],
    extraKeywords: ['starter kit optional', 'compulsory'],
  },
  'aff-13': {
    question: 'How affiliates suppose promote BYHENRYDIGITALS digital products?',
    answer: [
      'Affiliates suppose explain clearly wetin each guide teach and who e fit help, sharing helpful context instead of dropping spam links anyhow.',
      'False claims, get-rich-quick promises, guaranteed income talk, or claiming to be official BHD staff no dey allowed at all.',
    ],
    extraKeywords: ['promotion rules', 'no spam', 'ethical marketing'],
  },
  'aff-14': {
    question: 'Where affiliates fit get verified product details for promotion?',
    answer: [
      'Verified product titles, audience details, and Selar links dey live on the Products page of dis website and directly on https://selar.com/m/BYHENRYDIGITALS. Approved partners fit also ask BHD directly if dem need clarification.',
    ],
    extraKeywords: ['marketing info', 'product descriptions'],
    actionLabel: 'Check Product Catalogue',
  },
  'aff-15': {
    question: 'Wetin dey happen when customer buy through my Selar affiliate link?',
    answer: [
      'Once buyer use your Selar affiliate link finish eligible payment on Selar, Selar dey track the referral automatically to your affiliate account so your 35% commission go count for that sale.',
    ],
    extraKeywords: ['affiliate link tracking', 'attribution'],
  },
  'aff-16': {
    question: 'How BHD dey review affiliate requests and sales?',
    answer: [
      'BYHENRYDIGITALS dey review onboarding messages directly (no automatic instant approval), and Selar commerce system dey record and verify eligible product sales.',
    ],
    extraKeywords: ['onboarding review', 'sales verification'],
  },
  'aff-17': {
    question: 'How affiliates fit contact BYHENRYDIGITALS for onboarding or questions?',
    answer: [
      'Tally forms don commot completely from dis website. To apply as affiliate or ask support question, use our Contact page, email byhenrydigitals@gmail.com, or WhatsApp +234 708 208 8942.',
    ],
    extraKeywords: ['affiliate support', 'apply contact', 'no tally'],
    actionLabel: 'Contact BHD for Onboarding',
  },

  // D. Digital Services and Website Development (12)
  'srv-01': {
    question: 'Which digital services BYHENRYDIGITALS dey offer?',
    answer: [
      'BHD get five clear service areas: (1) Website Design & Development, (2) Landing Pages, (3) Digital Presence Development, (4) No-Code & AI-Assisted Digital Solutions, and (5) Digital Business Support.',
      'Every project focus on clean structure, mobile speed, and practical business function — no be empty design.',
    ],
    extraKeywords: ['digital services', 'web design', 'what services bhd offer'],
    actionLabel: 'See Digital Services',
  },
  'srv-02': {
    question: 'BHD dey build business and personal websites?',
    answer: [
      'Yes. BHD dey design and build responsive business and personal websites with clean menus, strong brand identity, search-friendly setup, and direct customer enquiry or storefront flows across phone, tablet, and desktop.',
    ],
    extraKeywords: ['build website', 'business website', 'personal website'],
    actionLabel: 'See Website Service',
  },
  'srv-03': {
    question: 'Wetin be BHD Landing Pages and when business need one?',
    answer: [
      'BHD Landing Page na single focused page wey explain one specific offer, product, or campaign sharply and guide visitors straight to one action without distraction.',
    ],
    extraKeywords: ['landing page', 'campaign page'],
    actionLabel: 'See Landing Page Service',
  },
  'srv-04': {
    question: 'BHD fit help set up or connect digital product storefronts?',
    answer: [
      'Yes. Through Digital Presence Development and Digital Business Support, BHD dey help creators and brands connect their digital storefronts (such as Selar) neatly with clear checkout routes.',
    ],
    extraKeywords: ['storefront setup', 'connect selar'],
  },
  'srv-05': {
    question: 'How BHD dey handle website structure and user flow planning?',
    answer: [
      'Before beauty and animation, BHD arrange page hierarchy, clear menus, strong headlines, and smooth call-to-action paths so visitors sabi wetin your brand offer inside few seconds.',
    ],
    extraKeywords: ['website planning', 'user flow', 'structure'],
  },
  'srv-06': {
    question: 'BHD dey do responsive testing and publishing checks?',
    answer: [
      'Yes. Proper website work include testing on mobile phone, tablet, and laptop screens, checking forms and external links, clean HTML structure, and verified build deployment.',
    ],
    extraKeywords: ['mobile testing', 'publishing', 'qa'],
  },
  'srv-07': {
    question: 'Which website integrations BHD fit set up for clients?',
    answer: [
      'BHD dey connect validated enquiry forms, webhook alerts, storefront links (like Selar), direct WhatsApp and email buttons, plus neat no-code tool connections tailored to client needs.',
    ],
    extraKeywords: ['integrations', 'forms', 'webhooks', 'whatsapp link'],
  },
  'srv-08': {
    question: 'BHD dey do chatbot integration for clients, and BHD get its own AI chatbot?',
    answer: [
      'BHD fit build or connect chatbot integrations for client businesses when client request am specifically for their project.',
      'However, BYHENRYDIGITALS itself NO dey run any AI chatbot on dis website right now — Vanessa here na strictly structured, searchable FAQ guide.',
    ],
    extraKeywords: ['client chatbot', 'vanessa not chatbot'],
  },
  'srv-09': {
    question: 'How Digital Presence Development dey help brand look serious online?',
    answer: [
      'Digital Presence Development arrange your main website, Selar storefront, brand messaging, and social links into one clean, trustworthy setup so local and international visitors respect your brand immediately.',
    ],
    extraKeywords: ['digital presence', 'brand credibility'],
  },
  'srv-10': {
    question: 'Wetin BHD Digital Business Support cover?',
    answer: [
      'Digital Business Support give founders practical technical and strategy help when launching digital products, structuring services, fixing storefront trouble, or organising updates cleanly.',
    ],
    extraKeywords: ['business support', 'troubleshooting', 'maintenance'],
  },
  'srv-11': {
    question: 'How much BHD website and digital services dey cost?',
    answer: [
      'BHD dey price each service project individually during consultation based on deliverables, complexity, and features needed. No fixed one-price-fits-all tag dey listed here.',
    ],
    extraKeywords: ['service price', 'website cost', 'quote'],
    actionLabel: 'Ask for Project Consultation',
  },
  'srv-12': {
    question: 'Wetin client suppose share when messaging about project, and how timeline dey work?',
    answer: [
      'Share your business goal, pages or tools you need, existing website or storefront links, and preferred schedule via our Contact page, email (byhenrydigitals@gmail.com), or WhatsApp (+234 708 208 8942). Delivery timeline dey agreed per project scope.',
    ],
    extraKeywords: ['project enquiry', 'timeline', 'consultation'],
    actionLabel: 'Discuss Your Project',
  },

  // E. Digital Entrepreneurship and Online Monetisation (11)
  'ent-01': {
    question: 'Wetin be digital entrepreneurship?',
    answer: [
      'Digital entrepreneurship na running legitimate business wey deliver real value online — like digital learning guides, website services, consulting, or digital content — using internet platforms and digital tools.',
    ],
    extraKeywords: ['digital entrepreneurship', 'online business'],
  },
  'ent-02': {
    question: 'Wetin be affiliate marketing?',
    answer: [
      'Affiliate marketing na system where partner recommend another creator or company product with tracked link and earn agreed percentage commission whenever buyer finish eligible purchase.',
      'Honest affiliate marketing focus on real product details and trust, no be exaggerated claims.',
    ],
    extraKeywords: ['affiliate marketing meaning', 'commission'],
  },
  'ent-03': {
    question: 'Wetin be digital product creation?',
    answer: [
      'Digital product creation mean turning clear knowledge, templates, or step-by-step lessons into downloadable resources (like ebooks or toolkits) wey people fit buy and receive online without physical shipping.',
    ],
    extraKeywords: ['digital product creation', 'ebooks', 'guides'],
  },
  'ent-04': {
    question: 'Wetin online monetisation mean?',
    answer: [
      'Online monetisation mean making legitimate income from your digital skills, audience, guides, or web services by solving real problems wey buyers ready to pay for.',
    ],
    extraKeywords: ['online monetisation', 'monetize skills'],
  },
  'ent-05': {
    question: 'Wetin be digital sales?',
    answer: [
      'Digital sales na completed purchases of online products or services — like BHD downloadable guides on Selar or custom client web builds — powered by clear messaging, trust, and smooth checkout.',
    ],
    extraKeywords: ['digital sales', 'selling online'],
  },
  'ent-06': {
    question: 'Wetin be sales funnel?',
    answer: [
      'Sales funnel na the clear step-by-step path wey customer follow from first time dem hear about your brand, read helpful explanation, check your offer, reach final payment or enquiry.',
    ],
    extraKeywords: ['sales funnel', 'customer journey'],
  },
  'ent-07': {
    question: 'Wetin be landing page and how e different from full website?',
    answer: [
      'Full website carry multiple connected sections (Home, About, Products, Services, FAQ, Contact), while landing page na one dedicated page wey explain one specific offer and call visitor to one action.',
    ],
    extraKeywords: ['landing page vs website'],
  },
  'ent-08': {
    question: 'Wetin be digital storefront?',
    answer: [
      'Digital storefront na online shop platform where creator list digital products with description, verified price, currency options, and automatic download delivery — like BHD official store on Selar.',
    ],
    extraKeywords: ['digital storefront', 'selar store'],
  },
  'ent-09': {
    question: 'Wetin be multi-currency monetisation?',
    answer: [
      'Multi-currency monetisation allow creators sell digital goods to buyers in different countries using platforms like Selar where buyers fit view price and pay in their local or global currencies.',
    ],
    extraKeywords: ['multi-currency', 'global payments'],
  },
  'ent-10': {
    question: 'Which beginner skills fit help person enter the digital space?',
    answer: [
      'Strong starter skills include clear writing, basic digital literacy, research, website and landing page structuring, ethical marketing, and smart use of productivity and AI tools.',
    ],
    extraKeywords: ['beginner skills', 'starter skills'],
  },
  'ent-11': {
    question: 'Wetin beginner suppose keep in mind before starting online business?',
    answer: [
      'Online work need real skill practice, steady consistency, clear communication, and customer trust. BHD always remind people say no guaranteed overnight riches exist.',
    ],
    extraKeywords: ['realistic expectations', 'no overnight riches'],
  },

  // F. AI and Digital Technology (9)
  'ai-01': {
    question: 'How AI tools fit help digital content creation?',
    answer: [
      'AI tools fit speed up topic brainstorming, article outlines, first drafts, and research organisation — as long as human person still verify every fact and polish final quality.',
    ],
    extraKeywords: ['ai writing', 'content creation'],
  },
  'ai-02': {
    question: 'How creators fit use AI video tools responsibly?',
    answer: [
      'AI video tools fit assist script drafting, subtitles, storyboards, and editing workflows for educational explainers, while the human creator stand responsible for accuracy and brand honesty.',
    ],
    extraKeywords: ['ai video', 'responsible video tools'],
  },
  'ai-03': {
    question: 'How digital productivity tools dey help online businesses?',
    answer: [
      'Tools like task trackers, shared docs, enquiry form routing, and structured workflows cut down mistakes and help small teams deliver reliably.',
    ],
    extraKeywords: ['productivity tools', 'workflow'],
  },
  'ai-04': {
    question: 'Which web engineering tools and standards BHD dey focus on?',
    answer: [
      'BHD focus on clean, responsive web stacks (React, TypeScript, Tailwind CSS, semantic HTML, and solid backend routes where needed) built for speed, accessibility, and stability.',
    ],
    extraKeywords: ['web tools', 'react typescript'],
  },
  'ai-05': {
    question: 'Wetin be no-code and low-code digital solutions?',
    answer: [
      'No-code and low-code tools use visual builders, form bridges, storefront integrations, and workflow automations to connect apps and notifications quickly without writing big custom software.',
    ],
    extraKeywords: ['no-code', 'low-code', 'automation'],
    actionLabel: 'See No-Code Services',
  },
  'ai-06': {
    question: 'How client chatbot services different from BHD own website?',
    answer: [
      'BHD fit integrate third-party chatbot solutions for clients wey specially ask for am on their business sites, but BYHENRYDIGITALS own website no dey run any live AI chatbot — Vanessa here na structured searchable FAQ knowledge base.',
    ],
    extraKeywords: ['chatbot vs vanessa', 'no ai chatbot on bhd'],
  },
  'ai-07': {
    question: 'Wetin responsible use of AI mean for BYHENRYDIGITALS?',
    answer: [
      'Responsible AI mean never inventing fake claims, never deceiving visitors say static tool na AI, protecting private data and server API keys, and keeping human verification over published guides and translations.',
    ],
    extraKeywords: ['responsible ai', 'ai ethics', 'privacy'],
  },
  'ai-08': {
    question: 'Wetin be difference between raw AI text and human-reviewed content?',
    answer: [
      'Unchecked AI output fit carry wrong facts or stiff wording. Human-reviewed content confirm every claim against real sources and make sure languages (like Nigerian Pidgin, Yorùbá tone marks, Igbo letters, Hausa, and French) read naturally.',
    ],
    extraKeywords: ['human review', 'translation quality'],
  },
  'ai-09': {
    question: 'How BHD separate current services, tools used, and custom project options?',
    answer: [
      'Available today: web design & dev, landing pages, digital presence, no-code workflows, business support, and Selar guides. Tools used/covered: modern web tools, Selar, and productivity/AI utilities. Custom solutions dey discussed per project scope.',
    ],
    extraKeywords: ['services scope', 'tools vs services'],
  },

  // G. Languages and Learning Resources (9)
  'lang-01': {
    question: 'Which languages BYHENRYDIGITALS website dey support right now?',
    answer: [
      'The website get full multilingual support across six active languages: English, Igbo, Yorùbá, Hausa, French, and Nigerian Pidgin.',
    ],
    extraKeywords: ['supported languages', 'six languages', 'nigerian pidgin', 'pidgin'],
    actionLabel: 'Open Resource Hub',
  },
  'lang-02': {
    question: 'English resources and guides dey available on BYHENRYDIGITALS?',
    answer: [
      'Yes. English na BHD default language, and all featured Selar guides (Clicks-to-Cash, Global Monetisation, Remote Jobs for Under 18), Knowledge Hub articles, and Vanessa FAQ dey fully available in English.',
    ],
    extraKeywords: ['english guides', 'english articles'],
    actionLabel: 'Browse Resources',
  },
  'lang-03': {
    question: 'BHD get French navigation and French resources?',
    answer: [
      'Yes. Choosing Français (French) inside the language selector switch the entire website, Resource Hub articles, and all Vanessa FAQ answers to natural French.',
      'Be aware say downloadable products sold on Selar still dey inside their original English edition.',
    ],
    extraKeywords: ['french support', 'francais'],
    actionLabel: 'Open Resources Hub',
  },
  'lang-04': {
    question: 'How Igbo language support dey work on BHD?',
    answer: [
      'Choosing Igbo inside the top language menu change all navigation menus, product/service details, affiliate terms, contact pages, and full Vanessa FAQ to Igbo immediately.',
    ],
    extraKeywords: ['igbo support', 'igbo language'],
  },
  'lang-05': {
    question: 'How Yorùbá language support dey work on BHD?',
    answer: [
      'Choosing Yorùbá translate the site interface, guides, affiliate details, and Vanessa FAQ into proper Yorùbá complete with accurate tone marks and sub-dots.',
    ],
    extraKeywords: ['yoruba support', 'yoruba language'],
  },
  'lang-06': {
    question: 'How Hausa language support dey work on BHD?',
    answer: [
      'Choosing Hausa switch website pages, articles, affiliate terms, contact channels, and full Vanessa FAQ into Hausa right away without reloading page.',
    ],
    extraKeywords: ['hausa support', 'hausa language'],
  },
  'lang-09': {
    question: 'How Nigerian Pidgin dey supported on BYHENRYDIGITALS?',
    answer: [
      'Selecting Nigerian Pidgin inside the header language menu switch the entire website — menus, Home, About, Products, Affiliate Programme, Services, Resources articles, Contact page, Footer, and full Vanessa FAQ — into clear, natural Nigerian Pidgin.',
      'Remember say the downloadable PDF guides on Selar still dey published in English, so buyers fit read exact language info before payment.',
    ],
    extraKeywords: ['nigerian pidgin', 'pidgin support', 'pidgin translation', 'pcm'],
  },
  'lang-07': {
    question: 'BHD downloadable Selar products don translate to French, Igbo, Yorùbá, Hausa, or Nigerian Pidgin?',
    answer: [
      'Not yet. Even though dis entire website and Vanessa FAQ dey work across all six active languages, the downloadable digital guides sold on Selar (Clicks-to-Cash, Global Monetisation, and Remote Jobs for Under 18) still dey in English.',
      'BHD no dey claim say translated ebook edition exist unless e don actually release.',
    ],
    extraKeywords: ['selar ebook language', 'translated pdf'],
  },
  'lang-08': {
    question: 'How visitor fit check the original language of any BHD product before buying?',
    answer: [
      'Every product card on BHD Products page display clear "Product Content Language" line (English), and the live Selar listing also confirm format and language before payment.',
    ],
    extraKeywords: ['product language note', 'before purchase'],
    actionLabel: 'Check Product Catalogue',
  },

  // H. Purchases, Payments and Customer Support (8)
  'pay-01': {
    question: 'Where I fit buy verified BYHENRYDIGITALS digital products?',
    answer: [
      'All official BYHENRYDIGITALS digital products dey sell only through our verified Selar store: https://selar.com/m/BYHENRYDIGITALS.',
    ],
    extraKeywords: ['where to buy', 'official store', 'selar link'],
    actionLabel: 'Open Official Selar Store',
  },
  'pay-02': {
    question: 'How Selar checkout dey work for BHD products?',
    answer: [
      'Once you open any BHD product on Selar, Selar show current verified price for supported currency, full description, and process payment safely with Selar payment options.',
    ],
    extraKeywords: ['selar checkout', 'payment'],
    actionLabel: 'Open Selar Storefront',
  },
  'pay-03': {
    question: 'How customer go receive product after paying on Selar?',
    answer: [
      'Immediately payment confirm on Selar, Selar open download access for your files and send receipt/download instructions go the email you put during checkout.',
    ],
    extraKeywords: ['download access', 'receipt email'],
  },
  'pay-04': {
    question: 'Wetin customer suppose do if payment or download get issue?',
    answer: [
      'Keep your checkout email and transaction reference ready, then message BYHENRYDIGITALS straight through email (byhenrydigitals@gmail.com) or WhatsApp (+234 708 208 8942).',
    ],
    extraKeywords: ['payment problem', 'download issue', 'order help'],
    actionLabel: 'Contact Support',
  },
  'pay-05': {
    question: 'BHD list custom refund policy or payout timelines for dis website?',
    answer: [
      'No custom refund rules or made-up payout promises dey listed here. All checkout, payment processing, and terms follow Selar platform rules and each official product page.',
    ],
    extraKeywords: ['refund policy', 'selar terms'],
  },
  'pay-06': {
    question: 'How person fit ask question about product before buying?',
    answer: [
      'Search inside Vanessa FAQ, read the Products page summary, or ask BHD directly via Email (byhenrydigitals@gmail.com), WhatsApp (+234 708 208 8942), or Contact page form.',
    ],
    extraKeywords: ['ask question', 'product enquiry'],
    actionLabel: 'Ask Product Question',
  },
  'pay-07': {
    question: 'How person fit contact BYHENRYDIGITALS directly?',
    answer: [
      'Use any of three official channels: (1) Email: byhenrydigitals@gmail.com, (2) WhatsApp: +234 708 208 8942 (https://wa.me/2347082088942), and (3) our Contact page enquiry form.',
    ],
    extraKeywords: ['contact bhd', 'official email', 'whatsapp number'],
    actionLabel: 'Open Contact Page',
  },
  'pay-08': {
    question: 'Where I fit see official updates and news from BHD?',
    answer: [
      'Follow updates on dis official website, BHD Selar store, plus verified BYHENRYDIGITALS accounts on Instagram, TikTok, X (Twitter), and Facebook.',
    ],
    extraKeywords: ['official updates', 'news', 'announcements'],
  },

  // I. Website Navigation and Social Media (8)
  'nav-01': {
    question: 'How I fit navigate around the BYHENRYDIGITALS website?',
    answer: [
      'Top header (and mobile menu) connect cleanly to every page: Home, About Us, Products, Affiliate Programme, Services, Resources, and Contact — plus the Language switcher and floating "BHD FAQ" bubble for bottom-right.',
      'The footer below every page also show all page links, official email, WhatsApp, Selar store link, and social icons.',
    ],
    extraKeywords: ['navigation', 'header', 'footer', 'menu'],
  },
  'nav-02': {
    question: 'Where I go see digital products and educational articles on dis site?',
    answer: [
      'Click "Products" (/products) to inspect BHD guides on Selar, and click "Resources" (/resources) to read and filter articles across seven topics.',
    ],
    extraKeywords: ['find products', 'find articles'],
    actionLabel: 'Go Products Page',
  },
  'nav-03': {
    question: 'Where I go see BHD services and book consultation?',
    answer: [
      'Click "Services" (/services) or "Explore Solutions" inside the header to read all five services and open Contact page with your topic ready.',
    ],
    extraKeywords: ['find services', 'book consultation'],
    actionLabel: 'Go Services Page',
  },
  'nav-04': {
    question: 'How I fit change website language?',
    answer: [
      'Click the Language button near top-right inside the header and choose English, Igbo, Yorùbá, Hausa, French, or Nigerian Pidgin. All page text — including Vanessa FAQ — switch immediately without reload and your browser go remember am.',
    ],
    extraKeywords: ['change language', 'language selector', 'switch pidgin'],
  },
  'nav-05': {
    question: 'Where Vanessa — Detailed BHD FAQ dey on dis website?',
    answer: [
      'Tap the floating "BHD FAQ" bubble at bottom-right corner on any page (mobile or desktop) — or click "Open Vanessa FAQ" inside footer or Home page spotlight.',
    ],
    extraKeywords: ['find vanessa', 'bhd faq button'],
  },
  'nav-06': {
    question: 'How I fit reach Contact page and use Email or WhatsApp buttons?',
    answer: [
      'Click "Contact" (/contact) to fill the enquiry form, or click any "Email Us" (mailto:byhenrydigitals@gmail.com) or "Chat With Us on WhatsApp" (https://wa.me/2347082088942) button inside Contact, Footer, or Vanessa FAQ.',
    ],
    extraKeywords: ['contact form', 'email button', 'whatsapp button'],
    actionLabel: 'Open Contact Page',
  },
  'nav-07': {
    question: 'How I fit follow BYHENRYDIGITALS on official social media?',
    answer: [
      'Connect with BHD on verified social pages inside "Make We Connect!" or footer icons: Instagram (https://www.instagram.com/byhenrydigitals/), TikTok (https://www.tiktok.com/@byhenrydigitals), X / Twitter (https://x.com/BYHENRYDIGITALS), and Facebook (https://www.facebook.com/share/1A8GpCyCt3/).',
    ],
    extraKeywords: ['social media', 'instagram', 'tiktok', 'facebook', 'twitter'],
  },
  'nav-08': {
    question: 'BYHENRYDIGITALS still dey use Tally forms anywhere on dis site?',
    answer: [
      'No. All Tally forms and links don comot completely from BYHENRYDIGITALS website. Enquiries, projects, and affiliate onboarding go directly through Contact page, official email (byhenrydigitals@gmail.com), and WhatsApp (+234 708 208 8942).',
    ],
    extraKeywords: ['tally removed', 'no tally'],
    actionLabel: 'Go Official Contact Channels',
  },

  // J. Vanessa Detailed FAQ (7)
  'van-01': {
    question: 'Wetin be Vanessa — Detailed BHD FAQ?',
    answer: [
      'Vanessa — Detailed BHD FAQ ("Your Searchable Guide to Everything BYHENRYDIGITALS.") na BHD organised searchable FAQ and info centre covering 10 clear categories and over 100 verified answers on products, 35% affiliate programme, services, languages, payments, and support.',
    ],
    extraKeywords: ['vanessa faq', 'searchable guide'],
  },
  'van-02': {
    question: 'Vanessa na AI chatbot or conversational AI assistant?',
    answer: [
      'No. Vanessa NO be AI chatbot or AI conversational assistant. BYHENRYDIGITALS no dey run AI chatbot on dis website right now.',
      'All old Botpress chatbot code don comot completely so Vanessa dey work strictly as verified, searchable FAQ library.',
    ],
    extraKeywords: ['not ai', 'no botpress', 'not chatbot'],
  },
  'van-03': {
    question: 'How Vanessa FAQ search bar dey work?',
    answer: [
      'Vanessa search index every published record across question titles, full answers, category headings, and search keywords. E support partial-word search plus small spelling mistake tolerance.',
    ],
    extraKeywords: ['how search work', 'typo search'],
  },
  'van-04': {
    question: 'How visitors fit search answers and filter categories inside Vanessa?',
    answer: [
      'Open the floating BHD FAQ bubble, type word or question inside the search box, tap any popular search pill below, or pick any of the 10 categories. Click any question to open full answer and related questions.',
    ],
    extraKeywords: ['filter categories', 'popular searches'],
  },
  'van-05': {
    question: 'Wetin happen if search no find answer wey match?',
    answer: [
      'Vanessa go show clear notice with button to reset search filters — plus steady "You No Find Your Answer?" section below with Email Us (byhenrydigitals@gmail.com) and WhatsApp (https://wa.me/2347082088942) buttons.',
    ],
    extraKeywords: ['no results', 'escalation'],
    actionLabel: 'Open Contact Page',
  },
  'van-06': {
    question: 'Vanessa FAQ dey change when I switch website language?',
    answer: [
      'Yes. Vanessa dey linked directly to BHD website-wide multilingual setup. Switching between English, Igbo, Yorùbá, Hausa, French, and Nigerian Pidgin update search labels, categories, questions, answers, and empty states immediately.',
    ],
    extraKeywords: ['multilingual faq', 'pidgin faq'],
  },
  'van-07': {
    question: 'How BHD dey arrange and verify Vanessa FAQ records?',
    answer: [
      'Every FAQ entry live inside one central repository with ID, category, keywords, related questions, language tag, and verification status (`published`, `draft`, or `needs_review`). Only verified, published records dey show for visitors.',
    ],
    extraKeywords: ['verified answers', 'maintenance'],
  },
};

export const faqPcm: FaqBundle = {
  language: 'pcm',
  bubbleLabel: 'BHD FAQ',
  closeAriaLabel: 'Close Vanessa FAQ panel',
  kicker: 'Searchable BHD Information Centre',
  heading: 'VANESSA — DETAILED BHD FAQ',
  subheading: 'Your Searchable Guide to Everything BYHENRYDIGITALS.',
  nonAiNotice:
    'Organised FAQ knowledge library — verified BHD info (e no be AI chatbot or automated assistant).',
  searchPlaceholder: 'Search anything about BYHENRYDIGITALS...',
  searchAriaLabel: 'Search anything about BYHENRYDIGITALS',
  clearSearchLabel: 'Clear Search',
  allCategoriesLabel: 'All Categories',
  categoriesHeading: 'FAQ Categories (A–J)',
  exampleQueriesTitle: 'Popular searches:',
  exampleQueries: [
    'Wetin be BYHENRYDIGITALS?',
    'Clicks-to-Cash',
    '35% commission',
    'How I fit become affiliate?',
    'Website development',
    'Digital entrepreneurship',
    'Responsible use of AI',
    'Nigerian Pidgin support',
    'How to buy on Selar?',
    'Vanessa na AI chatbot?',
  ],
  resultsMatchingLabel: 'matching answers',
  allTopicsCountLabel: 'published FAQ records',
  verifiedStatusLabel: 'Verified',
  relatedQuestionsLabel: 'Related Questions',
  noResultsTitle: 'No matching answer found for your search',
  noResultsBody:
    'We no find exact match inside our published Vanessa FAQ answers. Try shorter keyword, reset category filter, or reach BYHENRYDIGITALS directly through Email or WhatsApp below.',
  resetFiltersLabel: 'Show All FAQ Records',
  escalationTitle: 'You No Find Your Answer?',
  escalationBody:
    'Message BYHENRYDIGITALS directly through official email or WhatsApp, or fill detailed enquiry inside our Contact page.',
  emailButtonLabel: 'Email Us',
  whatsappButtonLabel: 'WhatsApp',
  contactPageButtonLabel: 'Open Contact Form',
  expandAllLabel: 'Expand Shown',
  collapseAllLabel: 'Collapse All',
  categories: {
    'about-bhd': {
      title: 'A. About BYHENRYDIGITALS',
      description: 'Brand identity, Coach Henry leadership, mission, vision, and taglines.',
    },
    'products-resources': {
      title: 'B. Products & Digital Learning Resources',
      description: 'Verified Selar guides, who dem made for, format, and learning focus.',
    },
    'affiliate-programme': {
      title: 'C. BHD Affiliate Programme',
      description: '35% commission, ₦0 fee, no MLM, and optional ₦8,000 Starter Kit.',
    },
    'web-services': {
      title: 'D. Digital Services & Website Development',
      description: 'Websites, landing pages, storefronts, integrations, and scoping.',
    },
    'entrepreneurship-monetisation': {
      title: 'E. Digital Entrepreneurship & Monetisation',
      description: 'Beginner concepts, sales funnels, and realistic expectations.',
    },
    'ai-technology': {
      title: 'F. AI & Digital Technology',
      description: 'Content workflows, no-code tools, responsible AI, and human checking.',
    },
    'languages-learning': {
      title: 'G. Languages & Learning Resources',
      description: 'English, Igbo, Yorùbá, Hausa, French, Nigerian Pidgin & edition clarity.',
    },
    'payments-purchases': {
      title: 'H. Purchases, Payments & Customer Support',
      description: 'Selar checkout, digital download, questions, and official BHD contact.',
    },
    'navigation-social': {
      title: 'I. Website Navigation & Social Media',
      description: 'Website sections, language switcher, and official social handles.',
    },
    'vanessa-faq': {
      title: 'J. Vanessa Detailed FAQ',
      description: 'How dis searchable information centre work and answer verification.',
    },
  },
  entries: composeFaqEntries('pcm', recordsPcm),
};
