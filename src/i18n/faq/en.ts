import { composeFaqEntries } from './recordsMeta';
import { FaqBundle, FaqLocalizedRecord } from './types';

const recordsEn: Record<string, FaqLocalizedRecord> = {
  // A. About BYHENRYDIGITALS
  'about-01': {
    question: 'What is BYHENRYDIGITALS?',
    answer: [
      'BYHENRYDIGITALS (BHD) is a digital education and digital solutions brand founded by Henry (Coach Henry). It helps individuals and businesses discover practical digital opportunities, learn useful digital skills, access verified digital guides on Selar, and build functional websites and online systems.',
      'Across both its learning resources and client services, BHD focuses on practical digital education, digital entrepreneurship, online monetisation, and technology-enabled business solutions.',
    ],
    extraKeywords: ['overview', 'digital solutions', 'online monetisation', 'education'],
    actionLabel: 'Read About BYHENRYDIGITALS',
  },
  'about-02': {
    question: 'What does BHD stand for?',
    answer: [
      'BHD is the official short name and abbreviation for BYHENRYDIGITALS.',
      'You will see "BHD" used alongside "BYHENRYDIGITALS" across website navigation, product catalogues, the BHD Affiliate Programme, and the Vanessa Detailed BHD FAQ.',
    ],
  },
  'about-03': {
    question: 'Who founded BYHENRYDIGITALS?',
    answer: [
      'BYHENRYDIGITALS was founded by Henry, widely known as Coach Henry.',
      'He established BHD to make practical digital education, functional website solutions, and transparent digital monetization pathways accessible to everyday learners and growing businesses.',
    ],
    actionLabel: 'Meet the Founder on About Page',
  },
  'about-04': {
    question: 'What is the purpose of BYHENRYDIGITALS?',
    answer: [
      'BHD’s core purpose is to lower the barrier to practical digital skills and dependable web solutions through clear education, transparent digital commerce, and honest guidance.',
      'Rather than offering abstract theory, BHD helps visitors understand how online value works—whether by learning from digital guides, partnering through the single-tier affiliate programme, or commissioning functional websites.',
    ],
    actionLabel: 'Explore Mission & Purpose',
  },
  'about-05': {
    question: 'What problem is BHD trying to address?',
    answer: [
      'Many people interested in online opportunities encounter exaggerated promises, opaque pricing, multi-level recruitment schemes, or confusing websites that look busy without actually working.',
      'BYHENRYDIGITALS addresses this gap by offering structured, hype-free digital education, a direct 35% affiliate programme without MLM or compulsory purchases, and websites designed around clarity and real utility.',
    ],
  },
  'about-06': {
    question: 'What is BYHENRYDIGITALS’ vision?',
    answer: [
      'BHD’s vision is to grow a trusted, internationally accessible digital ecosystem connecting learners, creators, and businesses across languages and borders.',
      'This international direction is already visible in BHD’s six active website languages—English, Igbo, Yorùbá, Hausa, French, and Nigerian Pidgin—as well as its focus on cross-border digital value.',
    ],
  },
  'about-07': {
    question: 'What does "Digital Solutions. Global Impact." mean?',
    answer: [
      '"Digital Solutions. Global Impact." is BYHENRYDIGITALS’ primary tagline. It reflects BHD’s focus on building practical digital tools, educational guides, and web infrastructure that help individuals and brands participate effectively in the global digital economy regardless of borders.',
    ],
  },
  'about-08': {
    question: 'What does "We Build Digital Value That Sells." mean?',
    answer: [
      '"We Build Digital Value That Sells." is BYHENRYDIGITALS’ secondary tagline. It highlights that digital products, landing pages, and websites should not exist purely for decoration—they should solve real problems cleanly enough that customers naturally see their value.',
    ],
  },
  'about-09': {
    question: 'Who can benefit from BYHENRYDIGITALS?',
    answer: [
      'BHD serves beginners exploring digital literacy and online opportunities, young learners and parents looking for age-appropriate remote skill pathways, content creators and writers interested in ethical affiliate recommendations, and entrepreneurs or businesses needing functional websites and digital presence.',
    ],
  },
  'about-10': {
    question: 'Is BHD a digital education platform or a digital services brand?',
    answer: [
      'BYHENRYDIGITALS combines both functions cleanly under one brand: (1) digital education and practical learning resources hosted through its Selar store and website Knowledge Hub, and (2) digital services covering website design, landing pages, digital presence, no-code workflows, and digital business support.',
    ],
  },
  'about-11': {
    question: 'Where can I find the official BHD website and learn more about the organisation?',
    answer: [
      'You are currently on the official BYHENRYDIGITALS (BHD) web platform. You can explore the About page for mission, vision, and operating principles, browse the Products and Services pages for current offerings, or search this Vanessa Detailed FAQ for specific topics.',
    ],
    actionLabel: 'Visit About Page',
  },

  // B. Products and Digital Learning Resources
  'prod-01': {
    question: 'What verified digital products does BYHENRYDIGITALS currently offer?',
    answer: [
      'BYHENRYDIGITALS currently features three verified digital products hosted on its official Selar storefront (https://selar.com/m/BYHENRYDIGITALS): (1) Clicks-to-Cash, (2) Global Monetisation, and (3) Remote Jobs for Under 18.',
      'All live pricing, complete descriptions, and checkout delivery are managed directly on Selar.',
    ],
    actionLabel: 'View Product Catalogue',
  },
  'prod-02': {
    question: 'What is Clicks-to-Cash and who is it designed for?',
    answer: [
      'Clicks-to-Cash is a featured BHD digital guide on Selar offering a beginner-friendly introduction to how online attention turns into ethical digital sales—explaining the core relationship between creators, affiliate partners, and buyers without hype.',
      'It is intended for beginners, aspiring digital marketers, and new BHD affiliates seeking structured fundamentals before promoting digital products. Live pricing and verified checkout are displayed directly on Selar.',
    ],
    actionLabel: 'Explore Clicks-to-Cash',
  },
  'prod-03': {
    question: 'What problem does Clicks-to-Cash address and what do learners gain?',
    answer: [
      'Many beginners struggle with scattered advice or spammy link-sharing instead of understanding how digital recommendations build buyer trust. Clicks-to-Cash clarifies product positioning, transparent marketing vs empty spam, and core workflow habits.',
      'Exact purchase terms and live pricing are verified directly on BHD’s Selar store.',
    ],
    actionLabel: 'BHD Store',
  },
  'prod-04': {
    question: 'What is Global Monetisation and who is it built for?',
    answer: [
      'Global Monetisation is a featured BHD digital guide on Selar focused on packaging knowledge, skills, or resources into accessible digital offers built to serve buyers across borders and currencies.',
      'It is built for creators, educators, and skilled professionals seeking to reach international buyers cleanly.',
    ],
    actionLabel: 'Explore Global Monetisation',
  },
  'prod-05': {
    question: 'What problem does Global Monetisation solve and what concepts does it cover?',
    answer: [
      'Skilled individuals often feel restricted to local audiences even when digital platforms support cross-border sales. Global Monetisation covers structuring educational formats, multi-currency storefront accessibility, and sustainable audience distribution habits.',
      'Visit the official Selar storefront to inspect live pricing and full edition details.',
    ],
    actionLabel: 'BHD Store',
  },
  'prod-06': {
    question: 'What is Remote Jobs for Under 18 and who should use it?',
    answer: [
      'Remote Jobs for Under 18 is an educational BHD guide on Selar exploring realistic, age-appropriate digital skills, online safety, and legitimate skill-building before adulthood.',
      'It is designed for young learners and students under 18 alongside parents or guardians exploring safe digital literacy pathways.',
    ],
    actionLabel: 'Explore Remote Jobs for Under 18',
  },
  'prod-07': {
    question: 'What safety principles and skill pathways does Remote Jobs for Under 18 cover?',
    answer: [
      'The guide addresses common teenager challenges around age restrictions, payment rules, and misleading internet promises—focusing on age-compliant digital skills, platform rules, guardian supervision, and early portfolio practice.',
      'It does not promise automatic employment—review the official Selar listing for live checkout details.',
    ],
    actionLabel: 'BHD Store',
  },
  'prod-08': {
    question: 'What format and language are BHD’s Selar digital products currently published in?',
    answer: [
      'BHD’s featured Selar listings (Clicks-to-Cash, Global Monetisation, and Remote Jobs for Under 18) are downloadable digital guides published in English.',
      'Specific file formats (such as PDF/ebook downloads) and exact edition details are always displayed on each individual Selar product page before checkout.',
    ],
  },
  'prod-09': {
    question: 'How can I find and purchase a verified BHD digital product?',
    answer: [
      'Visit BHD’s official Selar storefront at https://selar.com/m/BYHENRYDIGITALS directly, or browse the Products page on this website and click "View on Selar Store" on the item you want.',
      'Selar displays verified live pricing in supported currencies and handles instant digital checkout and delivery.',
    ],
    actionLabel: 'BHD Store',
  },
  'prod-10': {
    question: 'Does BHD offer certificates, live classes, or guaranteed job placement with its guides?',
    answer: [
      'No. BHD’s current Selar digital products are self-paced digital guides rather than accredited degree courses, live cohort programmes, or guaranteed job-placement services.',
      'Any prerequisites or age compliance considerations (such as parental guidance for learners under 18) are noted transparently on the product listing.',
    ],
  },
  'prod-11': {
    question: 'How do BHD’s resources help learners understand digital entrepreneurship and digital sales?',
    answer: [
      'Both BHD’s Selar guides and the website’s Resources & Blog section break down how value creation, audience clarity, digital packaging, and trustworthy customer journeys drive sustainable digital sales.',
    ],
    actionLabel: 'Open Resources & Blog',
  },
  'prod-12': {
    question: 'What do BHD learning resources cover regarding affiliate marketing and online monetisation?',
    answer: [
      'BHD’s educational content emphasizes ethical affiliate marketing—explaining clearly who a digital product fits, what problem it addresses, and setting realistic expectations instead of hyping overnight profits.',
    ],
    actionLabel: 'Read Resource Articles',
  },
  'prod-13': {
    question: 'What do BHD resources cover on remote work and digital opportunities?',
    answer: [
      'BHD highlights foundational digital skills—such as structured writing, web design basics, no-code workflows, and portfolio building—alongside age-appropriate guidance in Remote Jobs for Under 18.',
    ],
    actionLabel: 'Browse Remote Opportunity Guides',
  },
  'prod-14': {
    question: 'Do BHD resources address creating and selling digital products or multi-currency digital earnings?',
    answer: [
      'Yes. Global Monetisation focuses directly on structuring digital knowledge and offers for cross-border audiences, while BHD uses Selar’s multi-currency storefront model to support digital distribution across borders.',
    ],
  },
  'prod-15': {
    question: 'Does BHD cover AI-assisted content creation inside its learning resources?',
    answer: [
      'Yes. BHD’s AI & Technology articles and guides explore how modern AI tools can assist with drafting, outlining, and practical content workflows when paired with human review and accurate brand information.',
    ],
    actionLabel: 'Read AI & Technology Resources',
  },

  // C. BHD Affiliate Programme
  'aff-01': {
    question: 'What is the BHD Affiliate Programme?',
    answer: [
      'The BHD Affiliate Programme is BYHENRYDIGITALS’ direct single-tier referral programme. Approved partners share eligible BHD digital products on Selar and earn a 35% commission on verified successful purchases.',
    ],
    actionLabel: 'View Affiliate Programme',
  },
  'aff-02': {
    question: 'Who can become a BYHENRYDIGITALS affiliate?',
    answer: [
      'Digital educators, writers, content creators, learners, and individuals interested in making honest, helpful product recommendations without holding inventory can request to become a BHD affiliate.',
      'Beginners willing to learn ethical marketing rather than spamming links are welcome; onboarding is subject to direct review by BYHENRYDIGITALS.',
    ],
    actionLabel: 'See Eligibility Details',
  },
  'aff-03': {
    question: 'How does the BHD Affiliate Programme work step by step?',
    answer: [
      'Step 1: Contact BYHENRYDIGITALS directly via our Contact page, email (byhenrydigitals@gmail.com), or WhatsApp (+234 708 208 8942) to request affiliate onboarding.',
      'Step 2: Once reviewed and approved, study the eligible Selar products you plan to share (optionally using the ₦8,000 Affiliate Starter Kit if desired).',
      'Step 3: Recommend eligible products through your Selar affiliate link and earn a 35% commission on verified purchases.',
    ],
    actionLabel: 'See Programme Steps',
  },
  'aff-04': {
    question: 'How do BHD affiliates earn commissions?',
    answer: [
      'Affiliates earn commissions solely when a buyer completes an eligible purchase of a BHD digital product on Selar using the affiliate’s tracked referral link.',
      'There are no sign-up bounties, click payments, or recruitment commissions.',
    ],
  },
  'aff-05': {
    question: 'What is the BHD affiliate commission rate?',
    answer: [
      'Approved BHD affiliates earn a 35% commission on eligible successful Selar sales.',
      'BHD does not invent or advertise hidden multi-tier percentages beyond this verified 35% direct rate.',
    ],
    actionLabel: 'View Verified Programme Facts',
  },
  'aff-06': {
    question: 'Which sales qualify for BHD affiliate commission?',
    answer: [
      'Eligible, completed digital product purchases processed successfully through Selar via an approved affiliate’s referral link qualify for the 35% commission.',
      'Cancelled, incomplete, or ineligible transactions do not earn commission.',
    ],
  },
  'aff-07': {
    question: 'Is there an affiliate registration or signup fee?',
    answer: [
      'No. There is zero registration or signup fee (₦0 to apply) to request onboarding into the BHD Affiliate Programme.',
    ],
  },
  'aff-08': {
    question: 'Must affiliates buy a product before joining the BHD Affiliate Programme?',
    answer: [
      'No. There is no mandatory product purchase required to apply for or participate in the BHD Affiliate Programme.',
    ],
  },
  'aff-09': {
    question: 'Is the BHD Affiliate Programme a multi-level marketing (MLM) scheme?',
    answer: [
      'No. BHD strictly does not run a multi-level marketing (MLM) programme, network marketing hierarchy, or pyramid structure. It is a transparent, direct single-tier affiliate programme.',
    ],
  },
  'aff-10': {
    question: 'Is there a downline or recruitment-based commission structure?',
    answer: [
      'No. BHD affiliates do not build downlines and never earn bonuses or commissions from recruiting other affiliates. Commissions come only from eligible product sales on Selar.',
    ],
  },
  'aff-11': {
    question: 'What is the ₦8,000 Affiliate Starter Kit?',
    answer: [
      'The ₦8,000 Affiliate Starter Kit is an optional guided onboarding resource offered by BYHENRYDIGITALS for affiliates who want structured guidance on getting started.',
    ],
  },
  'aff-12': {
    question: 'Is the Affiliate Starter Kit compulsory to join or earn commissions?',
    answer: [
      'No. Purchasing the ₦8,000 Affiliate Starter Kit is strictly optional—it is never compulsory to apply, become approved, or earn 35% commission on eligible Selar sales.',
    ],
  },
  'aff-13': {
    question: 'How should affiliates promote BYHENRYDIGITALS digital products?',
    answer: [
      'Affiliates should explain accurately what each guide covers, who it is designed for, and share real context rather than posting unsolicited spam links.',
      'Misleading claims, get-rich-quick promises, guaranteed income statements, or unauthorised impersonation of the BHD brand are strictly prohibited.',
    ],
  },
  'aff-14': {
    question: 'Where can affiliates find promotional information and verified descriptions?',
    answer: [
      'Verified product titles, audience summaries, and links live on the Products page of this website and on each official listing at https://selar.com/m/BYHENRYDIGITALS. Approved partners can also request clarification directly from BHD.',
    ],
    actionLabel: 'Browse Product Catalogue',
  },
  'aff-15': {
    question: 'What happens when a customer makes a purchase through my Selar affiliate link?',
    answer: [
      'When a buyer uses your Selar affiliate link and completes an eligible purchase on Selar, Selar tracks the referral attribution automatically against your affiliate account so the 35% commission applies to that eligible sale.',
    ],
  },
  'aff-16': {
    question: 'How are affiliate sales and onboarding requests reviewed by BHD?',
    answer: [
      'Onboarding enquiries are reviewed directly by BYHENRYDIGITALS—there is no automated instant approval—and eligible product sales are tracked and verified through Selar’s commerce records.',
    ],
  },
  'aff-17': {
    question: 'How can affiliates contact BYHENRYDIGITALS for onboarding or support?',
    answer: [
      'Tally forms have been removed from the BHD website. To request affiliate onboarding or ask an affiliate support question, use our Contact page, email byhenrydigitals@gmail.com, or chat on WhatsApp at +234 708 208 8942.',
    ],
    actionLabel: 'Contact BHD for Onboarding',
  },

  // D. Digital Services and Website Development
  'srv-01': {
    question: 'What digital services does BYHENRYDIGITALS provide?',
    answer: [
      'BHD provides five focused digital service areas: (1) Website Design & Development, (2) Landing Pages, (3) Digital Presence Development, (4) No-Code & AI-Assisted Digital Solutions, and (5) Digital Business Support.',
      'Every project emphasizes practical structure, mobile responsiveness, speed, and real business utility rather than decorative templates.',
    ],
    actionLabel: 'Explore Digital Services',
  },
  'srv-02': {
    question: 'Does BHD build professional business and personal websites?',
    answer: [
      'Yes. BHD designs and engineers responsive business and personal websites built around clear navigation, strong brand positioning, clean metadata, and straightforward enquiry or sales pathways across desktop, tablet, and mobile screens.',
    ],
    actionLabel: 'See Web Design & Development',
  },
  'srv-03': {
    question: 'What are BHD Landing Pages and when should a business choose one?',
    answer: [
      'A BHD Landing Page is a focused, single-objective page designed to explain one specific product, service, or campaign clearly and guide visitors toward a concrete action without unnecessary distraction.',
    ],
    actionLabel: 'Explore Landing Page Service',
  },
  'srv-04': {
    question: 'Can BHD help set up or connect digital product storefronts?',
    answer: [
      'Yes. Under Digital Presence Development and Digital Business Support, BHD helps creators and businesses organise product storefronts (such as Selar listings), website routing, and clean checkout pathways.',
    ],
  },
  'srv-05': {
    question: 'How does BHD handle website planning, structuring, and user journeys?',
    answer: [
      'Before focusing on visual polish, BHD structures page hierarchy, navigation menus, calls to action, and content clarity so visitors understand what your organisation offers within seconds.',
    ],
  },
  'srv-06': {
    question: 'Does BHD include publishing, responsive testing, and technical checks?',
    answer: [
      'Yes. Functional websites require verification across desktop, tablet, and mobile viewports, working forms and external links, clean semantic markup, and reliable deployment checks.',
    ],
  },
  'srv-07': {
    question: 'What website integrations can BHD build or connect for clients?',
    answer: [
      'BHD connects validated intake forms, webhook notifications, external storefront links (like Selar), direct WhatsApp/email contact links, and practical no-code automation bridges tailored to each client’s workflow.',
    ],
  },
  'srv-08': {
    question: 'Does BHD offer chatbot integration as a client service, and does BHD operate its own AI assistant?',
    answer: [
      'BHD can build or integrate configurable conversational interfaces as a tailored client service when requested by a business.',
      'However, BYHENRYDIGITALS itself does NOT currently operate an AI chatbot or conversational AI assistant on its own website—Vanessa on this site is strictly a structured, searchable FAQ information centre.',
    ],
  },
  'srv-09': {
    question: 'How does Digital Presence Development strengthen an online brand?',
    answer: [
      'Digital Presence Development aligns your flagship website, digital storefront, messaging, and social links into a cohesive, trustworthy brand experience so international visitors immediately recognise your credibility.',
    ],
  },
  'srv-10': {
    question: 'What does BHD’s Digital Business Support include?',
    answer: [
      'Digital Business Support offers practical technical and strategic guidance for founders launching digital products, structuring online services, troubleshooting storefront issues, and scaling content cleanly without jargon.',
    ],
  },
  'srv-11': {
    question: 'How are BHD website and digital service projects priced?',
    answer: [
      'BHD scopes pricing per project based on deliverables, complexity, and integration needs during consultation. No arbitrary fixed service prices are published on the website.',
    ],
    actionLabel: 'Request a Project Consultation',
  },
  'srv-12': {
    question: 'What should prospective clients share for a project enquiry, and how are timelines decided?',
    answer: [
      'Share your business or personal goal, key pages or integrations needed, existing website or storefront links, and preferred timeline on the Contact page, by email (byhenrydigitals@gmail.com), or on WhatsApp (+234 708 208 8942). Delivery timelines are agreed per project scope rather than promised as fixed estimates upfront.',
    ],
    actionLabel: 'Discuss Your Project',
  },

  // E. Digital Entrepreneurship and Online Monetisation
  'ent-01': {
    question: 'What is digital entrepreneurship?',
    answer: [
      'Digital entrepreneurship is building and operating a business that delivers value primarily online—such as digital learning guides, software or web services, consulting, or online media—using internet distribution and digital tools.',
    ],
  },
  'ent-02': {
    question: 'What is affiliate marketing?',
    answer: [
      'Affiliate marketing is a referral arrangement where a partner recommends another creator’s or brand’s product using a tracked link and earns an agreed commission when someone completes an eligible purchase through that link.',
      'Ethical affiliate marketing depends on honest product context and clear disclosure rather than exaggerated claims.',
    ],
  },
  'ent-03': {
    question: 'What is digital product creation?',
    answer: [
      'Digital product creation involves turning structured knowledge, templates, or step-by-step guides into downloadable or online resources (such as ebooks or toolkits) that can be purchased and delivered digitally without physical shipping.',
    ],
  },
  'ent-04': {
    question: 'What does online monetisation mean?',
    answer: [
      'Online monetisation refers to generating legitimate revenue from digital skills, audiences, educational guides, or web services by solving real problems for customers willing to pay for verified solutions.',
    ],
  },
  'ent-05': {
    question: 'What are digital sales?',
    answer: [
      'Digital sales are completed transactions for online products or services—such as downloadable guides sold through Selar or scoped client web projects—driven by clear communication, usability, and trust.',
    ],
  },
  'ent-06': {
    question: 'What is a sales funnel?',
    answer: [
      'A sales funnel is the structured journey a prospective customer follows from first discovering your brand, reading helpful context, evaluating an offer, and completing a purchase or sending an enquiry.',
    ],
  },
  'ent-07': {
    question: 'What is a landing page and how does it differ from a full website?',
    answer: [
      'A full website introduces an entire brand across multiple pages (Home, About, Products, Services, FAQ, Contact), whereas a landing page is a dedicated single page focused on explaining one offer and prompting one specific visitor action.',
    ],
  },
  'ent-08': {
    question: 'What is a digital storefront?',
    answer: [
      'A digital storefront is an online shopfront where digital products are listed with descriptions, pricing, multi-currency payment options, and automatic digital delivery—such as BYHENRYDIGITALS’ official store on Selar.',
    ],
  },
  'ent-09': {
    question: 'What is multi-currency monetisation?',
    answer: [
      'Multi-currency monetisation allows digital creators and sellers to offer products to buyers across different countries using platforms (like Selar) that let customers view prices and pay securely in local or international currencies.',
    ],
  },
  'ent-10': {
    question: 'What skills can help beginners enter the digital economy?',
    answer: [
      'Foundational skills that compound well include clear written communication, digital literacy, audience research, basic website and landing page structuring, ethical marketing, and responsible use of productivity or AI tools.',
    ],
  },
  'ent-11': {
    question: 'What should beginners understand realistically before starting an online business?',
    answer: [
      'Online businesses require genuine skill development, consistent effort, clear positioning, and customer trust. BHD emphasizes that there is no guaranteed overnight income or effortless profit in digital entrepreneurship.',
    ],
  },

  // F. AI and Digital Technology
  'ai-01': {
    question: 'How can AI support digital content creation?',
    answer: [
      'Modern AI tools can assist creators with brainstorming topic angles, structuring article outlines, drafting initial summaries, and organising research faster—provided a human reviews, verifies, and refines the final output.',
    ],
  },
  'ai-02': {
    question: 'How can AI-assisted video creation be used responsibly in digital work?',
    answer: [
      'AI-assisted video tools can help streamline script drafting, captioning, visual storyboarding, and editing workflows for educational explainers and brand updates while human creators remain accountable for accuracy and brand voice.',
    ],
  },
  'ai-03': {
    question: 'How do digital productivity tools support modern online businesses?',
    answer: [
      'Digital productivity tools—such as structured task trackers, document systems, form routing, and calendar/intake workflows—reduce manual errors and help lean teams deliver consistently.',
    ],
  },
  'ai-04': {
    question: 'What website development tools and engineering standards does BHD focus on?',
    answer: [
      'BHD focuses on clean, responsive web technologies (such as React, TypeScript, Tailwind CSS, semantic HTML, and reliable Node/Express APIs where backend handling is required) engineered for speed, accessibility, and maintainability.',
    ],
  },
  'ai-05': {
    question: 'What are no-code and low-code digital solutions?',
    answer: [
      'No-code and low-code solutions use visual platforms, form bridges, storefront integrations, and workflow automations to connect tools and handle notifications quickly without requiring heavy custom backend software for simple business processes.',
    ],
  },
  'ai-06': {
    question: 'How do client chatbot integration services differ from BHD’s own website?',
    answer: [
      'While BHD can scope and integrate third-party chatbot tools for clients who specifically request them on their own sites, BYHENRYDIGITALS does NOT currently operate a live AI chatbot on its own website—BHD uses Vanessa as a structured, searchable FAQ knowledge base instead.',
    ],
  },
  'ai-07': {
    question: 'What does responsible use of AI mean at BYHENRYDIGITALS?',
    answer: [
      'Responsible AI use means never fabricating facts, never misleading visitors about whether a system is AI or human-curated, protecting private data and server-side keys, and ensuring human oversight over published answers and translations.',
    ],
  },
  'ai-08': {
    question: 'What is the difference between AI-generated content and human-reviewed work?',
    answer: [
      'Unreviewed AI output can contain inaccuracies, generic phrasing, or fabricated claims. Human-reviewed work checks every statement against verified source truth, preserves cultural and linguistic accuracy (such as Yorùbá tone marks and Igbo characters), and ensures clarity.',
    ],
  },
  'ai-09': {
    question: 'How does BHD distinguish current services, everyday tools, and custom project options?',
    answer: [
      'Currently offered: functional web development, landing pages, digital presence, no-code workflows, digital business support, and verified Selar guides. Tools used/taught: modern web frameworks, Selar, and practical digital/AI productivity tools. Custom client solutions are scoped directly based on verified project requirements.',
    ],
  },

  // G. Languages and Learning Resources
  'lang-01': {
    question: 'Which languages does the BYHENRYDIGITALS website currently support?',
    answer: [
      'The website supports full multilingual switching across six active languages: English, Igbo, Yorùbá, Hausa, French, and Nigerian Pidgin.',
    ],
    extraKeywords: ['six languages', 'nigerian pidgin', 'pidgin'],
    actionLabel: 'Explore Learning Resources',
  },
  'lang-02': {
    question: 'Are English resources and guides available on BYHENRYDIGITALS?',
    answer: [
      'Yes. English is BHD’s default website language, and all featured digital products on Selar—Clicks-to-Cash, Global Monetisation, and Remote Jobs for Under 18—plus the Knowledge Hub articles and Vanessa FAQ are fully available in English.',
    ],
    actionLabel: 'Browse English Resources',
  },
  'lang-03': {
    question: 'Does BHD offer French learning resources and French website navigation?',
    answer: [
      'Yes. Switching the header language selector to Français (French) translates the entire BHD website—including navigation, pages, Resource Hub articles, and all 100+ Vanessa FAQ records—into natural French.',
      'Note honestly that BHD’s downloadable products currently hosted on Selar are still published in their original English edition.',
    ],
    actionLabel: 'Open Resources Hub',
  },
  'lang-04': {
    question: 'How is Igbo-language accessibility supported on BHD?',
    answer: [
      'Selecting Igbo in the top language selector immediately updates website navigation, service and product descriptions, affiliate details, contact pages, and this entire Vanessa Detailed FAQ into Igbo with proper Igbo orthography.',
    ],
  },
  'lang-05': {
    question: 'How is Yorùbá-language accessibility supported on BHD?',
    answer: [
      'Selecting Yorùbá in the language menu translates the website interface, educational articles, affiliate guidance, and Vanessa FAQ into natural Yorùbá while preserving proper Yorùbá tone marks and sub-dots (ẹ, ọ, ṣ).',
    ],
  },
  'lang-06': {
    question: 'How is Hausa-language accessibility supported on BHD?',
    answer: [
      'Selecting Hausa switches website pages, resource summaries, affiliate guidelines, contact channels, and the Vanessa Detailed FAQ into Hausa immediately without reloading your page.',
    ],
  },
  'lang-09': {
    question: 'How is Nigerian Pidgin supported on BYHENRYDIGITALS?',
    answer: [
      'Selecting Nigerian Pidgin in the header language switcher translates the entire BHD website—navigation, Home, About, Products, Affiliate Programme, Services, Resources articles, Contact page, Footer, and this full Vanessa Detailed FAQ—into natural Nigerian Pidgin immediately.',
      'Downloadable digital guides hosted on Selar remain published in their original English edition.',
    ],
    extraKeywords: ['nigerian pidgin', 'pidgin', 'pidgin english', 'pcm'],
  },
  'lang-07': {
    question: 'Are BHD’s downloadable Selar digital products translated into French, Igbo, Yorùbá, Hausa, or Nigerian Pidgin yet?',
    answer: [
      'No. While the website and this Vanessa FAQ guide are fully multilingual across all six active languages, the downloadable digital guides currently sold on Selar (Clicks-to-Cash, Global Monetisation, and Remote Jobs for Under 18) are published in English.',
      'BHD never claims a translated edition of a Selar product exists unless that translated edition has actually been released.',
    ],
  },
  'lang-08': {
    question: 'How can visitors identify the original language of any BHD product or resource before purchasing?',
    answer: [
      'Every product card on the BHD Products page displays a clear "Product Content Language" notice indicating its original edition (English), and the live Selar product page confirms exact format and language details prior to checkout.',
    ],
    actionLabel: 'Check Product Catalogue',
  },

  // H. Purchases, Payments and Customer Support
  'pay-01': {
    question: 'Where can customers officially purchase BYHENRYDIGITALS digital products?',
    answer: [
      'All official BYHENRYDIGITALS digital products are sold exclusively through BHD’s verified Selar storefront at https://selar.com/m/BYHENRYDIGITALS.',
    ],
    actionLabel: 'BHD Store',
  },
  'pay-02': {
    question: 'How does Selar checkout work for BHD products?',
    answer: [
      'When you open a product on BHD’s Selar store, Selar shows the verified price in your supported currency, lets you review the full listing description, and processes checkout securely through Selar’s supported payment methods.',
    ],
    actionLabel: 'BHD Store',
  },
  'pay-03': {
    question: 'How do customers access purchased digital products after payment?',
    answer: [
      'Upon successful checkout on Selar, Selar provides access to your downloadable digital files and sends confirmation/receipt access instructions to the email address used during checkout.',
    ],
  },
  'pay-04': {
    question: 'What should a customer do if they experience a checkout, payment, or download issue?',
    answer: [
      'If you encounter trouble accessing a file or completing checkout on Selar, keep your purchase email or transaction reference handy and contact BYHENRYDIGITALS directly at byhenrydigitals@gmail.com or via WhatsApp at +234 708 208 8942.',
    ],
    actionLabel: 'Contact Support',
  },
  'pay-05': {
    question: 'Does BHD publish fixed refund policies or payment processing guarantees on this website?',
    answer: [
      'No custom refund timelines or guaranteed processing windows are invented or listed here. Checkout, payment settlement, and applicable terms follow Selar’s platform checkout rules and each official product listing.',
    ],
  },
  'pay-06': {
    question: 'How can someone make a product enquiry before purchasing?',
    answer: [
      'Before purchasing on Selar, you can search Vanessa Detailed FAQ, check the Products page summary, or reach out directly via Email (byhenrydigitals@gmail.com), WhatsApp (+234 708 208 8942), or the Contact page form.',
    ],
    actionLabel: 'Ask a Product Question',
  },
  'pay-07': {
    question: 'How can someone contact BYHENRYDIGITALS directly?',
    answer: [
      'You can reach BYHENRYDIGITALS through three official direct channels: (1) Official Email: byhenrydigitals@gmail.com, (2) Official WhatsApp: +234 708 208 8942 (https://wa.me/2347082088942), and (3) the validated enquiry form on the Contact page.',
    ],
    actionLabel: 'Open Contact Page',
  },
  'pay-08': {
    question: 'Where can customers find official updates and announcements from BHD?',
    answer: [
      'Official updates, practical insights, and product or service news are shared on this website, on the Selar storefront, and across BHD’s verified Instagram, TikTok, X (Twitter), and Facebook accounts.',
    ],
  },

  // I. Website Navigation and Social Media
  'nav-01': {
    question: 'How do I navigate the BYHENRYDIGITALS website?',
    answer: [
      'The top header (and mobile menu drawer) links cleanly to every core section: Home, About, Products, Affiliate Programme, Services, Resources, and Contact—alongside the language selector, plus the persistent BHD FAQ floating bubble in the bottom-right corner.',
      'The footer on every page also repeats all page routes, official email, WhatsApp, Selar store link, and social icons.',
    ],
  },
  'nav-02': {
    question: 'Where can I find BHD digital products and learning articles on the website?',
    answer: [
      'Click "Products" in the navigation bar (/products) to inspect featured Selar digital guides, and click "Resources" (/resources) to read and filter educational articles across seven topics.',
    ],
    actionLabel: 'Go to Products',
  },
  'nav-03': {
    question: 'Where can I find BHD digital services and request a consultation?',
    answer: [
      'Click "Services" in the main navigation (/services) or "Explore Solutions" in the header to inspect all five service offerings and jump straight to the Contact page with your selected service pre-filled.',
    ],
    actionLabel: 'Go to Services',
  },
  'nav-04': {
    question: 'How do I use the website language selector?',
    answer: [
      'Click the Language button in the top-right area of the header and pick English, Igbo, Yorùbá, Hausa, French, or Nigerian Pidgin. Visible text—including Vanessa FAQ—updates immediately without reloading your page, and your choice is saved for future visits.',
    ],
  },
  'nav-05': {
    question: 'Where can I find Vanessa — Detailed BHD FAQ on the website?',
    answer: [
      'Click the persistent floating "BHD FAQ" bubble in the bottom-right corner from any page on desktop or mobile—or click "Open Vanessa FAQ" in the footer or Home page spotlight section.',
    ],
  },
  'nav-06': {
    question: 'How do I reach the Contact page and use the Email or WhatsApp buttons?',
    answer: [
      'Click "Contact" in the header or footer (/contact) to submit a structured form message, or click any "Email Us" button (mailto:byhenrydigitals@gmail.com) or "Chat With Us on WhatsApp" button (https://wa.me/2347082088942) in the Contact section, Footer, or FAQ escalation panel.',
    ],
    actionLabel: 'Open Contact Page',
  },
  'nav-07': {
    question: 'How can I follow BYHENRYDIGITALS on official social media?',
    answer: [
      'Follow BHD on its four verified social platforms via the "Let’s Connect!" section or footer icons: Instagram (https://www.instagram.com/byhenrydigitals/), TikTok (https://www.tiktok.com/@byhenrydigitals), X / Twitter (https://x.com/BYHENRYDIGITALS), and Facebook (https://www.facebook.com/share/1A8GpCyCt3/).',
    ],
  },
  'nav-08': {
    question: 'Does BYHENRYDIGITALS use Tally forms anywhere on the website?',
    answer: [
      'No. All Tally forms and links have been completely removed from the BYHENRYDIGITALS website. Direct enquiries, project discussions, and affiliate onboarding requests now go cleanly through the BHD Contact page, official email (byhenrydigitals@gmail.com), and official WhatsApp (+234 708 208 8942).',
    ],
    actionLabel: 'Go to Official Contact Channels',
  },

  // J. Vanessa Detailed FAQ
  'van-01': {
    question: 'What is Vanessa — Detailed BHD FAQ?',
    answer: [
      'Vanessa — Detailed BHD FAQ ("Your Searchable Guide to Everything BYHENRYDIGITALS.") is BHD’s structured, searchable FAQ and information centre covering 10 organised categories and over 100 verified questions and answers across products, the affiliate programme, digital services, languages, payments, and support.',
    ],
  },
  'van-02': {
    question: 'Is Vanessa an AI chatbot or conversational AI assistant?',
    answer: [
      'No. Vanessa is NOT an AI chatbot or conversational AI assistant. BYHENRYDIGITALS does not currently operate an AI chatbot on its website.',
      'All Botpress and floating chatbot interfaces have been removed so Vanessa functions strictly as a structured, searchable FAQ knowledge base.',
    ],
  },
  'van-03': {
    question: 'How does the Vanessa FAQ search engine work?',
    answer: [
      'The Vanessa search engine indexes every published FAQ record across questions, full answers, category titles, and curated alternative keywords. It supports partial-word matching (e.g., "commiss" matches "commission") as well as typo-tolerant matching for common spelling slips.',
    ],
  },
  'van-04': {
    question: 'How can visitors search for information and filter topics in Vanessa?',
    answer: [
      'Open the floating BHD FAQ bubble from any page, type any keyword, phrase, or question into the main search bar ("Search anything about BYHENRYDIGITALS..."), click one of the example search queries, or filter by any of the 10 categories. Clicking any question expands its full answer and clickable related questions.',
    ],
  },
  'van-05': {
    question: 'What happens when no matching FAQ answer is found?',
    answer: [
      'If no published record matches your query, Vanessa displays a helpful empty state with a one-click filter reset button—plus a persistent "Can\'t find your answer?" section at the bottom with clickable Email Us (byhenrydigitals@gmail.com) and WhatsApp (https://wa.me/2347082088942) buttons.',
    ],
    actionLabel: 'Open Contact Page',
  },
  'van-06': {
    question: 'Does Vanessa Detailed FAQ update when I change the website language?',
    answer: [
      'Yes. Vanessa is connected to BHD’s website-wide multilingual system. Switching between English, Igbo, Yorùbá, Hausa, French, and Nigerian Pidgin updates the search interface, category headings, questions, answers, and empty-state notices immediately.',
    ],
  },
  'van-07': {
    question: 'How are Vanessa FAQ records organised, maintained, and verified?',
    answer: [
      'Every FAQ record is stored in a centralised repository with a unique ID, category, keywords, related questions, language tag, and publication/verification status (`published`, `draft`, or `needs_review`). Only verified, published records are indexed and displayed to visitors so unverified claims are withheld.',
    ],
  },
};

export const faqEn: FaqBundle = {
  language: 'en',
  bubbleLabel: 'BHD FAQ',
  closeAriaLabel: 'Close Vanessa FAQ panel',
  kicker: 'Searchable BHD Information Centre',
  heading: 'VANESSA — DETAILED BHD FAQ',
  subheading: 'Your Searchable Guide to Everything BYHENRYDIGITALS.',
  nonAiNotice:
    'Structured FAQ knowledge library — curated, verified BHD information (not an automated chatbot or AI assistant).',
  searchPlaceholder: 'Search anything about BYHENRYDIGITALS...',
  searchAriaLabel: 'Search anything about BYHENRYDIGITALS',
  clearSearchLabel: 'Clear Search',
  allCategoriesLabel: 'All Categories',
  categoriesHeading: 'FAQ Categories (A–J)',
  exampleQueriesTitle: 'Popular searches:',
  exampleQueries: [
    'What is BYHENRYDIGITALS?',
    'Clicks-to-Cash',
    '35% commission',
    'How do I become an affiliate?',
    'Website development',
    'Digital entrepreneurship',
    'Responsible use of AI',
    'French learning resources',
    'How do I purchase on Selar?',
    'Is Vanessa an AI chatbot?',
  ],
  resultsMatchingLabel: 'matching answers',
  allTopicsCountLabel: 'published FAQ records',
  verifiedStatusLabel: 'Verified',
  relatedQuestionsLabel: 'Related Questions',
  noResultsTitle: 'No matching answer found for your search',
  noResultsBody:
    'We could not find an exact match across our published Vanessa FAQ records. Try simpler keywords, reset the category filter, or contact BYHENRYDIGITALS directly via Email or WhatsApp below.',
  resetFiltersLabel: 'Show All FAQ Records',
  escalationTitle: "Can't find your answer?",
  escalationBody:
    'Reach BYHENRYDIGITALS directly by official email or WhatsApp, or submit a detailed enquiry on our Contact page.',
  emailButtonLabel: 'Email Us',
  whatsappButtonLabel: 'WhatsApp',
  contactPageButtonLabel: 'Open Contact Form',
  expandAllLabel: 'Expand Shown',
  collapseAllLabel: 'Collapse All',
  categories: {
    'about-bhd': {
      title: 'A. About BYHENRYDIGITALS',
      description: 'Brand identity, leadership, purpose, vision, and taglines.',
    },
    'products-resources': {
      title: 'B. Products & Digital Learning Resources',
      description: 'Verified Selar guides, target audiences, formats, and learning focus.',
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
      description: 'Beginner-friendly concepts, sales funnels, and realistic expectations.',
    },
    'ai-technology': {
      title: 'F. AI & Digital Technology',
      description: 'Content workflows, no-code tools, responsible AI, and human review.',
    },
    'languages-learning': {
      title: 'G. Languages & Learning Resources',
      description: 'English, Igbo, Yorùbá, Hausa, French, and Nigerian Pidgin support plus edition clarity.',
    },
    'payments-purchases': {
      title: 'H. Purchases, Payments & Customer Support',
      description: 'Selar checkout, digital access, enquiries, and official BHD contact.',
    },
    'navigation-social': {
      title: 'I. Website Navigation & Social Media',
      description: 'Site sections, language switching, and verified social accounts.',
    },
    'vanessa-faq': {
      title: 'J. Vanessa Detailed FAQ',
      description: 'How this searchable information centre works and content verification.',
    },
  },
  entries: composeFaqEntries('en', recordsEn),
};
