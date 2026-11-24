import { composeFaqEntries } from './recordsMeta';
import { FaqBundle, FaqLocalizedRecord } from './types';

const recordsPcm: Record<string, FaqLocalizedRecord> = {
  // A. About BYHENRYDIGITALS (11)
  'about-01': {
    question: 'Wetin be BYHENRYDIGITALS?',
    answer: [
      'BYHENRYDIGITALS (BHD) na digital education and digital solutions brand wey Henry (Coach Henry) start. E dey help people and businesses find real digital opportunities, learn useful skills, buy verified digital guides for Selar, and build websites plus online systems wey dey work.',
      'Across both learning materials and client services, BHD focus on practical digital learning, digital business, online earning, and tech-based solutions for businesses.',
    ],
    extraKeywords: ['overview', 'about bhd', 'wetin be bhd', 'digital solutions', 'digital education'],
    actionLabel: 'Read About BYHENRYDIGITALS',
  },
  'about-02': {
    question: 'Wetin BHD mean?',
    answer: [
      'BHD na the official short name for BYHENRYDIGITALS.',
      'You go see "BHD" near "BYHENRYDIGITALS" across website menus, product listings, the BHD Affiliate Programme, and Vanessa — Detailed BHD FAQ.',
    ],
    extraKeywords: ['bhd meaning', 'short name', 'wetin bhd mean'],
  },
  'about-03': {
    question: 'Who start BYHENRYDIGITALS?',
    answer: [
      'Na Henry, wey plenty people sabi as Coach Henry, start BYHENRYDIGITALS.',
      'Im start BHD to make practical digital education, solid websites, and honest online earning ways easy for everyday learners and growing businesses to understand.',
    ],
    extraKeywords: ['founder', 'coach henry', 'who own bhd', 'leadership'],
    actionLabel: 'Meet the Founder for About Page',
  },
  'about-04': {
    question: 'Why BYHENRYDIGITALS exist?',
    answer: [
      'BHD main purpose na to make practical digital skills and reliable website solutions easy for everybody to enter — through clear teaching, clean digital commerce, and straight talk.',
      'Instead of long grammar wey no get head or tail, BHD dey help visitors sabi how online value dey work — whether na to learn from digital guides, join the one-level affiliate programme, or build functional website for business.',
    ],
    extraKeywords: ['mission', 'purpose', 'why bhd exist', 'goal'],
    actionLabel: 'Read Mission & Purpose',
  },
  'about-05': {
    question: 'Which problem BYHENRYDIGITALS dey solve?',
    answer: [
      'Plenty people wey wan learn or earn online dey jam over-hyped promises, hidden fees, pyramid schemes, or fine websites wey look busy but no dey actually work.',
      'BYHENRYDIGITALS solve dat gap with hype-free digital guides, direct 35% affiliate programme without MLM or force-buy, and websites built for clarity and real business use.',
    ],
    extraKeywords: ['problem solved', 'no hype', 'transparency', 'fake promises'],
  },
  'about-06': {
    question: 'Wetin be BYHENRYDIGITALS vision?',
    answer: [
      'BHD vision na to grow one trusted international digital community wey dey connect learners, creators, and businesses across languages and countries.',
      'Dis global direction don already show across the six active languages on dis website: English, Igbo, Yorùbá, Hausa, French, and Nigerian Pidgin — plus focus on cross-border digital value.',
    ],
    extraKeywords: ['vision', 'global ecosystem', 'international reach'],
  },
  'about-07': {
    question: 'Wetin "Digital Solutions. Global Impact." mean?',
    answer: [
      '"Digital Solutions. Global Impact." na BYHENRYDIGITALS main slogan. E show say BHD focus on building useful digital tools, guides, and web setups wey go help people and brands do well anywhere inside the world digital economy, no matter where dem dey.',
    ],
    extraKeywords: ['main slogan', 'tagline', 'global impact'],
  },
  'about-08': {
    question: 'Wetin "We Build Digital Value That Sells." mean?',
    answer: [
      '"We Build Digital Value That Sells." na BYHENRYDIGITALS second slogan. E remind people say digital products, landing pages, and websites no suppose just fine for eye — dem suppose solve real problems cleanly so customers go see the value by themselves.',
    ],
    extraKeywords: ['secondary tagline', 'digital value', 'real utility'],
  },
  'about-09': {
    question: 'Who fit gain from BYHENRYDIGITALS?',
    answer: [
      'Beginners wey wan sabi digital skills and online work, young learners plus parents wey dey find safe youth pathways, writers and content creators wey wan do honest affiliate work, and business owners wey need websites wey dey perform.',
    ],
    extraKeywords: ['who fit benefit', 'beginners', 'business owners', 'creators', 'students'],
  },
  'about-10': {
    question: 'BHD na digital learning site or digital services business?',
    answer: [
      'BYHENRYDIGITALS join both work together cleanly under one name: (1) digital education and practical guides inside our Selar store plus our website Guides Hub, and (2) client digital services like website building, landing pages, brand presence, no-code workflows, and business support.',
    ],
    extraKeywords: ['education and services', 'business model'],
  },
  'about-11': {
    question: 'Where I fit see official BYHENRYDIGITALS website info and organisation details?',
    answer: [
      'You don already enter the official BYHENRYDIGITALS (BHD) website. Check About BHD page for mission and how we work, check Products and Services pages for wetin we offer, or search Vanessa Detailed FAQ for any topic.',
    ],
    extraKeywords: ['official website', 'pages', 'company info'],
    actionLabel: 'Open About BHD Page',
  },

  // B. Products and Digital Learning Resources (15)
  'prod-01': {
    question: 'Which verified digital products BYHENRYDIGITALS get right now?',
    answer: [
      'BYHENRYDIGITALS get three verified digital products inside our official Selar store (https://selar.com/m/BYHENRYDIGITALS): (1) Clicks-to-Cash, (2) Global Monetisation, and (3) Remote Jobs for Under 18.',
      'All live prices, full book details, and instant download checkout dey straight inside Selar.',
    ],
    extraKeywords: ['products list', 'selar products', 'digital guides'],
    actionLabel: 'See All Products',
  },
  'prod-02': {
    question: 'Wetin be Clicks-to-Cash and who dem write am for?',
    answer: [
      'Clicks-to-Cash na featured BHD digital guide for Selar wey show beginners how online attention fit turn to clean digital sales — e explain how creators, affiliates, and buyers dey connect without empty hype.',
      'Dem write am for beginners, upcoming digital marketers, and new BHD affiliates wey wan get strong base before dem start to promote products. Live price and checkout dey straight for Selar.',
    ],
    extraKeywords: ['clicks to cash', 'clicks-to-cash', 'beginners guide'],
    actionLabel: 'Check Clicks-to-Cash',
  },
  'prod-03': {
    question: 'Which problem Clicks-to-Cash dey solve and wetin you go gain?',
    answer: [
      'Plenty beginners dey drop links anyhow instead make dem learn how honest recommendations dey build buyer trust. Clicks-to-Cash explain clear product positioning, honest promotion vs link spam, and daily marketing habits.',
      'Exact buying terms and current price dey show straight for BHD Selar store.',
    ],
    extraKeywords: ['clicks to cash outcomes', 'affiliate fundamentals'],
    actionLabel: 'BHD Store',
  },
  'prod-04': {
    question: 'Wetin be Global Monetisation and who e good for?',
    answer: [
      'Global Monetisation na BHD digital guide for Selar wey focus on packaging wetin you sabi, your skill, or your guide turn digital offer wey buyers outside your country and across different currencies fit pay for.',
      'E good for creators, teachers, and skilled people wey wan sell their offers to buyers abroad cleanly.',
    ],
    extraKeywords: ['global monetisation', 'global monetization', 'cross-border sales'],
    actionLabel: 'Check Global Monetisation',
  },
  'prod-05': {
    question: 'Which problem Global Monetisation dey solve and wetin e teach?',
    answer: [
      'Skilled people often limit themselves to only local buyers even when online platforms support international customers. Global Monetisation teach how to arrange digital teaching formats, open multi-currency stores, and reach steady buyers.',
      'Check the official Selar store to see live price and full details.',
    ],
    extraKeywords: ['packaging skills', 'multi-currency', 'international buyers'],
    actionLabel: 'BHD Store',
  },
  'prod-06': {
    question: 'Wetin be Remote Jobs for Under 18 and who suppose read am?',
    answer: [
      'Remote Jobs for Under 18 na educational BHD guide for Selar wey look into real, age-safe digital skills, online safety, and smart skill-building before adulthood.',
      'Dem write am for students and young people under 18 together with parents or guardians wey dey find safe, guided digital learning.',
    ],
    extraKeywords: ['remote jobs under 18', 'teenagers', 'students', 'parents'],
    actionLabel: 'Check Remote Jobs for Under 18',
  },
  'prod-07': {
    question: 'Which safety rules and skills Remote Jobs for Under 18 dey cover?',
    answer: [
      'The guide handle wahala wey teenagers dey jam online — like platform age rules, payment limits, and fake promises — by focusing on age-safe skills, guardian guidance, obeying platform rules, and building early practice samples.',
      'E no dey promise automatic job placement — check the official Selar listing for live checkout details.',
    ],
    extraKeywords: ['under 18 safety', 'guardian supervision', 'youth digital skills'],
    actionLabel: 'BHD Store',
  },
  'prod-08': {
    question: 'Which format and language BHD Selar books dey?',
    answer: [
      'All three featured BHD guides for Selar (Clicks-to-Cash, Global Monetisation, and Remote Jobs for Under 18) na downloadable digital guides wey dem write for English.',
      'The exact file format (like PDF/ebook download) and copy details dey show clearly for each Selar product page before you pay.',
    ],
    extraKeywords: ['format', 'pdf', 'english language', 'downloadable'],
  },
  'prod-09': {
    question: 'How I fit find and buy verified BHD digital product?',
    answer: [
      'Go straight to BHD official Selar store at https://selar.com/m/BYHENRYDIGITALS, or open our website Products page and press "Check & Buy for Selar" for the guide you wan buy.',
      'Selar dey show live price for supported currencies and open your download sharp-sharp after payment.',
    ],
    extraKeywords: ['how to buy', 'purchase', 'selar price'],
    actionLabel: 'BHD Store',
  },
  'prod-10': {
    question: 'BHD dey give certificate, live classes, or sure job with the guides?',
    answer: [
      'No. BHD Selar products na self-paced downloadable digital guides — dem no be degree school programmes, live classes, or automatic job agencies.',
      'Any age rule or parent guidance (especially for learners under 18) dey stated openly on top the product listing.',
    ],
    extraKeywords: ['certificates', 'live coaching', 'job guarantee'],
  },
  'prod-11': {
    question: 'How BHD materials dey help people sabi digital business and digital sales?',
    answer: [
      'Both BHD Selar guides and our website Guides & Blog articles explain how solving real problems, clear audience focus, neat digital packaging, and honest buyer flow dey bring steady online sales.',
    ],
    extraKeywords: ['digital entrepreneurship', 'digital sales', 'articles'],
    actionLabel: 'Open Guides & Blog',
  },
  'prod-12': {
    question: 'Wetin BHD guides dey talk about affiliate marketing and online earning?',
    answer: [
      'BHD learning materials stand strong on honest affiliate marketing — tell people clearly who one guide fit help, which problem e solve, and keep expectations real instead of fake overnight money talk.',
    ],
    extraKeywords: ['honest affiliate marketing', 'online earning'],
    actionLabel: 'Read Guides & Articles',
  },
  'prod-13': {
    question: 'Wetin BHD guides cover about remote work and online chances?',
    answer: [
      'BHD show solid starter digital skills — like clear writing, website basics, no-code workflows, and sample portfolios — alongside youth guidance inside Remote Jobs for Under 18.',
    ],
    extraKeywords: ['remote work', 'online work', 'digital skills'],
    actionLabel: 'Check Remote Work Guides',
  },
  'prod-14': {
    question: 'BHD guides dey explain how to create digital products and collect different currencies?',
    answer: [
      'Yes. Global Monetisation face how to package knowledge into digital offers for international buyers, and BHD itself dey use Selar multi-currency checkout system.',
    ],
    extraKeywords: ['create digital products', 'multi-currency payments'],
  },
  'prod-15': {
    question: 'BHD get guides about using AI help create content?',
    answer: [
      'Yes. BHD AI & Tech articles discuss how modern AI tools fit speed up topic ideas, outlines, and first drafts — as long as human person still check every fact and refine the work.',
    ],
    extraKeywords: ['ai content creation', 'ai guides'],
    actionLabel: 'Read AI & Tech Guides',
  },

  // C. BHD Affiliate Programme (17)
  'aff-01': {
    question: 'Wetin be the BHD Affiliate Programme?',
    answer: [
      'The BHD Affiliate Programme na BYHENRYDIGITALS straight one-level referral system. Approved partners dey recommend eligible BHD digital products for Selar and earn 35% commission on top every verified sale.',
    ],
    extraKeywords: ['affiliate programme', 'partner', '35 percent'],
    actionLabel: 'See Affiliate Programme',
  },
  'aff-02': {
    question: 'Who fit join BYHENRYDIGITALS as affiliate?',
    answer: [
      'Any digital teacher, writer, content creator, learner, or person wey wan recommend beta digital products honestly without keeping physical stock fit apply.',
      'Beginners wey ready to learn ethical marketing instead of dropping spam links anyhow dey welcome; BHD people dey check every request one by one.',
    ],
    extraKeywords: ['who fit apply', 'affiliate eligibility'],
    actionLabel: 'See Who Fit Apply',
  },
  'aff-03': {
    question: 'How the BHD Affiliate Programme dey work step by step?',
    answer: [
      'Step 1: Message BYHENRYDIGITALS straight through our Contact page, email (byhenrydigitals@gmail.com), or WhatsApp (+234 708 208 8942) to apply for onboarding.',
      'Step 2: Once dem check and approve you, study the eligible Selar products you wan share (you fit pick the optional ₦8,000 Affiliate Starter Kit if you want guided training).',
      'Step 3: Recommend eligible products with your Selar affiliate link and earn 35% commission on top every verified sale.',
    ],
    extraKeywords: ['how affiliate work', 'step by step', 'onboarding'],
    actionLabel: 'See Programme Steps',
  },
  'aff-04': {
    question: 'How BHD affiliates dey earn commission?',
    answer: [
      'Affiliates dey earn commission only when customer buy eligible BHD digital product for Selar through that affiliate tracked referral link.',
      'No payment dey for link clicks alone, free signups, or bringing new affiliates.',
    ],
    extraKeywords: ['how affiliates earn', 'selar tracking'],
  },
  'aff-05': {
    question: 'How much percentage BHD dey pay affiliates?',
    answer: [
      'Approved BHD affiliates dey earn 35% commission on top eligible successful Selar sales.',
      'No hidden extra tier percentage exist outside dis verified 35% direct rate.',
    ],
    extraKeywords: ['35%', 'commission rate', 'percentage'],
    actionLabel: 'See Verified Facts',
  },
  'aff-06': {
    question: 'Which sales dey count for BHD affiliate commission?',
    answer: [
      'Completed, eligible digital product sales wey pass through Selar via approved affiliate tracked link dey carry the 35% commission.',
      'Cancelled, half-way, or ineligible orders no dey bring commission.',
    ],
    extraKeywords: ['qualifying sales', 'eligible sales'],
  },
  'aff-07': {
    question: 'Person go pay registration fee before e join BHD Affiliate Programme?',
    answer: [
      'No. Registration na completely free (₦0 to apply) for the BHD Affiliate Programme.',
    ],
    extraKeywords: ['free signup', '₦0', 'registration fee'],
  },
  'aff-08': {
    question: 'E compulsory make person buy product first before e join BHD Affiliate Programme?',
    answer: [
      'No. No be by force to buy any product before you apply or take part inside the BHD Affiliate Programme.',
    ],
    extraKeywords: ['mandatory purchase', 'no compulsory buy', 'force-buy'],
  },
  'aff-09': {
    question: 'BHD Affiliate Programme na MLM (multi-level marketing)?',
    answer: [
      'No. BHD no dey run MLM, network marketing chain, or pyramid scheme at all. E na straight, transparent one-level affiliate programme.',
    ],
    extraKeywords: ['no mlm', 'network marketing', 'pyramid'],
  },
  'aff-10': {
    question: 'Any downline or bring-person bonus dey inside?',
    answer: [
      'No. BHD affiliates no dey build downline and nobody dey collect bonus for recruiting another affiliate. Commission dey come strictly from eligible product sales for Selar.',
    ],
    extraKeywords: ['no downline', 'recruit commission'],
  },
  'aff-11': {
    question: 'Wetin be the ₦8,000 Affiliate Starter Kit?',
    answer: [
      'The ₦8,000 Affiliate Starter Kit na optional guided onboarding pack from BYHENRYDIGITALS for partners wey wan structured step-by-step guidance as dem start.',
    ],
    extraKeywords: ['starter kit', '8000', '₦8,000'],
  },
  'aff-12': {
    question: 'Person must buy the Affiliate Starter Kit before dem accept am or pay commission?',
    answer: [
      'No. Buying the ₦8,000 Affiliate Starter Kit no be by force at all — you no need am to apply, get approved, or earn 35% commission on top eligible Selar sales.',
    ],
    extraKeywords: ['starter kit optional', 'compulsory'],
  },
  'aff-13': {
    question: 'How affiliates suppose promote BYHENRYDIGITALS digital products?',
    answer: [
      'Affiliates suppose explain clearly wetin each guide teach and who e fit help, sharing helpful gist instead of dropping spam links anyhow.',
      'Fake claims, get-rich-quick promises, guaranteed income talk, or claiming say you be official BHD staff — we no allow am at all.',
    ],
    extraKeywords: ['promotion rules', 'no spam', 'ethical marketing'],
  },
  'aff-14': {
    question: 'Where affiliates fit get verified product details to promote?',
    answer: [
      'Verified product names, target audience summaries, and links dey on top the Products page of dis website and straight for https://selar.com/m/BYHENRYDIGITALS. Approved partners fit also message BHD straight if dem need clarification.',
    ],
    extraKeywords: ['marketing info', 'product descriptions'],
    actionLabel: 'Check Product Catalogue',
  },
  'aff-15': {
    question: 'Wetin dey happen when customer buy through my Selar affiliate link?',
    answer: [
      'Once buyer follow your Selar affiliate link finish eligible payment for Selar, Selar go record the referral straight inside your affiliate account so your 35% commission go count for dat sale.',
    ],
    extraKeywords: ['affiliate link tracking', 'attribution'],
  },
  'aff-16': {
    question: 'How BHD dey check affiliate applications and sales?',
    answer: [
      'Na BYHENRYDIGITALS people dey check every onboarding request one by one (no instant auto-approval), and Selar commerce system dey record and confirm eligible sales.',
    ],
    extraKeywords: ['onboarding review', 'sales verification'],
  },
  'aff-17': {
    question: 'How affiliates fit contact BYHENRYDIGITALS for onboarding or support?',
    answer: [
      'Tally forms don comot from the BHD website. To apply for affiliate onboarding or ask support question, use our Contact page, email byhenrydigitals@gmail.com, or WhatsApp +234 708 208 8942.',
    ],
    extraKeywords: ['affiliate support', 'apply contact', 'no tally'],
    actionLabel: 'Contact BHD for Onboarding',
  },

  // D. Digital Services and Website Development (12)
  'srv-01': {
    question: 'Which digital services BYHENRYDIGITALS dey offer?',
    answer: [
      'BHD get five focused service areas: (1) Website Design & Development, (2) Landing Pages, (3) Digital Presence Development, (4) No-Code & AI-Assisted Digital Solutions, and (5) Digital Business Support.',
      'Every project focus on clear layout, fast phone view, and real business use instead of fine template wey no dey work.',
    ],
    extraKeywords: ['digital services', 'web design', 'what services bhd offer'],
    actionLabel: 'See Digital Services',
  },
  'srv-02': {
    question: 'BHD dey build business and personal websites?',
    answer: [
      'Yes. BHD dey design and build responsive business and personal websites with clean menus, strong brand identity, search-ready setup, and clear enquiry or store routes across phone, tablet, and laptop.',
    ],
    extraKeywords: ['build website', 'business website', 'personal website'],
    actionLabel: 'See Website Service',
  },
  'srv-03': {
    question: 'Wetin be BHD Landing Pages and when business need am?',
    answer: [
      'BHD Landing Page na single focused page wey dey explain one product, service, or campaign sharply and lead visitors straight go one clear action without distraction.',
    ],
    extraKeywords: ['landing page', 'campaign page'],
    actionLabel: 'See Landing Page Service',
  },
  'srv-04': {
    question: 'BHD fit help set up or connect digital product stores?',
    answer: [
      'Yes. Under Digital Presence Development and Digital Business Support, BHD dey help creators and brands connect their digital stores (like Selar listings) cleanly with smooth payment links.',
    ],
    extraKeywords: ['storefront setup', 'connect selar'],
  },
  'srv-05': {
    question: 'How BHD dey plan website structure and user flow?',
    answer: [
      'Before design polish, BHD arrange page order, clean menus, action buttons, and clear words so anybody wey enter your site go sabi wetin you offer inside seconds.',
    ],
    extraKeywords: ['website planning', 'user flow', 'structure'],
  },
  'srv-06': {
    question: 'BHD dey test mobile view and check everything before launch?',
    answer: [
      'Yes. Real web work mean testing across laptop, tablet, and mobile phone screens, checking forms and outside links, writing clean HTML, and confirming smooth launch.',
    ],
    extraKeywords: ['mobile testing', 'publishing', 'qa'],
  },
  'srv-07': {
    question: 'Which website tools and integrations BHD fit connect for clients?',
    answer: [
      'BHD dey connect validated enquiry forms, webhook alerts, external store links (like Selar), direct WhatsApp and email buttons, plus clean no-code bridges wey fit client work.',
    ],
    extraKeywords: ['integrations', 'forms', 'webhooks', 'whatsapp link'],
  },
  'srv-08': {
    question: 'BHD dey connect chatbots for clients, and BHD get im own AI chatbot?',
    answer: [
      'BHD fit build or connect chatbot tools for client websites when business ask for am specially.',
      'However, BYHENRYDIGITALS itself NO dey run any AI chatbot for dis website right now — Vanessa here na strictly searchable, structured FAQ info centre.',
    ],
    extraKeywords: ['client chatbot', 'vanessa not chatbot'],
  },
  'srv-09': {
    question: 'How Digital Presence Development dey make online brand strong?',
    answer: [
      'Digital Presence Development arrange your main website, digital storefront, messaging, and social links into one solid, matching look so visitors anywhere for world go trust your brand sharp-sharp.',
    ],
    extraKeywords: ['digital presence', 'brand credibility'],
  },
  'srv-10': {
    question: 'Wetin BHD Digital Business Support cover?',
    answer: [
      'Digital Business Support give founders practical tech and strategy help when dem dey launch digital products, structure online services, fix storefront wahala, or arrange updates cleanly without hard grammar.',
    ],
    extraKeywords: ['business support', 'troubleshooting', 'maintenance'],
  },
  'srv-11': {
    question: 'How much BHD website and digital services dey cost?',
    answer: [
      'BHD dey price each project one by one during consultation based on wetin you need, features, and size of work. No fixed general price dey listed on dis website.',
    ],
    extraKeywords: ['service price', 'website cost', 'quote'],
    actionLabel: 'Book Consultation',
  },
  'srv-12': {
    question: 'Wetin client suppose share for project enquiry, and how timeline dey work?',
    answer: [
      'Share your business or personal goal, pages or integrations you need, current website or storefront links, and preferred timing via Contact page, email (byhenrydigitals@gmail.com), or WhatsApp (+234 708 208 8942). Delivery timeline dey agreed per project scope.',
    ],
    extraKeywords: ['project enquiry', 'timeline', 'consultation'],
    actionLabel: 'Yarn About Your Project',
  },

  // E. Digital Entrepreneurship and Online Monetisation (11)
  'ent-01': {
    question: 'Wetin be digital entrepreneurship?',
    answer: [
      'Digital entrepreneurship na to build and run real business wey deliver value mostly online — like digital guides, web services, consulting, or online media — using internet distribution and digital tools.',
    ],
    extraKeywords: ['digital entrepreneurship', 'online business'],
  },
  'ent-02': {
    question: 'Wetin be affiliate marketing?',
    answer: [
      'Affiliate marketing na setup where partner recommend another creator or brand product with tracked link and earn agreed commission whenever customer finish eligible purchase through dat link.',
      'Honest affiliate marketing depend on true product explanation and clear disclosure instead of fake hype.',
    ],
    extraKeywords: ['affiliate marketing meaning', 'commission'],
  },
  'ent-03': {
    question: 'Wetin be digital product creation?',
    answer: [
      'Digital product creation mean turning clear knowledge, templates, or step-by-step lessons into downloadable resources (like ebooks or toolkits) wey people fit buy and collect online without physical delivery.',
    ],
    extraKeywords: ['digital product creation', 'ebooks', 'guides'],
  },
  'ent-04': {
    question: 'Wetin online monetisation mean?',
    answer: [
      'Online monetisation mean making genuine income from your digital skills, audience, guides, or web services by solving real problems wey buyers ready to pay for.',
    ],
    extraKeywords: ['online monetisation', 'monetize skills'],
  },
  'ent-05': {
    question: 'Wetin be digital sales?',
    answer: [
      'Digital sales na completed payments for online products or services — like downloadable guides for Selar or custom client web builds — driven by clear talk, usability, and trust.',
    ],
    extraKeywords: ['digital sales', 'selling online'],
  },
  'ent-06': {
    question: 'Wetin be sales funnel?',
    answer: [
      'Sales funnel na the clear step-by-step journey wey buyer pass from first time dem hear about your brand, read helpful explanation, check your offer, reach final payment or enquiry.',
    ],
    extraKeywords: ['sales funnel', 'customer journey'],
  },
  'ent-07': {
    question: 'Wetin be landing page and how e different from full website?',
    answer: [
      'Full website introduce whole brand across different pages (Home, About, Products, Services, FAQ, Contact), while landing page na one dedicated page wey explain one offer and push visitor to take one clear action.',
    ],
    extraKeywords: ['landing page vs website'],
  },
  'ent-08': {
    question: 'Wetin be digital storefront?',
    answer: [
      'Digital storefront na online shop where creators put digital products with descriptions, prices, different currency options, and automatic file download — like BYHENRYDIGITALS official store for Selar.',
    ],
    extraKeywords: ['digital storefront', 'selar store'],
  },
  'ent-09': {
    question: 'Wetin be multi-currency monetisation?',
    answer: [
      'Multi-currency monetisation allow creators sell digital goods to buyers across different countries using platforms (like Selar) where customers fit see price and pay safely inside their local or international currency.',
    ],
    extraKeywords: ['multi-currency', 'global payments'],
  },
  'ent-10': {
    question: 'Which starter skills fit help beginner enter online work?',
    answer: [
      'Strong starter skills wey dey pay well with time include clear writing, basic digital literacy, audience research, website and landing page arrangement, ethical marketing, and smart use of productivity or AI tools.',
    ],
    extraKeywords: ['beginner skills', 'starter skills'],
  },
  'ent-11': {
    question: 'Wetin beginner suppose sabi clearly before starting online business?',
    answer: [
      'Online business need real skill practice, steady consistency, clear positioning, and customer trust. BHD always make am clear say no guaranteed overnight money or effortless profit dey inside digital entrepreneurship.',
    ],
    extraKeywords: ['realistic expectations', 'no overnight riches'],
  },

  // F. AI and Digital Technology (9)
  'ai-01': {
    question: 'How AI tools fit support digital content creation?',
    answer: [
      'Modern AI tools fit help creators brainstorm topic angles, arrange article outlines, write first drafts, and organise research faster — as long as human person still check, verify, and polish the final work.',
    ],
    extraKeywords: ['ai writing', 'content creation'],
  },
  'ai-02': {
    question: 'How creators fit use AI video tools responsibly?',
    answer: [
      'AI-assisted video tools fit speed up script drafting, captions, visual storyboards, and editing for explainer videos while the human creator stand responsible for accuracy and brand honesty.',
    ],
    extraKeywords: ['ai video', 'responsible video tools'],
  },
  'ai-03': {
    question: 'How digital productivity tools dey help online businesses?',
    answer: [
      'Tools like task trackers, shared documents, enquiry form routing, and intake workflows reduce mistakes and help small teams deliver steady work.',
    ],
    extraKeywords: ['productivity tools', 'workflow'],
  },
  'ai-04': {
    question: 'Which web tools and engineering standards BHD dey focus on?',
    answer: [
      'BHD focus on clean, responsive web technology (like React, TypeScript, Tailwind CSS, semantic HTML, and solid Node/Express APIs where backend needed) built for speed, easy access, and stability.',
    ],
    extraKeywords: ['web tools', 'react typescript'],
  },
  'ai-05': {
    question: 'Wetin be no-code and low-code digital solutions?',
    answer: [
      'No-code and low-code solutions use visual builders, form bridges, store links, and workflow automations to connect tools and send alerts quickly without writing big custom software for simple tasks.',
    ],
    extraKeywords: ['no-code', 'low-code', 'automation'],
    actionLabel: 'See No-Code Services',
  },
  'ai-06': {
    question: 'How client chatbot services different from BHD own website?',
    answer: [
      'BHD fit scope and connect third-party chatbot tools for clients wey specially request am for their own site, but BYHENRYDIGITALS itself NO dey run any live AI chatbot for dis website — BHD use Vanessa as searchable, structured FAQ guide instead.',
    ],
    extraKeywords: ['chatbot vs vanessa', 'no ai chatbot on bhd'],
  },
  'ai-07': {
    question: 'Wetin responsible use of AI mean for BYHENRYDIGITALS?',
    answer: [
      'Responsible AI mean never cooking up fake facts, never lying to visitors say static system na AI, protecting private data and server API keys, and keeping human check on top published guides and translations.',
    ],
    extraKeywords: ['responsible ai', 'ai ethics', 'privacy'],
  },
  'ai-08': {
    question: 'Wetin be difference between raw AI text and human-checked work?',
    answer: [
      'Unchecked AI writing fit carry wrong facts, stiff lines, or made-up claims. Human-checked work verify every point against real facts, keep language accuracy (like Yorùbá tone marks, Igbo letters, and natural Nigerian Pidgin), and make sure everything read clear.',
    ],
    extraKeywords: ['human review', 'translation quality'],
  },
  'ai-09': {
    question: 'How BHD separate current services, tools used, and custom project options?',
    answer: [
      'Available today: functional web building, landing pages, digital presence, no-code workflows, business support, and verified Selar guides. Tools used or taught: modern web tools, Selar, and practical digital/AI utilities. Custom solutions dey scoped straight from project requirements.',
    ],
    extraKeywords: ['services scope', 'tools vs services'],
  },

  // G. Languages and Learning Resources (9)
  'lang-01': {
    question: 'Which languages BYHENRYDIGITALS website dey support right now?',
    answer: [
      'Dis website support full switching across six active languages: English, Igbo, Yorùbá, Hausa, French, and Nigerian Pidgin.',
    ],
    extraKeywords: ['supported languages', 'six languages', 'nigerian pidgin', 'pidgin'],
    actionLabel: 'Open Guides Hub',
  },
  'lang-02': {
    question: 'English guides and articles dey available on BYHENRYDIGITALS?',
    answer: [
      'Yes. English na BHD default website language, and all featured digital products for Selar (Clicks-to-Cash, Global Monetisation, Remote Jobs for Under 18) plus Guides Hub articles and Vanessa FAQ dey fully inside English.',
    ],
    extraKeywords: ['english guides', 'english articles'],
    actionLabel: 'Read Guides & Articles',
  },
  'lang-03': {
    question: 'BHD get French navigation and French resources?',
    answer: [
      'Yes. Switching the header language button go Français (French) change the entire BHD website — navigation, pages, Guides Hub articles, and all 100+ Vanessa FAQ entries — to natural French.',
      'Be aware say downloadable products wey dey inside Selar still dey inside their original English edition.',
    ],
    extraKeywords: ['french support', 'francais'],
    actionLabel: 'Open Guides Hub',
  },
  'lang-04': {
    question: 'How Igbo language dey supported for BHD?',
    answer: [
      'If you pick Igbo for the top language menu, all site menus, product and service details, affiliate rules, contact pages, and dis full Vanessa FAQ go change go Igbo sharp-sharp with correct Igbo spelling.',
    ],
    extraKeywords: ['igbo support', 'igbo language'],
  },
  'lang-05': {
    question: 'How Yorùbá language dey supported for BHD?',
    answer: [
      'If you pick Yorùbá for the language menu, the website interface, articles, affiliate guidance, and Vanessa FAQ go change go natural Yorùbá sharp-sharp with proper tone marks and sub-dots (ẹ, ọ, ṣ).',
    ],
    extraKeywords: ['yoruba support', 'yoruba language'],
  },
  'lang-06': {
    question: 'How Hausa language dey supported for BHD?',
    answer: [
      'If you pick Hausa, website pages, guide summaries, affiliate rules, contact channels, and Vanessa Detailed FAQ go switch go Hausa straightaway without reloading page.',
    ],
    extraKeywords: ['hausa support', 'hausa language'],
  },
  'lang-09': {
    question: 'How Nigerian Pidgin dey supported on BYHENRYDIGITALS?',
    answer: [
      'Once you choose Nigerian Pidgin inside the header language menu, the whole BHD website — menus, Home, About BHD, Products, Affiliate Programme, Services, Guides & Blog articles, Contact page, Footer, and dis entire Vanessa FAQ — go switch go natural Nigerian Pidgin straightaway.',
      'Downloadable digital guides wey dey Selar still dey inside their original English copy.',
    ],
    extraKeywords: ['nigerian pidgin', 'pidgin support', 'pidgin translation', 'pcm'],
  },
  'lang-07': {
    question: 'BHD downloadable Selar products don translate to French, Igbo, Yorùbá, Hausa, or Nigerian Pidgin yet?',
    answer: [
      'Dem never translate am yet. Even though dis website and Vanessa FAQ dey work across all six languages, the downloadable guides wey dey sell for Selar (Clicks-to-Cash, Global Monetisation, and Remote Jobs for Under 18) still dey inside English.',
      'BHD no dey claim say translated ebook copy exist unless e don actually release.',
    ],
    extraKeywords: ['selar ebook language', 'translated pdf'],
  },
  'lang-08': {
    question: 'How visitor fit check the original language of any BHD product before paying?',
    answer: [
      'Every product card on BHD Products page show clear "Language Wey the Book Dey Inside" notice (English), and the live Selar page also confirm file format and language before payment.',
    ],
    extraKeywords: ['product language note', 'before purchase'],
    actionLabel: 'See Product Catalogue',
  },

  // H. Purchases, Payments and Customer Support (8)
  'pay-01': {
    question: 'Where customer fit buy official BYHENRYDIGITALS digital products?',
    answer: [
      'All official BYHENRYDIGITALS digital products dey sell only through BHD verified Selar store at https://selar.com/m/BYHENRYDIGITALS.',
    ],
    extraKeywords: ['where to buy', 'official store', 'selar link'],
    actionLabel: 'BHD Store',
  },
  'pay-02': {
    question: 'How Selar checkout dey work for BHD products?',
    answer: [
      'Once you open any BHD product inside Selar, Selar go show the verified price for your supported currency, let you read full description, and handle payment safely with Selar payment options.',
    ],
    extraKeywords: ['selar checkout', 'payment'],
    actionLabel: 'BHD Store',
  },
  'pay-03': {
    question: 'How buyers dey collect their digital product after paying for Selar?',
    answer: [
      'Once payment succeed on Selar, Selar go open access to download your digital files and send receipt/download details go the email address you put during checkout.',
    ],
    extraKeywords: ['download access', 'receipt email'],
  },
  'pay-04': {
    question: 'Wetin person suppose do if checkout, payment, or download get issue?',
    answer: [
      'If you jam wahala when paying or downloading file on Selar, keep your purchase email or transaction reference ready, then reach BYHENRYDIGITALS straight at byhenrydigitals@gmail.com or WhatsApp +234 708 208 8942.',
    ],
    extraKeywords: ['payment problem', 'download issue', 'order help'],
    actionLabel: 'Contact Support',
  },
  'pay-05': {
    question: 'BHD list custom refund policy or payout timelines for dis website?',
    answer: [
      'No custom refund rules or made-up payout times dey listed here. Payment checkout, settlement, and rules follow Selar platform terms and each official product page.',
    ],
    extraKeywords: ['refund policy', 'selar terms'],
  },
  'pay-06': {
    question: 'How person fit ask question about product before buying?',
    answer: [
      'Before paying on Selar, you fit search Vanessa Detailed FAQ, check the Products page summary, or reach BHD straight via Email (byhenrydigitals@gmail.com), WhatsApp (+234 708 208 8942), or Contact page.',
    ],
    extraKeywords: ['ask question', 'product enquiry'],
    actionLabel: 'Ask Product Question',
  },
  'pay-07': {
    question: 'How person fit contact BYHENRYDIGITALS straight?',
    answer: [
      'You fit reach BYHENRYDIGITALS through three official channels: (1) Official Email: byhenrydigitals@gmail.com, (2) Official WhatsApp: +234 708 208 8942 (https://wa.me/2347082088942), and (3) our Contact page enquiry form.',
    ],
    extraKeywords: ['contact bhd', 'official email', 'whatsapp number'],
    actionLabel: 'Open Contact Page',
  },
  'pay-08': {
    question: 'Where customers fit see official updates and news from BHD?',
    answer: [
      'Official updates, practical tips, and product or service news dey share on dis website, on our Selar store, and across BHD verified Instagram, TikTok, X (Twitter), and Facebook accounts.',
    ],
    extraKeywords: ['official updates', 'news', 'announcements'],
  },

  // I. Website Navigation and Social Media (8)
  'nav-01': {
    question: 'How I fit waka around the BYHENRYDIGITALS website easily?',
    answer: [
      'Top header (and mobile menu) connect smoothly to every main section: Home, About BHD, Products, Affiliate Programme, Services, Guides & Blog, and Contact — alongside the language switcher and bottom-right "BHD FAQ" bubble.',
      'The footer below every page also list all pages, official email, WhatsApp, Selar store link, and social icons.',
    ],
    extraKeywords: ['navigation', 'header', 'footer', 'menu'],
  },
  'nav-02': {
    question: 'Where I fit see BHD digital products and educational articles?',
    answer: [
      'Tap "Products" inside top bar (/products) to inspect Selar digital guides, and tap "Guides & Blog" (/resources) to read and filter educational articles across seven topics.',
    ],
    extraKeywords: ['find products', 'find articles'],
    actionLabel: 'Go Products Page',
  },
  'nav-03': {
    question: 'Where I fit check BHD digital services and ask for consultation?',
    answer: [
      'Tap "Services" inside main navigation (/services) or "See Our Solutions" inside header to read all five services and open Contact page with your topic ready.',
    ],
    extraKeywords: ['find services', 'book consultation'],
    actionLabel: 'Go Services Page',
  },
  'nav-04': {
    question: 'How I fit change website language?',
    answer: [
      'Tap the Language button at top-right inside header and pick English, Igbo, Yorùbá, Hausa, French, or Nigerian Pidgin. All visible text — including Vanessa FAQ — switch sharp-sharp without reloading page, and your browser go save your choice.',
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
    question: 'How I fit open Contact page and use Email or WhatsApp buttons?',
    answer: [
      'Click "Contact" inside header or footer (/contact) to submit message, or tap any "Send Us Email" (mailto:byhenrydigitals@gmail.com) or "Chat With Us on WhatsApp" (https://wa.me/2347082088942) button inside Contact, Footer, or FAQ support panel.',
    ],
    extraKeywords: ['contact form', 'email button', 'whatsapp button'],
    actionLabel: 'Open Contact Page',
  },
  'nav-07': {
    question: 'How I fit follow BYHENRYDIGITALS on official social media?',
    answer: [
      'Follow BHD on our four verified social handles through "Make We Connect!" section or footer icons: Instagram (https://www.instagram.com/byhenrydigitals/), TikTok (https://www.tiktok.com/@byhenrydigitals), X / Twitter (https://x.com/BYHENRYDIGITALS), and Facebook (https://www.facebook.com/share/1A8GpCyCt3/).',
    ],
    extraKeywords: ['social media', 'instagram', 'tiktok', 'facebook', 'twitter'],
  },
  'nav-08': {
    question: 'BYHENRYDIGITALS still dey use Tally forms anywhere on dis site?',
    answer: [
      'No. All Tally forms and links don comot from the BYHENRYDIGITALS website. Direct enquiries, project chats, and affiliate applications now pass cleanly through BHD Contact page, official email (byhenrydigitals@gmail.com), and official WhatsApp (+234 708 208 8942).',
    ],
    extraKeywords: ['tally removed', 'no tally'],
    actionLabel: 'Open Official Contact Channels',
  },

  // J. Vanessa Detailed FAQ (7)
  'van-01': {
    question: 'Wetin be Vanessa — Detailed BHD FAQ?',
    answer: [
      'Vanessa — Detailed BHD FAQ ("Your Searchable Guide to Everything BYHENRYDIGITALS.") na BHD structured, searchable FAQ and info centre wey carry 10 organised sections and over 100 verified questions and answers across products, affiliate programme, digital services, languages, payments, and support.',
    ],
    extraKeywords: ['vanessa faq', 'searchable guide'],
  },
  'van-02': {
    question: 'Vanessa na AI chatbot or AI chat assistant?',
    answer: [
      'No. Vanessa NO be AI chatbot or conversational AI assistant. BYHENRYDIGITALS no dey run any AI chatbot on dis website right now.',
      'All old Botpress chatbot setups don comot completely so Vanessa dey work strictly as structured, searchable FAQ library.',
    ],
    extraKeywords: ['not ai', 'no botpress', 'not chatbot'],
  },
  'van-03': {
    question: 'How Vanessa FAQ search bar dey work?',
    answer: [
      'Vanessa search dey check every published record across question titles, full answers, category titles, and search keywords. E support partial-word search (like "commiss" go find "commission") plus small spelling slip tolerance.',
    ],
    extraKeywords: ['how search work', 'typo search'],
  },
  'van-04': {
    question: 'How visitors fit search answers and filter topics inside Vanessa?',
    answer: [
      'Open the floating BHD FAQ bubble from any page, type word or question inside the main search box, tap one of the popular searches below, or filter by any of the 10 categories. Click any question to open full answer and clickable related questions.',
    ],
    extraKeywords: ['filter categories', 'popular searches'],
  },
  'van-05': {
    question: 'Wetin go happen if search no find matching answer?',
    answer: [
      'If nothing match your search, Vanessa go show clear notice with one-click reset button — plus steady "You No Find Your Answer?" section below with clickable Email Us (byhenrydigitals@gmail.com) and WhatsApp (https://wa.me/2347082088942) buttons.',
    ],
    extraKeywords: ['no results', 'escalation'],
    actionLabel: 'Open Contact Page',
  },
  'van-06': {
    question: 'Vanessa Detailed FAQ dey update when I change website language?',
    answer: [
      'Yes. Vanessa dey follow BHD general language switcher. Switching between English, Igbo, Yorùbá, Hausa, French, and Nigerian Pidgin update search labels, category titles, questions, answers, and empty notices straightaway.',
    ],
    extraKeywords: ['multilingual faq', 'pidgin faq'],
  },
  'van-07': {
    question: 'How BHD dey arrange, maintain, and verify Vanessa FAQ answers?',
    answer: [
      'Every FAQ question and answer dey inside one central list with im own ID, category, keywords, related questions, language tag, and check status (`published`, `draft`, or `needs_review`). Only verified, published records dey show for visitors so unverified claims no go enter.',
    ],
    extraKeywords: ['verified answers', 'maintenance'],
  },
};

export const faqPcm: FaqBundle = {
  language: 'pcm',
  bubbleLabel: 'BHD FAQ',
  closeAriaLabel: 'Close Vanessa FAQ box',
  kicker: 'Searchable BHD Info Centre',
  heading: 'VANESSA — DETAILED BHD FAQ',
  subheading: 'Your Searchable Guide for Everything BYHENRYDIGITALS.',
  nonAiNotice:
    'Well-arranged FAQ library — verified BHD info (e no be AI chatbot or automated chat assistant).',
  searchPlaceholder: 'Search anything about BYHENRYDIGITALS...',
  searchAriaLabel: 'Search anything about BYHENRYDIGITALS',
  clearSearchLabel: 'Clear Search',
  allCategoriesLabel: 'All Categories',
  categoriesHeading: 'FAQ Categories (A–J)',
  exampleQueriesTitle: 'Things people dey search:',
  exampleQueries: [
    'Wetin be BYHENRYDIGITALS?',
    'Clicks-to-Cash',
    '35% commission',
    'How I fit join affiliate?',
    'Website building',
    'Digital business',
    'Responsible AI',
    'Nigerian Pidgin',
    'Buy for Selar',
    'Vanessa na AI chatbot?',
  ],
  resultsMatchingLabel: 'matching answers',
  allTopicsCountLabel: 'published FAQ answers',
  verifiedStatusLabel: 'Verified',
  relatedQuestionsLabel: 'Related Questions',
  noResultsTitle: 'We no see answer wey match dat search',
  noResultsBody:
    'Nothing match exactly inside our published Vanessa FAQ answers. Try shorter word, reset category filter, or reach BYHENRYDIGITALS straight via Email or WhatsApp below.',
  resetFiltersLabel: 'Show All FAQ Answers',
  escalationTitle: 'You No Find Your Answer?',
  escalationBody:
    'Reach BYHENRYDIGITALS straight through official email or WhatsApp, or send detailed message on our Contact page.',
  emailButtonLabel: 'Send Us Email',
  whatsappButtonLabel: 'WhatsApp',
  contactPageButtonLabel: 'Open Contact Page',
  expandAllLabel: 'Open All Shown',
  collapseAllLabel: 'Close All',
  categories: {
    'about-bhd': {
      title: 'A. About BYHENRYDIGITALS',
      description: 'Who BHD be, Coach Henry leadership, mission, vision, and slogans.',
    },
    'products-resources': {
      title: 'B. Products & Digital Learning Guides',
      description: 'Verified Selar guides, who dem fit help, format, and learning focus.',
    },
    'affiliate-programme': {
      title: 'C. BHD Affiliate Programme',
      description: '35% commission, ₦0 fee, no MLM, and optional ₦8,000 Starter Kit.',
    },
    'web-services': {
      title: 'D. Digital Services & Website Building',
      description: 'Websites, landing pages, storefronts, integrations, and project pricing.',
    },
    'entrepreneurship-monetisation': {
      title: 'E. Digital Business & Online Earning',
      description: 'Beginner concepts, sales funnels, and real-world expectations.',
    },
    'ai-technology': {
      title: 'F. AI & Digital Tech',
      description: 'Content workflows, no-code tools, responsible AI, and human checking.',
    },
    'languages-learning': {
      title: 'G. Languages & Learning Guides',
      description: 'English, Igbo, Yorùbá, Hausa, French, Nigerian Pidgin & copy language info.',
    },
    'payments-purchases': {
      title: 'H. Buying, Payments & Support',
      description: 'Selar checkout, file download, questions, and official BHD contact.',
    },
    'navigation-social': {
      title: 'I. Website Navigation & Social Media',
      description: 'Site sections, language switcher, and verified social accounts.',
    },
    'vanessa-faq': {
      title: 'J. Vanessa Detailed FAQ',
      description: 'How dis searchable info centre work and answer verification.',
    },
  },
  entries: composeFaqEntries('pcm', recordsPcm),
};
