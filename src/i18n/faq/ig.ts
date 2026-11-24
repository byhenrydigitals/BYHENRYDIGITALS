import { composeFaqEntries } from './recordsMeta';
import { FaqBundle, FaqLocalizedRecord } from './types';

const recordsIg: Record<string, FaqLocalizedRecord> = {
  // A. Maka BYHENRYDIGITALS
  'about-01': {
    question: 'Gịnị bụ BYHENRYDIGITALS?',
    answer: [
      'BYHENRYDIGITALS (BHD) bụ akara ngwọta dijitalụ na mmụta nke Henry (Coach Henry) tọrọ ntọala ya iji belata ihe mgbochi na nsonye dijitalụ. Ọ na-ejikọta ngalaba abụọ pụrụ iche: BHD Academy maka ndị mmadụ n’otu n’otu na-amụ nkà dijitalụ, na BHD Services maka obere azụmaahịa na ndị na-amalite azụmaahịa.',
      'N’ime ngalaba abụọ a, BHD na-elekwasị anya na mmụta dijitalụ bara uru, ngwaahịa Selar doro anya, ohere njikọ kwụ ọtọ, na ngwọta weebụ dabere na mkpa azụmaahịa.',
    ],
    extraKeywords: ['nkọwa', 'bhd academy', 'bhd services', 'mmụta dijitalụ', 'ngwọta'],
    actionLabel: 'Gụọ Maka BHD',
  },
  'about-02': {
    question: 'Gịnị ka BHD pụtara?',
    answer: [
      'BHD bụ aha mkpirisi gọọmentị maka BYHENRYDIGITALS.',
      'Ị ga-ahụ "BHD" n’akụkụ "BYHENRYDIGITALS" n’ofe menu weebụsaịtị, ndepụta ngwaahịa, Mmemme Njikọ BHD, na Ajụjụ Vanessa Zuru Ezu.',
    ],
  },
  'about-03': {
    question: 'Onye tọrọ ntọala BYHENRYDIGITALS?',
    answer: [
      'Onye tọrọ ntọala BYHENRYDIGITALS bụ Henry, onye a maara nke ọma dị ka Coach Henry.',
      'O hiwere BHD iji mee ka mmụta dijitalụ bara uru, mmepe weebụsaịtị, na ụzọ doro anya isi mepụta uru n’ịntanetị dịrị mmadụ niile mfe.',
    ],
    actionLabel: 'Mata Onye Tọrọ Ntọala',
  },
  'about-04': {
    question: 'Gịnị bụ ebumnuche BYHENRYDIGITALS?',
    answer: [
      'Ebumnuche BHD bụ iwedata ihe mgbochi dị n’inweta nkà dijitalụ bara uru na ngwọta weebụ pụrụ ịdabere na ya site na mmụta doro anya, azụmaahịa doro anya, na nduzi eziokwu.',
    ],
    actionLabel: 'Lee Ebumnuche Anyị',
  },
  'about-05': {
    question: 'Kedu nsogbu BHD na-achọ idozi?',
    answer: [
      'Ọtụtụ ndị na-achọ ohere n’ịntanetị na-ezute nkwa ụgha, ọnụ ahịa na-edoghị anya, atụmatụ MLM, ma ọ bụ weebụsaịtị na-adịghị arụ ọrụ nke ọma.',
      'BHD na-edozi nke a site na mmụta na-enweghị mkpọtụ ụgha, mmemme njikọ 35% ozugbo na-enweghị MLM, na weebụsaịtị e wuru maka ịdị irè.',
    ],
  },
  'about-06': {
    question: 'Gịnị bụ ọhụụ BYHENRYDIGITALS?',
    answer: [
      'Ọhụụ BHD bụ ịzụlite gburugburu dijitalụ mba ụwa a tụkwasịrị obi nke na-ejikọ ndị na-amụ ihe, ndị na-emepụta ihe, na azụmaahịa gafee asụsụ na ókèala — egosipụtara ugbu a n’asụsụ isii: English, Igbo, Yorùbá, Hausa, French, na Nigerian Pidgin.',
    ],
  },
  'about-07': {
    question: 'Gịnị ka "Digital Solutions. Global Impact." pụtara?',
    answer: [
      '"Digital Solutions. Global Impact." ("Ngwọta Dijitalụ. Mmetụta Zuru Ụwa Ọnụ.") bụ okwu mkpọsa isi nke BHD, nke na-egosi iwu akụrụngwa mmụta na sistemụ weebụ bara uru maka ndị mmadụ n’ụwa niile.',
    ],
  },
  'about-08': {
    question: 'Gịnị ka "We Build Digital Value That Sells." pụtara?',
    answer: [
      '"We Build Digital Value That Sells." ("Anyị Na-ewu Uru Dijitalụ Na-ere Ahịa.") pụtara na ngwaahịa dijitalụ ma ọ bụ weebụsaịtị kwesịrị idozi nsogbu n’ezie ka ndị ahịa hụ uru ya n’onwe ha.',
    ],
  },
  'about-09': {
    question: 'Onye nwere ike irite uru na BYHENRYDIGITALS?',
    answer: [
      'BYHENRYDIGITALS na-ejere ndị mmadụ abụọ ozi: (1) Ndị mmadụ n’otu n’otu site na BHD Academy—ndị mbido na-amụ nkà dijitalụ, ndị nne na nna na ụmụ akwụkwọ na-achọ ntuziaka kwesịrị afọ, na ndị okike nwere mmasị na mmemme njikọ eziokwu; na (2) Obere azụmaahịa site na BHD Services—ndị chọrọ weebụsaịtị bara uru, ibe nnabata, na nhazi usoro ọrụ dabara na ego ha.',
    ],
  },
  'about-10': {
    question: 'BHD ọ bụ ikpo okwu mmụta dijitalụ ka ọ bụ akara ọrụ dijitalụ?',
    answer: [
      'BYHENRYDIGITALS na-arụ ha abụọ nke ọma n’okpuru otu akara: (1) BHD Academy — Mụta. Wulite. Too. maka ndị mmadụ n’otu n’otu (ngwaahịa Selar, Ebe Ihe Ọmụma, na Mmemme Njikọ BHD), na (2) BHD Services — Ngwọta Dijitalụ Bara Uru Maka Azụmaahịa (mmepe weebụsaịtị, ibe nnabata, ọnụnọ dijitalụ, no-code, na ngwaọrụ azụmaahịa).',
    ],
  },
  'about-11': {
    question: 'Ebee ka m ga-ahụ weebụsaịtị gọọmentị BHD ma mụtakwuo maka ya?',
    answer: [
      'Ị nọ ugbu a na weebụsaịtị gọọmentị nke BYHENRYDIGITALS. Gaa na ibe Maka Anyị, Ngwaahịa, Ọrụ Anyị, ma ọ bụ chọọ n’Ajụjụ Vanessa Zuru Ezu.',
    ],
    actionLabel: 'Gaa na Maka Anyị',
  },

  // B. Ngwaahịa na Akụrụngwa Mmụta Dijitalụ
  'prod-01': {
    question: 'Kedu ngwaahịa dijitalụ e nyochara BYHENRYDIGITALS na-enye ugbu a?',
    answer: [
      'BHD nwere ngwaahịa atọ dị na ụlọ ahịa Selar gọọmentị ya (https://selar.com/m/BYHENRYDIGITALS): (1) Clicks-to-Cash, (2) Global Monetisation, na (3) Remote Jobs for Under 18.',
      'A na-ahụ ọnụ ahịa dị ugbu a na nkọwa zuru ezu ozugbo na Selar.',
    ],
    actionLabel: 'Lee Ndepụta Ngwaahịa',
  },
  'prod-02': {
    question: 'Gịnị bụ Clicks-to-Cash ma onye ka e mere ya maka ya?',
    answer: [
      'Clicks-to-Cash bụ ntuziaka dijitalụ BHD dị na Selar e mere iji kọwaa ntụgharị dijitalụ bara uru na ntọala ahịa dijitalụ doro anya maka ndị mbido.',
    ],
    actionLabel: 'Lee Clicks-to-Cash',
  },
  'prod-03': {
    question: 'Kedu nsogbu Clicks-to-Cash na-edozi ma gịnị ka ndị na-amụ ihe ga-aghọta?',
    answer: [
      'Ọ na-enyere ndị mbido aka ịghọta otu nlebara anya n’ịntanetị si aghọ uru ngwaahịa n’ezie site na ndepụta nkwado na usoro ahịa doro anya.',
    ],
    actionLabel: 'BHD Store',
  },
  'prod-04': {
    question: 'Gịnị bụ Global Monetisation ma onye ka e wuru ya maka ya?',
    answer: [
      'Global Monetisation bụ ngwaahịa BHD na Selar na-elekwasị anya n’ịhazi ihe ọmụma na ngwaahịa dijitalụ maka ahịa mba ụwa.',
      'Ọ dị mma maka ndị okike na ndị nkuzi chọrọ iru ndị ahịa gafee ókèala.',
    ],
    actionLabel: 'Lee Global Monetisation',
  },
  'prod-05': {
    question: 'Kedu nsogbu Global Monetisation na-edozi ma gịnị ka ọ na-akụzi?',
    answer: [
      'Ọ na-egosi otu e si agbasawanye site n’ahịa obodo gaa n’ụwa niile site n’usoro ikpo okwu dijitalụ na ịnweta zuru ụwa ọnụ.',
    ],
    actionLabel: 'BHD Store',
  },
  'prod-06': {
    question: 'Gịnị bụ Remote Jobs for Under 18 ma onye kwesịrị iji ya?',
    answer: [
      'Remote Jobs for Under 18 bụ ntuziaka bara uru na Selar maka nkà dijitalụ kwesịrị afọ na ohere n’ịntanetị ziri ezi maka ndị na-amụ ihe na-erubeghị afọ 18, ụmụ akwụkwọ, na ndị nne na nna.',
    ],
    actionLabel: 'Lee Remote Jobs for Under 18',
  },
  'prod-07': {
    question: 'Kedu ụkpụrụ nchekwa na nkà dị na Remote Jobs for Under 18?',
    answer: [
      'Ọ na-akụzi ịchọpụta nkà dijitalụ kwesịrị afọ, iwulite pọtụfoliyo n’ụzọ dị nchebe, ịgbaso iwu ikpo okwu, na inwe atụmanya eziokwu. Ọ naghị ekwe nkwa ọrụ akpaaka.',
    ],
    actionLabel: 'BHD Store',
  },
  'prod-08': {
    question: 'Kedu usoro na asụsụ e ji bipụta ngwaahịa Selar nke BHD ugbu a?',
    answer: [
      'Ngwaahịa dijitalụ BHD dị na Selar ugbu a bụ ntuziaka a na-ebudata n’asụsụ Bekee (English). A na-egosipụta ụdị faịlụ na nkọwa zuru ezu na Selar tupu ịkwụ ụgwọ.',
    ],
  },
  'prod-09': {
    question: 'Kedu ka m ga-esi chọta ma zụta ngwaahịa BHD e nyochara?',
    answer: [
      'Gaa na ụlọ ahịa Selar gọọmentị (https://selar.com/m/BYHENRYDIGITALS) ma ọ bụ pịa "Lee na Selar" na ibe Ngwaahịa.',
    ],
    actionLabel: 'BHD Store',
  },
  'prod-10': {
    question: 'BHD ọ na-enye asambodo, klas ndụ, ma ọ bụ nkwa inweta ọrụ n’akwụkwọ ndị a?',
    answer: [
      'Mba. Ngwaahịa dijitalụ BHD dị na Selar bụ ntuziaka mmụta onwe onye, ọ bụghị kọọsụ asambodo mahadum ma ọ bụ ọrụ nkwa ọrụ.',
    ],
  },
  'prod-11': {
    question: 'Kedu ka akụrụngwa BHD si enyere aka ịghọta azụmaahịa dijitalụ na ire ahịa dijitalụ?',
    answer: [
      'Ntuziaka Selar na edemede dị na Ebe Ihe Ọmụma na-akọwa otu ịmepụta uru, nghọta ndị ahịa, na usoro weebụ doro anya si eme ka ire ahịa dijitalụ na-aga n’ihu.',
    ],
    actionLabel: 'Mepee Ebe Ihe Ọmụma',
  },
  'prod-12': {
    question: 'Gịnị ka akụrụngwa mmụta BHD na-ekwu maka ahịa njikọ na ịkpata ego n’ịntanetị?',
    answer: [
      'Ha na-akwado ntụziaka eziokwu—ịkọwa onye ngwaahịa dabara adaba maka ya na izere nkwa ụgha nke ịba ọgaranya n’otu abalị.',
    ],
    actionLabel: 'Gụọ Edemede',
  },
  'prod-13': {
    question: 'Gịnị ka BHD na-ekwu gbasara ọrụ n’ebe dị anya na ohere dijitalụ?',
    answer: [
      'Ọ na-akpọku nkà ntọala dị ka edemede doro anya, imepụta weebụ, na iwulite pọtụfoliyo, tinyere ntuziaka dị na Remote Jobs for Under 18.',
    ],
    actionLabel: 'Chọgharịa Ntuziaka',
  },
  'prod-14': {
    question: 'Akụrụngwa BHD ọ na-ekwu maka imepụta ngwaahịa dijitalụ na ego mba dị iche iche?',
    answer: [
      'Ee. Global Monetisation na-akọwa otu e si ahazi ihe ọmụma dijitalụ maka ndị ahịa mba ụwa site na ikpo okwu dị ka Selar na-akwado ego mba dị iche iche.',
    ],
  },
  'prod-15': {
    question: 'BHD ọ na-ekpuchi imepụta ọdịnaya site n’enyemaka AI?',
    answer: [
      'Ee. Edemede AI na Teknụzụ na-egosi otu ngwaọrụ AI si enyere aka n’idepụta atụmatụ mgbe mmadụ na-enyocha ya nke ọma.',
    ],
    actionLabel: 'Gụọ Akụrụngwa AI',
  },

  // C. Mmemme Njikọ BHD
  'aff-01': {
    question: 'Gịnị bụ Mmemme Njikọ BHD?',
    answer: [
      'Mmemme Njikọ BHD bụ usoro ntinye akwụkwọ na nhọrọ nke BYHENRYDIGITALS (otu ọkwa, enweghị MLM). Ndị nwere mmasị na-ezipụ akwụkwọ ntinye ka BHD nyochaa ya, ndị njikọ a họọrọ ma kwado gọọmentị na-enweta kọmịshọn 35% na ire ahịa Selar tozuru oke.',
      'Ọ dị iche kpamkpam na ngwaahịa mmụta ₦8,000 Affiliate Starter Kit.',
    ],
    actionLabel: 'Lee Mmemme Njikọ',
  },
  'aff-02': {
    question: 'Onye nwere ike itinye akwụkwọ ịbụ onye njikọ BYHENRYDIGITALS?',
    answer: [
      'Ndị nkuzi dijitalụ, ndị edemede, ndị okike ọdịnaya, ndị na-amụ ihe, na ndị chọrọ ịkọrọ ngwaahịa bara uru n’ụzọ eziokwu nwere ike itinye akwụkwọ ka e tụlee ha.',
      'Izipu akwụkwọ ntinye anaghị ekwe nkwa nhọrọ—BYHENRYDIGITALS na-enyocha akwụkwọ niile, naanị ndị a kwadoro gọọmentị na-aghọ ndị njikọ BHD.',
    ],
    actionLabel: 'Tinye Akwụkwọ Ka Ị Bụrụ Onye Njikọ BHD',
  },
  'aff-03': {
    question: 'Kedu ka Mmemme Njikọ BHD si arụ ọrụ nzọụkwụ site n’nzọụkwụ?',
    answer: [
      '1. Ziga akwụkwọ ntinye site na BYHENRYDIGITALS Enquiry Form dị na ibe Kpọtụrụ Anyị, ozi-e (byhenrydigitals@gmail.com), ma ọ bụ WhatsApp (+234 708 208 8942). Itinye akwụkwọ dị n’efu (₦0) n’enweghị ịzụta ihe.\n2. BYHENRYDIGITALS na-enyocha akwụkwọ niile ma na-ahọrọ ndị kwesịrị ekwesị. Izipu akwụkwọ anaghị ekwe nkwa nnabata, ị dịghịkwa mkpa ịzụta ₦8,000 Starter Kit.\n3. Ozugbo a họọrọ gị ma kwado gị gọọmentị, kesaa njikọ Selar gị ma nweta kọmịshọn 35% na ire ahịa tozuru oke.',
    ],
    actionLabel: 'Lee Usoro Ya',
  },
  'aff-04': {
    question: 'Kedu ka ndị njikọ BHD si enweta kọmịshọn?',
    answer: [
      'Ha na-enweta kọmịshọn naanị mgbe onye zụrụ ihe mezuru ịzụta ngwaahịa dijitalụ BHD tozuru oke na Selar site na njikọ njikọ ha.',
    ],
  },
  'aff-05': {
    question: 'Gịnị bụ pasentị kọmịshọn ndị njikọ BHD?',
    answer: [
      'Ndị njikọ a kwadoro na-enweta kọmịshọn 35% na ire ahịa Selar tozuru oke.',
    ],
    actionLabel: 'Lee Eziokwu Mmemme',
  },
  'aff-06': {
    question: 'Kedu ire ahịa tozuru oke maka kọmịshọn?',
    answer: [
      'Ire ahịa ngwaahịa dijitalụ zuru ezu ma kwụọ ụgwọ nke ọma na Selar site na njikọ onye njikọ a kwadoro. Ire ahịa a kagburu anaghị enweta kọmịshọn.',
    ],
  },
  'aff-07': {
    question: 'E nwere ụgwọ ndebanye aha maka mmemme njikọ?',
    answer: [
      'Mba. Ọ dị ₦0 n’efu itinye akwụkwọ maka Mmemme Njikọ BHD.',
    ],
  },
  'aff-08': {
    question: 'Ndị na-etinye akwụkwọ ọ ga-azụrịrị ngwaahịa tupu ha etinye akwụkwọ?',
    answer: [
      'Mba. Enweghị iwu ịzụta ngwaahịa ọ bụla tupu itinye akwụkwọ ma ọ bụ isonye—ị dịghị mkpa ịzụta ₦8,000 Affiliate Starter Kit iji tinye akwụkwọ.',
    ],
  },
  'aff-09': {
    question: 'Mmemme Njikọ BHD ọ bụ usoro ọtụtụ ọkwa (MLM)?',
    answer: [
      'Mba. BHD anaghị arụ MLM ma ọ bụ usoro pyramid. Ọ bụ mmemme njikọ ozugbo n’otu ọkwa.',
    ],
  },
  'aff-10': {
    question: 'E nwere usoro downline ma ọ bụ kọmịshọn maka ịkpọbata ndị ọzọ?',
    answer: [
      'Mba. Enweghị downline ma ọ bụ ego maka ịkpọbata ndị ọzọ. Kọmịshọn na-abịa naanị site na ire ahịa Selar tozuru oke.',
    ],
  },
  'aff-11': {
    question: 'Gịnị bụ Affiliate Starter Kit nke ₦8,000?',
    answer: [
      '₦8,000 Affiliate Starter Kit bụ ngwaahịa mmụta dijitalụ nọọrọ onwe ya nke BYHENRYDIGITALS na-ere maka ndị mbido chọrọ ịmụta otu ahịa njikọ si arụ ọrụ ma wulite nkà maka njem nke ha.',
      'Ihe dị mkpa: Ịzụta Starter Kit anaghị eme gị onye njikọ BHD gọọmentị na-akpaghị aka, anaghị ekwe nkwa nnabata n’ime Mmemme Njikọ BHD, ọ dịghịkwa mkpa iji tinye akwụkwọ.',
    ],
    actionLabel: 'Nweta ₦8,000 Affiliate Starter Kit',
  },
  'aff-12': {
    question: 'Affiliate Starter Kit ọ bụ iwu iji tinye akwụkwọ, ka e họrọ gị, ma ọ bụ irite kọmịshọn?',
    answer: [
      'Mba. Ịzụta ₦8,000 Affiliate Starter Kit dị iche kpamkpam ma bụrụ nhọrọ—ọ dịghị mkpa iji tinye akwụkwọ, nweta nkwado, ma ọ bụ rite kọmịshọn 35%. Ịzụta ya anaghịkwa ekwe nkwa nhọrọ n’ime Mmemme Njikọ BHD.',
    ],
  },
  'aff-13': {
    question: 'Kedu ka ndị njikọ kwesịrị isi kwalite ngwaahịa BYHENRYDIGITALS?',
    answer: [
      'Kọwaa eziokwu banyere ihe ntuziaka dị na ya na onye ọ bara uru maka ya. A machibidoro spam, nkwa ụgha, na iṅomi akara BHD n’enweghị ikike.',
    ],
  },
  'aff-14': {
    question: 'Ebee ka ndị njikọ ga-esi nweta ozi ngwaahịa e nyochara?',
    answer: [
      'Na ibe Ngwaahịa dị na weebụsaịtị a na n’otu n’otu na https://selar.com/m/BYHENRYDIGITALS.',
    ],
    actionLabel: 'Lee Ndepụta Ngwaahịa',
  },
  'aff-15': {
    question: 'Gịnị na-eme mgbe onye ahịa zụrụ ihe site na njikọ njikọ Selar m?',
    answer: [
      'Selar na-edekọ ntụziaka ahụ na akpaghị aka n’akaụntụ njikọ gị ma tinye kọmịshọn 35% na ire ahịa tozuru oke.',
    ],
  },
  'aff-16': {
    question: 'Kedu ka BHD si enyocha akwụkwọ ntinye na ire ahịa ndị njikọ?',
    answer: [
      'BYHENRYDIGITALS na-enyocha akwụkwọ ntinye ọ bụla n’onwe ya—anaghị ekwe nkwa nhọrọ, naanị ndị a kwadoro gọọmentị na-aghọ ndị njikọ BHD. Selar na-enyocha ire ahịa tozuru oke.',
    ],
  },
  'aff-17': {
    question: 'Kedu ka ndị chọrọ itinye akwụkwọ ma ọ bụ ndị njikọ ga-esi kpọtụrụ BHD?',
    answer: [
      'Iji ziga akwụkwọ ntinye maka Mmemme Njikọ BHD ma ọ bụ jụọ ajụjụ, jiri BYHENRYDIGITALS Enquiry Form na ibe Kpọtụrụ Anyị, email (byhenrydigitals@gmail.com), ma ọ bụ WhatsApp (+234 708 208 8942).',
    ],
    actionLabel: 'Tinye Akwụkwọ Ka Ị Bụrụ Onye Njikọ BHD',
  },

  // D. Ọrụ Dijitalụ na Mmepe Weebụsaịtị
  'srv-01': {
    question: 'Kedu ọrụ dijitalụ BYHENRYDIGITALS na-enye?',
    answer: [
      'BHD na-enye ọrụ ise: (1) Nhazi & Mmepe Weebụsaịtị, (2) Ibe Nnabata (Landing Pages), (3) Mmepe Ọnụnọ Dijitalụ, (4) Ngwọta No-Code & AI, na (5) Nkwado Azụmaahịa Dijitalụ.',
    ],
    actionLabel: 'Chọpụta Ọrụ Anyị',
  },
  'srv-02': {
    question: 'BHD ọ na-ewu weebụsaịtị ọkachamara maka azụmaahịa na ndị mmadụ?',
    answer: [
      'Ee. BHD na-ewu weebụsaịtị na-aza ngwa ngwa n’ekwentị, tablẹtị, na kọmputa nwere njem doro anya maka ndị ọbịa.',
    ],
  },
  'srv-03': {
    question: 'Gịnị bụ BHD Landing Pages ma ole mgbe ka a ga-ahọrọ ya?',
    answer: [
      'Ibe nnabata bụ otu ibe lekwasịrị anya n’otu ebumnuche iji kọwaa otu onyinye ma duo ndị ọbịa gaa n’otu omume n’enweghị ndọpụ uche.',
    ],
  },
  'srv-04': {
    question: 'BHD ọ nwere ike inyere aka ijikọ ụlọ ahịa ngwaahịa dijitalụ?',
    answer: [
      'Ee. BHD na-enyere aka ịhazi ụlọ ahịa Selar na njikọ ịkwụ ụgwọ doro anya.',
    ],
  },
  'srv-05': {
    question: 'Kedu ka BHD si eme atụmatụ na nhazi weebụsaịtị?',
    answer: [
      'BHD na-ebu ụzọ hazie usoro menu, ozi dị mkpa, na njem onye ọrụ tupu mmecha ọdịdị.',
    ],
  },
  'srv-06': {
    question: 'BHD ọ na-eme mbipụta na nnwale teknụzụ?',
    answer: [
      'Ee. Anyị na-anwale fọm, njikọ, na ngosipụta n’ekwentị na kọmputa tupu mbipụta.',
    ],
  },
  'srv-07': {
    question: 'Kedu njikọ weebụsaịtị BHD nwere ike itinye maka ndị ahịa?',
    answer: [
      'Fọm e nyochara, webhook, njikọ Selar, bọtịnụ email/WhatsApp, na akpaaka no-code.',
    ],
  },
  'srv-08': {
    question: 'BHD ọ na-enye njikọ chatbot dị ka ọrụ ndị ahịa, ma BHD ọ na-arụ ọrụ AI assistant nke ya ugbu a?',
    answer: [
      'BHD nwere ike iweta njikọ chatbot dị ka ọrụ pụrụ iche maka onye ahịa rịọrọ ya.',
      'Mana BYHENRYDIGITALS n’onwe ya ANAGHỊ arụ ọrụ AI chatbot ugbu a na weebụsaịtị ya—Vanessa bụ naanị ebe nchekwa FAQ a na-achọ.',
    ],
  },
  'srv-09': {
    question: 'Kedu ka Mmepe Ọnụnọ Dijitalụ si eme ka akara sie ike n’ịntanetị?',
    answer: [
      'Ọ na-ejikọta weebụsaịtị, ụlọ ahịa dijitalụ, na soshal midia n’otu ozi doro anya nke na-egosi ntụkwasị obi.',
    ],
  },
  'srv-10': {
    question: 'Gịnị dị na Nkwado Azụmaahịa Dijitalụ nke BHD?',
    answer: [
      'Nduzi bara uru maka ndị guzobere azụmaahịa n’ịmalite ngwaahịa dijitalụ, idozi nsogbu teknụzụ, na ito eto.',
    ],
  },
  'srv-11': {
    question: 'Kedu ka e si ekpebi ọnụ ahịa ọrụ weebụsaịtị BHD?',
    answer: [
      'A na-ekpebi ọnụ ahịa dabere na ihe a chọrọ n’ọrụ nke ọ bụla mgbe mkparịta ụka gasịrị. Enweghị ọnụ ahịa edobere na-abụghị nkwekọrịta.',
    ],
    actionLabel: 'Kparịta Maka Ọrụ Gị',
  },
  'srv-12': {
    question: 'Kedu ozi ndị ahịa kwesịrị ikesa mgbe ha na-ajụ maka ọrụ?',
    answer: [
      'Kesaa ebumnuche gị, ibe ma ọ bụ njikọ ị chọrọ, na oge ị na-atụ anya ya na ibe Kpọtụrụ Anyị, email (byhenrydigitals@gmail.com), ma ọ bụ WhatsApp (+234 708 208 8942).',
    ],
  },

  // E. Azụmaahịa Dijitalụ na Ịkpata Ego N’ịntanetị
  'ent-01': {
    question: 'Gịnị bụ azụmaahịa dijitalụ (digital entrepreneurship)?',
    answer: [
      'Ọ bụ ịmalite na ịrụ azụmaahịa na-enye uru n’ịntanetị—dị ka akwụkwọ ntuziaka dijitalụ, ọrụ weebụ, ma ọ bụ ndụmọdụ—site na iji ngwaọrụ dijitalụ.',
    ],
  },
  'ent-02': {
    question: 'Gịnị bụ ahịa njikọ (affiliate marketing)?',
    answer: [
      'Ọ bụ ịkọrọ ngwaahịa onye ọzọ site na njikọ pụrụ iche ma nweta pasentị kọmịshọn mgbe mmadụ zụrụ ya n’ezie.',
    ],
  },
  'ent-03': {
    question: 'Gịnị bụ imepụta ngwaahịa dijitalụ?',
    answer: [
      'Ọ bụ ịtụgharị ihe ọmụma ma ọ bụ ntuziaka ka ọ bụrụ faịlụ a na-ebudata n’ịntanetị (dị ka ebooks) nke na-adịghị achọ mbupu anụ ahụ.',
    ],
  },
  'ent-04': {
    question: 'Gịnị ka ịkpata ego n’ịntanetị (online monetisation) pụtara?',
    answer: [
      'Ọ pụtara ịmepụta ego ziri ezi site na nkà dijitalụ, ntuziaka mmụta, ma ọ bụ ọrụ weebụ site n’idozi nsogbu dị adị.',
    ],
  },
  'ent-05': {
    question: 'Gịnị bụ ire ahịa dijitalụ?',
    answer: [
      'Ọ bụ azụmahịa mezuru nke ngwaahịa ma ọ bụ ọrụ n’ịntanetị nke dabeere na ntụkwasị obi na nkọwa doro anya.',
    ],
  },
  'ent-06': {
    question: 'Gịnị bụ sales funnel?',
    answer: [
      'Ọ bụ usoro njem onye ahịa si agafe site n’ịchọpụta akara gị, ịgụ ozi bara uru, ruo n’ịzụta ma ọ bụ ịjụ ajụjụ.',
    ],
  },
  'ent-07': {
    question: 'Gịnị bụ ibe nnabata (landing page) ma kedu ihe dị iche na ya na weebụsaịtị zuru ezu?',
    answer: [
      'Weebụsaịtị zuru ezu nwere ọtụtụ ibe maka akara ahụ dum, ebe landing page bụ otu ibe lekwasịrị anya n’otu onyinye na otu omume.',
    ],
  },
  'ent-08': {
    question: 'Gịnị bụ ụlọ ahịa dijitalụ (digital storefront)?',
    answer: [
      'Ọ bụ ụlọ ahịa n’ịntanetị ebe a na-edepụta ngwaahịa dijitalụ na nnyefe akpaaka, dị ka ụlọ ahịa Selar nke BHD.',
    ],
  },
  'ent-09': {
    question: 'Gịnị bụ ịkpata ego n’ọtụtụ ego mba (multi-currency monetisation)?',
    answer: [
      'Ọ na-enye ndị okike ohere ire ahịa n’ofe mba dị iche iche ka ndị zụrụ ihe wee kwụọ ụgwọ n’ego obodo ha ma ọ bụ ego mba ụwa.',
    ],
  },
  'ent-10': {
    question: 'Kedu nkà nwere ike inyere ndị mbido aka ịbanye n’akụ na ụba dijitalụ?',
    answer: [
      'Edemede doro anya, mmụta dijitalụ, nhazi weebụsaịtị, ahịa eziokwu, na iji ngwaọrụ arụmọrụ nke ọma.',
    ],
  },
  'ent-11': {
    question: 'Gịnị ka ndị mbido kwesịrị ịghọta tupu ha amalite azụmaahịa n’ịntanetị?',
    answer: [
      'Ọ chọrọ nkà, ndidi, na mgbalị na-aga n’ihu. BHD anaghị ekwe nkwa ego n’otu abalị ma ọ bụ uru na-enweghị ọrụ.',
    ],
  },

  // F. AI na Teknụzụ Dijitalụ
  'ai-01': {
    question: 'Kedu ka AI si enyere aka n’imepụta ọdịnaya dijitalụ?',
    answer: [
      'Ngwaọrụ AI na-enyere aka n’ịtụle isiokwu na idepụta atụmatụ ngwa ngwa, mana mmadụ ga-enyocha ma dezie eziokwu niile.',
    ],
  },
  'ai-02': {
    question: 'Kedu ka e si eji vidiyo AI n’ụzọ kwesịrị ekwesị?',
    answer: [
      'Ọ na-enyere aka n’ide edemede na ndepụta okwu vidiyo, ebe onye okike na-elekọta izi ezi.',
    ],
  },
  'ai-03': {
    question: 'Kedu ka ngwaọrụ arụmọrụ dijitalụ si enyere obere ìgwè aka?',
    answer: [
      'Ha na-ebelata mmejọ aka n’ọrụ kwa ụbọchị site na nhazi fọm na ozi doro anya.',
    ],
  },
  'ai-04': {
    question: 'Kedu ngwaọrụ mmepe weebụsaịtị BHD na-eji eme ihe?',
    answer: [
      'Teknụzụ weebụ ọgbara ọhụrụ dị ka React, TypeScript, Tailwind CSS, na Express ebe achọrọ nkwado sava.',
    ],
  },
  'ai-05': {
    question: 'Gịnị bụ ngwọta no-code na low-code?',
    answer: [
      'Ngwaọrụ na-ejikọta fọm, ụlọ ahịa, na ozi n’enweghị koodu dị arọ maka usoro azụmaahịa dị mfe.',
    ],
  },
  'ai-06': {
    question: 'Kedu ihe dị iche n’ọrụ chatbot maka ndị ahịa na weebụsaịtị BHD ugbu a?',
    answer: [
      'BHD nwere ike itinye chatbot maka onye ahịa chọrọ ya, mana BHD n’onwe ya anaghị arụ AI chatbot ugbu a—Vanessa bụ naanị ebe nchọta FAQ.',
    ],
  },
  'ai-07': {
    question: 'Gịnị ka iji AI n’ụzọ nwere ọrụ pụtara na BHD?',
    answer: [
      'Ịghara imepụta ozi ụgha, nchekwa data na igodo sava, na nyocha mmadụ mgbe niile.',
    ],
  },
  'ai-08': {
    question: 'Gịnị dị iche n’etiti ihe AI dere na ọrụ mmadụ nyochara?',
    answer: [
      'Ọrụ mmadụ nyochara na-ejide n’aka eziokwu, nghọta doro anya, na mkpụrụedemede ziri ezi n’Igbo, Yorùbá, Hausa, French, Nigerian Pidgin, na English.',
    ],
  },
  'ai-09': {
    question: 'Kedu ka BHD si ekewapụta ọrụ dị ugbu a, ngwaọrụ, na nhọrọ ọrụ pụrụ iche?',
    answer: [
      'Ọrụ ugbu a: weebụsaịtị, landing pages, no-code, na ntuziaka Selar. Ngwaọrụ: teknụzụ weebụ ọhụrụ, Selar, na ngwaọrụ AI. A na-ahazi ọrụ pụrụ iche dabere na mkpa onye ahịa.',
    ],
  },

  // G. Asụsụ na Akụrụngwa Mmụta
  'lang-01': {
    question: 'Kedu asụsụ weebụsaịtị BYHENRYDIGITALS na-akwado ugbu a?',
    answer: [
      'English, Igbo, Yorùbá, Hausa, French, na Nigerian Pidgin na-arụ ọrụ ugbu a n’akụkụ niile nke weebụsaịtị na Vanessa FAQ.',
    ],
  },
  'lang-02': {
    question: 'E nwere akụrụngwa mmụta n’asụsụ Bekee na BHD?',
    answer: [
      'Ee. Bekee bụ asụsụ mbụ nke weebụsaịtị, ma ngwaahịa Selar atọ niile dị n’asụsụ Bekee.',
    ],
  },
  'lang-03': {
    question: 'BHD ọ na-enye akụrụngwa na ntụgharị n’asụsụ French?',
    answer: [
      'Ee, weebụsaịtị niile na Vanessa FAQ dị na French. Otú ọ dị, ngwaahịa a na-ebudata na Selar ugbu a dị n’asụsụ Bekee mbụ ha.',
    ],
  },
  'lang-04': {
    question: 'Kedu ka e si akwado ịnweta n’asụsụ Igbo na BHD?',
    answer: [
      'Ịhọrọ Igbo n’elu weebụsaịtị na-atụgharị menu, ibe niile, edemede, na Vanessa FAQ ozugbo n’Igbo zuru oke.',
    ],
  },
  'lang-05': {
    question: 'Kedu ka e si akwado ịnweta n’asụsụ Yorùbá na BHD?',
    answer: [
      'Ịhọrọ Yorùbá na-atụgharị saịtị ahụ na Vanessa FAQ niile n’ezi Yorùbá nwere akara ụda olu ziri ezi.',
    ],
  },
  'lang-06': {
    question: 'Kedu ka e si akwado ịnweta n’asụsụ Hausa na BHD?',
    answer: [
      'Ịhọrọ Hausa na-atụgharị saịtị ahụ dum na Vanessa FAQ n’asụsụ Hausa ozugbo.',
    ],
  },
  'lang-09': {
    question: 'Kedu ka e si akwado ịnweta n’asụsụ Nigerian Pidgin na BHD?',
    answer: [
      'Ịhọrọ Nigerian Pidgin n’elu weebụsaịtị na-atụgharị menu, ibe niile, edemede, na Vanessa FAQ ozugbo n’asụsụ Nigerian Pidgin doro anya. Ngwaahịa Selar a na-ebudata ka dị n’asụsụ Bekee.',
    ],
    extraKeywords: ['nigerian pidgin', 'pidgin'],
  },
  'lang-07': {
    question: 'Ngwaahịa dijitalụ BHD dị na Selar hà atụgharịla n’asụsụ French, Igbo, Yorùbá, Hausa ma ọ bụ Nigerian Pidgin?',
    answer: [
      'Mba. Ngwaahịa Selar atọ dị ugbu a ka dị naanị n’asụsụ Bekee mbụ ha. BHD anaghị ekwu na ntụgharị dị ma ọ bụrụ na emebeghị ya.',
    ],
  },
  'lang-08': {
    question: 'Kedu ka ndị ọbịa ga-esi mata asụsụ mbụ nke ngwaahịa tupu ha zụta?',
    answer: [
      'Kaadị ngwaahịa ọ bụla nwere akara "Asụsụ Ọdịnaya Ngwaahịa" na ibe Ngwaahịa, a na-egosipụtakwa ya na Selar.',
    ],
    actionLabel: 'Lelee Ibe Ngwaahịa',
  },

  // H. Ịzụta, Ịkwụ Ụgwọ na Nkwado Ndị Ahịa
  'pay-01': {
    question: 'Ebee ka ndị ahịa ga-azụta ngwaahịa BYHENRYDIGITALS n’ụzọ gọọmentị?',
    answer: [
      'Na ụlọ ahịa Selar gọọmentị na https://selar.com/m/BYHENRYDIGITALS.',
    ],
    actionLabel: 'BHD Store',
  },
  'pay-02': {
    question: 'Kedu ka ịkwụ ụgwọ Selar si arụ ọrụ?',
    answer: [
      'Selar na-egosi ọnụ ahịa n’ego obodo gị ma hazie ịkwụ ụgwọ n’enweghị nsogbu.',
    ],
  },
  'pay-03': {
    question: 'Kedu ka ndị ahịa si enweta ngwaahịa ha mgbe ha kwụchara ụgwọ na Selar?',
    answer: [
      'Selar na-enye njikọ nbudata ozugbo ma zipu ntuziaka na adreesị ozi-e gị.',
    ],
  },
  'pay-04': {
    question: 'Gịnị ka onye ahịa kwesịrị ime ma ọ bụrụ na o nwere nsogbu nbudata ma ọ bụ ịkwụ ụgwọ?',
    answer: [
      'Kpọtụrụ BHD na byhenrydigitals@gmail.com ma ọ bụ WhatsApp (+234 708 208 8942) ya na ozi azụmahịa gị.',
    ],
    actionLabel: 'Kpọtụrụ Nkwado',
  },
  'pay-05': {
    question: 'BHD ọ na-edepụta oge nkwụghachi ụgwọ edobere na weebụsaịtị a?',
    answer: [
      'Mba. Usoro ịkwụ ụgwọ na-agbaso iwu ikpo okwu Selar na nkọwa ngwaahịa dị na Selar.',
    ],
  },
  'pay-06': {
    question: 'Kedu ka mmadụ ga-esi jụọ ajụjụ maka ngwaahịa tupu ya azụta?',
    answer: [
      'Site na Vanessa FAQ, ibe Kpọtụrụ Anyị, byhenrydigitals@gmail.com, ma ọ bụ WhatsApp (+234 708 208 8942).',
    ],
  },
  'pay-07': {
    question: 'Kedu ka mmadụ ga-esi kpọtụrụ BYHENRYDIGITALS ozugbo?',
    answer: [
      'Ozi-e: byhenrydigitals@gmail.com | WhatsApp: +234 708 208 8942 (https://wa.me/2347082088942) | Fọm ibe Kpọtụrụ Anyị.',
    ],
    actionLabel: 'Mepee Kpọtụrụ Anyị',
  },
  'pay-08': {
    question: 'Ebee ka ndị ahịa ga-ahụ ozi ọhụrụ gọọmentị sitere na BHD?',
    answer: [
      'Na weebụsaịtị a, ụlọ ahịa Selar, na akaụntụ Instagram, TikTok, X, na Facebook nke BHD.',
    ],
  },

  // I. Njem Weebụsaịtị na Soshal Midia
  'nav-01': {
    question: 'Kedu ka m ga-esi gaa n’ofe weebụsaịtị BYHENRYDIGITALS?',
    answer: [
      'Jiri menu dị n’elu ma ọ bụ n’ala weebụsaịtị gaa Nnabata, Maka Anyị, Ngwaahịa, Mmemme Njikọ, Ọrụ Anyị, Ihe Ọmụma, na Kpọtụrụ Anyị, ma jiri bọtịnụ "Ajụjụ BHD" dị n’akụkụ ala aka nri iji chọọ ihe ọ bụla na Vanessa FAQ.',
    ],
  },
  'nav-02': {
    question: 'Ebee ka m ga-ahụ ngwaahịa dijitalụ na edemede mmụta na weebụsaịtị?',
    answer: [
      'Na ibe Ngwaahịa (/products) na ibe Ihe Ọmụma (/resources).',
    ],
  },
  'nav-03': {
    question: 'Ebee ka m ga-ahụ ọrụ dijitalụ BHD ma rịọ maka mkparịta ụka?',
    answer: [
      'Gaa na Ọrụ Anyị (/services) ma pịa bọtịnụ ịkparịta ụka maka ọrụ gị.',
    ],
  },
  'nav-04': {
    question: 'Kedu ka m ga-esi jiri ihe nhọrọ asụsụ weebụsaịtị?',
    answer: [
      'Pịa bọtịnụ Asụsụ n’aka nri elu wee họrọ English, Igbo, Yorùbá, Hausa, French, ma ọ bụ Nigerian Pidgin.',
    ],
  },
  'nav-05': {
    question: 'Ebee ka m ga-ahụ Vanessa — Ajụjụ BHD Zuru Ezu?',
    answer: [
      'Pịa bọtịnụ "Ajụjụ BHD" na-ese n’elu n’akụkụ ala aka nri na ibe ọ bụla, ma ọ bụ pịa "Mepee Ajụjụ Vanessa" n’okpuru saịtị.',
    ],
  },
  'nav-06': {
    question: 'Kedu ka m ga-esi ruo ibe Kpọtụrụ Anyị ma jiri bọtịnụ Email ma ọ bụ WhatsApp?',
    answer: [
      'Gaa na /contact ma ọ bụ pịa bọtịnụ "Zitere Anyị Email" na "Kparịta Ụka na WhatsApp" n’ala weebụsaịtị ma ọ bụ na FAQ.',
    ],
  },
  'nav-07': {
    question: 'Kedu akaụntụ soshal midia gọọmentị nke BYHENRYDIGITALS?',
    answer: [
      'Instagram (https://www.instagram.com/byhenrydigitals/), TikTok (https://www.tiktok.com/@byhenrydigitals), X (https://x.com/BYHENRYDIGITALS), na Facebook (https://www.facebook.com/share/1A8GpCyCt3/).',
    ],
  },
  'nav-08': {
    question: 'Otu ajụjụ na ntinye akwụkwọ njikọ si arụ ọrụ na weebụsaịtị BHD?',
    answer: [
      'Ibe Kpọtụrụ Anyị nwere BYHENRYDIGITALS Enquiry Form gọọmentị tinyere ozi-e (byhenrydigitals@gmail.com) na WhatsApp (+234 708 208 8942) maka ajụjụ ọrụ, ajụjụ ngwaahịa, na ntinye akwụkwọ Mmemme Njikọ BHD.',
    ],
  },

  // J. Vanessa — Ajụjụ BHD Zuru Ezu
  'van-01': {
    question: 'Gịnị bụ Vanessa — Ajụjụ BHD Zuru Ezu?',
    answer: [
      'Vanessa bụ ebe nchekwa ajụjụ na azịza a pụrụ ịchọ nke BYHENRYDIGITALS ("Nduzi Gị A Pụrụ Ịchọ Maka Ihe Niile Gbasara BYHENRYDIGITALS") nwere ụdị 10 na ihe karịrị ajụjụ 100 e nyochara.',
    ],
  },
  'van-02': {
    question: 'Vanessa ọ bụ AI chatbot ma ọ bụ onye enyemaka mkparịta ụka AI?',
    answer: [
      'Mba. Vanessa ABỤGHỊ AI chatbot ma ọ bụ onye enyemaka AI. BYHENRYDIGITALS anaghị arụ AI chatbot ugbu a na weebụsaịtị ya—ewepụla Botpress niile.',
    ],
  },
  'van-03': {
    question: 'Kedu ka injin ọchụchọ Vanessa FAQ si arụ ọrụ?',
    answer: [
      'Ọ na-achọ n’ime ajụjụ, azịza zuru ezu, aha ụdị, na okwu mkpọsa, ma na-akwado nkebi okwu na nghọta mmejọ mkpụrụedemede.',
    ],
  },
  'van-04': {
    question: 'Kedu ka ndị ọbịa ga-esi chọọ ma họpụta isiokwu na Vanessa?',
    answer: [
      'Pịnye okwu n’igbe ọchụchọ, pịa ajụjụ atụ, ma ọ bụ họrọ otu n’ime ụdị 10 ahụ. Pịa azịza ọ bụla iji hụ nkọwa na ajụjụ metụtara ya.',
    ],
  },
  'van-05': {
    question: 'Gịnị na-eme ma ọ bụrụ na ọchụchọ ahụghị azịza?',
    answer: [
      'Ọ na-egosi nhọrọ ịtọgharị ihe nzacha na bọtịnụ ozugbo iji zitere BHD email (byhenrydigitals@gmail.com) ma ọ bụ kparịta ụka na WhatsApp (+234 708 208 8942).',
    ],
  },
  'van-06': {
    question: 'Vanessa FAQ ọ na-agbanwe asụsụ mgbe m gbanwere asụsụ weebụsaịtị?',
    answer: [
      'Ee. Ọ na-agbanwe ozugbo n’etiti English, Igbo, Yorùbá, Hausa, French, na Nigerian Pidgin.',
    ],
  },
  'van-07': {
    question: 'Kedu ka e si edobe ma na-enyocha ndekọ Vanessa FAQ?',
    answer: [
      'A na-echekwa ndekọ ọ bụla n’otu ebe nwere ID pụrụ iche, asụsụ, na ọkwa nkwado (`published` vs `draft`) ka e wee bipụta naanị ozi e nyochara.',
    ],
  },
};

export const faqIg: FaqBundle = {
  language: 'ig',
  bubbleLabel: 'Ajụjụ BHD',
  closeAriaLabel: 'Mechie Vanessa FAQ',
  kicker: 'Ebe Ozi BHD A Pụrụ Ịchọ',
  heading: 'VANESSA — AJỤJỤ BHD ZURU EZU',
  subheading: 'Nduzi gị a pụrụ ịchọ maka ihe niile gbasara BYHENRYDIGITALS.',
  nonAiNotice:
    'Ọbá akwụkwọ ajụjụ na azịza ahaziri — ozi BHD e nyochara (ọ bụghị chatbot ma ọ bụ onye enyemaka AI).',
  searchPlaceholder: 'Chọọ ihe ọ bụla gbasara BYHENRYDIGITALS...',
  searchAriaLabel: 'Chọọ ihe ọ bụla gbasara BYHENRYDIGITALS',
  clearSearchLabel: 'Hichapụ',
  allCategoriesLabel: 'Ụdị Niile',
  categoriesHeading: 'Ụdị Ajụjụ (A–J)',
  exampleQueriesTitle: 'Nchọta a na-ajụkarị:',
  exampleQueries: [
    'Gịnị bụ BYHENRYDIGITALS?',
    'Clicks-to-Cash',
    'kọmịshọn 35%',
    'Ịbụ onye njikọ BHD',
    'Mmepe weebụsaịtị',
    'Azụmaahịa dijitalụ',
    'Iji AI n’ụzọ ziri ezi',
    'Akụrụngwa French',
    'Ịzụta na Selar',
    'Vanessa ọ bụ AI chatbot?',
  ],
  resultsMatchingLabel: 'azịza dabara',
  allTopicsCountLabel: 'ndekọ FAQ e bipụtara',
  verifiedStatusLabel: 'E nyochara',
  relatedQuestionsLabel: 'Ajụjụ Ndị Yiri Ya',
  noResultsTitle: 'Ọ dịghị azịza dabara nchọta gị',
  noResultsBody:
    'Anyị ahụghị ihe dabara na ndekọ Vanessa FAQ e bipụtara. Gbalịa okwu ọzọ, tọgharịa ihe nzacha, ma ọ bụ kpọtụrụ BYHENRYDIGITALS ozugbo.',
  resetFiltersLabel: 'Gosi Ndekọ FAQ Niile',
  escalationTitle: 'Ị Chọtaghị Azịza Ị Na-achọ?',
  escalationBody:
    'Kpọtụrụ BYHENRYDIGITALS ozugbo site na ozi-e gọọmentị, WhatsApp, ma ọ bụ ibe Kpọtụrụ Anyị.',
  emailButtonLabel: 'Zitere Anyị Email',
  whatsappButtonLabel: 'WhatsApp',
  contactPageButtonLabel: 'Mepee Fọm Kpọtụrụ Anyị',
  expandAllLabel: 'Mepee Niile',
  collapseAllLabel: 'Mechie Niile',
  categories: {
    'about-bhd': {
      title: 'A. Maka BYHENRYDIGITALS',
      description: 'Njirimara, onye tọrọ ntọala, ebumnuche, na ọhụụ.',
    },
    'products-resources': {
      title: 'B. Ngwaahịa na Akụrụngwa Mmụta',
      description: 'Ntuziaka Selar e nyochara, ndị e mere maka ha, na ụdị ha.',
    },
    'affiliate-programme': {
      title: 'C. Mmemme Njikọ BHD',
      description: 'Ntinye akwụkwọ n’efu, nyocha nhọrọ BHD, kọmịshọn 35%, enweghị MLM, na nkọwa Starter Kit.',
    },
    'web-services': {
      title: 'D. Ọrụ Dijitalụ na Mmepe Weebụsaịtị',
      description: 'Weebụsaịtị, ibe nnabata, ụlọ ahịa dijitalụ, na nkwado.',
    },
    'entrepreneurship-monetisation': {
      title: 'E. Azụmaahịa Dijitalụ na Ịkpata Ego',
      description: 'Nkọwa dị mfe maka ndị mbido na atụmanya eziokwu.',
    },
    'ai-technology': {
      title: 'F. AI na Teknụzụ Dijitalụ',
      description: 'Ngwaọrụ okike, no-code, iji AI nke ọma, na nyocha mmadụ.',
    },
    'languages-learning': {
      title: 'G. Asụsụ na Akụrụngwa Mmụta',
      description: 'English, Igbo, Yorùbá, Hausa, French, Nigerian Pidgin na asụsụ ngwaahịa.',
    },
    'payments-purchases': {
      title: 'H. Ịzụta, Ịkwụ Ụgwọ na Nkwado',
      description: 'Ịkwụ ụgwọ Selar, nbudata, na ụzọ nkwukọrịta BHD.',
    },
    'navigation-social': {
      title: 'I. Njem Weebụsaịtị na Soshal Midia',
      description: 'Ngalaba saịtị, nhọrọ asụsụ, na soshal midia gọọmentị.',
    },
    'vanessa-faq': {
      title: 'J. Vanessa Ajụjụ BHD Zuru Ezu',
      description: 'Otu nchọta FAQ si arụ ọrụ na nyocha ndekọ.',
    },
  },
  entries: composeFaqEntries('ig', recordsIg),
};
