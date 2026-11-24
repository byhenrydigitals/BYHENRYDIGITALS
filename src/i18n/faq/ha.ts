import { composeFaqEntries } from './recordsMeta';
import { FaqBundle, FaqLocalizedRecord } from './types';

const recordsHa: Record<string, FaqLocalizedRecord> = {
  // A. Game da BYHENRYDIGITALS
  'about-01': {
    question: 'Menene BYHENRYDIGITALS?',
    answer: [
      'BYHENRYDIGITALS (BHD) alama ce ta hanyoyin dijital da ilimi wadda Henry (Coach Henry) ya kafa don rage shingaye ga shiga harkar dijital. Tana haɗa sassa biyu bayyanannu: BHD Academy don mutane ɗaiɗaiku masu koyon ƙwarewar dijital, da BHD Services don ƙananan masana’antu da ke neman shafukan yanar gizo da tsarin aiki masu amfani.',
      'A duka sassan biyu, BHD tana mai da hankali kan ilimin dijital mai amfani, kayan koyo a Selar, tsarin haɗin gwiwa na gaskiya, da hanyoyin yanar gizo bisa buƙata.',
    ],
    extraKeywords: ['bayanai', 'bhd academy', 'bhd services', 'ilimin dijital', 'hanyoyin fasaha'],
    actionLabel: 'Karanta Game da BHD',
  },
  'about-02': {
    question: 'Me BHD yake nufi?',
    answer: [
      'BHD shi ne gajeren sunan hukuma na BYHENRYDIGITALS.',
      'Za ka ga "BHD" tare da "BYHENRYDIGITALS" a cikin menu na shafin, kundin kayayyaki, Shirin Haɗin Gwiwa na BHD, da wannan Vanessa FAQ.',
    ],
  },
  'about-03': {
    question: 'Wane ne ya kafa BYHENRYDIGITALS?',
    answer: [
      'Henry ne ya kafa BYHENRYDIGITALS, wanda aka fi sani da Coach Henry.',
      'Ya kafa BHD ne don sa ilimin dijital mai amfani, gina shafukan yanar gizo, da hanyoyin gaskiya na samar da daraja a kan layi su zama masu sauƙi.',
    ],
    actionLabel: 'San Wanda Ya Kafa',
  },
  'about-04': {
    question: 'Menene manufar BYHENRYDIGITALS?',
    answer: [
      'Manufar BHD ita ce rage shinge wajen samun ƙwarewar dijital da ingantattun shafukan yanar gizo ta hanyar ilimi bayyananne, kasuwanci mai gaskiya, da jagora ta gaskiya.',
    ],
    actionLabel: 'Duba Manufa',
  },
  'about-05': {
    question: 'Wace matsala BHD yake ƙoƙarin magancewa?',
    answer: [
      'Mutane da yawa masu neman dama a kan layi suna fuskantar alƙawuran ƙarya, farashi mara bayani, tsarin MLM, ko shafukan yanar gizo marasa amfani.',
      'BHD yana magance hakan da ilimi ba tare da yaudara ba, shirin haɗin gwiwa na 35% kai tsaye ba tare da MLM ba, da shafuka masu inganci.',
    ],
  },
  'about-06': {
    question: 'Menene hangen nesan BYHENRYDIGITALS?',
    answer: [
      'Hangen nesan BHD shi ne gina sahihiyar cibiyar dijital ta duniya da ke haɗa masu koyo, masu ƙirƙira, da kamfanoni a harsuna shida: English, Igbo, Yorùbá, Hausa, French, da Nigerian Pidgin.',
    ],
  },
  'about-07': {
    question: 'Me "Digital Solutions. Global Impact." yake nufi?',
    answer: [
      '"Digital Solutions. Global Impact." ("Hanyoyin Dijital. Tasirin Duniya.") shi ne babban taken BHD, wanda ke nuna gina jagorori da tsarin yanar gizo masu amfani ga mutane a ko’ina cikin duniya.',
    ],
  },
  'about-08': {
    question: 'Me "We Build Digital Value That Sells." yake nufi?',
    answer: [
      '"We Build Digital Value That Sells." ("Muna Gina Darajar Dijital Mai Sayarwa.") yana nufin kowane samfuri ko shafin yanar gizo ya kamata ya magance matsala ta gaske har abokan ciniki su ga darajarsa.',
    ],
  },
  'about-09': {
    question: 'Su wa za su iya amfana da BYHENRYDIGITALS?',
    answer: [
      'BYHENRYDIGITALS tana hidima ga rukunai biyu: (1) Mutane ɗaiɗaiku ta BHD Academy—masu farawa da ke koyon ilimin dijital, ɗalibai ’yan ƙasa da 18 da iyaye, da marubuta a shirin haɗin gwiwa na gaskiya; da (2) Ƙananan masana’antu ta BHD Services—masu neman shafukan yanar gizo, shafukan sauka, da tsarin aiki da ya dace da kasafinsu.',
    ],
  },
  'about-10': {
    question: 'Shin BHD dandalin ilimin dijital ne ko kamfanin ayyukan dijital?',
    answer: [
      'BYHENRYDIGITALS tana gudanar da duka biyun a ƙarƙashin alama guda: (1) BHD Academy — Koyi. Gina. Haɓaka. don mutane ɗaiɗaiku (kayayyakin Selar, Cibiyar Albarkatu, da Shirin Haɗin Gwiwa), da (2) BHD Services — Hanyoyin Dijital Masu Amfani Ga Kasuwanci (gina shafuka, shafukan sauka, no-code, da kayan aikin kasuwanci).',
    ],
  },
  'about-11': {
    question: 'Ina zan sami shafin yanar gizo na hukuma na BHD don ƙarin bayani?',
    answer: [
      'Kana kan shafin hukuma na BYHENRYDIGITALS a yanzu. Ziyarci Game da Mu, Kayayyaki, Ayyuka, ko bincika cikin Vanessa Detailed FAQ.',
    ],
    actionLabel: 'Je Game da Mu',
  },

  // B. Kayayyaki da Albarkatun Koyo na Dijital
  'prod-01': {
    question: 'Waɗanne kayayyakin dijital ne BYHENRYDIGITALS ke bayarwa a yanzu?',
    answer: [
      'BHD yana da kayayyaki uku a shagonsa na Selar (https://selar.com/m/BYHENRYDIGITALS): (1) Clicks-to-Cash, (2) Global Monetisation, da (3) Remote Jobs for Under 18.',
    ],
    actionLabel: 'Duba Kayayyaki',
  },
  'prod-02': {
    question: 'Menene Clicks-to-Cash kuma ga wa aka ƙera shi?',
    answer: [
      'Clicks-to-Cash jagorar dijital ce ta BHD a kan Selar don masu farawa da ke koyon yadda hankalin kan layi ke zama darajar kasuwanci bisa gaskiya.',
    ],
    actionLabel: 'Duba Clicks-to-Cash',
  },
  'prod-03': {
    question: 'Wace matsala Clicks-to-Cash ke magancewa?',
    answer: [
      'Yana taimaka wa masu farawa fahimtar tsarin juya ziyara zuwa saye da jerin matakai na aiki ba tare da yaudara ba.',
    ],
    actionLabel: 'BHD Store',
  },
  'prod-04': {
    question: 'Menene Global Monetisation kuma ga wa aka tsara shi?',
    answer: [
      'Global Monetisation samfuri ne na BHD kan Selar da ke mayar da hankali kan tsara ilimi da tayin dijital don kasuwannin duniya.',
    ],
    actionLabel: 'Duba Global Monetisation',
  },
  'prod-05': {
    question: 'Me Global Monetisation yake koya da matsalar da yake warwarewa?',
    answer: [
      'Yana nuna yadda masu ƙwarewa za su kai ga masu saye a ƙasashe daban-daban ta dandamalin dijital.',
    ],
    actionLabel: 'BHD Store',
  },
  'prod-06': {
    question: 'Menene Remote Jobs for Under 18 kuma wa ya dace da shi?',
    answer: [
      'Remote Jobs for Under 18 jagora ce a kan Selar game da ƙwarewar dijital da ta dace da shekaru ga matasa ’yan ƙasa da 18, ɗalibai, da iyaye.',
    ],
    actionLabel: 'Duba Remote Jobs for Under 18',
  },
  'prod-07': {
    question: 'Waɗanne ƙa’idojin tsaro ne a cikin Remote Jobs for Under 18?',
    answer: [
      'Yana koyar da zaɓar ƙwarewar da ta dace da shekaru, gina portfolio lafiya, bin dokokin dandamali, da rashin yin alƙawarin aiki kai tsaye.',
    ],
    actionLabel: 'BHD Store',
  },
  'prod-08': {
    question: 'Wane tsari da harshe ne kayayyakin Selar na BHD suke ciki a yanzu?',
    answer: [
      'Kayayyakin BHD da ke kan Selar a yanzu jagorori ne masu saukewa a harshen Turanci (English).',
    ],
  },
  'prod-09': {
    question: 'Ta yaya zan nemo kuma in sayi ingantaccen samfurin BHD?',
    answer: [
      'Ziyarci https://selar.com/m/BYHENRYDIGITALS kai tsaye ko danna "Duba a Selar" a shafin Kayayyaki.',
    ],
    actionLabel: 'BHD Store',
  },
  'prod-10': {
    question: 'Shin BHD yana ba da takaddun shaida ko tabbacin samun aiki?',
    answer: [
      'A’a. Kayayyakin Selar na BHD jagororin koyo ne na kan-da-kanka, ba kwasa-kwasan jami’a ko tabbacin aiki ba.',
    ],
  },
  'prod-11': {
    question: 'Ta yaya albarkatun BHD ke taimakawa wajen fahimtar kasuwancin dijital?',
    answer: [
      'Jagororin Selar da labaran Cibiyar Albarkatu suna bayyana yadda ƙirƙirar daraja ke gina tallace-tallace masu dorewa.',
    ],
    actionLabel: 'Buɗe Albarkatu',
  },
  'prod-12': {
    question: 'Me albarkatun BHD suka ƙunsa game da tallan haɗin gwiwa?',
    answer: [
      'Suna jaddada tallatawa ta gaskiya—bayyana wanda samfurin ya dace da shi ba tare da ƙarya ba.',
    ],
  },
  'prod-13': {
    question: 'Me albarkatun BHD suka ƙunsa game da aikin nesa da damammakin dijital?',
    answer: [
      'Suna mayar da hankali kan rubutu, gina shafukan yanar gizo, portfolio, da jagorar Remote Jobs for Under 18.',
    ],
  },
  'prod-14': {
    question: 'Shin BHD yana bayani kan ƙirƙirar kayayyakin dijital da kuɗaɗen ƙasashe?',
    answer: [
      'Eh. Global Monetisation yana bayyana yadda ake sayar da kayayyakin dijital a ƙasashe daban-daban ta dandali kamar Selar.',
    ],
  },
  'prod-15': {
    question: 'Shin BHD yana koyar da amfani da AI wajen ƙirƙirar abun ciki?',
    answer: [
      'Eh. Labaran AI & Fasaha suna bayyana amfani da AI wajen tsara rubutu tare da binciken ɗan Adam.',
    ],
  },

  // C. Shirin Haɗin Gwiwa na BHD
  'aff-01': {
    question: 'Menene Shirin Haɗin Gwiwa na BHD?',
    answer: [
      'Shirin Haɗin Gwiwa na BHD tsari ne na nema da zaɓe (mataki ɗaya, babu MLM) na BYHENRYDIGITALS. Masu sha’awa suna aika takardar nema don BHD ta duba, kuma waɗanda aka zaɓa aka amince da su suna samun kwamishon 35% akan tallace-tallacen Selar da suka cancanta.',
      'Ya bambanta gaba ɗaya da kayan ilimi na ₦8,000 Affiliate Starter Kit.',
    ],
    actionLabel: 'Duba Shirin Haɗin Gwiwa',
  },
  'aff-02': {
    question: 'Wane ne zai iya neman zama abokin haɗin gwiwa na BHD?',
    answer: [
      'Malaman dijital, marubuta, masu ƙirƙirar abun ciki, masu koyo, da duk mai son raba kayayyaki masu amfani bisa gaskiya na iya aika takardar nema don a duba.',
      'Aika takardar nema ba ya ba da garantin zaɓe—BYHENRYDIGITALS ke tantancewa, kuma waɗanda aka amince da su a hukuma kaɗai ne ke zama abokan haɗin gwiwar BHD.',
    ],
    actionLabel: 'Nemi Zama Abokin Haɗin Gwiwar BHD',
  },
  'aff-03': {
    question: 'Yaya Shirin Haɗin Gwiwa na BHD yake aiki mataki-mataki?',
    answer: [
      '1. Aika takardar nema ta BYHENRYDIGITALS Enquiry Form a shafin Tuntuɓe Mu, imel (byhenrydigitals@gmail.com), ko WhatsApp (+234 708 208 8942). Nema kyauta ne (₦0) ba tare da sayan komai ba.\n2. BYHENRYDIGITALS tana duba kowace takarda da kyau kuma tana zaɓar waɗanda suka dace. Nema ba ya ba da garantin karɓa, kuma ba ka buƙatar siyan ₦8,000 Starter Kit.\n3. Da zarar an zaɓe ka aka amince da kai a hukuma, raba hanyar haɗin Selar ka kuma sami 35% akan tallace-tallacen da suka cancanta.',
    ],
  },
  'aff-04': {
    question: 'Yaya abokan haɗin gwiwa ke samun kwamishon?',
    answer: [
      'Suna samun kwamishon ne kaɗai lokacin da mai saye ya kammala sayan samfurin Selar ta hanyar hanyar haɗin su.',
    ],
  },
  'aff-05': {
    question: 'Nawa ne adadin kwamishon ɗin haɗin gwiwa na BHD?',
    answer: [
      'Kashi 35% akan tallace-tallacen Selar da suka cancanta.',
    ],
  },
  'aff-06': {
    question: 'Waɗanne tallace-tallace ne suka cancanci kwamishon?',
    answer: [
      'Kammala sayan samfurin dijital a Selar ta hanyar hanyar haɗin abokin haɗin gwiwa da aka amince da shi.',
    ],
  },
  'aff-07': {
    question: 'Shin akwai kuɗin rajista don shiga shirin haɗin gwiwa?',
    answer: [
      'A’a. Rajista kyauta ce (₦0).',
    ],
  },
  'aff-08': {
    question: 'Shin dole ne mutum ya sayi samfuri kafin ya nemi shiga shirin?',
    answer: [
      'A’a. Babu sayan tilas ko kaɗan don neman Shirin Haɗin Gwiwa na BHD—ba ka buƙatar siyan ₦8,000 Affiliate Starter Kit don nema.',
    ],
  },
  'aff-09': {
    question: 'Shin Shirin Haɗin Gwiwa na BHD tsarin MLM ne?',
    answer: [
      'A’a. BHD ba MLM ba ne ko tsarin pyramid. Mataki ɗaya ne kai tsaye.',
    ],
  },
  'aff-10': {
    question: 'Shin akwai downline ko kwamishon na ɗaukar sabbin mutane?',
    answer: [
      'A’a. Babu downline ko kuɗin gayyatar wasu. Kwamishon yana fitowa ne daga tallace-tallacen Selar kaɗai.',
    ],
  },
  'aff-11': {
    question: 'Menene Affiliate Starter Kit na ₦8,000?',
    answer: [
      '₦8,000 Affiliate Starter Kit kayan ilimi ne na dijital mai zaman kansa da BYHENRYDIGITALS ke sayarwa ga masu farawa da ke son koyon yadda affiliate marketing ke aiki don tafiyarsu.',
      'Muhimmin Bayani: Siyan Starter Kit ba ya sanya ka zama abokin haɗin gwiwar BHD na hukuma kai tsaye, ba ya ba da garantin shiga Shirin Haɗin Gwiwa na BHD, kuma ba ya zama dole don nema.',
    ],
    actionLabel: 'Sami ₦8,000 Affiliate Starter Kit',
  },
  'aff-12': {
    question: 'Shin Starter Kit tilas ne don nema, zaɓe, ko samun kwamishon?',
    answer: [
      'A’a. Siyan ₦8,000 Affiliate Starter Kit daban yake kuma na zaɓi ne—ba a buƙatarsa don nema, samun zaɓe, ko kwamishon 35%. Siyansa ba ya ba da garantin shiga Shirin Haɗin Gwiwa na BHD.',
    ],
  },
  'aff-13': {
    question: 'Ta yaya abokan haɗin gwiwa za su tallata kayayyakin BHD?',
    answer: [
      'Ta hanyar bayanin gaskiya ba tare da spam ko alƙawuran ƙarya ba.',
    ],
  },
  'aff-14': {
    question: 'Ina abokan haɗin gwiwa za su sami cikakken bayanin kayayyaki?',
    answer: [
      'A shafin Kayayyaki na wannan gidan yanar gizon da kuma kan https://selar.com/m/BYHENRYDIGITALS.',
    ],
  },
  'aff-15': {
    question: 'Me ke faruwa idan abokin ciniki ya saya ta hanyar hanyar haɗina ta Selar?',
    answer: [
      'Selar yana bin diddigin tallan kai tsaye zuwa asusunka don lissafin kwamishon na 35%.',
    ],
  },
  'aff-16': {
    question: 'Yaya BHD ke duba takardun nema da tallace-tallace?',
    answer: [
      'BYHENRYDIGITALS tana duba kowace takardar nema da hannu—ba a ba da garantin zaɓe, waɗanda aka amince da su a hukuma kaɗai ne ke zama abokan haɗin gwiwar BHD. Selar tana tabbatar da tallace-tallacen da suka cancanta.',
    ],
  },
  'aff-17': {
    question: 'Ta yaya masu nema ko abokan haɗin gwiwa za su tuntuɓi BHD?',
    answer: [
      'Don aika takardar neman Shirin Haɗin Gwiwa na BHD ko tambaya, yi amfani da BYHENRYDIGITALS Enquiry Form a shafin Tuntuɓe Mu, imel (byhenrydigitals@gmail.com), ko WhatsApp (+234 708 208 8942).',
    ],
    actionLabel: 'Nemi Zama Abokin Haɗin Gwiwar BHD',
  },

  // D. Ayyukan Dijital da Gina Shafukan Yanar Gizo
  'srv-01': {
    question: 'Waɗanne ayyukan dijital ne BYHENRYDIGITALS ke bayarwa?',
    answer: [
      'BHD yana ba da: (1) Tsara & Gina Shafukan Yanar Gizo, (2) Shafukan Sauka (Landing Pages), (3) Haɓaka Kasancewa a Dijital, (4) Hanyoyin No-Code & AI, da (5) Tallafin Kasuwancin Dijital.',
    ],
    actionLabel: 'Binciki Ayyuka',
  },
  'srv-02': {
    question: 'Shin BHD yana gina shafukan yanar gizo na kamfanoni da na mutane?',
    answer: [
      'Eh. BHD yana gina shafukan da ke aiki da sauri a waya, kwamfutar hannu, da babbar kwamfuta.',
    ],
  },
  'srv-03': {
    question: 'Menene Landing Pages kuma yaushe ya kamata a zaɓe su?',
    answer: [
      'Shafi ne guda ɗaya mai manufa ɗaya don bayyana tayi guda ɗaya da jagorantar baƙo zuwa mataki guda.',
    ],
  },
  'srv-04': {
    question: 'Shin BHD zai iya taimakawa wajen haɗa shagon kayayyakin dijital?',
    answer: [
      'Eh. BHD yana taimakawa wajen tsara shagunan Selar da hanyoyin biyan kuɗi.',
    ],
  },
  'srv-05': {
    question: 'Yaya BHD ke tsara shafin yanar gizo?',
    answer: [
      'Yana fara tsara tsarin menu, bayanai, da tafiyar mai amfani kafin ƙawatawa.',
    ],
  },
  'srv-06': {
    question: 'Shin BHD yana yin gwaji da wallafa shafin?',
    answer: [
      'Eh, gami da gwaji akan waya da kwamfuta da duba fom da hanyoyin haɗi.',
    ],
  },
  'srv-07': {
    question: 'Waɗanne haɗe-haɗe BHD zai iya yi a shafin yanar gizo?',
    answer: [
      'Fom masu inganci, webhooks, haɗin Selar, maɓallan imel/WhatsApp, da tsarin no-code.',
    ],
  },
  'srv-08': {
    question: 'Shin BHD yana haɗa chatbot ga abokan ciniki, kuma shin BHD yana da nasa AI assistant yanzu?',
    answer: [
      'BHD na iya haɗa chatbot idan abokin ciniki ya nema don shafinsa.',
      'Amma BYHENRYDIGITALS da kansa BA ya amfani da AI chatbot a wannan shafin yanzu—Vanessa cibiyar binciken FAQ ce kaɗai.',
    ],
  },
  'srv-09': {
    question: 'Ta yaya Haɓaka Kasancewa a Dijital ke taimaka wa alama?',
    answer: [
      'Yana daidaita shafin yanar gizo, shago, da shafukan sada zumunta su zama masu aminci ga baƙi.',
    ],
  },
  'srv-10': {
    question: 'Me ke cikin Tallafin Kasuwancin Dijital na BHD?',
    answer: [
      'Jagorar fasaha da tsari don masu kafa kasuwanci a kan layi.',
    ],
  },
  'srv-11': {
    question: 'Yaya ake ƙayyade farashin ayyukan gidan yanar gizo na BHD?',
    answer: [
      'Ana ƙayyade farashi gwargwadon buƙatun kowane aiki yayin tattaunawa. Babu ƙayyadadden farashi a nan.',
    ],
    actionLabel: 'Tattauna Aikinka',
  },
  'srv-12': {
    question: 'Waɗanne bayanai masu neman aiki za su bayar?',
    answer: [
      'Raba manufarka, shafukan da kake buƙata, da lokaci ta shafin Tuntuɓe Mu, imel (byhenrydigitals@gmail.com), ko WhatsApp (+234 708 208 8942).',
    ],
  },

  // E. Kasuwancin Dijital da Samar da Kuɗi
  'ent-01': {
    question: 'Menene kasuwancin dijital?',
    answer: [
      'Gina kasuwancin da ke ba da daraja ta kan layi kamar jagorori, ayyukan yanar gizo, ko shawarwari.',
    ],
  },
  'ent-02': {
    question: 'Menene tallan haɗin gwiwa (affiliate marketing)?',
    answer: [
      'Ba da shawarar samfurin wani ta hanyar hanyar haɗi ta musamman don samun kwamishon akan sayan gaskiya.',
    ],
  },
  'ent-03': {
    question: 'Menene ƙirƙirar kayayyakin dijital?',
    answer: [
      'Juya ilimi ko jagora zuwa fayiloli masu saukewa a kan layi ba tare da jigilar kaya ba.',
    ],
  },
  'ent-04': {
    question: 'Me samar da kuɗi ta kan layi (online monetisation) yake nufi?',
    answer: [
      'Samar da kuɗi na halal daga ƙwarewa, jagorori, ko ayyukan dijital ta hanyar warware matsaloli.',
    ],
  },
  'ent-05': {
    question: 'Menene tallace-tallacen dijital?',
    answer: [
      'Kammala sayar da kayayyaki ko ayyuka ta intanet bisa gaskiya da bayyanannun bayanai.',
    ],
  },
  'ent-06': {
    question: 'Menene sales funnel?',
    answer: [
      'Hanyar da mai saye ke bi daga gano kamfani har zuwa saye ko aika tambaya.',
    ],
  },
  'ent-07': {
    question: 'Menene banbanci tsakanin landing page da cikakken shafin yanar gizo?',
    answer: [
      'Cikakken shafi yana gabatar da duka kamfanin a shafuka da yawa; landing page shafi ɗaya ne ga manufa guda.',
    ],
  },
  'ent-08': {
    question: 'Menene shagon dijital (digital storefront)?',
    answer: [
      'Shago a kan layi inda ake lissafa kayayyakin dijital tare da isarwa kai tsaye, kamar shagon BHD a Selar.',
    ],
  },
  'ent-09': {
    question: 'Menene samun kuɗi a kuɗaɗen ƙasashe daban-daban (multi-currency)?',
    answer: [
      'Ikon sayar da kayayyaki ga masu saye a ƙasashe daban-daban ta dandali kamar Selar da ke karɓar kuɗaɗe daban-daban.',
    ],
  },
  'ent-10': {
    question: 'Waɗanne ƙwarewa ne ke taimaka wa masu farawa?',
    answer: [
      'Rubutu mai kyau, ilimin dijital, tsara shafin yanar gizo, tallatawa ta gaskiya, da kayan aikin zamani.',
    ],
  },
  'ent-11': {
    question: 'Me ya kamata masu farawa su fahimta kafin fara kasuwancin kan layi?',
    answer: [
      'Yana buƙatar ƙwarewa, haƙuri, da aiki tukuru. BHD ba ya alƙawarin kuɗi cikin dare ɗaya.',
    ],
  },

  // F. AI da Fasahar Dijital
  'ai-01': {
    question: 'Ta yaya AI ke taimakawa wajen ƙirƙirar abun ciki?',
    answer: [
      'Yana taimakawa wajen tsara ra’ayoyi da rubutu cikin sauri tare da binciken ɗan Adam.',
    ],
  },
  'ai-02': {
    question: 'Ta yaya ake amfani da AI wajen ƙirƙirar bidiyo?',
    answer: [
      'Wajen rubuta labari da jera bidiyo tare da kulawar mai ƙirƙira.',
    ],
  },
  'ai-03': {
    question: 'Ta yaya kayan aikin dijital ke taimaka wa ƙananan ƙungiyoyi?',
    answer: [
      'Suna rage kurakurai ta hanyar tsara ayyuka da fom.',
    ],
  },
  'ai-04': {
    question: 'Waɗanne kayan aikin gina shafukan yanar gizo BHD ke amfani da su?',
    answer: [
      'React, TypeScript, Tailwind CSS, da Express inda ake buƙatar uwar garke.',
    ],
  },
  'ai-05': {
    question: 'Menene hanyoyin no-code da low-code?',
    answer: [
      'Kayan aikin haɗa fom, shaguna, da sanarwa ba tare da rubuta dogon lambar software ba.',
    ],
  },
  'ai-06': {
    question: 'Menene banbanci tsakanin sabis na chatbot na abokan ciniki da shafin BHD?',
    answer: [
      'BHD zai iya haɗa chatbot ga abokin ciniki idan ya buƙata, amma BHD ba ya amfani da AI chatbot a shafinsa—Vanessa cibiyar FAQ ce kaɗai.',
    ],
  },
  'ai-07': {
    question: 'Me amfani da AI cikin gaskiya yake nufi a BHD?',
    answer: [
      'Rashin ƙirƙirar labaran ƙarya, kiyaye sirrin bayanai, da duba aikin da idon ɗan Adam.',
    ],
  },
  'ai-08': {
    question: 'Menene banbanci tsakanin rubutun AI da aikin da ɗan Adam ya duba?',
    answer: [
      'Aikin da ɗan Adam ya duba yana tabbatar da gaskiya da daidaiton haruffa a harsuna.',
    ],
  },
  'ai-09': {
    question: 'Ta yaya BHD ke raba ayyukan yanzu, kayan aiki, da zaɓuɓɓukan aiki na musamman?',
    answer: [
      'Ayyukan yanzu: shafuka, no-code, da jagororin Selar. Kayan aiki: fasahar yanar gizo, Selar, da kayan aikin AI. Ana tsara ayyuka na musamman bisa buƙatar abokin ciniki.',
    ],
  },

  // G. Harsuna da Albarkatun Koyo
  'lang-01': {
    question: 'Waɗanne harsuna shafin BYHENRYDIGITALS ke tallafawa a yanzu?',
    answer: [
      'Turanci (English), Igbo, Yorùbá, Hausa, Faransanci (French), da Nigerian Pidgin suna aiki a dukan shafin da Vanessa FAQ.',
    ],
  },
  'lang-02': {
    question: 'Shin akwai albarkatun koyo a harshen Turanci?',
    answer: [
      'Eh, Turanci shi ne babban harshen shafin, kuma duka kayayyakin Selar suna cikin Turanci.',
    ],
  },
  'lang-03': {
    question: 'Shin BHD yana da albarkatu da shafi a harshen Faransanci?',
    answer: [
      'Eh, dukan shafin da Vanessa FAQ suna cikin Faransanci, amma kayayyakin Selar da ake saukewa suna cikin Turanci a yanzu.',
    ],
  },
  'lang-04': {
    question: 'Ta yaya ake samun shiga a harshen Igbo?',
    answer: [
      'Zaɓar Igbo a menu na harshe yana canza dukan shafin da Vanessa FAQ zuwa Igbo.',
    ],
  },
  'lang-05': {
    question: 'Ta yaya ake samun shiga a harshen Yorùbá?',
    answer: [
      'Zaɓar Yorùbá yana fassara shafin da Vanessa FAQ zuwa Yorùbá tare da alamomin sauti masu kyau.',
    ],
  },
  'lang-06': {
    question: 'Ta yaya ake samun shiga a harshen Hausa?',
    answer: [
      'Zaɓar Hausa yana canza shafin da Vanessa FAQ zuwa Hausa nan take ba tare da sake loda shafi ba.',
    ],
  },
  'lang-09': {
    question: 'Ta yaya ake samun shiga a harshen Nigerian Pidgin?',
    answer: [
      'Zaɓar Nigerian Pidgin a menu na harshe yana canza dukan shafin, labarai, da Vanessa FAQ zuwa Nigerian Pidgin nan take. Kayayyakin Selar da ake saukewa suna cikin Turanci a yanzu.',
    ],
    extraKeywords: ['nigerian pidgin', 'pidgin'],
  },
  'lang-07': {
    question: 'Shin an fassara kayayyakin Selar na BHD zuwa Faransanci, Igbo, Yorùbá, Hausa, ko Nigerian Pidgin?',
    answer: [
      'A’a, har yanzu kayayyakin Selar guda uku suna cikin harshen Turanci ne kaɗai.',
    ],
  },
  'lang-08': {
    question: 'Ta yaya baƙo zai gane ainihin harshen samfuri kafin ya saya?',
    answer: [
      'Kowane samfuri yana nuna "Harshen Abun Cikin Samfuri" a shafin Kayayyaki da kan Selar.',
    ],
    actionLabel: 'Duba Kayayyaki',
  },

  // H. Saye, Biya da Tallafin Abokin Ciniki
  'pay-01': {
    question: 'Ina abokan ciniki za su sayi kayayyakin BYHENRYDIGITALS?',
    answer: [
      'A shagon Selar na hukuma kaɗai: https://selar.com/m/BYHENRYDIGITALS.',
    ],
    actionLabel: 'BHD Store',
  },
  'pay-02': {
    question: 'Yaya biyan kuɗi a Selar yake aiki?',
    answer: [
      'Selar yana nuna farashi a kuɗin ƙasarka kuma yana karɓar biya cikin aminci.',
    ],
  },
  'pay-03': {
    question: 'Ta yaya abokan ciniki ke samun kayayyakin bayan biya?',
    answer: [
      'Selar yana ba da hanyar saukewa kai tsaye kuma ya aika rasit zuwa imel ɗinka.',
    ],
  },
  'pay-04': {
    question: 'Me za a yi idan matsala ta faru wajen biya ko saukewa?',
    answer: [
      'Tuntuɓi BHD a byhenrydigitals@gmail.com ko WhatsApp (+234 708 208 8942) tare da bayanin cinikinka.',
    ],
    actionLabel: 'Tuntuɓi Tallafi',
  },
  'pay-05': {
    question: 'Shin BHD yana da ƙayyadaddun dokokin mayar da kuɗi a wannan shafin?',
    answer: [
      'A’a, duk sharuɗɗan biya suna bin dokokin Selar da bayanan kowane samfuri.',
    ],
  },
  'pay-06': {
    question: 'Ta yaya mutum zai yi tambaya game da samfuri kafin ya saya?',
    answer: [
      'Ta Vanessa FAQ, shafin Tuntuɓe Mu, byhenrydigitals@gmail.com, ko WhatsApp (+234 708 208 8942).',
    ],
  },
  'pay-07': {
    question: 'Ta yaya zan tuntuɓi BYHENRYDIGITALS kai tsaye?',
    answer: [
      'Imel: byhenrydigitals@gmail.com | WhatsApp: +234 708 208 8942 (https://wa.me/2347082088942) | Fom ɗin shafin Tuntuɓe Mu.',
    ],
    actionLabel: 'Buɗe Tuntuɓe Mu',
  },
  'pay-08': {
    question: 'Ina za a sami sabbin sanarwoyi na hukuma daga BHD?',
    answer: [
      'A wannan shafin, shagon Selar, da shafukan Instagram, TikTok, X, da Facebook na BHD.',
    ],
  },

  // I. Kewayawa da Shafukan Sada Zumunta
  'nav-01': {
    question: 'Ta yaya zan kewaya shafin yanar gizo na BYHENRYDIGITALS?',
    answer: [
      'Yi amfani da menu na sama ko ƙasa don shiga Gida, Game da Mu, Kayayyaki, Shirin Haɗin Gwiwa, Ayyuka, Albarkatu, da Tuntuɓe Mu, sannan danna kumfar "Tambayoyin BHD" a kusurwar ƙasa ta dama don bincika Vanessa FAQ a kowane lokaci.',
    ],
  },
  'nav-02': {
    question: 'Ina zan sami kayayyaki da labaran koyo?',
    answer: [
      'A shafin Kayayyaki (/products) da Albarkatu (/resources).',
    ],
  },
  'nav-03': {
    question: 'Ina zan duba ayyukan BHD in nemi tattaunawa?',
    answer: [
      'A shafin Ayyuka (/services).',
    ],
  },
  'nav-04': {
    question: 'Ta yaya zan yi amfani da maɓallin zaɓin harshe?',
    answer: [
      'Danna maɓallin Harshe a kusurwar dama ta sama don zaɓar English, Igbo, Yorùbá, Hausa, French, ko Nigerian Pidgin.',
    ],
  },
  'nav-05': {
    question: 'Ina zan sami Vanessa — Cikakken FAQ na BHD?',
    answer: [
      'Danna kumfar "Tambayoyin BHD" da ke yawo a kusurwar ƙasa ta dama a kowane shafi, ko danna "Buɗe FAQ na Vanessa" a ƙasan shafin.',
    ],
  },
  'nav-06': {
    question: 'Yaya zan shiga shafin Tuntuɓe Mu da maɓallan Imel / WhatsApp?',
    answer: [
      'Shiga /contact ko danna maɓallan "Aiko Mana da Imel" da "Yi Hira da Mu a WhatsApp" a ƙasan shafin ko a FAQ.',
    ],
  },
  'nav-07': {
    question: 'Waɗanne shafukan sada zumunta ne BYHENRYDIGITALS ke amfani da su?',
    answer: [
      'Instagram (https://www.instagram.com/byhenrydigitals/), TikTok (https://www.tiktok.com/@byhenrydigitals), X (https://x.com/BYHENRYDIGITALS), da Facebook (https://www.facebook.com/share/1A8GpCyCt3/).',
    ],
  },
  'nav-08': {
    question: 'Yaya neman bayani da neman shirin haɗin gwiwa ke aiki a shafin BHD?',
    answer: [
      'Shafin Tuntuɓe Mu yana da BYHENRYDIGITALS Enquiry Form na hukuma tare da imel (byhenrydigitals@gmail.com) da WhatsApp (+234 708 208 8942) don tambayoyin ayyuka, kayayyaki, da neman Shirin Haɗin Gwiwa na BHD.',
    ],
  },

  // J. Vanessa Cikakken FAQ na BHD
  'van-01': {
    question: 'Menene Vanessa — Cikakken FAQ na BHD?',
    answer: [
      'Vanessa cibiyar bayanai da FAQ ce mai bincike ta BYHENRYDIGITALS ("Jagoranka Mai Sauƙin Bincike Don Komai Game da BYHENRYDIGITALS") mai rukunoni 10 da tambayoyi sama da 100.',
    ],
  },
  'van-02': {
    question: 'Shin Vanessa AI chatbot ce ko mataimakiyar AI?',
    answer: [
      'A’a. Vanessa BA AI chatbot ba ce. BYHENRYDIGITALS ba ya amfani da AI chatbot a shafinsa yanzu—an cire Botpress gaba ɗaya.',
    ],
  },
  'van-03': {
    question: 'Yaya injin binciken Vanessa FAQ yake aiki?',
    answer: [
      'Yana bincika tambayoyi, amsoshi, sunayen rukunoni, da kalmomin bincike, kuma yana fahimtar ɓangaren kalma da ƙananan kurakuran rubutu.',
    ],
  },
  'van-04': {
    question: 'Ta yaya baƙi za su bincika ko tace batutuwa a Vanessa?',
    answer: [
      'Rubuta kalma a akwatin bincike, zaɓi tambayar misali, ko zaɓi ɗaya daga cikin rukunoni 10.',
    ],
  },
  'van-05': {
    question: 'Me ke faruwa idan babu amsar da ta dace da binciken?',
    answer: [
      'Za a nuna maɓallin sake saita bincike da hanyoyin tuntuɓar BHD kai tsaye ta Imel (byhenrydigitals@gmail.com) da WhatsApp (+234 708 208 8942).',
    ],
  },
  'van-06': {
    question: 'Shin Vanessa FAQ tana canza harshe idan na canza harshen shafin?',
    answer: [
      'Eh, tana canzawa nan take tsakanin English, Igbo, Yorùbá, Hausa, French, da Nigerian Pidgin.',
    ],
  },
  'van-07': {
    question: 'Ta yaya ake kula da bayanan Vanessa FAQ da tabbatar da su?',
    answer: [
      'Kowane rikodi yana da lamba ta musamman, harshe, da matsayin amincewa (`published`) don tabbatar da ingancin bayanai.',
    ],
  },
};

export const faqHa: FaqBundle = {
  language: 'ha',
  bubbleLabel: 'Tambayoyin BHD',
  closeAriaLabel: 'Rufe Vanessa FAQ',
  kicker: 'Cibiyar Bayanan BHD Mai Bincike',
  heading: 'VANESSA — CIKAKKEN FAQ NA BHD',
  subheading: 'Jagoranka mai sauƙin bincike don komai game da BYHENRYDIGITALS.',
  nonAiNotice:
    'Rumbun bayanan FAQ tsararre — sahihin bayanin BHD (ba chatbot ko mataimakiyar AI ba ne).',
  searchPlaceholder: 'Bincika komai game da BYHENRYDIGITALS...',
  searchAriaLabel: 'Bincika komai game da BYHENRYDIGITALS',
  clearSearchLabel: 'Share',
  allCategoriesLabel: 'Duk Rukunoni',
  categoriesHeading: 'Rukunonin FAQ (A–J)',
  exampleQueriesTitle: 'Binciken da aka fi yi:',
  exampleQueries: [
    'Menene BYHENRYDIGITALS?',
    'Clicks-to-Cash',
    'kwamishon 35%',
    'Zama abokin haɗin gwiwa',
    'Gina shafin yanar gizo',
    'Kasuwancin dijital',
    'Amfani da AI cikin gaskiya',
    'Albarkatun Faransanci',
    'Saya a Selar',
    'Shin Vanessa AI chatbot ce?',
  ],
  resultsMatchingLabel: 'amsoshi da suka dace',
  allTopicsCountLabel: 'bayanan FAQ da aka buga',
  verifiedStatusLabel: 'An Tabbatar',
  relatedQuestionsLabel: 'Tambayoyi Masu Alaƙa',
  noResultsTitle: 'Ba a sami amsar da ta dace da bincikenka ba',
  noResultsBody:
    'Ba mu sami ainihin abin da ya dace a cikin bayananmu ba. Gwada wata kalma, sake saita rukuni, ko tuntuɓi BYHENRYDIGITALS a ƙasa.',
  resetFiltersLabel: 'Nuna Dukkan FAQ',
  escalationTitle: 'Ba Ka Sami Amsarka Ba?',
  escalationBody:
    'Tuntuɓi BYHENRYDIGITALS kai tsaye ta imel, WhatsApp, ko shafin Tuntuɓe Mu.',
  emailButtonLabel: 'Aiko Mana da Imel',
  whatsappButtonLabel: 'WhatsApp',
  contactPageButtonLabel: 'Buɗe Fom ɗin Tuntuɓa',
  expandAllLabel: 'Faɗaɗa Duka',
  collapseAllLabel: 'Rufe Duka',
  categories: {
    'about-bhd': {
      title: 'A. Game da BYHENRYDIGITALS',
      description: 'Asali, wanda ya kafa, manufa, da hangen nesa.',
    },
    'products-resources': {
      title: 'B. Kayayyaki da Albarkatun Koyo',
      description: 'Jagororin Selar, masu amfani, da harshen abun ciki.',
    },
    'affiliate-programme': {
      title: 'C. Shirin Haɗin Gwiwa na BHD',
      description: 'Nema kyauta, tantancewar zaɓe ta BHD, kwamishon 35%, babu MLM, da bayanin Starter Kit.',
    },
    'web-services': {
      title: 'D. Ayyukan Dijital da Gina Shafukan Yanar Gizo',
      description: 'Shafuka, landing pages, shagunan dijital, da tallafi.',
    },
    'entrepreneurship-monetisation': {
      title: 'E. Kasuwancin Dijital da Samar da Kuɗi',
      description: 'Bayanai masu sauƙi ga masu farawa ba tare da yaudara ba.',
    },
    'ai-technology': {
      title: 'F. AI da Fasahar Dijital',
      description: 'Kayan aikin abun ciki, no-code, AI cikin gaskiya, da duban ɗan Adam.',
    },
    'languages-learning': {
      title: 'G. Harsuna da Albarkatun Koyo',
      description: 'Turanci, Igbo, Yorùbá, Hausa, Faransanci, Nigerian Pidgin da harshen samfuri.',
    },
    'payments-purchases': {
      title: 'H. Saye, Biya da Tallafin Abokin Ciniki',
      description: 'Biyan kuɗin Selar, saukewa, da hanyoyin tuntuɓar BHD.',
    },
    'navigation-social': {
      title: 'I. Kewayawa da Shafukan Sada Zumunta',
      description: 'Ɓangarorin shafi, zaɓin harshe, da shafukan sada zumunta.',
    },
    'vanessa-faq': {
      title: 'J. Vanessa Cikakken FAQ na BHD',
      description: 'Yadda binciken FAQ ke aiki da tantance bayanai.',
    },
  },
  entries: composeFaqEntries('ha', recordsHa),
};
