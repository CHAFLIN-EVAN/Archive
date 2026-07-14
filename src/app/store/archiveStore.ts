import { Archive, ArchiveSettings, Country } from '../types';

const STORAGE_KEY = 'hist_archives_v1';
const SETTINGS_KEY = 'hist_settings_v1';

export const COUNTRIES: Country[] = [
  {
    id: 'cn', name: '中国', nameEn: 'China', code: 'cn',
    category: 'chinese-history', archiveCount: 0,
    description: '上下五千年文明积淀',
  },
  {
    id: 'fr', name: '法国', nameEn: 'France', code: 'fr',
    category: 'world-history', archiveCount: 0,
    description: '自由、平等、博爱的源泉',
  },
  {
    id: 'de', name: '德国', nameEn: 'Germany', code: 'de',
    category: 'world-history', archiveCount: 0,
    description: '哲学与战争的双重遗产',
  },
  {
    id: 'us', name: '美国', nameEn: 'United States', code: 'us',
    category: 'world-history', archiveCount: 0,
    description: '现代民主的试验场',
  },
  {
    id: 'uk', name: '英国', nameEn: 'United Kingdom', code: 'uk',
    category: 'world-history', archiveCount: 0,
    description: '日不落帝国的兴衰',
  },
  {
    id: 'ru', name: '俄国', nameEn: 'Russia / USSR', code: 'ru',
    category: 'world-history', archiveCount: 0,
    description: '沙皇帝国与苏维埃的嬗变',
  },
  {
    id: 'jp', name: '日本', nameEn: 'Japan', code: 'jp',
    category: 'world-history', archiveCount: 0,
    description: '东方岛国的维新与扩张',
  },
  {
    id: 'roman', name: '罗马', nameEn: 'Rome', code: 'roman',
    category: 'world-history', archiveCount: 0,
    description: '帝国的荣耀与覆灭',
  },
];

const SEED_ARCHIVES: Archive[] = [
  {
    id: 'cn-001',
    title: '秦始皇统一六国',
    titleEn: 'Qin Shi Huang Unifies the Six States',
    date: '前221年',
    dateEnd: '前206年',
    description:
      '嬴政完成对战国七雄的统一，建立中国历史上第一个大一统中央集权封建国家——秦朝。确立皇帝制度、郡县制，并统一文字、货币与度量衡，开创中华文明两千年政治格局。',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80',
    references: [
      '司马迁《史记·秦始皇本纪》',
      '班固《汉书》',
      '《战国策》',
    ],
    tags: ['统一', '秦朝', '封建制度', '中央集权', '嬴政', '先秦'],
    country: '中国',
    countryCode: 'cn',
    category: 'chinese-history',
    timeline: [
      { year: '前230年', event: '秦灭韩国', significance: '统一战争开始' },
      { year: '前228年', event: '秦灭赵国', significance: '北方大国灭亡' },
      { year: '前225年', event: '秦灭魏国', significance: '中原要地易手' },
      { year: '前223年', event: '秦灭楚国', significance: '南方强国覆灭' },
      { year: '前222年', event: '秦灭燕、代', significance: '北部统一' },
      { year: '前221年', event: '秦灭齐国，天下一统', significance: '六国全灭' },
      { year: '前221年', event: '嬴政称"始皇帝"', significance: '皇帝制度确立' },
    ],
    keyFigures: [
      {
        name: '嬴政（秦始皇）', role: '秦王/皇帝', period: '前259—前210',
        faction: '秦国',
        description: '中国历史上第一位皇帝，以铁腕手段统一六国，确立皇帝制度、郡县制与文字货币统一，开创两千年帝制先河。',
        relations: [
          { targetName: '李斯', type: 'superior', label: '君臣' },
          { targetName: '王翦', type: 'superior', label: '委以重任' },
          { targetName: '蒙恬', type: 'superior', label: '信任将领' },
        ],
      },
      {
        name: '李斯', role: '丞相', period: '前284—前208',
        faction: '秦国',
        description: '法家代表人物，秦统一后的首任丞相，主导焚书坑儒、统一文字度量衡；后被赵高陷害腰斩于市。',
        relations: [
          { targetName: '嬴政（秦始皇）', type: 'subordinate', label: '效忠' },
          { targetName: '王翦', type: 'colleague', label: '同僚' },
          { targetName: '蒙恬', type: 'rival', label: '后期构陷' },
        ],
      },
      {
        name: '王翦', role: '大将军', period: '不详—前218',
        faction: '秦国',
        description: '秦灭六国的核心军事统帅，率六十万大军灭楚，以稳健著称，是中国历史上最伟大的将领之一。',
        relations: [
          { targetName: '嬴政（秦始皇）', type: 'subordinate', label: '听命' },
          { targetName: '蒙恬', type: 'colleague', label: '并列名将' },
        ],
      },
      {
        name: '蒙恬', role: '将军', period: '不详—前210',
        faction: '秦国',
        description: '秦统一后北击匈奴、修筑长城的大将，深受秦始皇器重；始皇驾崩后遭赵高、李斯陷害，被迫自杀。',
        relations: [
          { targetName: '嬴政（秦始皇）', type: 'subordinate', label: '忠诚守边' },
          { targetName: '李斯', type: 'rival', label: '受其迫害' },
        ],
      },
    ],
    analysis:
      '秦的统一是中国历史的重大转折点。统一不仅结束了数百年的诸侯割据，更确立了此后两千年中国封建社会的基本政治制度框架。郡县制取代分封制，中央集权政治体制对中国历史产生了深远影响。然而秦朝的苛政也埋下了短命的种子，仅历十五年便走向覆灭，留下了深刻的历史教训：制度的建立必须辅以仁政，否则再强大的帝国也难逃人心向背。',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    isAIGenerated: false,
  },
  {
    id: 'cn-002',
    title: '汉代丝绸之路',
    titleEn: 'Han Dynasty Silk Road',
    date: '前138年',
    dateEnd: '前60年',
    description:
      '汉武帝派遣张骞出使西域，开辟了连接中国与中亚、西亚乃至欧洲的贸易与文化交流通道。丝绸之路成为古代东西方文明交流的主要渠道，促进了商贸、宗教、艺术和技术的双向传播。',
    image: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800&q=80',
    references: [
      '司马迁《史记·大宛列传》',
      '班固《汉书·张骞传》',
      'Valerie Hansen, The Silk Road: A New History, 2012',
    ],
    tags: ['汉朝', '张骞', '对外交流', '贸易', '文化传播', '丝路', '西域'],
    country: '中国',
    countryCode: 'cn',
    category: 'chinese-history',
    timeline: [
      { year: '前138年', event: '张骞第一次出使西域', significance: '开启东西交流' },
      { year: '前126年', event: '张骞历险归汉', significance: '带回西域地理情报' },
      { year: '前119年', event: '张骞第二次出使西域', significance: '正式开辟丝路' },
      { year: '前60年', event: '西汉设西域都护府', significance: '汉朝确立对西域控制' },
    ],
    keyFigures: [
      {
        name: '汉武帝刘彻', role: '皇帝', period: '前156—前87',
        faction: '汉朝',
        description: '汉朝第七位皇帝，在位五十四年，北击匈奴、开拓西域，奠定汉朝鼎盛版图，确立儒家正统，推行盐铁专营。',
        relations: [
          { targetName: '张骞', type: 'superior', label: '派遣出使' },
          { targetName: '霍去病', type: 'superior', label: '赏识重用' },
        ],
      },
      {
        name: '张骞', role: '使节/探险家', period: '前164—前114',
        faction: '汉朝',
        description: '丝绸之路的开拓者，两次出使西域，历经匈奴俘虏、千辛万苦，带回中亚地理情报，为东西方交流架起桥梁。',
        relations: [
          { targetName: '汉武帝刘彻', type: 'subordinate', label: '奉命出使' },
          { targetName: '霍去病', type: 'colleague', label: '协同开拓' },
        ],
      },
      {
        name: '霍去病', role: '骠骑将军', period: '前140—前117',
        faction: '汉朝',
        description: '汉武帝外甥，天才军事将领，六次出击匈奴，深入漠北歼敌，封狼居胥，是汉朝赫赫有名的少年战神，英年早逝。',
        relations: [
          { targetName: '汉武帝刘彻', type: 'subordinate', label: '效命疆场' },
          { targetName: '张骞', type: 'colleague', label: '共同抗击匈奴' },
        ],
      },
    ],
    analysis:
      '丝绸之路不仅是商业通道，更是文明交流的大动脉。通过这条路，中国的丝绸、瓷器、茶叶、造纸术传播到西方；佛教、伊斯兰教、玻璃器皿、葡萄等也传入中国。它深刻影响了欧亚大陆的历史进程，开创了人类跨文明交流的新时代，也是中国首次主动走向世界的标志性壮举。',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    isAIGenerated: false,
  },
  {
    id: 'cn-003',
    title: '清末鸦片战争',
    titleEn: 'Opium Wars in Late Qing Dynasty',
    date: '1839年',
    dateEnd: '1860年',
    description:
      '两次鸦片战争是中国近代史的开端。英国以鸦片贸易为导火索对清朝发动战争，迫使清政府签订一系列不平等条约，中国逐渐沦为半殖民地半封建社会，开启了百年屈辱史。',
    image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&q=80',
    references: [
      '蒋廷黻《中国近代史》',
      "Jonathan Spence, The Search for Modern China, 1990",
      '《南京条约》《北京条约》原文',
    ],
    tags: ['近代史', '清朝', '帝国主义', '不平等条约', '鸦片', '半殖民地', '民族危机'],
    country: '中国',
    countryCode: 'cn',
    category: 'chinese-history',
    timeline: [
      { year: '1839年6月', event: '林则徐虎门销烟', significance: '禁烟运动高潮' },
      { year: '1840年', event: '第一次鸦片战争爆发', significance: '英军入侵中国' },
      { year: '1842年', event: '签订《南京条约》', significance: '割让香港，开放五口通商' },
      { year: '1856年', event: '第二次鸦片战争爆发', significance: '英法联军侵华' },
      { year: '1860年', event: '英法联军火烧圆明园', significance: '中华文明遭受重创' },
      { year: '1860年', event: '签订《北京条约》', significance: '割让九龙，赔款巨额' },
    ],
    keyFigures: [
      {
        name: '林则徐', role: '钦差大臣', period: '1785—1850',
        faction: '主战派',
        description: '清朝名臣，坚定的禁烟倡导者，1839年主持虎门销烟，是中国近代史上第一位"睁眼看世界"的政治家。',
        relations: [
          { targetName: '道光帝', type: 'subordinate', label: '奉命禁烟' },
          { targetName: '琦善', type: 'rival', label: '主战与主和之争' },
          { targetName: '威廉·渣甸', type: 'enemy', label: '禁烟对抗' },
        ],
      },
      {
        name: '道光帝', role: '皇帝', period: '1782—1850',
        faction: '清廷',
        description: '清朝第八位皇帝，在位期间经历鸦片战争，态度摇摆于禁烟与妥协之间，最终签订《南京条约》，开启屈辱近代史。',
        relations: [
          { targetName: '林则徐', type: 'superior', label: '任命后贬谪' },
          { targetName: '琦善', type: 'superior', label: '转而重用' },
        ],
      },
      {
        name: '琦善', role: '直隶总督/谈判代表', period: '1790—1854',
        faction: '主和派',
        description: '清朝官员，主和派代表，战前弹劾林则徐、战中主张妥协投降，擅自允诺割让香港，被朝廷革职查办。',
        relations: [
          { targetName: '道光帝', type: 'subordinate', label: '奉旨谈判' },
          { targetName: '林则徐', type: 'rival', label: '政见对立' },
        ],
      },
      {
        name: '威廉·渣甸', role: '英国鸦片商/游说者', period: '1784—1843',
        faction: '英国侵略方',
        description: '英国最大的鸦片贸易商之一，积极游说英国政府对华发动战争，是鸦片战争的幕后推手与直接受益者。',
        relations: [
          { targetName: '林则徐', type: 'enemy', label: '利益冲突' },
        ],
      },
    ],
    analysis:
      '鸦片战争是西方资本主义与东方封建主义的正面冲突。清政府的惨败暴露了闭关锁国政策的致命缺陷。战后签订的不平等条约不仅使中国丧失大量主权和领土，更引发了社会深层危机，催生了太平天国运动、洋务运动和维新变法等连锁反应。这段历史警示后人：闭关自守终将落后，落后就要挨打。',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    isAIGenerated: false,
  },
  {
    id: 'cn-004',
    title: '辛亥革命',
    titleEn: 'Xinhai Revolution',
    date: '1911年',
    dateEnd: '1912年',
    description:
      '辛亥革命推翻了清朝封建统治，结束了中国长达两千年的封建帝制，建立了中华民国，是中国历史上第一次完全意义上的资产阶级民主革命。',
    image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&q=80',
    references: [
      '孙中山《建国方略》',
      'Marie-Claire Bergère, Sun Yat-sen, 1998',
      '章开沅《辛亥革命史》',
    ],
    tags: ['近代史', '清朝覆灭', '民国', '孙中山', '革命', '共和'],
    country: '中国',
    countryCode: 'cn',
    category: 'chinese-history',
    timeline: [
      { year: '1905年', event: '中国同盟会成立', significance: '革命力量整合' },
      { year: '1911年10月10日', event: '武昌起义爆发', significance: '辛亥革命开始' },
      { year: '1912年1月1日', event: '中华民国成立，孙中山就任临时大总统', significance: '帝制终结' },
      { year: '1912年2月', event: '清帝溥仪退位', significance: '两千年帝制正式终结' },
      { year: '1912年3月', event: '袁世凯就任临时大总统', significance: '革命成果被窃取' },
    ],
    keyFigures: [
      {
        name: '孙中山', role: '革命领袖/临时大总统', period: '1866—1925',
        faction: '革命派',
        description: '中国民主革命先行者，提出"三民主义"，创立中国同盟会，推翻清朝帝制，建立中华民国，被尊为"国父"。',
        relations: [
          { targetName: '黄兴', type: 'ally', label: '并肩革命' },
          { targetName: '袁世凯', type: 'rival', label: '权力博弈' },
          { targetName: '溥仪', type: 'enemy', label: '推翻帝制' },
        ],
      },
      {
        name: '黄兴', role: '革命军事领袖', period: '1874—1916',
        faction: '革命派',
        description: '辛亥革命的军事核心，与孙中山并称"孙黄"，策划并指挥多次武装起义，武昌起义成功后担任革命军总司令。',
        relations: [
          { targetName: '孙中山', type: 'ally', label: '革命搭档' },
          { targetName: '袁世凯', type: 'enemy', label: '政治对立' },
        ],
      },
      {
        name: '袁世凯', role: '北洋军阀领袖/大总统', period: '1859—1916',
        faction: '旧势力',
        description: '北洋新军缔造者，借辛亥革命之机窃取革命果实，就任大总统后复辟帝制称洪宪皇帝，最终众叛亲离，郁郁而终。',
        relations: [
          { targetName: '孙中山', type: 'rival', label: '夺权之争' },
          { targetName: '黄兴', type: 'enemy', label: '革命对立' },
          { targetName: '溥仪', type: 'superior', label: '逼迫退位' },
        ],
      },
      {
        name: '溥仪', role: '末代皇帝', period: '1906—1967',
        faction: '旧帝制',
        description: '清朝最后一位皇帝，三岁登基，六岁退位，后被日本扶植为伪满洲国傀儡皇帝，战后改造成为新中国公民。',
        relations: [
          { targetName: '袁世凯', type: 'subordinate', label: '被迫退位' },
        ],
      },
    ],
    analysis:
      '辛亥革命具有划时代意义，它彻底推翻了统治中国两千多年的封建帝制，使民主共和观念深入人心。然而革命的不彻底性也显而易见：帝国主义和封建势力依然存在，北洋军阀的崛起使民国陷入长期动荡。革命的局限性催生了此后更为深刻的五四运动和共产主义运动，深刻影响了中国此后数十年的历史走向。',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    isAIGenerated: false,
  },
  {
    id: 'fr-001',
    title: '法国大革命',
    titleEn: 'The French Revolution',
    date: '1789年',
    dateEnd: '1799年',
    description:
      '法国大革命是人类历史上最重要的政治革命之一。它推翻了法国君主专制制度，确立了自由、平等、博爱的革命原则，对整个欧洲乃至世界的政治格局产生了深远影响。',
    image: 'https://images.unsplash.com/photo-1431274172761-fca41d930114?w=800&q=80',
    references: [
      'Albert Mathiez, The French Revolution, 1922',
      'William Doyle, The Oxford History of the French Revolution, 1989',
      'Georges Lefebvre, The Coming of the French Revolution, 1947',
    ],
    tags: ['革命', '法国', '启蒙运动', '民主', '共和', '近代史', '欧洲'],
    country: '法国',
    countryCode: 'fr',
    category: 'world-history',
    timeline: [
      { year: '1789年5月', event: '三级会议召开', significance: '政治危机爆发' },
      { year: '1789年7月14日', event: '攻占巴士底狱', significance: '革命爆发标志' },
      { year: '1789年8月', event: '颁布《人权和公民权利宣言》', significance: '确立革命原则' },
      { year: '1792年', event: '宣布成立法兰西第一共和国', significance: '君主制终结' },
      { year: '1793年', event: '处决路易十六', significance: '旧制度彻底覆灭' },
      { year: '1793—1794年', event: '雅各宾派恐怖统治', significance: '革命走向激进' },
      { year: '1799年', event: '拿破仑雾月政变', significance: '大革命时代终结' },
    ],
    keyFigures: [
      {
        name: '路易十六', role: '法国国王', period: '1754—1793',
        faction: '旧制度',
        description: '法国最后一位国王，优柔寡断，无力应对财政危机与革命浪潮，1793年以叛国罪被送上断头台，成为革命的祭品。',
        relations: [
          { targetName: '罗伯斯庇尔', type: 'enemy', label: '被推翻处决' },
          { targetName: '马拉', type: 'enemy', label: '革命打倒' },
        ],
      },
      {
        name: '罗伯斯庇尔', role: '雅各宾派领袖', period: '1758—1794',
        faction: '革命派（雅各宾）',
        description: '法国大革命最激进的领导者，主导恐怖统治，处决了数千名"革命敌人"，最终被热月政变推翻，同样死于断头台。',
        relations: [
          { targetName: '路易十六', type: 'enemy', label: '主导处决' },
          { targetName: '马拉', type: 'ally', label: '革命战友' },
          { targetName: '拿破仑·波拿巴', type: 'rival', label: '理念对立' },
        ],
      },
      {
        name: '马拉', role: '革命家/报人', period: '1743—1793',
        faction: '革命派（雅各宾）',
        description: '激进革命家、报刊编辑，以煽动性文章著称，被视为人民之友；1793年在浴缸中被保王党刺杀，成为革命殉道者。',
        relations: [
          { targetName: '罗伯斯庇尔', type: 'ally', label: '激进盟友' },
          { targetName: '路易十六', type: 'enemy', label: '煽动推翻' },
        ],
      },
      {
        name: '拿破仑·波拿巴', role: '军事将领/执政官', period: '1769—1821',
        faction: '后革命',
        description: '科西嘉岛出身的天才军事家，借大革命浪潮崛起，以雾月政变终结大革命混乱时代，后称帝统治欧洲大陆。',
        relations: [
          { targetName: '罗伯斯庇尔', type: 'rival', label: '终结恐怖政治' },
          { targetName: '路易十六', type: 'enemy', label: '继承革命成果' },
        ],
      },
    ],
    analysis:
      '法国大革命不仅改变了法国的政治体制，更引发了席卷欧洲的政治变革浪潮。"自由、平等、博爱"的理念成为现代民主主义的基石。革命过程中的暴力与恐怖也揭示了激进变革的双刃剑性质。大革命奠定了现代西方政治秩序的基础，并间接催生了拿破仑时代的来临，重塑了整个欧洲版图。',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    isAIGenerated: false,
  },
  {
    id: 'de-001',
    title: '第二次世界大战',
    titleEn: 'World War II',
    date: '1939年',
    dateEnd: '1945年',
    description:
      '第二次世界大战是迄今为止人类历史上规模最大、伤亡最惨重的全球性战争。以纳粹德国、法西斯意大利和军国主义日本为轴心国，对抗以英国、苏联、美国、中国为核心的同盟国。',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    references: [
      'Antony Beevor, The Second World War, 2012',
      'Winston Churchill, The Second World War (6 vols), 1948–1954',
      'Gerhard Weinberg, A World at Arms, 1994',
    ],
    tags: ['世界大战', '纳粹', '同盟国', '轴心国', '大屠杀', '原子弹', '冷战'],
    country: '德国',
    countryCode: 'de',
    category: 'world-history',
    timeline: [
      { year: '1939年9月', event: '德国入侵波兰，战争爆发', significance: '二战正式开始' },
      { year: '1940年', event: '法国沦陷，敦刻尔克大撤退', significance: '西欧告急' },
      { year: '1941年6月', event: '巴巴罗萨行动，德国入侵苏联', significance: '东线战场开辟' },
      { year: '1941年12月', event: '珍珠港事件，美国参战', significance: '战争全球化' },
      { year: '1942—1943年', event: '斯大林格勒战役', significance: '东线决定性转折' },
      { year: '1944年6月', event: '诺曼底登陆', significance: '西线大规模反攻' },
      { year: '1945年5月', event: '德国宣布无条件投降', significance: '欧洲战场终结' },
      { year: '1945年8月', event: '广岛、长崎原子弹，日本投降', significance: '二战全面终结' },
    ],
    keyFigures: [
      {
        name: '阿道夫·希特勒', role: '纳粹德国元首', period: '1889—1945',
        faction: '轴心国',
        description: '纳粹党领袖，以种族仇恨和极端民族主义煽动德国重新崛起，发动二战造成数千万人死亡，最终在柏林陷落时自杀。',
        relations: [
          { targetName: '温斯顿·丘吉尔', type: 'enemy', label: '宿敌' },
          { targetName: '富兰克林·罗斯福', type: 'enemy', label: '对立' },
          { targetName: '约瑟夫·斯大林', type: 'enemy', label: '背约入侵' },
        ],
      },
      {
        name: '温斯顿·丘吉尔', role: '英国首相', period: '1874—1965',
        faction: '同盟国',
        description: '英国二战领袖，以"我们绝不投降"的演讲鼓舞民心，带领英国在最艰难时期坚持抵抗，是二战中最重要的政治家之一。',
        relations: [
          { targetName: '阿道夫·希特勒', type: 'enemy', label: '坚决抵抗' },
          { targetName: '富兰克林·罗斯福', type: 'ally', label: '英美同盟' },
          { targetName: '约瑟夫·斯大林', type: 'ally', label: '反法西斯联盟' },
        ],
      },
      {
        name: '富兰克林·罗斯福', role: '美国总统', period: '1882—1945',
        faction: '同盟国',
        description: '美国唯一连任四届的总统，珍珠港事件后带领美国参战，在雅尔塔会议中主导战后国际秩序安排，战胜前夕病逝。',
        relations: [
          { targetName: '阿道夫·希特勒', type: 'enemy', label: '参战对抗' },
          { targetName: '温斯顿·丘吉尔', type: 'ally', label: '英美同盟' },
          { targetName: '约瑟夫·斯大林', type: 'ally', label: '三巨头合作' },
          { targetName: '德怀特·艾森豪威尔', type: 'superior', label: '任命统帅' },
        ],
      },
      {
        name: '约瑟夫·斯大林', role: '苏联最高领导人', period: '1878—1953',
        faction: '同盟国',
        description: '苏联最高领导人，与希特勒签互不侵犯条约后遭背叛，指挥苏军在东线浴血奋战，斯大林格勒战役成为二战转折点。',
        relations: [
          { targetName: '阿道夫·希特勒', type: 'enemy', label: '遭背叛后反击' },
          { targetName: '温斯顿·丘吉尔', type: 'ally', label: '反法西斯联盟' },
          { targetName: '富兰克林·罗斯福', type: 'ally', label: '三巨头合作' },
        ],
      },
      {
        name: '德怀特·艾森豪威尔', role: '盟军最高司令', period: '1890—1969',
        faction: '同盟国',
        description: '盟军欧洲战区最高司令，策划并指挥了诺曼底登陆，是欧洲战场同盟国胜利的主要军事执行者，后当选美国第34任总统。',
        relations: [
          { targetName: '富兰克林·罗斯福', type: 'subordinate', label: '接受任命' },
          { targetName: '温斯顿·丘吉尔', type: 'colleague', label: '联合指挥' },
          { targetName: '阿道夫·希特勒', type: 'enemy', label: '诺曼底进攻' },
        ],
      },
    ],
    analysis:
      '二战是20世纪最具决定性的历史事件，造成约7000至8500万人死亡，是人类历史上最惨烈的冲突。战后建立的联合国体系、布雷顿森林体系和马歇尔计划重塑了国际秩序，而美苏两极格局和冷战对立则主导了此后近半个世纪的国际政治。大屠杀的历史教训促使国际社会重新审视人权问题，推动了现代国际人道主义法律的根本变革。',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    isAIGenerated: false,
  },
  {
    id: 'us-001',
    title: '美国独立革命',
    titleEn: 'American Revolution',
    date: '1775年',
    dateEnd: '1783年',
    description:
      '北美十三个英国殖民地反抗英国统治、建立独立国家的政治与军事运动。1776年《独立宣言》的发表标志着美利坚合众国的诞生，确立了现代民主共和制度的重要典范。',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80',
    references: [
      'Gordon Wood, The Radicalism of the American Revolution, 1991',
      'Bernard Bailyn, The Ideological Origins of the American Revolution, 1967',
      'David McCullough, 1776, 2005',
    ],
    tags: ['美国', '独立', '革命', '民主', '共和', '殖民地', '启蒙'],
    country: '美国',
    countryCode: 'us',
    category: 'world-history',
    timeline: [
      { year: '1765年', event: '印花税法引发殖民地抗议', significance: '矛盾激化' },
      { year: '1773年', event: '波士顿倾茶事件', significance: '反英情绪高涨' },
      { year: '1775年4月', event: '列克星敦枪声，战争爆发', significance: '独立战争开始' },
      { year: '1776年7月4日', event: '《独立宣言》正式发表', significance: '美国宣告独立' },
      { year: '1777年', event: '萨拉托加战役，法国参战', significance: '战局重大转折' },
      { year: '1781年', event: '约克敦战役，英军投降', significance: '战争基本结束' },
      { year: '1783年', event: '《巴黎和约》签署', significance: '英国正式承认美国独立' },
    ],
    keyFigures: [
      {
        name: '乔治·华盛顿', role: '大陆军总司令/开国总统', period: '1732—1799',
        faction: '革命派',
        description: '美国国父，独立战争总司令，以非凡的领导力带领弱小的殖民地军队击败英军，就任首任总统后主动放弃权力，开创民主先例。',
        relations: [
          { targetName: '托马斯·杰斐逊', type: 'colleague', label: '革命战友' },
          { targetName: '本杰明·富兰克林', type: 'colleague', label: '建国同仁' },
          { targetName: '托马斯·潘恩', type: 'colleague', label: '思想鼓舞' },
        ],
      },
      {
        name: '托马斯·杰斐逊', role: '《独立宣言》起草人/第三任总统', period: '1743—1826',
        faction: '革命派',
        description: '美国《独立宣言》的主要起草人，将启蒙思想转化为建国文献，强调人人生而平等，后任第三任总统，推动路易斯安那购地。',
        relations: [
          { targetName: '乔治·华盛顿', type: 'colleague', label: '共同建国' },
          { targetName: '本杰明·富兰克林', type: 'colleague', label: '启蒙同道' },
        ],
      },
      {
        name: '本杰明·富兰克林', role: '外交家/科学家/政治家', period: '1706—1790',
        faction: '革命派',
        description: '美国著名思想家、科学家与外交家，赴法外交成功争取法国支持，发明避雷针，是美国精神的奠基人之一。',
        relations: [
          { targetName: '乔治·华盛顿', type: 'colleague', label: '外交与军事配合' },
          { targetName: '托马斯·杰斐逊', type: 'colleague', label: '理念相近' },
          { targetName: '托马斯·潘恩', type: 'colleague', label: '启蒙思想盟友' },
        ],
      },
      {
        name: '托马斯·潘恩', role: '政治思想家/《常识》作者', period: '1737—1809',
        faction: '革命派',
        description: '英裔美国革命思想家，著作《常识》以通俗语言点燃革命热情，《人的权利》成为民主主义经典，对法美两国革命产生深远影响。',
        relations: [
          { targetName: '乔治·华盛顿', type: 'ally', label: '思想激励' },
          { targetName: '本杰明·富兰克林', type: 'colleague', label: '革命同路人' },
        ],
      },
    ],
    analysis:
      '美国独立革命将启蒙思想转化为具体的政治制度实践，建立了世界上第一个现代共和制民主国家。《独立宣言》中"人人生而平等"的理念对全球民主运动产生了深远影响。美国的联邦制、三权分立、权利法案等制度设计为现代民主提供了重要参考模板，尽管其内在矛盾（如奴隶制问题）也埋下了日后南北战争的祸根。',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
    isAIGenerated: false,
  },

  // ── 中国史补全 ───────────────────────────────────────────────

  {
    id: 'cn-005',
    title: '夏商周三代与早期文明',
    titleEn: 'Xia, Shang & Zhou Dynasties — Early Civilization',
    date: '约前2070年',
    dateEnd: '前221年',
    description: '夏、商、周三代是中华文明的奠基时期。夏朝开创王位世袭，商朝发展甲骨文与青铜器，西周确立宗法分封制度。这一漫长时期孕育了汉字、礼乐制度与祖先崇拜，构成此后三千年中华文明的精神内核。',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    references: ['《史记·夏本纪》《殷本纪》《周本纪》', '郭沫若《中国古代社会研究》', '李学勤《中国古代文明与国家形成研究》'],
    tags: ['夏朝', '商朝', '周朝', '青铜文明', '甲骨文', '分封制', '宗法制'],
    country: '中国', countryCode: 'cn', category: 'chinese-history',
    timeline: [
      { year: '约前2070年', event: '大禹建立夏朝，启开创世袭制', significance: '中国第一个王朝诞生' },
      { year: '约前1600年', event: '商汤灭夏，建立商朝', significance: '夏亡商兴' },
      { year: '约前1300年', event: '盘庚迁殷，甲骨文成熟', significance: '文字记录历史' },
      { year: '约前1046年', event: '牧野之战，周武王灭商', significance: '商朝覆灭，西周建立' },
      { year: '前771年', event: '犬戎攻破镐京，西周灭亡', significance: '东周开始，分裂加剧' },
    ],
    keyFigures: [
      {
        name: '大禹', role: '夏朝开国君主', period: '约前2123—前2025',
        faction: '夏朝',
        description: '治水英雄，以疏导之法平息洪患，因功德受禅让建立夏朝。其子启废禅让制、开世袭之先河，奠定王权世袭传统。',
        relations: [
          { targetName: '商汤', type: 'rival', label: '王朝更替' },
        ],
      },
      {
        name: '商汤', role: '商朝开国君主', period: '约前1670—前1587',
        faction: '商朝',
        description: '联合各方诸侯推翻暴君夏桀，建立商朝，施行仁政。商朝在其后数百年间发展出成熟的青铜铸造、甲骨占卜与神权政治体系。',
        relations: [
          { targetName: '周文王', type: 'rival', label: '前后王朝' },
        ],
      },
      {
        name: '周文王', role: '周朝奠基者', period: '约前1152—前1056',
        faction: '西周',
        description: '姬昌，西周奠基者，在位期间积德行仁，拓展周的势力。相传演《周易》，被儒家奉为圣王典范，其子武王最终灭商建周。',
        relations: [
          { targetName: '周武王', type: 'family', label: '父子' },
          { targetName: '商汤', type: 'rival', label: '继承覆灭' },
        ],
      },
      {
        name: '周武王', role: '西周开国君主', period: '约前1087—前1043',
        faction: '西周',
        description: '姬发，联合八百诸侯在牧野大败商纣，建立西周。分封天下，推行宗法礼乐制度，奠定中国封建文明基础。',
        relations: [
          { targetName: '周文王', type: 'family', label: '父子' },
          { targetName: '周公旦', type: 'family', label: '兄弟' },
        ],
      },
      {
        name: '周公旦', role: '西周摄政大臣', period: '约前1100—前1020',
        faction: '西周',
        description: '姬旦，周武王之弟，武王死后辅佐成王，制礼作乐，建立完整的宗法封建制度，被后世儒家奉为"元圣"，孔子毕生仰慕的政治典范。',
        relations: [
          { targetName: '周武王', type: 'family', label: '兄弟辅佐' },
        ],
      },
    ],
    analysis: '三代文明是中华文明的轴心期前奏。夏朝虽史料匮乏，但确立了世袭王权的正当性；商朝留下大量甲骨卜辞，揭示了神权与王权合一的政治形态；西周则以宗法分封制构建了"天下"的政治秩序——天子、诸侯、卿大夫、士的等级体系，以及以血缘为纽带的政治认同，深刻影响了此后两千余年的中国社会结构。礼乐文明在这一时期形成，成为中华文化区别于其他文明的核心标志。三代的历史经验也奠定了"德治"与"天命"的政治哲学，为儒家思想提供了历史依据。',
    createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z', isAIGenerated: false,
  },

  {
    id: 'cn-006',
    title: '春秋战国与百家争鸣',
    titleEn: 'Spring & Autumn / Warring States — Hundred Schools of Thought',
    date: '前770年',
    dateEnd: '前221年',
    description: '周室东迁后，礼崩乐坏，诸侯争霸，战争频仍。乱世之中，孔子、老子、墨子、韩非子等思想家竞相立说，形成儒、道、法、墨、兵等各家学说并驾齐驱的"百家争鸣"局面，奠定中华文化思想的永久底色。',
    image: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=800&q=80',
    references: ['《论语》《道德经》《孟子》《韩非子》《孙子兵法》', '冯友兰《中国哲学史》', '钱穆《先秦诸子系年》'],
    tags: ['百家争鸣', '儒家', '道家', '法家', '兵家', '诸子', '战国七雄'],
    country: '中国', countryCode: 'cn', category: 'chinese-history',
    timeline: [
      { year: '前770年', event: '周平王东迁洛邑，东周开始', significance: '王权衰落，诸侯崛起' },
      { year: '前551年', event: '孔子生于鲁国', significance: '儒家思想奠基人诞生' },
      { year: '前479年', event: '孔子逝世，弟子整理《论语》', significance: '儒家学派传承' },
      { year: '前475年', event: '战国时代开始', significance: '兼并战争加剧' },
      { year: '前372年', event: '孟子诞生，儒学进一步发展', significance: '仁政学说完善' },
      { year: '前359年', event: '商鞅在秦国变法', significance: '法家思想付诸实践' },
      { year: '前307年', event: '赵武灵王胡服骑射变革', significance: '军事改革典范' },
      { year: '前221年', event: '秦统一六国，诸侯时代终结', significance: '百家争鸣落幕' },
    ],
    keyFigures: [
      {
        name: '孔子', role: '儒家创始人', period: '前551—前479',
        faction: '儒家',
        description: '名丘，字仲尼。鲁国人，一生周游列国推行仁政理想，虽未获重用，却培养弟子三千，整理六经，创立儒家思想，成为中华文明最重要的精神源头。',
        relations: [
          { targetName: '孟子', type: 'colleague', label: '儒家传承' },
          { targetName: '老子', type: 'rival', label: '儒道之辩' },
          { targetName: '韩非子', type: 'rival', label: '仁政与法治' },
        ],
      },
      {
        name: '老子', role: '道家创始人', period: '约前571—前471',
        faction: '道家',
        description: '姓李名耳，楚国人，周王室史官。著《道德经》五千言，以"道"为万物本原，主张无为而治，小国寡民，开创道家哲学，深刻影响中国哲学、宗教与艺术。',
        relations: [
          { targetName: '孔子', type: 'rival', label: '儒道对立' },
          { targetName: '庄子', type: 'colleague', label: '道家传承' },
        ],
      },
      {
        name: '孟子', role: '儒家亚圣', period: '前372—前289',
        faction: '儒家',
        description: '名轲，邹国人。发展孔子仁学，提出"仁政""民贵君轻"学说，主张性善论，被尊为"亚圣"，其思想构成后世儒学的重要支柱。',
        relations: [
          { targetName: '孔子', type: 'colleague', label: '儒家传承' },
          { targetName: '韩非子', type: 'rival', label: '王道与法术之争' },
        ],
      },
      {
        name: '墨子', role: '墨家创始人', period: '约前480—前390',
        faction: '墨家',
        description: '名翟，宋国人。出身工匠，主张兼爱、非攻、节用、尚贤，创立墨家学派。墨家重视逻辑与技术，在战国时期曾与儒家并称"显学"。',
        relations: [
          { targetName: '孔子', type: 'rival', label: '礼制与兼爱之争' },
        ],
      },
      {
        name: '韩非子', role: '法家集大成者', period: '约前280—前233',
        faction: '法家',
        description: '韩国王室公子，综合商鞅之法、申不害之术、慎到之势，建立完整法家理论体系。其著作《韩非子》成为秦国统一天下的思想武器，却也因此被同窗李斯陷害致死。',
        relations: [
          { targetName: '孔子', type: 'rival', label: '德治与法治' },
          { targetName: '孟子', type: 'rival', label: '性善与人性恶' },
        ],
      },
      {
        name: '孙子', role: '兵家代表人物', period: '约前545—前470',
        faction: '兵家',
        description: '名武，字长卿，齐国人。著《孙子兵法》十三篇，以哲学思维论述战争规律，提出"知彼知己，百战不殆"，成为全球流传最广的军事经典。',
        relations: [
          { targetName: '孔子', type: 'colleague', label: '同时代思想家' },
        ],
      },
    ],
    analysis: '春秋战国时代是中国历史上最具创造力的思想时期，堪与古希腊哲学黄金期相并论。礼崩乐坏的乱世反而解放了思想，士阶层的崛起使知识分子获得空前自由，各国君主的竞争需求为不同学说提供了生存土壤。百家争鸣奠定的思想格局——儒家的伦理秩序、道家的自然哲学、法家的制度理性、兵家的战略智慧——构成此后中国思想的永久参照系。秦统一后独尊法家，汉代以后儒家居主导地位，但道、法、兵诸家始终在政治实践中发挥隐性作用，形成"阳儒阴法"的中国政治文化传统。',
    createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z', isAIGenerated: false,
  },

  {
    id: 'cn-007',
    title: '楚汉之争与西汉建立',
    titleEn: 'Chu-Han Contention & Founding of the Han Dynasty',
    date: '前206年',
    dateEnd: '前202年',
    description: '秦末农民大起义推翻暴秦后，刘邦与项羽展开长达四年的楚汉战争。出身布衣的刘邦凭借知人善任，最终在垓下之战击败战神项羽，建立绵延四百年的汉朝，并奠定"汉族""汉文化"的历史认同。',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80',
    references: ['司马迁《史记·高祖本纪》《项羽本纪》', '班固《汉书》', '吕思勉《秦汉史》'],
    tags: ['楚汉', '刘邦', '项羽', '汉朝', '垓下', '鸿门宴', '汉高祖'],
    country: '中国', countryCode: 'cn', category: 'chinese-history',
    timeline: [
      { year: '前209年', event: '陈胜、吴广大泽乡起义', significance: '秦末农民战争爆发' },
      { year: '前207年', event: '巨鹿之战，项羽破釜沉舟大败秦军', significance: '秦朝主力覆灭' },
      { year: '前206年', event: '刘邦先入关中，秦王子婴投降', significance: '秦朝灭亡' },
      { year: '前206年', event: '鸿门宴，刘邦脱险', significance: '楚汉矛盾公开化' },
      { year: '前205—前203年', event: '楚汉对峙，荥阳拉锯战', significance: '战略相持阶段' },
      { year: '前202年', event: '垓下之战，项羽四面楚歌，乌江自刎', significance: '楚汉战争终结' },
      { year: '前202年', event: '刘邦称帝，建立汉朝', significance: '汉朝建立' },
    ],
    keyFigures: [
      {
        name: '刘邦（汉高祖）', role: '汉朝开国皇帝', period: '前256—前195',
        faction: '汉',
        description: '沛县布衣出身，以豁达知人善任著称。善于纳谏，重用张良、萧何、韩信，以政治手腕最终击败军事天才项羽，建立汉朝，开创文景之治的基础。',
        relations: [
          { targetName: '项羽', type: 'enemy', label: '楚汉争霸' },
          { targetName: '张良', type: 'superior', label: '君臣' },
          { targetName: '韩信', type: 'superior', label: '重用与猜忌' },
          { targetName: '萧何', type: 'superior', label: '萧规曹随' },
        ],
      },
      {
        name: '项羽', role: '西楚霸王', period: '前232—前202',
        faction: '楚',
        description: '楚国名将之后，力能扛鼎，巨鹿之战破釜沉舟，以少胜多摧毁秦军主力。然刚愎自用，不善用人，"妇人之仁"放走刘邦，最终垓下兵败，乌江自刎，留下"虞兮虞兮奈若何"的千古悲歌。',
        relations: [
          { targetName: '刘邦（汉高祖）', type: 'enemy', label: '争夺天下' },
          { targetName: '范增', type: 'subordinate', label: '谋士' },
        ],
      },
      {
        name: '张良', role: '汉初三杰·谋臣', period: '约前250—前186',
        faction: '汉',
        description: '韩国贵族后裔，运筹帷幄之中，决胜千里之外。鸿门宴救刘邦脱险，灭楚策略深谋远虑，功成身退，被刘邦誉为"汉初三杰"之首，是中国历史上最成功的军师典范。',
        relations: [
          { targetName: '刘邦（汉高祖）', type: 'subordinate', label: '首席谋臣' },
          { targetName: '韩信', type: 'colleague', label: '汉初三杰' },
          { targetName: '萧何', type: 'colleague', label: '汉初三杰' },
        ],
      },
      {
        name: '韩信', role: '汉初三杰·军事统帅', period: '约前231—前196',
        faction: '汉',
        description: '军事天才，明修栈道暗度陈仓、背水一战、十面埋伏皆为其杰作，率军横扫北方，于垓下合围项羽。功高震主，终被吕后以谋反罪诛杀，留下"成也萧何，败也萧何"的历史叹息。',
        relations: [
          { targetName: '刘邦（汉高祖）', type: 'subordinate', label: '被重用后猜忌' },
          { targetName: '张良', type: 'colleague', label: '汉初三杰' },
          { targetName: '萧何', type: 'colleague', label: '举荐与出卖' },
        ],
      },
      {
        name: '萧何', role: '汉初三杰·丞相', period: '约前257—前193',
        faction: '汉',
        description: '汉朝开国丞相，月下追韩信，坐镇后方保障粮草供给，制定汉朝律法体制。刘邦称其功劳第一，是稳定汉家江山的关键人物，开创"萧规曹随"的施政传统。',
        relations: [
          { targetName: '刘邦（汉高祖）', type: 'subordinate', label: '开国丞相' },
          { targetName: '韩信', type: 'colleague', label: '举荐又参与诛杀' },
          { targetName: '张良', type: 'colleague', label: '汉初三杰' },
        ],
      },
    ],
    analysis: '楚汉之争的胜负绝非偶然。项羽以军事天才却输于政治，刘邦以平庸之资却赢在用人。这场历时四年的大战揭示了一个深刻规律：在争夺最高权力的博弈中，政治能力远比个人武勇更为关键。汉朝的建立意义深远——它不仅恢复了大一统格局，更通过"汉承秦制、以儒术润色"的方式，将法家的行政效率与儒家的意识形态整合，形成了延续两千年的中华帝制模板。汉族、汉字、汉文化的称谓均源于这一时期，汉朝对中华文明认同的塑造作用无可替代。',
    createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z', isAIGenerated: false,
  },

  {
    id: 'cn-008',
    title: '三国鼎立',
    titleEn: 'The Three Kingdoms',
    date: '220年',
    dateEnd: '280年',
    description: '汉末黄巾起义后，群雄割据，曹操、刘备、孙权三方势力逐渐形成魏、蜀、吴鼎立格局。赤壁之战奠定三分天下，此后六十年的乱世涌现出无数杰出的政治家与军事家，成为中国历史上最具传奇色彩的时代之一。',
    image: 'https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=800&q=80',
    references: ['陈寿《三国志》', '裴松之注《三国志》', '罗贯中《三国演义》（文学参考）'],
    tags: ['三国', '曹魏', '蜀汉', '东吴', '赤壁之战', '诸葛亮', '曹操'],
    country: '中国', countryCode: 'cn', category: 'chinese-history',
    timeline: [
      { year: '184年', event: '黄巾起义爆发，汉室衰亡开始', significance: '乱世肇始' },
      { year: '200年', event: '官渡之战，曹操大败袁绍', significance: '曹操统一北方' },
      { year: '208年', event: '赤壁之战，孙刘联军火烧曹营', significance: '三分天下格局确立' },
      { year: '219年', event: '关羽失荆州，败走麦城', significance: '蜀汉元气大伤' },
      { year: '220年', event: '曹丕称帝，建立魏国', significance: '汉朝正式终结' },
      { year: '221年', event: '刘备称帝，建立蜀汉', significance: '三国鼎立完成' },
      { year: '234年', event: '诸葛亮病逝五丈原', significance: '蜀汉衰落' },
      { year: '280年', event: '西晋灭吴，天下一统', significance: '三国时代终结' },
    ],
    keyFigures: [
      {
        name: '曹操', role: '曹魏奠基者', period: '155—220',
        faction: '曹魏',
        description: '东汉末年最杰出的政治家与军事家。"挟天子以令诸侯"，统一北方，推行屯田制恢复经济，同时也是优秀的诗人，"老骥伏枥，志在千里"展现其雄心。后世评价褒贬不一，被称为"治世之能臣，乱世之奸雄"。',
        relations: [
          { targetName: '刘备', type: 'enemy', label: '汉室正统之争' },
          { targetName: '孙权', type: 'enemy', label: '赤壁对决' },
          { targetName: '司马懿', type: 'superior', label: '重用谋臣' },
        ],
      },
      {
        name: '刘备', role: '蜀汉开国皇帝', period: '161—223',
        faction: '蜀汉',
        description: '自称汉室宗亲，以"仁义"著称，三顾茅庐求诸葛亮出山，联吴抗曹，取荆益建蜀汉。失荆州后亲征东吴，夷陵之战惨败，白帝城托孤，其仁德形象成为后世君主效仿的楷模。',
        relations: [
          { targetName: '曹操', type: 'enemy', label: '汉贼不两立' },
          { targetName: '诸葛亮', type: 'superior', label: '三顾之恩' },
          { targetName: '关羽', type: 'ally', label: '桃园结义' },
          { targetName: '孙权', type: 'rival', label: '联吴抗曹又反目' },
        ],
      },
      {
        name: '诸葛亮', role: '蜀汉丞相', period: '181—234',
        faction: '蜀汉',
        description: '字孔明，号卧龙。刘备三顾茅庐请出，提出"隆中对"战略构想，赤壁之战联吴抗曹。白帝城受托孤之重，六出祁山北伐，鞠躬尽瘁死而后已，成为中国忠诚与智慧的永恒象征。',
        relations: [
          { targetName: '刘备', type: 'subordinate', label: '托孤重臣' },
          { targetName: '曹操', type: 'enemy', label: '北伐对抗' },
          { targetName: '司马懿', type: 'rival', label: '魏蜀博弈' },
          { targetName: '关羽', type: 'colleague', label: '同殿为臣' },
        ],
      },
      {
        name: '孙权', role: '东吴开国皇帝', period: '182—252',
        faction: '东吴',
        description: '承父兄基业，经营东南。赤壁之战与刘备联盟击败曹操，后吕蒙袭取荆州，关羽身死。在曹魏与蜀汉之间纵横捭阖，守江东六十年，曹操叹曰"生子当如孙仲谋"。',
        relations: [
          { targetName: '曹操', type: 'rival', label: '赤壁以后称臣又对抗' },
          { targetName: '刘备', type: 'rival', label: '联盟又反目' },
        ],
      },
      {
        name: '关羽', role: '蜀汉大将·武圣', period: '约160—219',
        faction: '蜀汉',
        description: '字云长，与刘备、张飞桃园结义，镇守荆州，水淹七军、威震华夏，骄傲轻敌导致荆州失守，败走麦城被吕蒙擒杀。身后被历代帝王追封为"武圣"，成为忠义精神的化身。',
        relations: [
          { targetName: '刘备', type: 'ally', label: '桃园兄弟' },
          { targetName: '诸葛亮', type: 'colleague', label: '同殿' },
          { targetName: '曹操', type: 'rival', label: '过五关斩六将' },
        ],
      },
      {
        name: '司马懿', role: '曹魏权臣', period: '179—251',
        faction: '曹魏',
        description: '曹魏四朝重臣，隐忍深沉，与诸葛亮数度对垒于祁山，以坚守耗尽蜀汉国力。高平陵政变夺取曹魏大权，其孙司马炎最终篡魏建晋，一统三国，司马懿是晋朝真正的奠基人。',
        relations: [
          { targetName: '曹操', type: 'subordinate', label: '侍奉曹家四世' },
          { targetName: '诸葛亮', type: 'rival', label: '陇右祁山博弈' },
        ],
      },
    ],
    analysis: '三国时代之所以成为中国历史上最广为人知的时期，不仅因为群英荟萃、故事精彩，更因为它深刻展示了乱世中权谋、忠义、人才与制度之间的复杂关系。曹操的现实主义、诸葛亮的理想主义、司马懿的隐忍主义构成三种截然不同的政治人格，各有其历史逻辑。赤壁之战以弱胜强的军事奇迹，桃园结义的忠义精神，长期被中国文化反复演绎与传颂。三国的最终归晋也证明：单纯的英雄主义无法战胜制度性力量，长期消耗战下坚韧的体量优势终将显现。',
    createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z', isAIGenerated: false,
  },

  {
    id: 'cn-009',
    title: '隋唐盛世',
    titleEn: 'Sui-Tang Empire — The Golden Age',
    date: '581年',
    dateEnd: '907年',
    description: '隋文帝结束近三百年分裂，统一南北。继之的唐朝国力鼎盛，对外开放，万邦来朝。贞观之治、开元盛世将中华文明推向顶峰，长安成为当时世界上最大最繁华的国际都市，中华文化辐射整个东亚。',
    image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&q=80',
    references: ['《旧唐书》《新唐书》', '《资治通鉴》', '吴枫《隋唐历史文化》'],
    tags: ['唐朝', '隋朝', '贞观之治', '开元盛世', '丝绸之路', '大运河', '武则天'],
    country: '中国', countryCode: 'cn', category: 'chinese-history',
    timeline: [
      { year: '581年', event: '杨坚建隋，统一南北', significance: '结束近三百年分裂' },
      { year: '605—610年', event: '大运河开凿完成', significance: '南北经济联通' },
      { year: '618年', event: '李渊建唐，隋朝灭亡', significance: '唐朝建立' },
      { year: '627—649年', event: '贞观之治，太宗在位', significance: '唐朝鼎盛开始' },
      { year: '690年', event: '武则天称帝，建立周朝', significance: '中国唯一女皇帝' },
      { year: '713—741年', event: '开元盛世，唐玄宗在位', significance: '唐朝巅峰时期' },
      { year: '755—763年', event: '安史之乱', significance: '唐朝由盛转衰' },
      { year: '907年', event: '朱温篡唐，唐朝灭亡', significance: '五代十国开始' },
    ],
    keyFigures: [
      {
        name: '唐太宗李世民', role: '唐朝第二位皇帝', period: '598—649',
        faction: '唐廷',
        description: '玄武门之变诛兄弟夺权，继位后以"镜鉴"思维纳谏任贤，开创"贞观之治"。轻徭薄赋，文武兼备，对外平突厥、伐高昌，被周边民族尊称"天可汗"，是中国历史公认最出色的帝王之一。',
        relations: [
          { targetName: '魏征', type: 'superior', label: '纳谏君臣' },
          { targetName: '武则天', type: 'family', label: '父子妃嫔' },
          { targetName: '玄奘', type: 'superior', label: '支持西行取经' },
        ],
      },
      {
        name: '武则天', role: '中国唯一正统女皇帝', period: '624—705',
        faction: '武周',
        description: '本为唐太宗才人，后为唐高宗皇后，以铁腕政治打压世家贵族，发展科举，重用寒门人才。公元690年称帝改国号为周，在位期间国力持续强盛，史称"政启开元，治宏贞观"，是极具争议也极具才干的历史人物。',
        relations: [
          { targetName: '唐太宗李世民', type: 'family', label: '才人转皇后' },
          { targetName: '唐玄宗李隆基', type: 'family', label: '祖孙' },
        ],
      },
      {
        name: '唐玄宗李隆基', role: '唐朝第六位皇帝', period: '685—762',
        faction: '唐廷',
        description: '前期励精图治，开创开元盛世，唐朝国力臻于顶峰。后期宠信杨贵妃，重用安禄山，引发安史之乱，逃往蜀中，晚年孤寂而终。其一生是盛极而衰的历史缩影。',
        relations: [
          { targetName: '武则天', type: 'family', label: '祖孙，夺回李唐皇权' },
          { targetName: '魏征', type: 'colleague', label: '前朝遗产' },
        ],
      },
      {
        name: '魏征', role: '谏臣', period: '580—643',
        faction: '唐廷',
        description: '原为太子李建成幕僚，玄武门之变后被李世民重用。以直言敢谏著称，累计进谏二百余次，帮助太宗避免无数决策失误，被太宗誉为"镜鉴"——"以铜为镜可正衣冠，以古为镜可知兴替，以人为镜可明得失"。',
        relations: [
          { targetName: '唐太宗李世民', type: 'subordinate', label: '首席谏臣' },
        ],
      },
      {
        name: '玄奘', role: '高僧·佛经翻译家', period: '602—664',
        faction: '唐廷',
        description: '俗姓陈，洛州人。独自西行印度取经，历经十九年，带回佛经657部并主持翻译。其西行历险成为《西游记》的原型，对佛教在中国的传播与中印文化交流作出划时代贡献。',
        relations: [
          { targetName: '唐太宗李世民', type: 'subordinate', label: '获皇帝支持' },
        ],
      },
    ],
    analysis: '隋唐时代是中华文明第一个真正意义上的全球化高峰。长安城容纳来自中亚、西亚、东南亚、日本、朝鲜的使节、商人、留学生与宗教人士，是名副其实的"世界首都"。科举制度在这一时期成熟，打破了门阀贵族对政权的垄断，使社会阶层流动成为可能，这一制度延续千年，深刻塑造了中国的精英选拔文化。唐朝的文学成就——李白、杜甫、白居易的诗歌——代表了中文诗歌的最高峰。安史之乱是唐朝由盛转衰的分水岭，也揭示了内部民族政策失当与藩镇割据的深层危机，为此后五代乱世埋下伏笔。',
    createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z', isAIGenerated: false,
  },

  {
    id: 'cn-010',
    title: '宋朝：文化繁荣与积弱并存',
    titleEn: 'Song Dynasty — Cultural Flourishing & Military Weakness',
    date: '960年',
    dateEnd: '1279年',
    description: '赵匡胤陈桥兵变建立宋朝，以"重文轻武"为基本国策，科举文官制度高度发达，商品经济与城市文明空前繁荣，四大发明在此期间应用推广。然外患不绝，北宋亡于金，南宋偏安，最终被蒙古铁骑所灭。',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80',
    references: ['脱脱等《宋史》', '陈寅恪《唐代政治史述论稿》', '漆侠《宋代经济史》'],
    tags: ['宋朝', '赵匡胤', '王安石变法', '岳飞', '靖康之耻', '四大发明', '科举'],
    country: '中国', countryCode: 'cn', category: 'chinese-history',
    timeline: [
      { year: '960年', event: '赵匡胤陈桥兵变，建立宋朝', significance: '五代十国终结' },
      { year: '979年', event: '宋太宗统一中原（燕云十六州除外）', significance: '基本统一' },
      { year: '1043年', event: '范仲淹庆历新政，改革失败', significance: '变法先声' },
      { year: '1069年', event: '王安石主持熙宁变法', significance: '重大制度改革' },
      { year: '1127年', event: '靖康之耻，北宋灭亡', significance: '首都沦陷，皇帝被俘' },
      { year: '1141年', event: '岳飞被害，绍兴和议签订', significance: '偏安格局确立' },
      { year: '1234年', event: '蒙宋联合灭金', significance: '宋朝北方屏障消失' },
      { year: '1279年', event: '崖山海战，南宋覆灭', significance: '宋朝彻底灭亡' },
    ],
    keyFigures: [
      {
        name: '赵匡胤（宋太祖）', role: '宋朝开国皇帝', period: '927—976',
        faction: '北宋皇室',
        description: '武将出身，"杯酒释兵权"以政治手段解除武将军权，确立重文轻武国策。统一中原，轻徭薄赋，奠定宋朝文治基础。其死亡之谜"烛影斧声"成为千古悬案。',
        relations: [
          { targetName: '王安石', type: 'rival', label: '祖制与变法' },
        ],
      },
      {
        name: '王安石', role: '北宋变法宰相', period: '1021—1086',
        faction: '变法派',
        description: '字介甫，北宋著名政治改革家与文学家。主持熙宁变法，推行青苗法、募役法、保甲法等一系列改革，旨在富国强兵，却因触动既得利益者遭强烈反对，变法最终失败，留下千古争议。',
        relations: [
          { targetName: '苏轼', type: 'rival', label: '政敌' },
          { targetName: '司马光', type: 'rival', label: '保守派领袖' },
        ],
      },
      {
        name: '苏轼', role: '文学家·政治家', period: '1037—1101',
        faction: '保守派（文人）',
        description: '字子瞻，号东坡居士。北宋最全面的文化天才，诗词文赋书画样样卓越。政治上反对王安石变法，屡遭贬谪，却以旷达胸怀面对逆境，"大江东去"与"但愿人长久"流传千古。',
        relations: [
          { targetName: '王安石', type: 'rival', label: '新旧党争' },
          { targetName: '司马光', type: 'colleague', label: '旧党同僚' },
        ],
      },
      {
        name: '岳飞', role: '南宋抗金名将', period: '1103—1142',
        faction: '主战派',
        description: '字鹏举，抗金英雄，率岳家军屡败金兵，"直捣黄龙"几乎收复失地之际，被秦桧以"莫须有"罪名诬陷，宋高宗连发十二道金牌召回，最终在风波亭被害，成为千古忠烈代名词。',
        relations: [
          { targetName: '秦桧', type: 'enemy', label: '陷害致死' },
          { targetName: '宋高宗', type: 'subordinate', label: '君臣悲剧' },
        ],
      },
      {
        name: '秦桧', role: '南宋权相', period: '1090—1155',
        faction: '主和派',
        description: '南宋权相，以媾和金国、害死岳飞著称史册。主导绍兴和议，使南宋偏安得以延续，却背负千古骂名。其跪像至今陈列于岳王庙前，成为历史上奸佞的最著名符号。',
        relations: [
          { targetName: '岳飞', type: 'enemy', label: '构陷杀害' },
          { targetName: '宋高宗', type: 'subordinate', label: '皇帝纵容' },
        ],
      },
    ],
    analysis: '宋朝是中国历史上一个令人扼腕的矛盾体。其文化与经济成就在当时世界首屈一指——纸币、活字印刷、火药武器、指南针均在此期间普及；城市商业化程度远超同期欧洲；科举制度使社会阶层流动达到历史高峰；文学艺术繁荣至极，词这种文学形式在此期间发展成熟。然而"积贫积弱"的军事困境始终制约其战略空间。重文轻武的国策虽避免了藩镇割据，却也削弱了对抗游牧民族的军事能力。靖康之耻揭示了文明的繁荣并不能自动转化为生存能力，这是宋朝留给后世最深刻的历史教训。',
    createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z', isAIGenerated: false,
  },

  {
    id: 'cn-011',
    title: '蒙古崛起与元朝统治',
    titleEn: 'Mongol Conquest & Yuan Dynasty',
    date: '1206年',
    dateEnd: '1368年',
    description: '成吉思汗统一蒙古各部，建立人类历史上版图最大的连续帝国。忽必烈灭宋建元，首次实现对中国全境的统一。元朝横跨欧亚的交通网络促进了东西方文明交流，马可·波罗的游记使欧洲人第一次系统认识了中国。',
    image: 'https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?w=800&q=80',
    references: ['《蒙古秘史》', '宋濂等《元史》', '马可·波罗《马可·波罗游记》'],
    tags: ['蒙古', '元朝', '成吉思汗', '忽必烈', '马可波罗', '驿站制度', '欧亚贸易'],
    country: '中国', countryCode: 'cn', category: 'chinese-history',
    timeline: [
      { year: '1206年', event: '铁木真统一蒙古，被尊为成吉思汗', significance: '蒙古帝国建立' },
      { year: '1215年', event: '蒙古攻占金国中都（今北京）', significance: '华北门户洞开' },
      { year: '1234年', event: '蒙古灭金', significance: '北方统一' },
      { year: '1271年', event: '忽必烈改国号为元', significance: '元朝正式建立' },
      { year: '1279年', event: '崖山海战，元灭南宋', significance: '中国全境统一' },
      { year: '1275年', event: '马可·波罗抵达中国', significance: '东西方直接交流' },
      { year: '1351年', event: '红巾军起义爆发', significance: '元末民变开始' },
      { year: '1368年', event: '朱元璋建明，元顺帝北逃', significance: '元朝覆灭' },
    ],
    keyFigures: [
      {
        name: '成吉思汗', role: '蒙古帝国创建者', period: '约1162—1227',
        faction: '蒙古帝国',
        description: '名铁木真，出身贫苦，凭借卓越的军事才能和政治手腕统一蒙古诸部。建立驿站制度、法典制度，率蒙古骑兵席卷欧亚大陆，创建人类史上最大连续版图帝国，改变了整个欧亚大陆的政治格局。',
        relations: [
          { targetName: '忽必烈', type: 'family', label: '祖孙' },
        ],
      },
      {
        name: '忽必烈', role: '元朝开国皇帝', period: '1215—1294',
        faction: '元朝',
        description: '成吉思汗之孙，接受汉化教育，建立元朝，定都大都（今北京），灭南宋统一中国。推行行省制度，促进东西方贸易，是蒙古帝国中最具政治智慧的统治者，也是中国历史上少数成功统治全中国的非汉族皇帝之一。',
        relations: [
          { targetName: '成吉思汗', type: 'family', label: '祖孙传承' },
          { targetName: '马可·波罗', type: 'superior', label: '接待西方使者' },
        ],
      },
      {
        name: '马可·波罗', role: '意大利旅行家', period: '1254—1324',
        faction: '欧洲访客',
        description: '威尼斯商人，随父前往中国，在元朝生活约十七年，深受忽必烈重用。回国后口述《马可·波罗游记》，详细描述中国的富庶与文明，激起欧洲人对东方的强烈好奇，间接推动了后来的地理大发现。',
        relations: [
          { targetName: '忽必烈', type: 'subordinate', label: '为大汗效力' },
        ],
      },
      {
        name: '文天祥', role: '南宋末代丞相·民族英雄', period: '1236—1283',
        faction: '南宋（抗元）',
        description: '南宋末年宰相，抗元英雄。崖山之战后被俘，忽必烈以高官厚禄劝降，文天祥断然拒绝，留下"人生自古谁无死，留取丹心照汗青"的千古名句，从容就义，成为民族气节的最高象征。',
        relations: [
          { targetName: '忽必烈', type: 'enemy', label: '被俘拒降' },
        ],
      },
    ],
    analysis: '蒙古征服是中国历史上最深刻的外来冲击之一。元朝的行省制度作为地方行政体系一直延续至今，对中国的领土整合产生了深远影响。蒙古人建立的"丝绸之路"交通网络使东西方贸易达到历史顶峰，马可·波罗的游记激发了欧洲的"东方梦"，间接促成了大航海时代的到来。然而，元朝的民族歧视政策（四等人制）与高压统治激化了社会矛盾，仅九十年便被驱逐出中原。蒙古统治的历史遗产复杂而矛盾：它既代表着人类历史上最大规模的武力征服，也是东西方文明交流最密集的时代。',
    createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z', isAIGenerated: false,
  },

  {
    id: 'cn-012',
    title: '明朝永乐盛世与郑和下西洋',
    titleEn: 'Yongle Era & Zheng He\'s Maritime Voyages',
    date: '1368年',
    dateEnd: '1644年',
    description: '朱元璋驱逐蒙古建立明朝，永乐帝迁都北京、编修《永乐大典》，并派郑和率庞大舰队七下西洋，展示了中华文明在15世纪的海洋能力与国际影响力。明朝中后期倭寇、党争与财政危机积重难返，最终覆于农民起义与满清铁蹄。',
    image: 'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=800&q=80',
    references: ['《明史》', '马欢《瀛涯胜览》', '黄仁宇《万历十五年》'],
    tags: ['明朝', '朱元璋', '郑和', '永乐大典', '迁都北京', '倭寇', '万历'],
    country: '中国', countryCode: 'cn', category: 'chinese-history',
    timeline: [
      { year: '1368年', event: '朱元璋建明，定都南京', significance: '汉族政权恢复' },
      { year: '1402年', event: '靖难之役，朱棣夺位', significance: '永乐帝即位' },
      { year: '1405年', event: '郑和首次下西洋', significance: '中国海洋探索开始' },
      { year: '1421年', event: '迁都北京，紫禁城落成', significance: '北京成为政治中心' },
      { year: '1433年', event: '郑和第七次下西洋，船队规模最大', significance: '海上丝路巅峰' },
      { year: '1449年', event: '土木堡之变，英宗被俘', significance: '国力受挫' },
      { year: '1572—1620年', event: '万历年间，张居正改革后朋党林立', significance: '明朝走向衰落' },
      { year: '1644年', event: '李自成入北京，崇祯帝自缢，清军入关', significance: '明朝灭亡' },
    ],
    keyFigures: [
      {
        name: '朱元璋（明太祖）', role: '明朝开国皇帝', period: '1328—1398',
        faction: '明朝皇室',
        description: '贫苦出身，从乞丐、和尚到开国皇帝，是中国历史上出身最低微的帝王之一。推翻元朝，建立明朝，废丞相、强化皇权，大杀功臣，建立特务制度（锦衣卫），其统治兼具开国创业的伟大与专制暴虐的阴暗。',
        relations: [
          { targetName: '朱棣（明成祖）', type: 'family', label: '父子' },
          { targetName: '郑和', type: 'family', label: '太祖赐姓' },
        ],
      },
      {
        name: '朱棣（明成祖）', role: '明朝第三位皇帝', period: '1360—1424',
        faction: '明朝皇室',
        description: '靖难之役夺取侄子皇位，迁都北京，主持编纂《永乐大典》，五次亲征漠北，派郑和七下西洋，是明朝最具进取心的皇帝。建造的紫禁城至今矗立，奠定了北京作为中国政治中心六百年的格局。',
        relations: [
          { targetName: '朱元璋（明太祖）', type: 'family', label: '子继父业又争位' },
          { targetName: '郑和', type: 'superior', label: '命令七下西洋' },
        ],
      },
      {
        name: '郑和', role: '明朝航海家', period: '1371—1433',
        faction: '明朝皇室',
        description: '云南回族穆斯林，本姓马，幼年被俘入宫为宦官，深受明成祖信任。七次率领当时世界最大舰队（最多宝船六十余艘、兵员二万七千）下西洋，到达东南亚、南亚、波斯湾、东非，是15世纪最伟大的航海壮举。',
        relations: [
          { targetName: '朱棣（明成祖）', type: 'subordinate', label: '奉命出使' },
          { targetName: '朱元璋（明太祖）', type: 'subordinate', label: '赐姓郑' },
        ],
      },
      {
        name: '张居正', role: '明朝首辅·改革家', period: '1525—1582',
        faction: '明廷文官',
        description: '万历年间权倾朝野的首辅，推行"一条鞭法"整顿财政，"考成法"整顿吏治，使明朝国库充盈、边防巩固。身后被清算，财产抄没，子孙流放，功过得失争议至今，被梁启超称为"明代唯一政治家"。',
        relations: [
          { targetName: '朱元璋（明太祖）', type: 'rival', label: '后期改革前朝弊政' },
        ],
      },
    ],
    analysis: '郑和下西洋与同时期欧洲地理大发现形成鲜明对比，提供了一个永恒的历史假设：若中国继续坚持海洋扩张，世界史将如何改写？郑和舰队在技术和规模上远超哥伦布时代的欧洲船队，却因永乐帝驾崩后政策逆转，海禁闭关，最终将海洋霸权拱手相让。这一转折折射出中华帝制内部保守农业文明与进取海洋文明的深层矛盾。明朝的兴衰也揭示了专制皇权的制度脆弱性——皇帝个人素质的高低直接决定帝国命运，缺乏制度性纠错机制，是帝制王朝周期性崩溃的根本原因。',
    createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z', isAIGenerated: false,
  },

  {
    id: 'cn-013',
    title: '清朝建立与康乾盛世',
    titleEn: 'Qing Dynasty — Prosperous Reigns of Kangxi & Qianlong',
    date: '1644年',
    dateEnd: '1796年',
    description: '满洲贵族入主中原，建立清朝，历经顺治、康熙、雍正、乾隆四朝约一百五十年的励精图治，将中国版图扩张至历史最大，人口突破三亿。康乾盛世是中国封建王朝最后的辉煌，也是与世界差距悄然拉大的关键时期。',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80',
    references: ['《清史稿》', '孟森《清史讲义》', '费正清《剑桥中国史》清朝卷'],
    tags: ['清朝', '康熙', '雍正', '乾隆', '康乾盛世', '满汉矛盾', '文字狱', '版图扩张'],
    country: '中国', countryCode: 'cn', category: 'chinese-history',
    timeline: [
      { year: '1644年', event: '清军入关，定都北京', significance: '清朝正式建立' },
      { year: '1661—1722年', event: '康熙在位，平三藩、收台湾、驱俄罗斯', significance: '康熙盛世' },
      { year: '1683年', event: '郑克塽降清，台湾纳入版图', significance: '中国版图完整' },
      { year: '1689年', event: '《尼布楚条约》签订，中俄划定北方边界', significance: '中国第一个近代边界条约' },
      { year: '1722—1735年', event: '雍正在位，摊丁入亩，整顿吏治', significance: '制度改革深化' },
      { year: '1735—1796年', event: '乾隆在位，版图达到最大', significance: '盛世巅峰' },
      { year: '1793年', event: '马戛尔尼使团访华，乾隆拒绝通商', significance: '闭关锁国加剧' },
    ],
    keyFigures: [
      {
        name: '康熙皇帝', role: '清朝第四位皇帝', period: '1654—1722',
        faction: '清廷',
        description: '8岁即位，14岁智除权臣鳌拜，亲政后平定三藩、收复台湾、三征噶尔丹、签订《尼布楚条约》，在位61年为历史最长。精通汉学、西洋科学，是满汉融合政策的推动者，被誉为"千古一帝"。',
        relations: [
          { targetName: '雍正皇帝', type: 'family', label: '父子' },
          { targetName: '乾隆皇帝', type: 'family', label: '祖孙' },
        ],
      },
      {
        name: '雍正皇帝', role: '清朝第五位皇帝', period: '1678—1735',
        faction: '清廷',
        description: '康熙第四子，以争储之乱登基，在位仅十三年却改革力度最强：设军机处集权、推行摊丁入亩减轻农民负担、整顿财政杜绝贪腐。勤政程度为历代帝王之最，留下大量朱批奏折，死亡之谜至今众说纷纭。',
        relations: [
          { targetName: '康熙皇帝', type: 'family', label: '父子' },
          { targetName: '乾隆皇帝', type: 'family', label: '父子' },
        ],
      },
      {
        name: '乾隆皇帝', role: '清朝第六位皇帝', period: '1711—1799',
        faction: '清廷',
        description: '在位60年，实际掌权长达63年，自称"十全老人"。前期开疆拓土，版图达清朝最大；中期编纂《四库全书》保存文化遗产，同时大兴文字狱压制异见；晚期宠信和珅，吏治腐败，盛世外表下矛盾积聚。',
        relations: [
          { targetName: '雍正皇帝', type: 'family', label: '父子' },
          { targetName: '和珅', type: 'superior', label: '宠臣关系' },
          { targetName: '康熙皇帝', type: 'family', label: '祖孙' },
        ],
      },
      {
        name: '和珅', role: '乾隆朝权臣', period: '1750—1799',
        faction: '清廷（腐败集团）',
        description: '乾隆宠臣，身兼多职，大肆敛财，贪腐规模据估计相当于清廷十五年财政收入。乾隆驾崩后十五天，嘉庆帝即命逮捕，赐其自尽。"和珅跌倒，嘉庆吃饱"成为史上最著名的腐败案例之一。',
        relations: [
          { targetName: '乾隆皇帝', type: 'subordinate', label: '第一宠臣' },
        ],
      },
    ],
    analysis: '康乾盛世是中国封建王朝最后也是最辉煌的顶峰。在这一时期，中国GDP约占全球三分之一，人口规模与技术水平均居世界前列。然而盛世之下潜藏着深层危机：闭关锁国政策使中国错失了与欧洲工业革命同步的历史机遇；文字狱以思想高压扼杀了自由探索的空间；八股取士的科举制度固化了保守思维；土地兼并与人口增长的矛盾日趋尖锐。1793年马戛尔尼使团访华被拒，乾隆的著名回复"天朝无所不有，无需与外番互通有无"，象征着中国与世界现代化进程的决定性背离。康乾盛世因此也是中国落伍于世界的开始，为此后百年屈辱埋下了根本性的历史伏笔。',
    createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z', isAIGenerated: false,
  },

  {
    id: 'cn-014',
    title: '太平天国运动',
    titleEn: 'Taiping Heavenly Kingdom Rebellion',
    date: '1851年',
    dateEnd: '1864年',
    description: '洪秀全创立"拜上帝教"，以宗教动员农民，在广西金田起义，建立太平天国，定都南京，颁布《天朝田亩制度》。太平军控制中国南方约十四年，与清廷历经数百场战役，造成超过两千万人死亡，是中国历史上最惨烈的内战之一。',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    references: ['《太平天国史料》', '简又文《太平天国全史》', '茅家琦《太平天国史》'],
    tags: ['太平天国', '洪秀全', '曾国藩', '湘军', '拜上帝教', '天京事变', '农民起义'],
    country: '中国', countryCode: 'cn', category: 'chinese-history',
    timeline: [
      { year: '1843年', event: '洪秀全创立拜上帝会', significance: '太平天国思想根源' },
      { year: '1851年', event: '金田起义，太平天国建立', significance: '起义正式爆发' },
      { year: '1853年', event: '太平军攻占南京，定为天京', significance: '建立政权中心' },
      { year: '1856年', event: '天京事变，领导层内讧', significance: '太平天国由盛转衰' },
      { year: '1860年', event: '曾国藩湘军大规模反攻', significance: '清廷重新掌握主动' },
      { year: '1864年', event: '天京陷落，洪秀全病死，运动失败', significance: '太平天国覆灭' },
    ],
    keyFigures: [
      {
        name: '洪秀全', role: '太平天国天王', period: '1814—1864',
        faction: '太平天国',
        description: '广东花县人，屡次科举落第，受基督教小册子启示创立"拜上帝教"，自称上帝次子、耶稣之弟。建立太平天国，颁布平均地权方案，晚年闭居天京，脱离实际，天京陷落前病死或服毒自尽，一说吞金而亡。',
        relations: [
          { targetName: '杨秀清', type: 'superior', label: '君臣与猜忌' },
          { targetName: '曾国藩', type: 'enemy', label: '军事对抗' },
          { targetName: '李秀成', type: 'superior', label: '最后忠臣' },
        ],
      },
      {
        name: '杨秀清', role: '太平天国东王', period: '约1820—1856',
        faction: '太平天国',
        description: '以"天父下凡"为手段控制太平天国最高决策，实际权力超过洪秀全。军事才能出色，组织太平军历次重大胜利。1856年天京事变中被韦昌辉杀害，此后太平天国走向分裂衰亡。',
        relations: [
          { targetName: '洪秀全', type: 'subordinate', label: '夺权内讧' },
          { targetName: '李秀成', type: 'colleague', label: '天国将领' },
        ],
      },
      {
        name: '曾国藩', role: '清朝湘军统帅', period: '1811—1872',
        faction: '清廷',
        description: '湖南湘乡人，建立湘军，以儒家理念整训军队，是镇压太平天国的主要力量。攻陷天京后获封侯爵，是晚清最重要的政治家与军事家，其"修身、齐家、治国、平天下"的人格修炼理念影响无数后人，被称为"中国最后一个圣人"。',
        relations: [
          { targetName: '洪秀全', type: 'enemy', label: '军事镇压' },
          { targetName: '李鸿章', type: 'superior', label: '师生关系' },
          { targetName: '李秀成', type: 'enemy', label: '击败擒杀' },
        ],
      },
      {
        name: '李秀成', role: '太平天国忠王', period: '1823—1864',
        faction: '太平天国',
        description: '太平天国最杰出的军事将领，苏州大战、再破清军的组织者。天京陷落后被俘，写下长篇供词详述太平天国兴亡，被曾国藩斩首。其供词成为研究太平天国最重要的史料，但供词中是否有变节内容至今争议。',
        relations: [
          { targetName: '洪秀全', type: 'subordinate', label: '至死效忠' },
          { targetName: '曾国藩', type: 'enemy', label: '最后被俘' },
        ],
      },
    ],
    analysis: '太平天国运动是中国历史上规模最大的农民起义，也是近代史上最惨烈的内战。它的历史意义远超单纯的农民叛乱：洪秀全借用基督教神学框架挑战清朝"天命"，展示了外来宗教思想对中国社会的潜在动员力；《天朝田亩制度》反映了农民对土地平均分配的千年渴望；湘军的兴起则意味着中央集权的弱化——汉族地方武装力量开始取代旗兵成为清朝的主要军事依托，为日后军阀割据埋下伏笔。太平天国失败后，曾国藩等汉族官僚集团崛起，推动洋务运动，试图以技术革命延续清朝统治，但这已是垂死挣扎，无法阻止历史的大势。',
    createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z', isAIGenerated: false,
  },

  {
    id: 'cn-015',
    title: '甲午战争与民族危机',
    titleEn: 'First Sino-Japanese War — National Crisis',
    date: '1894年',
    dateEnd: '1895年',
    description: '甲午年间，清朝与日本就朝鲜控制权爆发战争。北洋水师全军覆没，陆路惨败，清廷被迫签订《马关条约》，割让台湾与澎湖，赔款二亿两白银。甲午战败深刻震撼了中国士大夫阶层，直接催生了戊戌变法与民族救亡运动。',
    image: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=800&q=80',
    references: ['《清史稿》', '戚其章《甲午战争史》', '唐德刚《晚清七十年》'],
    tags: ['甲午战争', '北洋水师', '马关条约', '台湾', '李鸿章', '丁汝昌', '日本'],
    country: '中国', countryCode: 'cn', category: 'chinese-history',
    timeline: [
      { year: '1888年', event: '北洋水师正式成军', significance: '清朝最强海军建立' },
      { year: '1894年7月', event: '丰岛海战，战争爆发', significance: '甲午战争开始' },
      { year: '1894年9月', event: '黄海海战，北洋水师受重创', significance: '制海权易手' },
      { year: '1894年11月', event: '旅顺大屠杀，日军暴行震惊世界', significance: '日军残暴曝光' },
      { year: '1895年2月', event: '威海卫之战，北洋水师全军覆没', significance: '海军彻底消灭' },
      { year: '1895年4月', event: '《马关条约》签订', significance: '割地赔款，民族奇耻' },
      { year: '1895年5月', event: '公车上书，知识分子请愿', significance: '维新运动兴起' },
    ],
    keyFigures: [
      {
        name: '李鸿章', role: '北洋大臣·直隶总督', period: '1823—1901',
        faction: '清廷洋务派',
        description: '晚清最重要的政治家，曾国藩弟子，主持洋务运动三十年，建立北洋水师。甲午战败后赴日签订《马关条约》，遭国人痛骂，被称为"卖国贼"。然其所处之困境——以一省之力支撑全国外交——实为制度性悲剧的缩影。梁启超叹其"不学无术，不敢破格"，"以一人敌一国"。',
        relations: [
          { targetName: '丁汝昌', type: 'superior', label: '北洋水师统帅' },
          { targetName: '曾国藩', type: 'subordinate', label: '师生' },
        ],
      },
      {
        name: '丁汝昌', role: '北洋水师提督', period: '1836—1895',
        faction: '清廷',
        description: '北洋水师最高统帅，黄海海战中受伤仍坚持指挥，威海卫被围后拒绝投降，服毒自尽殉国。其死后清廷以"贻误军机"之名拒绝抚恤，遗体停棺二十年后方获平反，是晚清以血报国却遭冤屈的悲剧人物。',
        relations: [
          { targetName: '李鸿章', type: 'subordinate', label: '北洋旧部' },
        ],
      },
      {
        name: '光绪皇帝', role: '清朝第十一位皇帝', period: '1871—1908',
        faction: '清廷（改革派）',
        description: '慈禧外甥，四岁继位，甲午战败的屈辱使其支持变法，任用康有为等维新人士推行百日维新。戊戌政变后被慈禧囚禁于中南海瀛台，直至死亡。近年DNA检测证实其系砒霜中毒身亡，慈禧为主要嫌疑。',
        relations: [
          { targetName: '李鸿章', type: 'superior', label: '君臣' },
          { targetName: '慈禧太后', type: 'subordinate', label: '外甥被太后控制' },
        ],
      },
      {
        name: '慈禧太后', role: '清廷实际最高统治者', period: '1835—1908',
        faction: '清廷保守派',
        description: '以垂帘听政掌控清廷近半个世纪，挪用海军军费修颐和园（史有争议），戊戌政变囚光绪，庚子年向列强宣战后仓皇西逃。"量中华之物力，结与国之欢心"成为其对外政策的最著名批评。',
        relations: [
          { targetName: '光绪皇帝', type: 'superior', label: '操控皇权' },
          { targetName: '李鸿章', type: 'superior', label: '依赖重用' },
        ],
      },
    ],
    analysis: '甲午战争是中国近代史的重大转折点。战前，士大夫阶层普遍认为经过三十年洋务运动，清朝已具备近代化实力；战后，现实粉碎了这种自信。失败揭示了洋务运动只求"器物"（武器技术）而不触制度的根本局限。日本自1868年明治维新以来推行全面西化，不仅引进技术，更改革政治制度，仅二十六年便超越中国。甲午之败因此不仅是军事失败，更是两种现代化路径的竞争结果。《马关条约》的屈辱激起了知识阶层的觉醒，康有为梁启超的维新派、孙中山的革命派，均以甲午为精神起点。这场战争也改变了亚洲的地缘格局——日本一跃成为地区强权，开始走上帝国主义扩张道路，埋下了四十年后更大战争的种子。',
    createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z', isAIGenerated: false,
  },

  {
    id: 'cn-016',
    title: '戊戌变法',
    titleEn: 'Hundred Days Reform',
    date: '1898年',
    dateEnd: '1898年',
    description: '甲午战败后，光绪帝在康有为、梁启超推动下，于1898年6月颁布《明定国是》诏书，宣布变法维新。百余天内颁布数十道改革法令，涉及政治、教育、军事各领域。9月，慈禧太后发动戊戌政变，囚禁光绪，杀害谭嗣同等"戊戌六君子"，变法彻底失败。',
    image: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=800&q=80',
    references: ['梁启超《戊戌政变记》', '汤志钧《戊戌变法史》', '茅海建《戊戌变法史事考》'],
    tags: ['戊戌变法', '百日维新', '康有为', '梁启超', '谭嗣同', '六君子', '光绪'],
    country: '中国', countryCode: 'cn', category: 'chinese-history',
    timeline: [
      { year: '1895年', event: '公车上书，康有为率举人联名上书', significance: '维新运动兴起' },
      { year: '1898年6月11日', event: '光绪帝颁布《明定国是》，变法开始', significance: '百日维新正式启动' },
      { year: '1898年9月', event: '慈禧发动政变，囚禁光绪', significance: '变法骤然终止' },
      { year: '1898年9月28日', event: '谭嗣同等六君子在北京菜市口被斩', significance: '维新志士就义' },
      { year: '1898年', event: '康有为、梁启超流亡海外', significance: '维新派流亡' },
    ],
    keyFigures: [
      {
        name: '康有为', role: '维新派领袖', period: '1858—1927',
        faction: '维新派',
        description: '广东南海人，以"公羊学"解释孔子为改革先师，著《新学伪经考》挑战传统经典，上书光绪帝推动变法。政变后流亡海外，建立保皇会，晚年思想趋于保守，1917年曾支持张勋复辟，历史评价复杂。',
        relations: [
          { targetName: '梁启超', type: 'superior', label: '师生' },
          { targetName: '谭嗣同', type: 'ally', label: '变法同志' },
          { targetName: '光绪皇帝', type: 'subordinate', label: '帝师' },
          { targetName: '慈禧太后', type: 'enemy', label: '政变镇压' },
        ],
      },
      {
        name: '梁启超', role: '维新派思想家', period: '1873—1929',
        faction: '维新派',
        description: '康有为弟子，近代中国最重要的启蒙思想家与文章家。流亡日本后大量介绍西方政治思想，其文章以报刊形式广泛传播，深刻影响了一代中国青年的思想觉醒。后期主张立宪，反对革命，与孙中山的革命派分道扬镳。',
        relations: [
          { targetName: '康有为', type: 'subordinate', label: '弟子传人' },
          { targetName: '谭嗣同', type: 'ally', label: '并肩推动变法' },
        ],
      },
      {
        name: '谭嗣同', role: '戊戌六君子之首', period: '1865—1898',
        faction: '维新派',
        description: '湖南浏阳人，维新运动中最激进的改革者，变法期间得光绪帝重用。政变后拒绝出逃，慷慨赴死，留下"我自横刀向天笑，去留肝胆两昆仑"的绝命诗，成为近代中国以身殉道的精神偶像，时年三十三岁。',
        relations: [
          { targetName: '康有为', type: 'ally', label: '变法同道' },
          { targetName: '梁启超', type: 'ally', label: '共同推动维新' },
          { targetName: '慈禧太后', type: 'enemy', label: '被杀害' },
        ],
      },
      {
        name: '慈禧太后', role: '清廷实际最高统治者', period: '1835—1908',
        faction: '清廷保守派',
        description: '戊戌政变的发动者，囚禁光绪帝，逮捕并处决六君子。其对改革的恐惧源于对满族权贵阶层利益的维护和个人权力的保护。慈禧并非完全保守，庚子后亦推行"清末新政"，但为时已晚。',
        relations: [
          { targetName: '光绪皇帝', type: 'superior', label: '囚禁皇帝' },
          { targetName: '谭嗣同', type: 'enemy', label: '下令斩杀' },
          { targetName: '康有为', type: 'enemy', label: '追杀流亡' },
        ],
      },
    ],
    analysis: '戊戌变法只有103天，却是中国近代史上一次深刻的思想地震。改革派提出的方案——设议院、开国会、改科举、兴实业——其实质是要将中国从专制帝制转变为君主立宪制。失败的根本原因在于：变法缺乏足够的社会基础（民众尚未觉醒），依靠一个实权有限的皇帝推行，却触动了以慈禧为代表的保守既得利益集团。谭嗣同的就义成为中国知识分子以血唤醒民众的悲壮象征。戊戌失败后，改革路线退场，革命路线抬头——孙中山领导的推翻帝制、建立共和国的道路，成为此后中国的历史选择。',
    createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z', isAIGenerated: false,
  },

  {
    id: 'cn-017',
    title: '五四运动',
    titleEn: 'May Fourth Movement',
    date: '1919年',
    dateEnd: '1921年',
    description: '1919年巴黎和会上，战胜国无视中国诉求，将德国在山东的权益转让给日本。消息传至北京，爱国学生在天安门前集会抗议，五四运动爆发。这场运动迅速从政治抗议演变为思想文化革命，"民主"与"科学"成为新文化运动的核心旗帜，深刻改变了中国现代文化与思想面貌。',
    image: 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=800&q=80',
    references: ['陈独秀《新青年》', '胡适《文学改良刍议》', '周策纵《五四运动史》'],
    tags: ['五四运动', '新文化运动', '民主科学', '白话文', '陈独秀', '鲁迅', '胡适'],
    country: '中国', countryCode: 'cn', category: 'chinese-history',
    timeline: [
      { year: '1915年', event: '陈独秀创办《新青年》，新文化运动开始', significance: '思想启蒙开始' },
      { year: '1917年', event: '胡适发表《文学改良刍议》，提倡白话文', significance: '语言革命' },
      { year: '1919年1月', event: '巴黎和会开幕，中国代表团提出废除不平等条约', significance: '外交斗争' },
      { year: '1919年5月4日', event: '北京学生在天安门集会，火烧赵家楼', significance: '五四运动爆发' },
      { year: '1919年6月', event: '工人罢工、商人罢市，运动扩大至全国', significance: '工人阶级登上历史舞台' },
      { year: '1921年7月', event: '中国共产党在上海成立', significance: '五四运动精神延伸' },
    ],
    keyFigures: [
      {
        name: '陈独秀', role: '新文化运动领袖·中共创始人', period: '1879—1942',
        faction: '新文化运动',
        description: '安徽怀宁人，《新青年》创刊人，以"民主"与"科学"为旗帜发起新文化运动，猛烈批判儒家旧礼教。后参与创立中国共产党并任首届总书记，晚年因与共产国际路线冲突被开除党籍，孤独终老。',
        relations: [
          { targetName: '胡适', type: 'colleague', label: '新文化运动同道' },
          { targetName: '李大钊', type: 'ally', label: '南陈北李' },
          { targetName: '鲁迅', type: 'colleague', label: '同为新文化旗手' },
        ],
      },
      {
        name: '李大钊', role: '马克思主义传播者', period: '1889—1927',
        faction: '马克思主义派',
        description: '河北乐亭人，北京大学图书馆主任，最早在中国传播马克思主义，与陈独秀并称"南陈北李"。帮助毛泽东在北京图书馆工作，是毛泽东思想成长的重要影响者。1927年被北洋军阀张作霖逮捕绞杀，时年三十八岁。',
        relations: [
          { targetName: '陈独秀', type: 'ally', label: '南陈北李' },
          { targetName: '胡适', type: 'colleague', label: '五四同仁' },
        ],
      },
      {
        name: '胡适', role: '新文化运动领袖·自由主义知识分子', period: '1891—1962',
        faction: '自由主义派',
        description: '安徽绩溪人，哥伦比亚大学杜威弟子，提倡白话文学，发表《文学改良刍议》推动文学革命。始终坚持自由主义立场，反对革命激进主义，强调"多研究问题，少谈些主义"，是20世纪中国影响最深远的自由派知识分子。',
        relations: [
          { targetName: '陈独秀', type: 'colleague', label: '新文化运动同道，后分歧加深' },
          { targetName: '鲁迅', type: 'colleague', label: '文学革命同行' },
        ],
      },
      {
        name: '鲁迅', role: '文学革命旗手', period: '1881—1936',
        faction: '新文化运动',
        description: '本名周树人，浙江绍兴人。以《狂人日记》《阿Q正传》等作品开创现代白话文学，以锐利笔锋揭露封建礼教"吃人"的本质。毛泽东称其为"中国文化革命的主将""骨头是最硬的"，是中国现代文学无可争议的最高峰。',
        relations: [
          { targetName: '陈独秀', type: 'colleague', label: '《新青年》同仁' },
          { targetName: '胡适', type: 'colleague', label: '文学革命战友' },
        ],
      },
      {
        name: '蔡元培', role: '北京大学校长', period: '1868—1940',
        faction: '教育改革派',
        description: '浙江绍兴人，北京大学校长，以"兼容并包、思想自由"重塑北大精神，为五四运动提供了制度性土壤。引进陈独秀、胡适、李大钊等人执教，将北大改造成思想革命的策源地，是中国现代大学精神的奠基人。',
        relations: [
          { targetName: '陈独秀', type: 'superior', label: '聘为北大文科学长' },
          { targetName: '胡适', type: 'superior', label: '聘为北大教授' },
          { targetName: '李大钊', type: 'superior', label: '聘为图书馆主任' },
        ],
      },
    ],
    analysis: '五四运动是中国历史上最深刻的文化革命之一，其意义远超一次政治抗议。它同时打响了三场战争：对外的主权争夺、对旧文化的批判、对未来道路的探索。在思想层面，新文化运动对儒家传统的彻底批判开启了中国的现代性焦虑，这种焦虑此后百年未曾消解。在政治层面，五四将工人阶级带入历史舞台，直接催生了中国共产党的诞生。五四的精神遗产也是分裂的：自由主义者（胡适）与马克思主义者（陈独秀、李大钊）由此走向了截然不同的道路，这一分裂预示了此后中国现代化路径的根本争论。',
    createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z', isAIGenerated: false,
  },

  {
    id: 'cn-018',
    title: '抗日战争',
    titleEn: 'Second Sino-Japanese War',
    date: '1937年',
    dateEnd: '1945年',
    description: '1937年七七事变后，中日全面战争爆发。中国军民历经八年浴血抗战，以伤亡逾三千五百万人的惨烈代价，最终在苏联参战与美国原子弹的共同作用下迎来日本投降。抗日战争是近代中国规模最大的反侵略战争，也是中华民族浴火重生的精神历程。',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&q=80',
    references: ['《中国抗日战争史》', '黄仁宇《从大历史的角度读蒋介石日记》', 'Rana Mitter, China\'s War with Japan, 2013'],
    tags: ['抗日战争', '七七事变', '南京大屠杀', '百团大战', '国共合作', '日本投降', '八年抗战'],
    country: '中国', countryCode: 'cn', category: 'chinese-history',
    timeline: [
      { year: '1931年', event: '九一八事变，日本侵占东北', significance: '局部抗战开始' },
      { year: '1937年7月7日', event: '七七事变，全面战争爆发', significance: '全面抗战开始' },
      { year: '1937年12月', event: '南京大屠杀，三十万人遇难', significance: '日军战争暴行' },
      { year: '1938年', event: '武汉会战，台儿庄大捷', significance: '正面战场激战' },
      { year: '1940年', event: '百团大战，八路军主动出击', significance: '敌后战场重大行动' },
      { year: '1942年', event: '中国远征军入缅作战', significance: '国际战场联合作战' },
      { year: '1945年8月15日', event: '日本宣布无条件投降', significance: '抗战胜利' },
    ],
    keyFigures: [
      {
        name: '蒋介石', role: '中华民国领袖·国民政府军事委员会委员长', period: '1887—1975',
        faction: '国民党',
        description: '国民政府最高统帅，领导正面战场历次重大会战。战略上坚持"以空间换时间"，将战争拖入持久战。对共产党态度复杂，既有国共合作也有摩擦。抗战胜利后内战失败退台，但其抗战领导地位在近年历史研究中已得到更客观的重新评价。',
        relations: [
          { targetName: '毛泽东', type: 'rival', label: '国共双方领袖' },
          { targetName: '张学良', type: 'superior', label: '西安事变被扣' },
        ],
      },
      {
        name: '毛泽东', role: '中国共产党领袖', period: '1893—1976',
        faction: '共产党',
        description: '领导八路军、新四军开辟敌后抗日根据地，著《论持久战》精准预判战争走向，提出游击战与运动战相结合的战略，组织民众进行全面抗战。抗战胜利后通过解放战争建立中华人民共和国。',
        relations: [
          { targetName: '蒋介石', type: 'rival', label: '国共竞争与合作' },
          { targetName: '朱德', type: 'ally', label: '朱毛搭档' },
          { targetName: '张学良', type: 'ally', label: '西安事变受益' },
        ],
      },
      {
        name: '朱德', role: '八路军总司令', period: '1886—1976',
        faction: '共产党',
        description: '中国人民解放军创建人之一，抗战期间任八路军总司令，率部挺进华北敌后，开辟抗日根据地。以朴实厚重的军人风格著称，与毛泽东"朱毛"并称，是中国革命军队的精神象征。',
        relations: [
          { targetName: '毛泽东', type: 'ally', label: '朱毛合一' },
        ],
      },
      {
        name: '张学良', role: '东北军少帅', period: '1901—2001',
        faction: '国民党（东北军）',
        description: '张作霖之子，918事变奉命不抵抗使东北沦陷，此后深感民族罪责。1936年西安事变中联合杨虎城兵谏蒋介石，迫使其接受国共合作抗日，此举改变了中国历史走向。事变后自缚请罪，遭软禁长达五十四年，世纪长寿。',
        relations: [
          { targetName: '蒋介石', type: 'rival', label: '西安事变兵谏' },
          { targetName: '毛泽东', type: 'ally', label: '间接促成国共合作' },
        ],
      },
    ],
    analysis: '抗日战争是中国近代史上第一次以民族为单位的全面动员。无论国共，无论南北，中国人第一次以"中华民族"的共同身份抵抗外敌，这种民族意识的觉醒是战争最重要的历史遗产。正面战场的国民党军队在极其艰难的条件下承受了最大伤亡，敌后战场的共产党武装则在民众动员中积累了革命力量。这种双轨格局决定了战后的政治走向——共产党通过八年战争建立了深厚的农村根基与政治经验，为日后在内战中取胜奠定了基础。南京大屠杀作为历史上最残暴的战争暴行之一，至今仍是中日关系的历史心结。这场战争对中华民族心理结构的塑造——强烈的主权意识、对战争苦难的集体记忆——至今仍是理解中国外交政策的重要维度。',
    createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z', isAIGenerated: false,
  },

  {
    id: 'cn-019',
    title: '中华人民共和国成立',
    titleEn: 'Founding of the People\'s Republic of China',
    date: '1949年',
    dateEnd: '1956年',
    description: '国共内战以共产党全面胜利告终，1949年10月1日，毛泽东在天安门城楼宣告中华人民共和国成立，"中国人民从此站立起来了"。此后数年，土地改革、抗美援朝、社会主义改造相继推进，中国在艰难条件下完成了从新民主主义向社会主义的历史性转型。',
    image: 'https://images.unsplash.com/photo-1547893948-d8ec1e9f2928?w=800&q=80',
    references: ['《建国以来毛泽东文稿》', '薄一波《若干重大决策与事件的回顾》', '杨继绳《墓碑》'],
    tags: ['建国', '1949', '解放战争', '毛泽东', '土地改革', '抗美援朝', '社会主义改造'],
    country: '中国', countryCode: 'cn', category: 'chinese-history',
    timeline: [
      { year: '1945—1949年', event: '解放战争，共产党击败国民党', significance: '政权更替' },
      { year: '1949年10月1日', event: '中华人民共和国成立', significance: '新中国建立' },
      { year: '1950—1953年', event: '抗美援朝战争', significance: '巩固新生政权国际地位' },
      { year: '1950—1952年', event: '土地改革完成，封建土地制度废除', significance: '农村社会革命' },
      { year: '1953年', event: '第一个五年计划开始', significance: '工业化建设启动' },
      { year: '1956年', event: '社会主义改造基本完成', significance: '所有制变革完成' },
    ],
    keyFigures: [
      {
        name: '毛泽东', role: '中华人民共和国主席', period: '1893—1976',
        faction: '共产党',
        description: '中华人民共和国的最高缔造者，在天安门宣告"中国人民从此站立起来了"。土地改革、抗美援朝、一五计划均在其领导下推进。晚年推行大跃进与文化大革命，造成重大历史悲剧。其历史地位被官方评价为"功绩是主要的，错误是次要的"（七三开）。',
        relations: [
          { targetName: '周恩来', type: 'ally', label: '共同领导新中国' },
          { targetName: '朱德', type: 'ally', label: '建军战友' },
          { targetName: '邓小平', type: 'ally', label: '后来者对其路线的修正' },
          { targetName: '刘少奇', type: 'ally', label: '后期政治对手' },
        ],
      },
      {
        name: '周恩来', role: '中华人民共和国首任总理', period: '1898—1976',
        faction: '共产党',
        description: '新中国首任国务院总理兼外交部长，主持国家行政建设，以万隆会议"求同存异"外交理念赢得国际声望。文革中多次保护干部，鞠躬尽瘁，1976年逝世引发天安门四五运动，被中国人民深切怀念，有"人民的好总理"之称。',
        relations: [
          { targetName: '毛泽东', type: 'subordinate', label: '辅佐主席' },
          { targetName: '邓小平', type: 'ally', label: '晚年合作推动改革' },
        ],
      },
      {
        name: '刘少奇', role: '中华人民共和国主席', period: '1898—1969',
        faction: '共产党',
        description: '党和国家第二位领导人，大跃进后主持国民经济恢复，提出务实政策与毛泽东路线产生分歧。文化大革命中被打倒为"中国的赫鲁晓夫"，身陷囹圄，病死于河南，1980年获平反昭雪，是文革最著名的冤案之一。',
        relations: [
          { targetName: '毛泽东', type: 'rival', label: '路线分歧被打倒' },
          { targetName: '邓小平', type: 'ally', label: '务实政策同路人' },
        ],
      },
      {
        name: '邓小平', role: '改革开放总设计师', period: '1904—1997',
        faction: '共产党',
        description: '三起三落，历经大跃进与文革磨难后成为中国改革开放的总设计师。提出"不管白猫黑猫，能抓到老鼠就是好猫"的实用主义哲学，推行改革开放使中国走上经济腾飞之路，是20世纪对中国影响最深远的领导人之一。',
        relations: [
          { targetName: '毛泽东', type: 'subordinate', label: '被整肃又复出' },
          { targetName: '周恩来', type: 'ally', label: '改革同路' },
          { targetName: '刘少奇', type: 'ally', label: '务实派同路人' },
        ],
      },
    ],
    analysis: '中华人民共和国的成立是20世纪最重大的政治事件之一。它终结了中国自1840年以来百余年的屈辱历史，重建了大国尊严与国家统一。在极端困难的条件下（朝鲜战争、国际封锁、经济落后），新中国完成了工业基础建设，实现了基本的社会公平，并在核武器等战略领域取得突破。然而这一时期也留下了沉重的历史教训：土改中的暴力、1957年反右扩大化、大跃进的人为饥荒，构成建国初期不可回避的历史创伤。这些经历深刻影响了邓小平日后推行改革开放的路线选择——以经济建设为中心，而非以阶级斗争为纲，是对建国初期激进路线的根本性纠偏。',
    createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z', isAIGenerated: false,
  },

  {
    id: 'cn-020',
    title: '改革开放',
    titleEn: 'Reform and Opening Up',
    date: '1978年',
    dateEnd: '2000年',
    description: '1978年十一届三中全会，邓小平确立改革开放路线，以"实践是检验真理的唯一标准"为思想武器，推行家庭联产承包责任制、建立经济特区、引进外资技术。二十年间中国GDP增长近十倍，数亿人口脱离贫困，完成了人类历史上规模最大的经济转型。',
    image: 'https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?w=800&q=80',
    references: ['邓小平《邓小平文选》', '傅高义《邓小平时代》', '吴敬琏《当代中国经济改革史》'],
    tags: ['改革开放', '邓小平', '经济特区', '深圳', '家庭联产承包', '市场经济', '四个现代化'],
    country: '中国', countryCode: 'cn', category: 'chinese-history',
    timeline: [
      { year: '1978年12月', event: '十一届三中全会，改革开放路线确立', significance: '历史性转折点' },
      { year: '1978年', event: '安徽小岗村农民秘密签订分田到户协议', significance: '农村改革起点' },
      { year: '1980年', event: '深圳、珠海、汕头、厦门设立经济特区', significance: '对外开放实验区建立' },
      { year: '1984年', event: '十四个沿海城市开放，城市经济体制改革启动', significance: '改革全面推进' },
      { year: '1992年', event: '邓小平南巡讲话，改革开放提速', significance: '市场经济道路确立' },
      { year: '1997年', event: '香港回归', significance: '一国两制实践' },
      { year: '2001年', event: '中国加入世界贸易组织', significance: '深度融入全球经济' },
    ],
    keyFigures: [
      {
        name: '邓小平', role: '改革开放总设计师', period: '1904—1997',
        faction: '共产党改革派',
        description: '中国改革开放的总设计师。提出"一个中心两个基本点"路线，"不争论"的务实策略使改革得以稳步推进。南巡讲话打破思想僵局，"社会主义市场经济"的提法解决了改革的意识形态障碍。其"猫论""摸着石头过河"的实用主义哲学指导了整个改革开放时代。',
        relations: [
          { targetName: '胡耀邦', type: 'superior', label: '提携与后来分歧' },
          { targetName: '赵紫阳', type: 'superior', label: '推进改革' },
          { targetName: '江泽民', type: 'superior', label: '指定接班' },
        ],
      },
      {
        name: '胡耀邦', role: '中共中央总书记', period: '1915—1989',
        faction: '共产党改革派',
        description: '邓小平选定的改革伙伴，主持平反冤假错案，推进政治宽松化。1987年被迫辞职，1989年突然病逝引发学生悼念活动，成为天安门事件的导火索。其宽容正直的人格使其身后在中国民众中享有崇高声望。',
        relations: [
          { targetName: '邓小平', type: 'subordinate', label: '改革伙伴后被迫辞职' },
          { targetName: '赵紫阳', type: 'colleague', label: '改革同路' },
        ],
      },
      {
        name: '赵紫阳', role: '中共中央总书记·国务院总理', period: '1919—2005',
        faction: '共产党改革派',
        description: '主持农业和城市经济改革，是改革开放经济政策的主要执行者。1989年反对戒严，在天安门探望学生，此后遭软禁长达十六年直至去世，留下秘密录制的回忆录《国家的囚徒》，是改革开放时代最具悲剧色彩的政治人物。',
        relations: [
          { targetName: '邓小平', type: 'subordinate', label: '推进改革后政见分歧' },
          { targetName: '胡耀邦', type: 'colleague', label: '改革双星' },
        ],
      },
      {
        name: '袁隆平', role: '杂交水稻之父', period: '1930—2021',
        faction: '科学界',
        description: '农业科学家，培育出杂交水稻，大幅提升粮食产量，解决了中国粮食安全问题，被誉为"杂交水稻之父"。改革开放时代科技兴国的最重要象征，其成果推广到数十个国家，为世界粮食安全作出卓越贡献。',
        relations: [
          { targetName: '邓小平', type: 'colleague', label: '同一时代的建设者' },
        ],
      },
    ],
    analysis: '改革开放是人类历史上规模最大、速度最快的经济腾飞奇迹。1978年中国人均GDP不足200美元，到2000年已超过1000美元，到2020年突破1万美元，数亿人口脱贫，实现了其他国家花费一二百年才能完成的工业化进程。这一成就的核心逻辑在于：在维持政治稳定的前提下，释放市场经济活力与民众创业精神，并充分利用全球化的历史机遇。深圳从一个小渔村崛起为国际大都市，成为改革开放最鲜活的历史注脚。然而改革开放也带来了深刻的社会矛盾：贫富分化加剧、腐败滋生、环境代价、农民工问题，以及政治改革与经济改革的失衡，这些矛盾构成了21世纪中国持续面对的挑战。改革开放使中国重新成为世界舞台的核心角色，如何在融入全球体系的同时保持独特的文明路径，仍是未竟的历史命题。',
    createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z', isAIGenerated: false,
  },

  // ── 古罗马·古希腊 ─────────────────────────────────────────────

  {
    id: 'roman-001',
    title: '古希腊文明与雅典民主',
    titleEn: 'Ancient Greek Civilization & Athenian Democracy',
    date: '前800年',
    dateEnd: '前323年',
    description: '古希腊是西方文明的摇篮。城邦制度、哲学思辨、民主政治、奥林匹克精神，均发源于此。雅典在伯里克利时代达到民主与文化的顶峰，培育了苏格拉底、柏拉图、亚里士多德等人类历史上最伟大的思想家群体，其哲学遗产至今仍是西方思想的根基。',
    image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&q=80',
    references: ['修昔底德《伯罗奔尼撒战争史》', '柏拉图《理想国》', '亚里士多德《政治学》'],
    tags: ['古希腊', '雅典', '民主', '苏格拉底', '柏拉图', '亚里士多德', '城邦'],
    country: '罗马', countryCode: 'roman', category: 'world-history',
    timeline: [
      { year: '前776年', event: '第一届古代奥林匹克运动会', significance: '泛希腊认同形成' },
      { year: '前621年', event: '德拉古立法，雅典成文法诞生', significance: '法治基础奠定' },
      { year: '前594年', event: '梭伦改革，废除债务奴隶制', significance: '民主改革起点' },
      { year: '前490年', event: '马拉松战役，雅典击退波斯', significance: '希波战争转折' },
      { year: '前480年', event: '温泉关之战，萨拉米斯海战', significance: '希腊文明保全' },
      { year: '前461—前429年', event: '伯里克利执政，雅典黄金时代', significance: '民主与文化顶峰' },
      { year: '前399年', event: '苏格拉底被处死', significance: '哲学殉道' },
      { year: '前338年', event: '喀罗尼亚战役，马其顿统治希腊', significance: '城邦时代终结' },
    ],
    keyFigures: [
      {
        name: '苏格拉底', role: '哲学家', period: '前470—前399',
        faction: '雅典哲学',
        description: '西方哲学之父，以"产婆术"式问答引导人追求真理，主张"认识你自己"。从未著书立说，思想由弟子记录传世。被雅典以"腐蚀青年""不敬神明"判处死刑，拒绝逃跑，从容饮鸩，以死捍卫哲学的尊严。',
        relations: [
          { targetName: '柏拉图', type: 'superior', label: '师生' },
          { targetName: '伯里克利', type: 'colleague', label: '同时代雅典人' },
        ],
      },
      {
        name: '柏拉图', role: '哲学家', period: '前428—前348',
        faction: '雅典哲学',
        description: '苏格拉底之徒，创立柏拉图学园，著《理想国》提出"哲学王"统治的完美国家构想，以"洞穴比喻"探讨真实与幻象，建立起影响西方两千年的理念论哲学体系。',
        relations: [
          { targetName: '苏格拉底', type: 'subordinate', label: '最重要弟子' },
          { targetName: '亚里士多德', type: 'superior', label: '老师与反叛者' },
        ],
      },
      {
        name: '亚里士多德', role: '哲学家·科学家', period: '前384—前322',
        faction: '雅典哲学',
        description: '柏拉图弟子，人类历史上最博学的思想家，涉猎逻辑学、物理学、生物学、政治学、修辞学、诗学，几乎创立了西方所有学科的雏形。曾任亚历山大大帝的老师，其思想统治中世纪欧洲学术长达千年。',
        relations: [
          { targetName: '柏拉图', type: 'subordinate', label: '批判老师另立门户' },
          { targetName: '亚历山大大帝', type: 'superior', label: '帝王之师' },
        ],
      },
      {
        name: '伯里克利', role: '雅典执政官', period: '前495—前429',
        faction: '雅典民主派',
        description: '雅典民主的最高峰的缔造者，在位期间扩大公民权利，建造帕特农神庙，使雅典成为爱琴海的文化与政治中心。伯罗奔尼撒战争爆发后，其战略遭到质疑，本人死于瘟疫，雅典此后走向衰落。',
        relations: [
          { targetName: '苏格拉底', type: 'colleague', label: '同时代雅典精英' },
        ],
      },
    ],
    analysis: '古希腊文明是人类历史上最具创造力的文明实验之一。在一个人口不过数百万、土地贫瘠的半岛上，诞生了民主政治、哲学、戏剧、历史学、几何学、奥林匹克运动会等影响世界的精神遗产。雅典民主虽有局限（仅适用于成年男性公民，奴隶与女性被排除在外），但其以辩论和投票解决公共事务的核心理念，是现代民主制度的直接源头。苏格拉底、柏拉图、亚里士多德构成的"哲学黄金链"，奠定了西方形而上学、伦理学、政治哲学的基本框架，其提问的方式——用理性和逻辑追问"什么是正义""什么是美""什么是好的生活"——至今仍是人类最重要的精神遗产之一。',
    createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z', isAIGenerated: false,
  },

  {
    id: 'roman-002',
    title: '亚历山大大帝东征',
    titleEn: 'Alexander the Great\'s Eastern Campaigns',
    date: '前336年',
    dateEnd: '前323年',
    description: '马其顿国王亚历山大继位后，率军横扫波斯帝国，征服埃及、中亚，深入印度，在十三年间建立起从希腊到印度次大陆的庞大帝国，创造了古代世界最大的单人征服版图。他的东征将希腊文化播撒至东方，开创"希腊化时代"，是古代东西方文明融合的重要纽带。',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80',
    references: ['阿里安《亚历山大远征记》', '普鲁塔克《希腊罗马名人传》', '彼得·格林《亚历山大大帝》'],
    tags: ['亚历山大大帝', '马其顿', '波斯帝国', '希腊化', '东征', '伊苏斯战役'],
    country: '罗马', countryCode: 'roman', category: 'world-history',
    timeline: [
      { year: '前338年', event: '喀罗尼亚战役，腓力二世统一希腊', significance: '马其顿霸权确立' },
      { year: '前336年', event: '腓力二世遇刺，亚历山大继位', significance: '东征领袖登场' },
      { year: '前334年', event: '渡过赫勒斯滂海峡，入侵波斯', significance: '东征正式开始' },
      { year: '前333年', event: '伊苏斯战役，击败大流士三世', significance: '波斯主力覆灭' },
      { year: '前331年', event: '高加米拉战役，波斯帝国彻底崩溃', significance: '东方大门洞开' },
      { year: '前326年', event: '进入印度，希达斯皮斯河战役', significance: '东征最远端' },
      { year: '前323年', event: '亚历山大在巴比伦病逝，年仅三十二岁', significance: '帝国随即分裂' },
    ],
    keyFigures: [
      {
        name: '亚历山大大帝', role: '马其顿国王·征服者', period: '前356—前323',
        faction: '马其顿帝国',
        description: '历史上最伟大的军事征服者之一，自幼师从亚里士多德，兼具战场天才与文化远见。以闪电式的骑兵冲击和战术变革横扫波斯、埃及、中亚，在所征之地建立亚历山大城，推广希腊文化与语言，开创希腊化时代。三十二岁猝死，帝国随即分裂。',
        relations: [
          { targetName: '亚里士多德', type: 'subordinate', label: '受教于大哲学家' },
          { targetName: '大流士三世', type: 'enemy', label: '击败波斯皇帝' },
          { targetName: '赫菲斯提翁', type: 'ally', label: '挚友' },
        ],
      },
      {
        name: '大流士三世', role: '波斯阿契美尼德帝国皇帝', period: '前380—前330',
        faction: '波斯帝国',
        description: '波斯阿契美尼德王朝末代皇帝，两度在战场上败于亚历山大——伊苏斯之战和高加米拉之战。高加米拉惨败后逃亡，被自己的部将贝苏斯杀死。其失败标志着波斯帝国两百年统治的终结。',
        relations: [
          { targetName: '亚历山大大帝', type: 'enemy', label: '两次战场惨败' },
        ],
      },
      {
        name: '亚里士多德', role: '哲学家·亚历山大之师', period: '前384—前322',
        faction: '雅典哲学',
        description: '作为亚历山大的老师，向其传授哲学、科学、医学、艺术知识，并赠予荷马史诗注释本，陪伴亚历山大东征。亚里士多德对亚历山大的影响体现在其东征过程中对本地文化的相对包容态度。',
        relations: [
          { targetName: '亚历山大大帝', type: 'superior', label: '帝王之师' },
        ],
      },
    ],
    analysis: '亚历山大的东征是古代史上最戏剧性的历史事件之一。在短短十三年中，一个年轻的马其顿国王改变了整个已知世界的政治格局。其历史意义远超军事征服本身：希腊语成为东地中海和中东的通用语，"希腊化"文化融合了希腊、埃及、波斯、中亚的艺术与思想，为后来罗马帝国的文化继承奠定基础，也为基督教的传播创造了语言条件（《新约》即以希腊语写成）。亚历山大的模式——以文化融合补充军事征服——代表了一种与纯粹武力统治不同的帝国理想，尽管他的帝国在其死后迅速分崩离析，但希腊化时代留下的文化遗产延续了数百年。',
    createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z', isAIGenerated: false,
  },

  {
    id: 'roman-003',
    title: '罗马帝国：从共和到帝制的兴衰',
    titleEn: 'Roman Empire — Rise and Fall',
    date: '前509年',
    dateEnd: '476年',
    description: '罗马从台伯河畔的小城邦成长为统治地中海世界的超级大国，历经王政、共和、帝制三个阶段。凯撒独裁、屋大维建立元首制、五贤帝时代登峰造极，最终因内忧外患于476年西罗马帝国灭亡。罗马的法律、语言、建筑与宗教遗产，至今仍是西方文明的基石。',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&q=80',
    references: ['苏埃托尼乌斯《罗马十二帝王传》', '吉本《罗马帝国衰亡史》', '李维《罗马史》'],
    tags: ['罗马帝国', '凯撒', '屋大维', '五贤帝', '共和国', '基督教', '蛮族入侵'],
    country: '罗马', countryCode: 'roman', category: 'world-history',
    timeline: [
      { year: '前509年', event: '驱逐国王，罗马共和国建立', significance: '贵族共和政体确立' },
      { year: '前264—前146年', event: '布匿战争，击败迦太基', significance: '地中海霸权确立' },
      { year: '前49年', event: '凯撒渡过卢比孔河，内战爆发', significance: '共和国危机' },
      { year: '前44年', event: '凯撒在元老院遇刺', significance: '共和派最后抵抗' },
      { year: '前27年', event: '屋大维获"奥古斯都"称号，帝制建立', significance: '罗马帝国开始' },
      { year: '96—180年', event: '五贤帝时代，帝国极盛', significance: '罗马全盛期' },
      { year: '313年', event: '米兰敕令，基督教合法化', significance: '欧洲宗教格局改变' },
      { year: '476年', event: '西罗马末代皇帝被废，帝国灭亡', significance: '古代世界终结' },
    ],
    keyFigures: [
      {
        name: '尤利乌斯·凯撒', role: '罗马独裁官', period: '前100—前44',
        faction: '平民派',
        description: '罗马共和国末期最杰出的政治家与军事家。高卢战争征服法国，内战击败庞培，出任独裁官推行改革（公历即源于他）。被布鲁图斯等元老以"谋求帝制"为由刺杀于元老院，临终说出"你也有份，布鲁图斯？"成为千古名言。',
        relations: [
          { targetName: '屋大维·奥古斯都', type: 'family', label: '叔侄与精神传承' },
          { targetName: '马可·西塞罗', type: 'rival', label: '政治对手' },
          { targetName: '克娄巴特拉', type: 'ally', label: '政治同盟与情人' },
        ],
      },
      {
        name: '屋大维·奥古斯都', role: '罗马第一任皇帝', period: '前63—14',
        faction: '帝制派',
        description: '凯撒的养子，以"第一公民"之名建立元首制，实质确立帝制而避免共和派反弹。在位四十年，帝国繁荣昌盛，史称"奥古斯都和平"。建立行省制度、常备军和公共工程体系，是罗马帝国真正的奠基人。',
        relations: [
          { targetName: '尤利乌斯·凯撒', type: 'family', label: '养子继承人' },
          { targetName: '马可·安东尼', type: 'rival', label: '内战对手' },
        ],
      },
      {
        name: '马可·奥勒留', role: '哲学家皇帝·五贤帝之末', period: '121—180',
        faction: '帝制（斯多葛）',
        description: '罗马五贤帝最后一位，斯多葛哲学家，著《沉思录》以帝王之身反思人生与道德，被誉为"哲学王"的最接近实现者。在位期间抵御北方日耳曼蛮族入侵，帝国开始出现衰弱迹象，其后继无德之子康茂德宣告五贤帝时代终结。',
        relations: [
          { targetName: '屋大维·奥古斯都', type: 'colleague', label: '帝国传承' },
        ],
      },
      {
        name: '君士坦丁大帝', role: '罗马皇帝', period: '272—337',
        faction: '帝制（基督教化）',
        description: '颁布《米兰敕令》将基督教合法化，迁都拜占庭并改名君士坦丁堡，为东罗马帝国（拜占庭帝国）奠基。其对基督教的庇护从根本上改变了欧洲文明走向，死前受洗成为基督徒。他的决定使基督教从一个受迫害的宗教成为罗马帝国的国教。',
        relations: [
          { targetName: '马可·奥勒留', type: 'colleague', label: '帝国传承' },
        ],
      },
      {
        name: '克娄巴特拉', role: '埃及托勒密王朝末代女王', period: '前69—前30',
        faction: '埃及王国',
        description: '最后一位托勒密王朝法老，精通多国语言，以非凡的政治智慧先后与凯撒、马可·安东尼结盟，试图借助罗马力量维护埃及独立。屋大维入侵后，以毒蛇自杀，埃及成为罗马行省，法老文明就此终结。',
        relations: [
          { targetName: '尤利乌斯·凯撒', type: 'ally', label: '政治同盟与情人' },
          { targetName: '马可·安东尼', type: 'ally', label: '爱人与政治伙伴' },
          { targetName: '屋大维·奥古斯都', type: 'enemy', label: '最终征服者' },
        ],
      },
    ],
    analysis: '罗马帝国是人类历史上最成功的政治实体之一，其近千年的统治（共和加帝国）留下了无可估量的文明遗产。罗马法律奠定了现代大陆法系的基础；拉丁语演化出西班牙语、法语、意大利语等现代语言；基督教通过罗马帝国的传播成为世界最大宗教；罗马的工程技术——道路、水道、建筑——证明了古代文明达到的工程高度。罗马的衰亡提供了西方最深刻的历史反思：政治腐败、经济衰退、军事化、道德滑坡、外族入侵——这些因素的交织导致了一个伟大文明的缓慢崩溃，成为此后历代思想家分析国家衰落的经典案例。吉本的《罗马帝国衰亡史》至今仍是理解文明兴衰的最重要历史著作之一。',
    createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z', isAIGenerated: false,
  },

  // ── 法国 ────────────────────────────────────────────────────

  {
    id: 'fr-002',
    title: '拿破仑帝国',
    titleEn: 'Napoleonic Empire',
    date: '1799年',
    dateEnd: '1815年',
    description: '拿破仑·波拿巴通过雾月政变终结法国大革命的混乱，建立法兰西第一帝国。凭借卓越军事天才横扫欧洲，将法国大革命的理念——自由、平等、法典——带至所到之处。最终在莫斯科远征失败、百日王朝覆灭后，被放逐圣赫勒拿岛，独自终老。',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80',
    references: ['拿破仑·波拿巴《圣赫勒拿回忆录》', '安德鲁·罗伯茨《拿破仑大帝》', '斯当达尔《论拿破仑》'],
    tags: ['拿破仑', '法兰西帝国', '奥斯特利茨', '滑铁卢', '拿破仑法典', '大陆封锁'],
    country: '法国', countryCode: 'fr', category: 'world-history',
    timeline: [
      { year: '1799年', event: '雾月政变，拿破仑就任第一执政', significance: '大革命混乱终结' },
      { year: '1804年', event: '拿破仑加冕称帝，颁布《拿破仑法典》', significance: '法兰西第一帝国建立' },
      { year: '1805年', event: '奥斯特利茨战役，击败俄奥联军', significance: '军事巅峰' },
      { year: '1812年', event: '入侵俄国，莫斯科远征失败', significance: '帝国开始崩溃' },
      { year: '1813年', event: '莱比锡战役，反法联盟击败拿破仑', significance: '法国陷入防御' },
      { year: '1814年', event: '拿破仑退位，流放厄尔巴岛', significance: '帝国第一次终结' },
      { year: '1815年', event: '百日王朝与滑铁卢战役，最终覆灭', significance: '帝国彻底终结' },
    ],
    keyFigures: [
      {
        name: '拿破仑·波拿巴', role: '法兰西皇帝', period: '1769—1821',
        faction: '法兰西帝国',
        description: '科西嘉岛出生的军事天才，以炮兵战术和机动作战革新近代战争。在位期间颁布《拿破仑法典》奠定现代民法基础，改革行政体系，推广公制。莫斯科远征的失败揭示了帝国过度扩张的致命弱点。流放圣赫勒拿后，以"被缪斯遗忘的英雄"形象在西方文化中获得永久的神话地位。',
        relations: [
          { targetName: '约瑟芬·波拿巴', type: 'family', label: '皇后（后离婚）' },
          { targetName: '威灵顿公爵', type: 'enemy', label: '滑铁卢终结者' },
          { targetName: '塔列朗', type: 'subordinate', label: '外交大臣（后背叛）' },
        ],
      },
      {
        name: '威灵顿公爵', role: '英国陆军元帅', period: '1769—1852',
        faction: '反法联盟（英国）',
        description: '与拿破仑同年出生，是打败拿破仑的最重要人物。滑铁卢战役中与普鲁士联合，彻底终结拿破仑的百日王朝。以冷静沉着的防御战风格著称，被誉为"铁公爵"，后任英国首相。',
        relations: [
          { targetName: '拿破仑·波拿巴', type: 'enemy', label: '滑铁卢决战' },
        ],
      },
      {
        name: '塔列朗', role: '外交大臣', period: '1754—1838',
        faction: '法国外交（多次易主）',
        description: '法国历史上最著名也最复杂的外交家，历经大革命、拿破仑帝国、波旁复辟多次政治更迭而始终屹立，被称为"永不倒翁"。曾任拿破仑外交大臣，后在维也纳会议上以战败国代表身份争取到法国的最大利益，展现惊人的外交手腕。',
        relations: [
          { targetName: '拿破仑·波拿巴', type: 'subordinate', label: '后背叛主人' },
        ],
      },
      {
        name: '梅特涅', role: '奥地利外交大臣', period: '1773—1859',
        faction: '反法联盟（奥地利）',
        description: '维也纳会议的主导者，拿破仑战争后重建欧洲保守秩序的核心人物。以"欧洲宪兵"之称主导欧洲列强协调体系，压制自由主义与民族主义运动长达三十年，直到1848年革命浪潮席卷欧洲。',
        relations: [
          { targetName: '拿破仑·波拿巴', type: 'enemy', label: '联盟主导者' },
          { targetName: '塔列朗', type: 'rival', label: '维也纳会议博弈' },
        ],
      },
    ],
    analysis: '拿破仑帝国是现代欧洲历史最重要的塑造力量之一。拿破仑通过战争将大革命的核心理念——法律面前人人平等、宗教宽容、行政效率——传播至欧洲各地，动摇了封建贵族秩序的根基，激发了各地民族主义运动。《拿破仑法典》成为法国及其征服地区现代法律体系的基础，至今仍是民法传统国家的蓝本。然而拿破仑的帝国野心也揭示了革命理想与帝国逻辑的根本矛盾：以"解放者"之名进入的国家，最终感受到的是占领而非自由。莫斯科远征的惨败是历史上过度扩张导致帝国崩溃的经典案例，一百二十七年后希特勒重蹈覆辙，证明这一教训始终未被吸取。',
    createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z', isAIGenerated: false,
  },

  // ── 英国 ────────────────────────────────────────────────────

  {
    id: 'uk-001',
    title: '英国工业革命',
    titleEn: 'British Industrial Revolution',
    date: '1760年',
    dateEnd: '1840年',
    description: '18世纪中叶至19世纪初，英国率先以蒸汽机为动力完成工业革命，从农业社会跃升为工业资本主义社会。纺织机械化、铁路网络、蒸汽船舶深刻改变了生产方式与世界贸易格局，人类历史上最彻底的经济与社会转型由此开始，并逐渐扩散至欧美乃至全球。',
    image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&q=80',
    references: ['阿诺德·汤因比《工业革命》', '艾瑞克·霍布斯鲍姆《革命的年代》', '大卫·兰德斯《解除束缚的普罗米修斯》'],
    tags: ['工业革命', '蒸汽机', '瓦特', '铁路', '资本主义', '工人阶级', '城市化'],
    country: '英国', countryCode: 'uk', category: 'world-history',
    timeline: [
      { year: '1733年', event: '约翰·凯发明飞梭，纺织业革命开始', significance: '机械化序幕' },
      { year: '1769年', event: '瓦特改良蒸汽机获得专利', significance: '动力革命核心' },
      { year: '1776年', event: '亚当·斯密《国富论》出版', significance: '资本主义理论奠基' },
      { year: '1779年', event: '世界第一座铁桥在科尔布鲁克代尔建成', significance: '铁的工业化应用' },
      { year: '1825年', event: '世界第一条公共铁路斯托克顿—达林顿铁路通车', significance: '铁路时代开始' },
      { year: '1833年', event: '工厂法通过，限制童工', significance: '劳工保护立法' },
      { year: '1838年', event: '宪章运动开始，工人阶级政治觉醒', significance: '社会矛盾激化' },
    ],
    keyFigures: [
      {
        name: '詹姆斯·瓦特', role: '发明家·工程师', period: '1736—1819',
        faction: '工业革命先驱',
        description: '改良蒸汽机的发明家，将纽可门蒸汽机的效率提升四倍，并发明分离冷凝器、双动蒸汽机、离心调速器等关键装置。与马修·博尔顿合作将蒸汽机商业化，为工业革命提供了核心动力来源，"马力"这一功率单位即以他的商业伙伴博尔顿的建议命名。',
        relations: [
          { targetName: '亚当·斯密', type: 'colleague', label: '同时代苏格兰启蒙人士' },
          { targetName: '乔治·史蒂文森', type: 'colleague', label: '蒸汽技术传承' },
        ],
      },
      {
        name: '亚当·斯密', role: '经济学家', period: '1723—1790',
        faction: '苏格兰启蒙',
        description: '现代经济学之父，《国富论》确立了自由市场经济学的理论框架，提出"看不见的手"引导个人自利行为服务于社会整体利益的核心命题，为工业资本主义提供了最有力的理论支撑，其思想至今仍是主流经济学的基石。',
        relations: [
          { targetName: '詹姆斯·瓦特', type: 'colleague', label: '苏格兰启蒙圈' },
          { targetName: '卡尔·马克思', type: 'rival', label: '资本主义奠基者与批判者' },
        ],
      },
      {
        name: '乔治·史蒂文森', role: '铁路之父', period: '1781—1848',
        faction: '工业革命先驱',
        description: '出身贫苦矿工，自学成才，设计建造了世界上第一辆实用蒸汽机车"火箭号"，主持建设第一条城际铁路（利物浦—曼彻斯特铁路），开启铁路时代，彻底改变了人类的交通运输和时空观念。',
        relations: [
          { targetName: '詹姆斯·瓦特', type: 'colleague', label: '技术传承' },
        ],
      },
      {
        name: '卡尔·马克思', role: '思想家·《资本论》作者', period: '1818—1883',
        faction: '工人阶级理论',
        description: '德裔，长居伦敦，以对资本主义工业体系的深刻批判著称。《资本论》以剩余价值理论解析工业革命中工人被剥削的经济机制，《共产党宣言》呼吁工人阶级推翻资本主义。其思想在20世纪催生了影响数十亿人的社会主义运动。',
        relations: [
          { targetName: '亚当·斯密', type: 'rival', label: '批判资本主义经济学' },
          { targetName: '弗里德里希·恩格斯', type: 'ally', label: '终生战友' },
        ],
      },
    ],
    analysis: '工业革命是人类历史上最深刻的经济革命，其影响甚至超过农业革命。蒸汽机将人类从肌肉力量的制约中解放出来，使生产力以前所未有的速度增长；铁路和蒸汽船将世界变成了一个相互联系的市场；城市化重塑了人类的社会结构与生活方式。然而工业化的早期也带来了严酷的代价：童工、14小时工作日、城市贫民窟、生态破坏、贫富极度分化。这些矛盾催生了工人运动、社会主义思想和劳工法律的诞生。工业革命也是西方世界权力崛起的技术基础——欧洲之所以能在19世纪主宰世界，根本原因在于其工业生产力与军事技术的绝对优势。为什么工业革命首先在英国而非其他地方发生？历史学家至今争论不休，但制度保障、资本积累、科学精神与煤炭资源的组合，是目前最有说服力的解释。',
    createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z', isAIGenerated: false,
  },

  {
    id: 'uk-002',
    title: '大英帝国的扩张与殖民时代',
    titleEn: 'British Empire & Age of Colonialism',
    date: '1815年',
    dateEnd: '1914年',
    description: '拿破仑战争后，英国成为无可争辩的全球霸主，建立起"日不落帝国"——殖民地遍布六大洲，鼎盛时统治全球四分之一的土地和人口。英国以海军和贸易为武器，推行自由贸易帝国主义，主导19世纪的全球政治经济秩序，其殖民遗产深刻影响了亚非拉国家的现代命运。',
    image: 'https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=800&q=80',
    references: ['尼尔·弗格森《帝国》', '约翰·达尔文《未竟的帝国》', '林·卡斯特尔《维多利亚时代的帝国》'],
    tags: ['大英帝国', '殖民主义', '维多利亚时代', '印度', '日不落帝国', '自由贸易', '鸦片贸易'],
    country: '英国', countryCode: 'uk', category: 'world-history',
    timeline: [
      { year: '1815年', event: '维也纳会议后英国成为全球霸主', significance: '帝国权力顶峰基础' },
      { year: '1837—1901年', event: '维多利亚女王在位，帝国鼎盛', significance: '日不落帝国时代' },
      { year: '1857年', event: '印度兵变，东印度公司被解散', significance: '英国直接统治印度' },
      { year: '1869年', event: '苏伊士运河开通', significance: '帝国通道确保' },
      { year: '1884—1885年', event: '柏林会议，欧洲列强瓜分非洲', significance: '殖民地扩张高峰' },
      { year: '1899—1902年', event: '布尔战争，征服南非', significance: '帝国主义争夺白热化' },
      { year: '1914年', event: '第一次世界大战爆发，帝国开始走向衰落', significance: '霸权时代终结' },
    ],
    keyFigures: [
      {
        name: '维多利亚女王', role: '英国女王·印度女皇', period: '1819—1901',
        faction: '大英帝国',
        description: '在位63年，是英国历史上在位时间最长的君主（直至伊丽莎白二世超越）。其统治时期即"维多利亚时代"代表了大英帝国最辉煌的阶段：工业领先、海军无敌、文化繁荣。她本人更成为帝国的精神象征，"维多利亚主义"成为保守、勤勉、道德自律的代名词。',
        relations: [
          { targetName: '迪斯雷利', type: 'subordinate', label: '最宠爱的首相' },
          { targetName: '格莱斯顿', type: 'subordinate', label: '不喜欢的首相' },
        ],
      },
      {
        name: '迪斯雷利', role: '英国首相', period: '1804—1881',
        faction: '保守党（帝国主义派）',
        description: '英国第一位犹太裔首相，维多利亚女王最喜爱的政治家。推行积极的帝国主义政策，购入苏伊士运河股权，授予维多利亚女王"印度女皇"称号，是大英帝国扩张主义的代表人物。',
        relations: [
          { targetName: '维多利亚女王', type: 'subordinate', label: '女王最爱的首相' },
          { targetName: '格莱斯顿', type: 'rival', label: '保守派与自由派宿敌' },
        ],
      },
      {
        name: '塞西尔·罗兹', role: '殖民地企业家·政治家', period: '1853—1902',
        faction: '帝国主义扩张派',
        description: '南非钻石大亨，梦想建立从开普敦到开罗纵贯非洲的英国殖民走廊。推动罗德西亚（今津巴布韦）的殖民开发，以其名字命名的"罗兹奖学金"至今仍是最著名的国际奖学金。他既是帝国主义扩张的象征，也是种族主义政策的重要推手。',
        relations: [
          { targetName: '维多利亚女王', type: 'subordinate', label: '服务帝国' },
        ],
      },
      {
        name: '圣雄甘地', role: '印度独立运动领袖', period: '1869—1948',
        faction: '印度民族独立运动',
        description: '以非暴力不合作运动领导印度人民反抗英国殖民统治，盐税行军、绝食抗议成为非暴力抵抗的永恒象征。1947年推动印度独立，是大英帝国殖民体系崩溃的最重要推动者，其非暴力哲学深刻影响了全球人权运动。',
        relations: [
          { targetName: '维多利亚女王', type: 'rival', label: '帝国被殖民者的反抗' },
        ],
      },
    ],
    analysis: '大英帝国是人类历史上规模最大的帝国，其影响无处不在：英语成为全球通用语，普通法体系传播至前殖民地，议会民主制度被众多独立国家采纳，足球、板球等运动遍布全球。然而帝国的成就建立在殖民地人民的剥削之上——强制性的鸦片贸易（对华）、掠夺性的棉花种植（印度）、惨绝人寰的非洲奴隶贸易，构成帝国光鲜表面下的血腥底色。"文明使命"的话语被用来为殖民征服辩护，但实际上系统性地摧毁了被殖民地区的传统社会结构与文化自信，其后遗症延续至今。大英帝国的遗产因此是一个深刻的矛盾体：它既传播了法治与现代制度，也造成了深重的历史创伤，这一矛盾仍是今日国际政治争论的重要维度。',
    createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z', isAIGenerated: false,
  },

  // ── 德国 ────────────────────────────────────────────────────

  {
    id: 'de-002',
    title: '俾斯麦与德意志统一',
    titleEn: 'Bismarck & German Unification',
    date: '1862年',
    dateEnd: '1871年',
    description: '普鲁士首相俾斯麦以"铁血政策"通过三场闪电战——对丹麦、对奥地利、对法国——完成德意志的统一，建立德意志帝国。这一统一彻底改变了欧洲的地缘政治格局，催生了后来的两次世界大战，是19世纪最重要的政治事件之一。',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80',
    references: ['艾伦·帕尔默《俾斯麦传》', '乔纳森·斯坦伯格《俾斯麦评传》', '克里斯托弗·克拉克《梦游者》'],
    tags: ['俾斯麦', '德意志统一', '普法战争', '铁血政策', '德意志帝国', '威廉一世'],
    country: '德国', countryCode: 'de', category: 'world-history',
    timeline: [
      { year: '1862年', event: '俾斯麦出任普鲁士首相，宣言"铁和血"', significance: '强硬路线开始' },
      { year: '1864年', event: '普奥联军击败丹麦，取得石勒苏益格', significance: '统一战争第一步' },
      { year: '1866年', event: '普奥战争，普鲁士七周击败奥地利', significance: '北德意志联邦建立' },
      { year: '1870—1871年', event: '普法战争，法国惨败，色当皇帝被俘', significance: '南德意志各邦加入' },
      { year: '1871年1月18日', event: '凡尔赛宫镜厅，德意志帝国宣告成立', significance: '统一完成' },
      { year: '1878年', event: '柏林会议，俾斯麦主持欧洲秩序', significance: '欧洲外交主宰' },
      { year: '1890年', event: '威廉二世迫使俾斯麦辞职', significance: '均势体系瓦解开始' },
    ],
    keyFigures: [
      {
        name: '俾斯麦', role: '普鲁士首相·德意志帝国宰相', period: '1815—1898',
        faction: '普鲁士容克贵族',
        description: '欧洲19世纪最伟大的政治家。以"铁血"手段通过三场战争完成德意志统一，随后以精妙的外交手腕维持欧洲均势长达二十年，使新生的德意志帝国得以巩固壮大。其"现实政治"（Realpolitik）思想——以国家利益而非道德理想指导外交——深刻影响了现代国际关系理论。',
        relations: [
          { targetName: '威廉一世', type: 'subordinate', label: '辅佐统一帝国' },
          { targetName: '威廉二世', type: 'rival', label: '被新皇帝逐出' },
          { targetName: '卡尔·马克思', type: 'rival', label: '用福利政策对抗社会主义' },
        ],
      },
      {
        name: '威廉一世', role: '普鲁士国王·德意志帝国皇帝', period: '1797—1888',
        faction: '霍亨索伦王朝',
        description: '德意志帝国第一位皇帝，在俾斯麦的辅佐下完成统一大业。性格保守谨慎，多次与俾斯麦产生分歧却总以俾斯麦的判断为准，君臣配合是德国统一成功的重要原因。其后继者威廉二世的刚愎自用则成为德国走向一战的人格因素。',
        relations: [
          { targetName: '俾斯麦', type: 'superior', label: '皇帝依靠宰相' },
          { targetName: '威廉二世', type: 'family', label: '祖父与孙子' },
        ],
      },
      {
        name: '威廉二世', role: '德意志帝国皇帝', period: '1859—1941',
        faction: '霍亨索伦王朝（激进帝国主义）',
        description: '德意志帝国最后一位皇帝，1890年逼退俾斯麦，推行激进帝国主义政策，扩充海军挑战英国，破坏俾斯麦精心构建的欧洲均势体系，最终将德国拖入第一次世界大战。一战战败后流亡荷兰，是帝国时代终结的象征。',
        relations: [
          { targetName: '俾斯麦', type: 'rival', label: '逼退老宰相' },
          { targetName: '威廉一世', type: 'family', label: '祖孙' },
        ],
      },
    ],
    analysis: '德意志统一是欧洲19世纪最重要的地缘政治事件。一个统一强大的德国出现在欧洲中心，打破了拿破仑战争后维也纳体系建立的欧洲均势。俾斯麦的天才在于：他知道统一后的德国必须表现出克制，以免惊恐其他大国形成反德联盟。他的外交均势体系将欧洲维持在和平状态长达二十年。威廉二世抛弃这一精心平衡，竞相扩军备战，最终导致了一战的爆发。俾斯麦统一德国的方式——通过战争而非自由主义改革——也塑造了德国政治文化中权威主义与民族主义的混合基因，这一基因在魏玛共和国崩溃、纳粹崛起的过程中起到了关键作用。',
    createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z', isAIGenerated: false,
  },

  {
    id: 'de-003',
    title: '第一次世界大战',
    titleEn: 'World War I',
    date: '1914年',
    dateEnd: '1918年',
    description: '1914年萨拉热窝刺杀事件点燃了欧洲数十年积累的火药桶。同盟国与协约国展开四年惨烈的堑壕战，造成逾一千六百万人死亡。《凡尔赛条约》的苛刻条款羞辱德国，埋下二十年后更大战争的种子。一战彻底终结了欧洲旧世界秩序，俄国、奥匈、德国、奥斯曼四大帝国相继覆灭。',
    image: 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=800&q=80',
    references: ['克里斯托弗·克拉克《梦游者》', '芭芭拉·塔奇曼《八月炮火》', '约翰·基根《一战史》'],
    tags: ['第一次世界大战', '凡尔赛条约', '堑壕战', '萨拉热窝', '威廉二世', '凡尔登', '索姆河'],
    country: '德国', countryCode: 'de', category: 'world-history',
    timeline: [
      { year: '1914年6月28日', event: '弗朗茨·费迪南大公在萨拉热窝遇刺', significance: '战争导火索' },
      { year: '1914年8月', event: '各大国相继宣战，战争全面爆发', significance: '同盟体系连锁反应' },
      { year: '1916年', event: '凡尔登战役与索姆河战役，共计百余万伤亡', significance: '堑壕战残酷顶峰' },
      { year: '1917年4月', event: '美国参战，力量天平倾斜', significance: '协约国决定性优势' },
      { year: '1917年11月', event: '俄国十月革命，俄国退出战争', significance: '东线终结' },
      { year: '1918年11月11日', event: '德国签署停战协议，战争结束', significance: '一战终结' },
      { year: '1919年', event: '巴黎和会，《凡尔赛条约》签订', significance: '战后秩序与新种子' },
    ],
    keyFigures: [
      {
        name: '威廉二世', role: '德意志帝国皇帝', period: '1859—1941',
        faction: '同盟国',
        description: '一战的主要责任者之一，其激进的帝国主义政策和不断扩军挑衅，使欧洲均势彻底崩溃。战争中的角色远不如预期，军事决策权实际掌握在鲁登道夫等军事强人手中，1918年战败后仓皇流亡荷兰，终结霍亨索伦王朝。',
        relations: [
          { targetName: '克列孟梭', type: 'enemy', label: '协约国对手' },
          { targetName: '弗朗茨·约瑟夫一世', type: 'ally', label: '奥匈同盟' },
        ],
      },
      {
        name: '克列孟梭', role: '法国总理', period: '1841—1929',
        faction: '协约国（法国）',
        description: '"老虎"克列孟梭，法国最强硬的战时领袖，以钢铁意志带领法国撑过最艰难的1917年，率领法国赢得最终胜利。在巴黎和会上坚持对德国实施最严苛惩罚，其报复性条款与威尔逊的理想主义形成对立，《凡尔赛条约》的矛盾正源于此。',
        relations: [
          { targetName: '伍德罗·威尔逊', type: 'rival', label: '和会路线之争' },
          { targetName: '威廉二世', type: 'enemy', label: '战时宿敌' },
        ],
      },
      {
        name: '伍德罗·威尔逊', role: '美国总统', period: '1856—1924',
        faction: '协约国（美国）',
        description: '提出"十四点原则"，主张民族自决、建立国际联盟，以理想主义重构战后国际秩序。然而其设想在巴黎和会上遭到英法的现实主义否定，《凡尔赛条约》与他的原则背道而驰。最终美国国会拒绝批准条约和加入国联，理想主义的国际新秩序梦想破灭。',
        relations: [
          { targetName: '克列孟梭', type: 'rival', label: '理想主义对现实主义' },
        ],
      },
      {
        name: '列宁', role: '俄国革命领袖', period: '1870—1924',
        faction: '布尔什维克',
        description: '一战期间被德国秘密输送回俄国（德国希望俄国退出战争），领导十月革命建立苏维埃政权，随即签订《布列斯特-立陶夫斯克条约》退出战争。其革命的成功深刻改变了一战后的世界政治格局，催生了国际共产主义运动。',
        relations: [
          { targetName: '威廉二世', type: 'ally', label: '德国输送回俄用于分裂协约国' },
          { targetName: '伍德罗·威尔逊', type: 'rival', label: '共产主义对自由主义' },
        ],
      },
    ],
    analysis: '第一次世界大战是欧洲文明的自我毁灭。数十年的帝国主义竞争、民族主义膨胀、军备竞赛与同盟体系，使欧洲变成一个装满火药的房间，萨拉热窝的一声枪响只是引爆的导火索。克拉克的研究揭示：没有一个国家真正想要全面战争，各国领导人只是盲目相信战争会快速结束——历史将他们称为"梦游者"。四年堑壕战的残酷超出所有人的预料，毒气、机关枪、炮击构成人类历史最机械化、最无意义的大规模屠杀。战争带来的后果同样超乎想象：俄国、德国、奥匈、奥斯曼四大帝国覆灭，中东现代国家边界被西方强行划定，《凡尔赛条约》的苛刻羞辱为希特勒的崛起准备了土壤。一战是20世纪一切灾难的源头。',
    createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z', isAIGenerated: false,
  },

  // ── 俄国 ────────────────────────────────────────────────────

  {
    id: 'ru-001',
    title: '俄国革命与苏联建立',
    titleEn: 'Russian Revolution & Founding of the USSR',
    date: '1917年',
    dateEnd: '1924年',
    description: '1917年，两次革命彻底改变了俄国乃至世界的历史走向。二月革命推翻沙皇，十月革命中布尔什维克夺取政权，建立世界上第一个社会主义国家。列宁逝世后，斯大林通过残酷的权力斗争脱颖而出，以高压手段推进工业化和集体化，将苏联建成超级大国，也制造了历史上最惨烈的政治悲剧之一。',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80',
    references: ['约翰·里德《震撼世界的十天》', '奥兰多·费吉斯《耳语者》', '罗伯特·服务《列宁传》'],
    tags: ['俄国革命', '十月革命', '布尔什维克', '列宁', '斯大林', '苏联', '托洛茨基'],
    country: '俄国', countryCode: 'ru', category: 'world-history',
    timeline: [
      { year: '1905年', event: '血腥星期日，第一次俄国革命', significance: '革命序幕' },
      { year: '1917年3月', event: '二月革命，沙皇尼古拉二世退位', significance: '罗曼诺夫王朝覆灭' },
      { year: '1917年11月', event: '十月革命，布尔什维克夺权', significance: '苏维埃政权建立' },
      { year: '1918—1921年', event: '俄国内战，红军击败白军', significance: '苏维埃政权巩固' },
      { year: '1922年', event: '苏维埃社会主义共和国联盟（苏联）成立', significance: '超级大国奠基' },
      { year: '1924年', event: '列宁逝世，权力斗争开始', significance: '斯大林时代到来' },
      { year: '1929年', event: '斯大林完全掌权，开始强制集体化', significance: '全面专制化' },
    ],
    keyFigures: [
      {
        name: '列宁', role: '布尔什维克领袖·苏联奠基人', period: '1870—1924',
        faction: '布尔什维克',
        description: '俄国革命的最重要领袖，马克思主义的革命实践者。提出"帝国主义是资本主义最高阶段"理论，以职业革命家组织模式建立了高度纪律性的布尔什维克党，领导十月革命。建立苏维埃政权后通过《新经济政策》稳定经济，其逝世引发了苏联建国史上最激烈的权力斗争。',
        relations: [
          { targetName: '斯大林', type: 'superior', label: '列宁晚年已不信任斯大林' },
          { targetName: '托洛茨基', type: 'ally', label: '革命战友后遭斯大林清洗' },
          { targetName: '尼古拉二世', type: 'enemy', label: '推翻沙皇' },
        ],
      },
      {
        name: '斯大林', role: '苏联最高领导人', period: '1878—1953',
        faction: '苏联共产党（斯大林主义）',
        description: '以"钢铁人"之名崛起，通过清洗政治对手巩固个人独裁。强制推行农业集体化导致乌克兰大饥荒（1932-1933年）死亡数百万人，大清洗（1936-1938年）迫害数百万人。二战期间领导苏联抵抗德国入侵，取得最终胜利，战后将东欧纳入苏联势力范围。历史评价最具争议的20世纪领导人之一。',
        relations: [
          { targetName: '列宁', type: 'subordinate', label: '继承者但背离遗训' },
          { targetName: '托洛茨基', type: 'rival', label: '流放并暗杀' },
        ],
      },
      {
        name: '托洛茨基', role: '革命军事领袖', period: '1879—1940',
        faction: '布尔什维克（左翼反对派）',
        description: '十月革命的军事组织者，红军创建人。主张"不断革命"理论，在与斯大林的路线斗争中失败，被流放，最终在墨西哥被斯大林派遣的特工以冰镐刺杀。其悲剧性命运是苏联革命吞噬自身子女的最著名案例。',
        relations: [
          { targetName: '列宁', type: 'ally', label: '革命同志' },
          { targetName: '斯大林', type: 'rival', label: '被清洗流放暗杀' },
        ],
      },
      {
        name: '尼古拉二世', role: '俄罗斯末代沙皇', period: '1868—1918',
        faction: '罗曼诺夫王朝',
        description: '俄罗斯帝国最后一位沙皇，性格优柔寡断，无力应对现代化挑战和一战的巨大压力。二月革命后退位，与家人被软禁。1918年7月在叶卡捷琳堡被布尔什维克枪决，罗曼诺夫王朝三百年统治彻底终结。',
        relations: [
          { targetName: '列宁', type: 'enemy', label: '被推翻处决' },
        ],
      },
    ],
    analysis: '俄国革命是20世纪最深刻的政治事件之一，其影响重塑了整个世纪的历史走向。十月革命证明了马克思主义可以作为革命意识形态付诸实践，激励了全球殖民地与半殖民地的解放运动，包括中国共产党的建立。然而布尔什维克的革命实践与马克思的理论预想之间存在根本差距——在一个以农民为主体的落后国家进行工人阶级革命，缺乏成熟资本主义发展阶段，最终导致革命走向专制。斯大林主义的恐怖不是偶然的个人变态，而是在孤立的专制体制下，以高压手段推进强制现代化的制度性结果。苏联的实验最终以1991年的解体告终，但它对20世纪国际政治的塑造作用——冷战、第三世界解放运动、核军备竞赛——是无法被简单抹去的历史事实。',
    createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z', isAIGenerated: false,
  },

  {
    id: 'ru-002',
    title: '冷战与苏联解体',
    titleEn: 'Cold War & Dissolution of the USSR',
    date: '1947年',
    dateEnd: '1991年',
    description: '二战结束后，美苏两个超级大国以意识形态为旗帜，展开长达四十四年的全球对抗。核武器阴影下的军备竞赛、朝鲜战争、古巴导弹危机、越战、阿富汗战争……两种制度体系在全球各地激烈博弈。1991年苏联解体，冷战以美国为代表的自由民主阵营胜利告终，世界格局发生根本性改变。',
    image: 'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=800&q=80',
    references: ['约翰·刘易斯·加迪斯《冷战》', '奥多·亚历山大《苏联的最后岁月》', '弗朗西斯·福山《历史的终结》'],
    tags: ['冷战', '美苏对抗', '核武器', '古巴导弹危机', '苏联解体', '戈尔巴乔夫', '柏林墙'],
    country: '俄国', countryCode: 'ru', category: 'world-history',
    timeline: [
      { year: '1947年', event: '杜鲁门主义与马歇尔计划，冷战正式开始', significance: '两极格局确立' },
      { year: '1949年', event: '苏联核试验成功，核均衡形成', significance: '核恐怖平衡开始' },
      { year: '1950—1953年', event: '朝鲜战争，冷战第一次热战', significance: '亚洲冷战格局' },
      { year: '1957年', event: '苏联发射人造卫星，太空竞赛开始', significance: '科技竞争白热化' },
      { year: '1962年', event: '古巴导弹危机，核战争最近临界点', significance: '最危险时刻' },
      { year: '1969年', event: '阿波罗11号登月，美国赢得太空竞赛', significance: '意识形态胜利' },
      { year: '1989年', event: '柏林墙倒塌，东欧剧变', significance: '冷战终结序曲' },
      { year: '1991年12月', event: '苏联正式解体，冷战结束', significance: '两极格局终结' },
    ],
    keyFigures: [
      {
        name: '约瑟夫·斯大林', role: '苏联领导人（冷战初期）', period: '1878—1953',
        faction: '苏联',
        description: '冷战的苏联开创者，战后拒绝接受马歇尔计划，在东欧建立卫星国缓冲带，支持各国共产党运动，将苏联从战争废墟中重建为核超级大国。其强硬姿态与杜鲁门的遏制政策形成冷战的基本对立格局。',
        relations: [
          { targetName: '赫鲁晓夫', type: 'superior', label: '被继任者批判' },
          { targetName: '杜鲁门', type: 'enemy', label: '冷战对立核心' },
        ],
      },
      {
        name: '赫鲁晓夫', role: '苏联共产党第一书记', period: '1894—1971',
        faction: '苏联',
        description: '斯大林去世后执政，发表"秘密报告"批判斯大林崇拜，推行"解冻"政策，与美国在古巴导弹危机中正面交锋并最终退让，在联合国会场以皮鞋敲桌的举动成为冷战标志性画面。其改革开放姿态与政治反复展现了苏联体制的内在矛盾。',
        relations: [
          { targetName: '斯大林', type: 'rival', label: '批判前任' },
          { targetName: '肯尼迪', type: 'rival', label: '古巴危机对手' },
          { targetName: '戈尔巴乔夫', type: 'colleague', label: '改革的先行者与未竟者' },
        ],
      },
      {
        name: '约翰·肯尼迪', role: '美国总统', period: '1917—1963',
        faction: '美国',
        description: '美国最具魅力的冷战时期总统，古巴导弹危机中以沉着外交避免核战争，发表"我是柏林人"演讲捍卫西方阵营，支持阿波罗计划扬言十年内登月。1963年遭刺杀，未能亲眼见证登月实现，其死亡至今仍是20世纪最大历史谜案之一。',
        relations: [
          { targetName: '赫鲁晓夫', type: 'rival', label: '古巴危机博弈' },
        ],
      },
      {
        name: '米哈伊尔·戈尔巴乔夫', role: '苏联最后一任领导人', period: '1931—2022',
        faction: '苏联（改革派）',
        description: '苏联最后一任总书记，推行"公开性"（glasnost）与"改革重建"（perestroika），试图挽救苏联体制。其改革反而加速了苏联的解体：东欧各卫星国相继获得独立，苏联各加盟共和国纷纷宣布独立。1991年圣诞节辞职，苏联次日宣告解体。西方视他为和平结束冷战的英雄，俄罗斯的历史评价则争议至今。',
        relations: [
          { targetName: '赫鲁晓夫', type: 'colleague', label: '改革先行者的继承' },
          { targetName: '斯大林', type: 'rival', label: '彻底清算斯大林主义' },
        ],
      },
    ],
    analysis: '冷战是20世纪持续时间最长、影响范围最广的地缘政治竞争。其独特之处在于：两个核武装的超级大国从未直接交战，而是通过代理人战争、意识形态输出、经济竞争、太空竞赛进行全方位角力。"确保相互毁灭"（MAD）的核恐怖平衡是维持这种"长和平"的根本机制，也是20世纪人类理性约束力量的最极端体现。苏联最终败于内部的经济停滞与政治僵化，而非军事失败——这说明制度的可持续性比短期军事力量更为根本。冷战的结束开启了短暂的"单极时刻"，福山宣称"历史的终结"——自由民主制度已成为人类的最终选择。然而2008年金融危机、民粹主义浪潮与中国崛起相继打破了这一乐观预期，冷战真正留下的遗产或许是：大国竞争并未终结，只是换了形式。',
    createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z', isAIGenerated: false,
  },

  // ── 日本 ────────────────────────────────────────────────────

  {
    id: 'jp-001',
    title: '明治维新',
    titleEn: 'Meiji Restoration',
    date: '1868年',
    dateEnd: '1912年',
    description: '1868年，日本以"尊王攘夷"为旗帜推翻幕府，明治天皇亲政，随即宣布"文明开化""富国强兵""殖产兴业"三大方针。短短四十年间，日本从封建藩国转型为工业化的近代帝国，甲午战争击败中国、日俄战争击败俄国，跻身世界列强，成为亚洲唯一成功实现现代化的非西方国家。',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80',
    references: ['W·G·比斯利《明治维新》', '马利乌斯·詹森《日本与中国》', '福泽谕吉《文明论之概略》'],
    tags: ['明治维新', '日本近代化', '伊藤博文', '西乡隆盛', '福泽谕吉', '富国强兵', '脱亚入欧'],
    country: '日本', countryCode: 'jp', category: 'world-history',
    timeline: [
      { year: '1853年', event: '黑船来航，美国炮舰迫使日本开国', significance: '幕藩体制危机' },
      { year: '1868年', event: '明治天皇亲政，戊辰战争结束', significance: '明治维新正式开始' },
      { year: '1872年', event: '开始建设铁路，引进西方技术', significance: '工业化基础建设' },
      { year: '1877年', event: '西南战争，西乡隆盛兵败自杀', significance: '封建武士阶层终结' },
      { year: '1889年', event: '《大日本帝国宪法》颁布', significance: '君主立宪确立' },
      { year: '1894—1895年', event: '甲午战争，击败中国', significance: '跻身列强地位' },
      { year: '1904—1905年', event: '日俄战争，击败俄国', significance: '亚洲列强地位确立' },
    ],
    keyFigures: [
      {
        name: '明治天皇', role: '日本第122代天皇', period: '1852—1912',
        faction: '明治政府',
        description: '14岁即位，以其名义推翻幕府、恢复皇权，成为明治维新的象征性核心。发布《五条誓文》宣示改革方向，推动日本学习西方制度、文化、技术。其统治的四十四年是日本历史上变化最深刻的时期，将日本从封建社会推向现代帝国。',
        relations: [
          { targetName: '伊藤博文', type: 'superior', label: '依靠核心政治家' },
          { targetName: '西乡隆盛', type: 'rival', label: '维新功臣后成反叛者' },
        ],
      },
      {
        name: '伊藤博文', role: '日本首任内阁总理大臣', period: '1841—1909',
        faction: '明治政府（长州藩）',
        description: '明治维新的核心政治人物，主持起草《大日本帝国宪法》，四度出任首相，是日本现代国家制度的主要设计师。在甲午战争后代表日本签订《马关条约》。1909年在哈尔滨被朝鲜独立运动人士安重根刺杀。',
        relations: [
          { targetName: '明治天皇', type: 'subordinate', label: '最重要政治助手' },
          { targetName: '西乡隆盛', type: 'rival', label: '路线不同' },
          { targetName: '福泽谕吉', type: 'colleague', label: '维新同代人' },
        ],
      },
      {
        name: '西乡隆盛', role: '萨摩藩武士·维新功臣', period: '1828—1877',
        faction: '萨摩藩（保守派武士）',
        description: '倒幕运动的最重要武士领袖，身形高大、个性耿直，被誉为"维新三杰"之一。因反对明治政府的快速西化与废藩置县触动旧武士利益，最终在西南战争中起兵反叛，兵败后自杀。在日本民间被塑造为最高尚武士道精神的化身，其铜像矗立于东京上野公园。',
        relations: [
          { targetName: '明治天皇', type: 'subordinate', label: '功臣后成反叛者' },
          { targetName: '伊藤博文', type: 'rival', label: '政策路线冲突' },
        ],
      },
      {
        name: '福泽谕吉', role: '思想家·教育家', period: '1835—1901',
        faction: '启蒙思想（脱亚入欧）',
        description: '日本近代最重要的启蒙思想家，创立庆应义塾大学，著《劝学篇》《文明论之概略》大力推介西方文明，提出"脱亚入欧"主张——日本应从亚洲文明圈脱离，融入西方现代文明圈。其思想奠定了明治时代知识分子的精神方向，印在日本一万元钞票正面。',
        relations: [
          { targetName: '伊藤博文', type: 'colleague', label: '维新思想同代人' },
        ],
      },
    ],
    analysis: '明治维新是非西方国家现代化的最成功案例，也是人类历史上最迅速的制度性转型之一。日本的成功在于其精英阶层的危机意识与灵活的学习能力——他们意识到"不变则亡"，选择以举国之力学习西方，而非抵抗西方。与中国洋务运动只引进技术不同，明治维新同时变革政治制度、教育体系和社会结构，从根本上重塑了国家形态。然而明治维新的遗产同样具有深刻的矛盾性：它使日本成功融入现代国际体系，却选择了帝国主义扩张而非和平发展的道路；它引进了宪政制度，却在天皇神权之下保留了专制主义的内核。这些矛盾最终在昭和军国主义时代彻底爆发，将日本推向侵略战争与最终失败的历史悲剧。',
    createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z', isAIGenerated: false,
  },

  // ── 美国 ────────────────────────────────────────────────────

  {
    id: 'us-002',
    title: '美国南北战争',
    titleEn: 'American Civil War',
    date: '1861年',
    dateEnd: '1865年',
    description: '奴隶制存废问题激化了美国南北矛盾，林肯当选总统后南方十一州宣布脱离联邦，美国内战爆发。历经四年惨烈战争，工业化的北方联邦军最终击败南方联盟军，废除奴隶制，维护了国家统一。这是美国历史上最惨烈的战争，也是美国现代化进程的关键转折点。',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80',
    references: ['肯·伯恩斯《内战》纪录片', '詹姆斯·麦克弗森《战火考验》', '林肯《葛底斯堡演说》'],
    tags: ['南北战争', '林肯', '奴隶制废除', '联邦与邦联', '葛底斯堡', '格兰特', '李将军'],
    country: '美国', countryCode: 'us', category: 'world-history',
    timeline: [
      { year: '1861年4月', event: '萨姆特堡炮击，内战爆发', significance: '战争开始' },
      { year: '1862年9月', event: '安提坦战役，北方惨胜', significance: '战略转折点' },
      { year: '1863年1月', event: '《解放黑人奴隶宣言》发布', significance: '战争性质升华' },
      { year: '1863年7月', event: '葛底斯堡战役，南方军最后一次北进被击败', significance: '决定性转折' },
      { year: '1865年4月', event: '李将军在阿波马托克斯投降', significance: '南方联盟覆灭' },
      { year: '1865年4月14日', event: '林肯总统遭刺杀', significance: '重建时代悲剧开始' },
    ],
    keyFigures: [
      {
        name: '亚伯拉罕·林肯', role: '美国第16任总统', period: '1809—1865',
        faction: '联邦（北方）',
        description: '贫苦出身的自学成才律师，以反对奴隶制扩张赢得共和党提名并当选总统，引爆南方分裂。以《解放黑人奴隶宣言》将战争定性为自由之战，《葛底斯堡演说》重新定义美国立国理想。南方投降后主张宽和重建，遭南方支持者布思刺杀，殉职于国家统一之际，成为美国历史上最受崇敬的总统。',
        relations: [
          { targetName: '尤利西斯·格兰特', type: 'superior', label: '任命北方主帅' },
          { targetName: '罗伯特·李', type: 'enemy', label: '南北决战' },
          { targetName: '道格拉斯', type: 'rival', label: '著名辩论宿敌' },
        ],
      },
      {
        name: '尤利西斯·格兰特', role: '联邦军总司令·第18任总统', period: '1822—1885',
        faction: '联邦（北方）',
        description: '林肯最终选定的联邦军总司令，以不计伤亡的消耗战术磨垮南方军有限的人力资源，迫使李将军投降。内战后就任总统，力推宪法第十四、十五修正案保护黑人权利。以钢铁意志著称，晚年在贫困与癌症中写完回忆录，是美国内战最重要的军事人物之一。',
        relations: [
          { targetName: '亚伯拉罕·林肯', type: 'subordinate', label: '被总统赏识重用' },
          { targetName: '罗伯特·李', type: 'enemy', label: '战场宿敌' },
        ],
      },
      {
        name: '罗伯特·李', role: '南方联盟军总司令', period: '1807—1870',
        faction: '南方联盟',
        description: '美国历史上最被敬仰的将领之一，尽管代表失败的一方。弗吉尼亚西点军校优等生，拒绝林肯邀请率北方军，选择效忠故乡弗吉尼亚。以劣势兵力连续击败北方名将，展现卓越的战术天才，最终因资源耗尽而投降。其优雅地接受失败的方式成为美国南部"失去的事业"神话的核心。',
        relations: [
          { targetName: '亚伯拉罕·林肯', type: 'enemy', label: '国家分裂的对立面' },
          { targetName: '尤利西斯·格兰特', type: 'enemy', label: '最终向其投降' },
        ],
      },
      {
        name: '弗雷德里克·道格拉斯', role: '废奴主义者·演说家', period: '1818—1895',
        faction: '废奴运动',
        description: '前奴隶，自学读写，以惊人的口才和《叙事》一书揭露奴隶制的残酷，成为19世纪美国最重要的黑人领袖。在林肯政府中斡旋，推动黑人参军，一生倡导废除奴隶制、争取黑人平等权利，是美国民权运动的精神先驱。',
        relations: [
          { targetName: '亚伯拉罕·林肯', type: 'ally', label: '支持并督促总统解放奴隶' },
        ],
      },
    ],
    analysis: '美国内战是美国历史上最深刻的政治与道德危机。它回答了建国时遗留的根本矛盾：一个宣称"人人生而平等"的国家，能否长期维持奴隶制？战争以北方胜利给出了历史答案，但这一答案付出了超过六十万人死亡的代价——几乎相当于美国此前和此后所有战争的死亡总和。战后的"重建"时代试图将黑人公民整合入美国社会，却因南方白人的暴力抵制和联邦政府的妥协而最终失败，"吉姆·克劳"种族隔离法延续近百年，预示着美国种族问题的漫长历史轨迹。内战留下的另一个重要遗产是联邦权力的强化——国家不再是各州的松散联合，而是一个统一的民族国家，这一转变为20世纪美国成为全球超级大国奠定了制度基础。',
    createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z', isAIGenerated: false,
  },

  {
    id: 'us-003',
    title: '冷战与太空竞赛',
    titleEn: 'Space Race & American Cold War',
    date: '1957年',
    dateEnd: '1972年',
    description: '苏联1957年发射人类第一颗人造卫星"斯普特尼克"，震惊美国，太空竞赛正式拉开帷幕。美国以阿波罗计划回应，1969年阿姆斯特朗踏上月球，实现了人类历史上最伟大的探索成就。太空竞赛是冷战意识形态博弈的技术战场，也推动了人类科技的跨越式发展。',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&q=80',
    references: ['汤姆·沃尔夫《正确的东西》', 'NASA《阿波罗任务报告》', '斯蒂芬·沃克《震惊：斯普特尼克背后的故事》'],
    tags: ['太空竞赛', '阿波罗登月', '冷战', '肯尼迪', 'NASA', '加加林', '阿姆斯特朗'],
    country: '美国', countryCode: 'us', category: 'world-history',
    timeline: [
      { year: '1957年10月4日', event: '苏联发射斯普特尼克一号，人类第一颗人造卫星', significance: '太空竞赛开始' },
      { year: '1961年4月12日', event: '加加林成为第一个进入太空的人类', significance: '苏联领先' },
      { year: '1961年5月', event: '肯尼迪宣布十年内实现月球登陆', significance: '美国全力追赶' },
      { year: '1967年', event: '阿波罗1号火灾，三名宇航员遇难', significance: '最沉痛挫折' },
      { year: '1968年12月', event: '阿波罗8号绕月飞行，人类首次看到"地出"', significance: '技术突破' },
      { year: '1969年7月20日', event: '阿波罗11号，阿姆斯特朗踏上月球', significance: '人类历史最伟大时刻之一' },
      { year: '1972年', event: '阿波罗17号，最后一次载人月球任务', significance: '太空竞赛实质终结' },
    ],
    keyFigures: [
      {
        name: '约翰·肯尼迪', role: '美国总统', period: '1917—1963',
        faction: '美国',
        description: '1961年向国会宣告"在这十年结束之前，美国将实现人类登月并安全返回地球"，以政治意志点燃了阿波罗计划。其遇刺发生在目标实现前六年，但他的承诺被继任者约翰逊全力执行，成就了1969年的历史性时刻。',
        relations: [
          { targetName: '尼尔·阿姆斯特朗', type: 'ally', label: '承诺得以实现' },
          { targetName: '尤里·加加林', type: 'rival', label: '太空竞赛对手' },
        ],
      },
      {
        name: '尤里·加加林', role: '苏联宇航员', period: '1934—1968',
        faction: '苏联',
        description: '1961年4月12日成为第一个进入太空的人类，绕地球飞行108分钟，成为人类探索宇宙的永恒先驱。其微笑和宇航服照片成为20世纪最著名的图像之一。1968年在例行飞行训练中坠机身亡，年仅34岁。',
        relations: [
          { targetName: '尼尔·阿姆斯特朗', type: 'rival', label: '太空探索先行者' },
          { targetName: '约翰·肯尼迪', type: 'rival', label: '太空竞赛对手' },
        ],
      },
      {
        name: '尼尔·阿姆斯特朗', role: '宇航员·第一个登月人类', period: '1930—2012',
        faction: '美国',
        description: '人类历史上最著名的探险家，1969年7月20日踏上月球时说："这是个人的一小步，却是人类的一大步。"性格内敛，刻意回避公众关注，用余生投身工程教育。其月面足迹至今仍保留在月球上，因月球没有风雨侵蚀。',
        relations: [
          { targetName: '约翰·肯尼迪', type: 'ally', label: '实现了总统的承诺' },
          { targetName: '尤里·加加林', type: 'rival', label: '太空竞赛终极胜利者' },
        ],
      },
      {
        name: '冯·布劳恩', role: 'NASA火箭科学家', period: '1912—1977',
        faction: '美国（NASA）',
        description: '德裔美国航天工程师，二战期间主持研发V-2导弹，战后被美国招募主持土星五号火箭研发。土星五号至今仍是人类历史上推力最大的火箭，将阿波罗飞船送往月球。其纳粹背景与伟大科学贡献之间的矛盾，是二战后科技伦理的著名争议案例。',
        relations: [
          { targetName: '尼尔·阿姆斯特朗', type: 'ally', label: '土星五号将宇航员送上月球' },
          { targetName: '约翰·肯尼迪', type: 'subordinate', label: '实现总统承诺的技术核心' },
        ],
      },
    ],
    analysis: '太空竞赛是冷战最壮观的副产品，也是人类文明史上最具激励性的技术成就之一。在意识形态博弈的外壳下，它驱动了人类在十余年内实现了此前数千年梦想——飞出地球、踏上另一个天体。阿波罗计划动员了超过40万名工程师和科学家，催生了集成电路、尼龙、特氟龙等改变日常生活的技术。"地出"照片——从月球轨道看到的地球全貌——深刻影响了人类的自我认知，成为现代环境运动的精神起点。然而冷战结束后，人类重返月球的动力消失，太空探索的雄心随之萎缩。登月后半个世纪，人类的太空探索局限于近地轨道，折射出没有竞争驱动、纯粹依靠人类好奇心和理想主义维持重大探索的巨大难度。',
    createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z', isAIGenerated: false,
  },

  // ── 古罗马·拜占庭 ──────────────────────────────────────────────

  {
    id: 'roman-004',
    title: '拜占庭帝国：东罗马的千年传承',
    titleEn: 'Byzantine Empire — The Eastern Roman Legacy',
    date: '330年',
    dateEnd: '1453年',
    description: '罗马帝国西部覆灭后，东部延续为拜占庭帝国，以君士坦丁堡为都，传承希腊语文化与基督教正教，历经一千一百余年，直至1453年奥斯曼帝国攻陷君士坦丁堡。拜占庭是古典文明的守护者，将希腊罗马的学术遗产保存至中世纪，并将东正教文明传播至斯拉夫世界。',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=80',
    references: ['爱德华·吉本《罗马帝国衰亡史》', '约翰·朱利叶斯·诺里奇《拜占庭史》', '普罗科庇厄斯《秘史》'],
    tags: ['拜占庭', '东罗马', '君士坦丁堡', '查士丁尼', '正教', '奥斯曼', '中世纪'],
    country: '罗马', countryCode: 'roman', category: 'world-history',
    timeline: [
      { year: '330年', event: '君士坦丁大帝迁都拜占庭，改名君士坦丁堡', significance: '东罗马中心确立' },
      { year: '395年', event: '罗马帝国永久分裂为东西两部', significance: '拜占庭独立发展' },
      { year: '476年', event: '西罗马帝国覆灭，拜占庭独自承载罗马遗产', significance: '东方成唯一传人' },
      { year: '527—565年', event: '查士丁尼大帝在位，编纂《罗马法大全》，短暂光复西部', significance: '帝国最后辉煌' },
      { year: '1054年', event: '东西教会大分裂，正教与天主教永久分离', significance: '基督教世界分裂' },
      { year: '1204年', event: '第四次十字军东征洗劫君士坦丁堡', significance: '帝国元气大伤' },
      { year: '1453年5月29日', event: '奥斯曼苏丹穆罕默德二世攻陷君士坦丁堡，拜占庭帝国灭亡', significance: '中世纪终结象征' },
    ],
    keyFigures: [
      {
        name: '查士丁尼一世', role: '拜占庭皇帝', period: '482—565',
        faction: '拜占庭帝国',
        description: '拜占庭最伟大的皇帝，主持编纂《查士丁尼法典》（即《罗马法大全》），奠定欧洲大陆法系基础。军事上收复北非、意大利与西班牙南部，短暂重现罗马帝国版图。与皇后狄奥多拉的伴侣关系是拜占庭宫廷史最传奇的故事之一。',
        relations: [
          { targetName: '狄奥多拉', type: 'family', label: '并肩治国的皇后' },
          { targetName: '贝利撒留', type: 'superior', label: '依靠名将收复西部' },
        ],
      },
      {
        name: '狄奥多拉', role: '拜占庭女皇', period: '500—548',
        faction: '拜占庭帝国',
        description: '出身卑微的马戏团女演员，嫁给查士丁尼后成为实际共治皇后。尼卡暴动中以"帝袍是最好的裹尸布"说服查士丁尼不逃跑，平息叛乱。推动了保护女性权利的立法，是古代世界最具权力的女性之一。',
        relations: [
          { targetName: '查士丁尼一世', type: 'family', label: '并肩共治' },
        ],
      },
      {
        name: '贝利撒留', role: '拜占庭名将', period: '500—565',
        faction: '拜占庭帝国',
        description: '查士丁尼最重要的军事将领，以极少兵力收复北非迦太基和意大利，是古代晚期最杰出的将帅之一。晚年遭查士丁尼猜忌，据传一度被剥夺财产沦为乞丐，其悲剧性命运成为历代文学与绘画的主题。',
        relations: [
          { targetName: '查士丁尼一世', type: 'subordinate', label: '功高遭忌' },
        ],
      },
      {
        name: '穆罕默德二世', role: '奥斯曼苏丹·征服者', period: '1432—1481',
        faction: '奥斯曼帝国',
        description: '21岁攻陷君士坦丁堡，终结拜占庭帝国千年历史，获称"征服者"。将君士坦丁堡改名伊斯坦布尔，使之成为奥斯曼帝国首都。攻城使用的巨型火炮"乌尔班炮"是当时世界上最大的火器，预示着城墙防御时代的终结。',
        relations: [
          { targetName: '查士丁尼一世', type: 'enemy', label: '终结其创立帝国' },
        ],
      },
    ],
    analysis: '拜占庭帝国是人类历史上持续时间最长的帝国之一，其一千一百年的历史跨越了从古代晚期到中世纪的整个过渡时代。它最重要的历史功能是充当古典文明的守护者：当西欧在蛮族入侵中沉入"黑暗时代"，拜占庭保存了希腊哲学、罗马法律和基督教神学的完整传统。1453年君士坦丁堡陷落后，大批拜占庭学者携带古典文献逃往意大利，直接催化了文艺复兴的到来。拜占庭还将东正教文明传播至俄罗斯、保加利亚、塞尔维亚等斯拉夫国家，"莫斯科是第三罗马"的观念正源于此。查士丁尼法典对欧洲法律的影响更是直接且持久——现代法国、德国、意大利的民法体系均以此为根源。拜占庭帝国的覆灭标志着中世纪的终结和近代世界的开端，是人类文明最重要的历史节点之一。',
    createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z', isAIGenerated: false,
  },

  // ── 英国（更早期）──────────────────────────────────────────────

  {
    id: 'uk-003',
    title: '罗马不列颠与诺曼征服',
    titleEn: 'Roman Britain & Norman Conquest',
    date: '43年',
    dateEnd: '1154年',
    description: '罗马人在公元43年征服不列颠，带来城市文明与基督教，统治长达四百年。罗马撤军后，盎格鲁-撒克逊人入主，随后维京人侵扰。1066年诺曼底公爵威廉渡海征服英格兰，将法语贵族文化与封建制度植入这片岛屿，奠定了英格兰国家的基本形态。',
    image: 'https://images.unsplash.com/photo-1520342868574-5fa3804e551c?w=800&q=80',
    references: ['比德《英吉利教会史》', '《盎格鲁-撒克逊编年史》', '大卫·道格拉斯《威廉征服者》'],
    tags: ['罗马不列颠', '盎格鲁撒克逊', '维京', '诺曼征服', '威廉一世', '黑斯廷斯', '封建制度'],
    country: '英国', countryCode: 'uk', category: 'world-history',
    timeline: [
      { year: '43年', event: '克劳狄乌斯皇帝派军征服不列颠', significance: '罗马文明进入不列颠' },
      { year: '122年', event: '哈德良长城建成，划定罗马北界', significance: '帝国边界象征' },
      { year: '410年', event: '罗马军队撤离不列颠', significance: '罗马统治终结' },
      { year: '449年', event: '盎格鲁-撒克逊人大规模入侵定居', significance: '英格兰族群基础奠定' },
      { year: '793年', event: '维京人袭击林迪斯法恩修道院', significance: '维京时代在英开始' },
      { year: '1016年', event: '丹麦王克努特成为英格兰国王', significance: '北海帝国短暂统一' },
      { year: '1066年10月14日', event: '黑斯廷斯战役，威廉击败哈罗德，诺曼征服完成', significance: '英格兰历史的分水岭' },
    ],
    keyFigures: [
      {
        name: '征服者威廉', role: '诺曼底公爵·英格兰国王', period: '1028—1087',
        faction: '诺曼王朝',
        description: '1066年以"合法继承人"名义渡海入侵英格兰，在黑斯廷斯战役击毙英王哈罗德，加冕为英格兰国王威廉一世。将诺曼法语贵族文化、封建体制与教皇权威引入英格兰，并主持编纂《末日审判书》，对全国土地与财富进行系统调查。其征服从根本上重塑了英格兰的社会结构与语言文化。',
        relations: [
          { targetName: '哈罗德二世', type: 'enemy', label: '黑斯廷斯决战' },
          { targetName: '阿尔弗雷德大王', type: 'colleague', label: '英格兰王权传承' },
        ],
      },
      {
        name: '哈罗德二世', role: '英格兰末代盎格鲁-撒克逊国王', period: '1022—1066',
        faction: '盎格鲁-撒克逊',
        description: '英格兰最后一位盎格鲁-撒克逊国王，在位仅九个月。先于约克击败挪威入侵，随即急行军南下迎战威廉，在黑斯廷斯战役中阵亡（据传被箭射中眼睛），成为盎格鲁-撒克逊时代终结的象征。',
        relations: [
          { targetName: '征服者威廉', type: 'enemy', label: '战死黑斯廷斯' },
        ],
      },
      {
        name: '阿尔弗雷德大王', role: '威塞克斯国王', period: '849—899',
        faction: '盎格鲁-撒克逊（威塞克斯）',
        description: '唯一被称为"大王"的英格兰君主，率领英格兰人抵御维京人入侵，创立海军、推广教育、统一英格兰南部各王国，是英格兰国家认同的早期奠基者。翻译拉丁文著作为古英语，被视为英语文学的先驱。',
        relations: [
          { targetName: '哈罗德二世', type: 'colleague', label: '盎格鲁-撒克逊传统' },
        ],
      },
    ],
    analysis: '诺曼征服是英国历史上最具决定性的单一事件。1066年以前的英格兰是盎格鲁-撒克逊文化主导的岛屿王国；1066年之后，法语成为宫廷与贵族语言，拉丁语是教会和行政语言，古英语退为底层语言。三种语言的融合经过数百年演变，最终产生了今天的英语——正是这种语言的混血性赋予了英语极其丰富的词汇量。诺曼人带来的封建制度与庄园经济重塑了英格兰的土地关系，威廉主持的《末日审判书》是欧洲中世纪最系统的行政调查文献。从长远看，诺曼征服使英格兰与欧洲大陆（尤其是法国）产生深度联结，此后数百年英法之间的复杂纠葛——包括百年战争——均根源于此。',
    createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z', isAIGenerated: false,
  },

  {
    id: 'uk-004',
    title: '大宪章、黑死病与玫瑰战争',
    titleEn: 'Magna Carta, Black Death & Wars of the Roses',
    date: '1215年',
    dateEnd: '1485年',
    description: '中世纪英格兰经历了三次深刻的历史震动：1215年贵族逼迫约翰王签署大宪章，奠定法律限制王权的先例；1348年黑死病席卷全岛，杀死近半数人口，从根本上改变了劳动关系与社会结构；1455—1485年约克与兰开斯特两大王族爆发玫瑰战争，最终以都铎王朝建立告终。',
    image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=800&q=80',
    references: ['W.L.沃伦《约翰王》', '约翰·凯利《黑死病》', '阿利森·韦尔《玫瑰战争》'],
    tags: ['大宪章', '约翰王', '黑死病', '玫瑰战争', '都铎王朝', '亨利五世', '百年战争'],
    country: '英国', countryCode: 'uk', category: 'world-history',
    timeline: [
      { year: '1215年', event: '约翰王在兰尼米德签署大宪章', significance: '法治限制王权先例' },
      { year: '1265年', event: '西蒙·德·蒙福特召集议会，下议院雏形', significance: '议会民主萌芽' },
      { year: '1337年', event: '英法百年战争爆发', significance: '中世纪最长战争' },
      { year: '1348年', event: '黑死病传入英格兰，人口骤减三分之一至一半', significance: '社会结构剧变' },
      { year: '1381年', event: '瓦特·泰勒领导农民起义', significance: '封建秩序动摇' },
      { year: '1415年', event: '阿金库尔战役，亨利五世大败法军', significance: '英格兰民族自豪' },
      { year: '1455—1485年', event: '玫瑰战争，约克与兰开斯特争夺王位', significance: '中世纪贵族秩序终结' },
      { year: '1485年', event: '博斯沃思战役，亨利七世建立都铎王朝', significance: '中世纪英格兰终结' },
    ],
    keyFigures: [
      {
        name: '约翰王', role: '英格兰国王', period: '1166—1216',
        faction: '金雀花王朝',
        description: '英格兰历史上最受指责的国王，失去诺曼底，被迫签署大宪章。在莎士比亚笔下是无能懦弱的君主，然而历史学家的重新评价认为他的施政并非一无是处。他在大宪章上的签字成为西方宪政史上最重要的文件签署，尽管他本人立即向教皇申请废除该文件。',
        relations: [
          { targetName: '亨利五世', type: 'colleague', label: '同属金雀花传统' },
          { targetName: '理查三世', type: 'colleague', label: '中世纪英格兰王权' },
        ],
      },
      {
        name: '亨利五世', role: '英格兰国王', period: '1386—1422',
        faction: '兰开斯特王朝',
        description: '英格兰最受崇敬的中世纪国王，阿金库尔战役以寡击众大败法国骑士，在莎士比亚的历史剧中被塑造为理想君主的化身。《特鲁瓦条约》使他成为法国王位继承人，距统一两国咫尺之遥，却于35岁英年早逝，此后英格兰逐渐失去在法国的全部领土。',
        relations: [
          { targetName: '约翰王', type: 'colleague', label: '金雀花传统' },
          { targetName: '理查三世', type: 'rival', label: '兰开斯特对约克' },
        ],
      },
      {
        name: '理查三世', role: '英格兰国王', period: '1452—1485',
        faction: '约克王朝',
        description: '英格兰历史上最具争议的国王，莎士比亚将其塑造为邪恶驼背的弑侄篡位者，然而现代史学已对此形象大幅修正。在博斯沃思战役阵亡，是英格兰最后一位战死沙场的国王。2012年其遗骸在莱斯特停车场下被发掘，引发全球关注。',
        relations: [
          { targetName: '亨利七世', type: 'enemy', label: '博斯沃思决战' },
          { targetName: '亨利五世', type: 'rival', label: '约克对兰开斯特' },
        ],
      },
      {
        name: '亨利七世', role: '都铎王朝开创者', period: '1457—1509',
        faction: '都铎王朝',
        description: '在博斯沃思击败理查三世，建立都铎王朝，终结玫瑰战争。以精明的财政政策充实国库，为儿子亨利八世的文艺复兴宫廷奠定物质基础。其统治标志着中世纪英格兰的终结与近代英国的开端，都铎王朝此后将主导英国的宗教改革与全球探索时代。',
        relations: [
          { targetName: '理查三世', type: 'enemy', label: '博斯沃思战役终结者' },
        ],
      },
    ],
    analysis: '大宪章签署于1215年，是西方宪政史最重要的文件之一，其核心原则——国王必须在法律之下统治，任何自由民未经正当法律程序不得被逮捕——成为英国法律传统乃至现代人权概念的基石。然而大宪章在当时更多是贵族对国王的权力制衡，而非普通民众的权利宣言，其历史意义是在后来数百年的援引与诠释中逐渐被放大的。黑死病是中世纪欧洲最重大的生态灾难，消灭了近三分之一至一半的欧洲人口，其影响远超政治：劳动力骤减使幸存农奴获得了议价能力，加速了封建农奴制的瓦解；对"死亡"的普遍恐惧深刻影响了中世纪晚期的艺术与宗教情感。玫瑰战争消耗了旧封建贵族阶层的大量人力与资源，客观上为都铎王朝建立强大中央集权创造了条件，为后来的英国文艺复兴与海洋扩张奠基。',
    createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z', isAIGenerated: false,
  },

  // ── 法国（更早期）──────────────────────────────────────────────

  {
    id: 'fr-003',
    title: '法兰克王国与查理曼帝国',
    titleEn: 'Frankish Kingdom & Carolingian Empire',
    date: '481年',
    dateEnd: '843年',
    description: '克洛维一世统一法兰克诸部，建立墨洛温王朝，受洗成为天主教徒，使法兰克人成为西欧天主教秩序的守护者。加洛林王朝查理曼大帝统一西欧大部，800年被教皇加冕为"罗马人的皇帝"，缔造西方中世纪文明的政治与宗教格局，法兰西、德意志与意大利三国的共同祖先。',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=800&q=80',
    references: ['艾因哈德《查理曼传》', '皮埃尔·里歇《加洛林文艺复兴》', '弗朗索瓦-路易·甘肖夫《封建制度》'],
    tags: ['查理曼', '法兰克', '加洛林', '墨洛温', '克洛维', '神圣罗马帝国前身', '中世纪欧洲'],
    country: '法国', countryCode: 'fr', category: 'world-history',
    timeline: [
      { year: '481年', event: '克洛维一世统一法兰克诸部，墨洛温王朝建立', significance: '法国雏形出现' },
      { year: '496年', event: '克洛维受洗，法兰克人成为天主教守护者', significance: '法国与天主教的深厚联结' },
      { year: '732年', event: '图尔战役，铁锤查理击退伊斯兰北上', significance: '西欧基督教文明保全' },
      { year: '768年', event: '查理曼即位，开始统一西欧', significance: '加洛林帝国形成' },
      { year: '800年', event: '教皇利奥三世在圣彼得大教堂为查理曼加冕', significance: '政教合一顶峰' },
      { year: '814年', event: '查理曼逝世，帝国开始分裂', significance: '欧洲三国雏形显现' },
      { year: '843年', event: '《凡尔登条约》，帝国三分，西法兰克即后来的法国', significance: '法德意三国分立' },
    ],
    keyFigures: [
      {
        name: '查理曼大帝', role: '法兰克国王·西罗马皇帝', period: '742—814',
        faction: '加洛林王朝',
        description: '中世纪西欧最伟大的君主，统一西欧大部分地区，推广基督教、拉丁文教育与统一货币。虽本人识字有限，却极力推动"加洛林文艺复兴"，在宫廷学校聚集学者，复兴古典教育。被法国、德国、意大利三国同时视为本国文化祖先，是"欧洲之父"。',
        relations: [
          { targetName: '克洛维一世', type: 'colleague', label: '加洛林继承墨洛温遗产' },
          { targetName: '教皇利奥三世', type: 'ally', label: '政教联盟' },
        ],
      },
      {
        name: '克洛维一世', role: '法兰克国王', period: '466—511',
        faction: '墨洛温王朝',
        description: '统一法兰克诸部的奠基者，496年受洗成为天主教徒——这一决定将法兰克王国与罗马教会紧密捆绑，使其成为西欧天主教世界的政治保护者。"法国长子教会"的称号正源于此，法国与天主教的千年深厚关系由他开创。',
        relations: [
          { targetName: '查理曼大帝', type: 'colleague', label: '墨洛温与加洛林的传承' },
        ],
      },
      {
        name: '教皇利奥三世', role: '罗马教皇', period: '750—816',
        faction: '罗马教廷',
        description: '800年圣诞节为查理曼加冕为"罗马人的皇帝"，此举意义深远——不仅复活了西罗马帝国的概念，更确立了教皇具有授予皇权的权威，为此后数百年教皇与皇帝之间的权力争夺埋下根源。加冕一幕成为西方中世纪政治史的关键转折点。',
        relations: [
          { targetName: '查理曼大帝', type: 'ally', label: '为其加冕' },
        ],
      },
    ],
    analysis: '查理曼帝国是现代西欧文明格局的直接起源。843年《凡尔登条约》的三分方案——西法兰克（法国）、东法兰克（德意志）、中法兰克（意大利北部+洛林）——奠定了欧洲主要国家的地理雏形，洛林地区此后千年始终是法德争夺的核心地带，直至20世纪两次世界大战。查理曼建立的政教合作体制深刻塑造了西欧中世纪的政治文化：皇帝需要教皇授权，教皇依靠皇帝武力保护，两者相互依存又相互制约，催生了中世纪特有的"神权政治"与"神圣罗马帝国"概念。加洛林文艺复兴虽规模有限，却在蛮族入侵的混乱中保存和传播了拉丁文古典文献，是衔接古典时代与12世纪文艺复兴的重要桥梁。',
    createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z', isAIGenerated: false,
  },

  {
    id: 'fr-004',
    title: '百年战争与圣女贞德',
    titleEn: 'Hundred Years\' War & Joan of Arc',
    date: '1337年',
    dateEnd: '1453年',
    description: '英法两国因王位继承与领土争端爆发长达百年的断续战争。战争后期，一位来自洛林农村的少女贞德声称受到神的指引，率军解奥尔良之围，扭转战局，推动法国王太子查理七世加冕。贞德最终被英军俘获处以火刑，却成为法国最重要的民族英雄与精神象征。',
    image: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&q=80',
    references: ['亨利·沃利斯《贞德传》', '菲利普·孔塔明《百年战争》', '贞德审判记录原始文献'],
    tags: ['百年战争', '贞德', '法国', '英格兰', '奥尔良', '民族主义', '黑王子'],
    country: '法国', countryCode: 'fr', category: 'world-history',
    timeline: [
      { year: '1337年', event: '爱德华三世宣称法国王位，战争爆发', significance: '英法百年冲突开始' },
      { year: '1346年', event: '克雷西战役，英格兰长弓手大败法国骑士', significance: '骑士时代式微' },
      { year: '1348年', event: '黑死病重创两国，战争暂停', significance: '疫病打断战争节奏' },
      { year: '1415年', event: '阿金库尔战役，亨利五世大胜', significance: '英国达到战争顶峰' },
      { year: '1429年', event: '贞德率军解奥尔良之围，查理七世加冕', significance: '战局逆转' },
      { year: '1431年', event: '贞德在鲁昂被以异端罪名处以火刑', significance: '民族英雄就义' },
      { year: '1453年', event: '卡斯蒂永战役，法国胜利，英国失去法国全部领土', significance: '百年战争终结' },
    ],
    keyFigures: [
      {
        name: '贞德', role: '法国民族英雄·军事领袖', period: '1412—1431',
        faction: '法兰西王国',
        description: '来自洛林东雷米村的农家少女，17岁声称听到圣米迦勒、圣凯瑟琳和圣玛格丽特的声音，指引她前往解救法国。率军解奥尔良之围后，护送查理七世前往兰斯加冕，从根本上扭转了百年战争的走向。被勃艮第人俘获后卖给英国人，以异端罪被烧死在鲁昂广场，年仅19岁。1920年被罗马天主教会封为圣人。',
        relations: [
          { targetName: '查理七世', type: 'subordinate', label: '推动国王加冕' },
          { targetName: '勃艮第公爵', type: 'enemy', label: '被出卖给英国人' },
        ],
      },
      {
        name: '查理七世', role: '法国国王', period: '1403—1461',
        faction: '法兰西王国',
        description: '百年战争中最终驱逐英国势力的法国国王，在贞德的协助下完成加冕，随后改革军制、建立常备军，最终赢得战争。历史上对他的评价颇为复杂：他在贞德被捕后未施援手，其沉默被视为对恩人的背弃。',
        relations: [
          { targetName: '贞德', type: 'superior', label: '受其帮助完成加冕' },
          { targetName: '亨利五世', type: 'enemy', label: '英法王位争夺' },
        ],
      },
      {
        name: '黑王子爱德华', role: '英格兰王子·军事统帅', period: '1330—1376',
        faction: '英格兰（金雀花）',
        description: '英格兰国王爱德华三世之子，百年战争中英格兰最著名的军事统帅，普瓦捷战役中俘虏法国国王约翰二世，战功彪炳，是中世纪骑士精神的最高代表之一。因病先于父亲去世，未能登上英格兰王位。',
        relations: [
          { targetName: '查理七世', type: 'enemy', label: '英法世仇' },
          { targetName: '贞德', type: 'enemy', label: '英国占领势力' },
        ],
      },
    ],
    analysis: '百年战争是法国民族意识形成的关键时期。战争初期，"法国"更多是一个地理概念而非政治认同；战争结束时，驱逐英国人的共同经历塑造了法国人的民族认同感，强化了对国王的效忠与对"法兰西"祖国的情感。贞德的历史意义远超军事贡献——她是第一位以"法兰西"为号召、以民族而非封建效忠为旗帜动员民众的历史人物，她的出现标志着中世纪封建忠诚向近代民族主义转变的临界点。贞德被烧死后二十五年，法国就赢得了战争，她没有活着看见胜利。然而在法国的集体记忆中，她的名字与法国精神永远联系在一起：大革命时期的爱国者援引她，拿破仑将她塑造为英雄，二战中的戴高乐自由法国以她为精神图腾，法国国庆日至今仍有纪念她的仪式。',
    createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z', isAIGenerated: false,
  },

  // ── 德国（更早期）──────────────────────────────────────────────

  {
    id: 'de-004',
    title: '神圣罗马帝国',
    titleEn: 'Holy Roman Empire',
    date: '962年',
    dateEnd: '1806年',
    description: '神圣罗马帝国历经八百四十四年，是中世纪欧洲最重要的政治实体，却因"既不神圣，也不罗马，更非帝国"（伏尔泰语）而充满矛盾。数百个大小诸侯、城邦、教会领地松散联合，皇帝由选帝侯选举产生，权力极其有限，造就了德意志地区独特的分裂政治格局，深刻影响德国直至19世纪统一。',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80',
    references: ['彼得·威尔逊《神圣罗马帝国》', '约翰·赫斯特《极简欧洲史》', '弗里德里希·席勒《三十年战争史》'],
    tags: ['神圣罗马帝国', '选帝侯', '三十年战争', '宗教改革', '哈布斯堡', '威斯特伐利亚和约', '封建主义'],
    country: '德国', countryCode: 'de', category: 'world-history',
    timeline: [
      { year: '962年', event: '奥托一世在罗马被教皇加冕，神圣罗马帝国建立', significance: '德意志民族的帝国' },
      { year: '1076年', event: '卡诺莎之行，皇帝亨利四世向教皇格里高利七世认罪', significance: '教权凌驾帝权' },
      { year: '1356年', event: '《金玺诏书》，确立七大选帝侯制度', significance: '选举制帝国固化' },
      { year: '1517年', event: '马丁·路德发表九十五条论纲，宗教改革爆发', significance: '帝国宗教分裂' },
      { year: '1618—1648年', event: '三十年战争，中欧人口减少三分之一', significance: '最惨烈的宗教战争' },
      { year: '1648年', event: '《威斯特伐利亚和约》，现代国家主权原则确立', significance: '近代国际秩序奠基' },
      { year: '1806年', event: '拿破仑压迫下，弗朗茨二世宣布解散帝国', significance: '神圣罗马帝国终结' },
    ],
    keyFigures: [
      {
        name: '奥托一世', role: '神圣罗马帝国第一位皇帝', period: '912—973',
        faction: '奥托王朝',
        description: '东法兰克王国国王，955年莱希费尔德战役击败匈牙利人入侵，稳定中欧局势，962年被教皇加冕为"罗马皇帝"，神圣罗马帝国由此奠基。奥托王朝推动了"奥托文艺复兴"，在德意志建立大主教区与修道院学校体系，是中世纪德意志文明的重要推手。',
        relations: [
          { targetName: '腓特烈二世', type: 'colleague', label: '帝国传承' },
          { targetName: '教皇格里高利七世', type: 'rival', label: '政教权力争夺序幕' },
        ],
      },
      {
        name: '腓特烈二世', role: '神圣罗马帝国皇帝', period: '1194—1250',
        faction: '霍亨斯陶芬王朝',
        description: '被同时代人称为"世界的奇迹"，精通六种语言，热爱科学、哲学与阿拉伯文化，在西西里宫廷汇聚基督教、伊斯兰、犹太学者。以外交谈判而非十字军战争夺回耶路撒冷，令教皇震怒。其超越时代的文化宽容被视为文艺复兴的早期预兆，也使他遭到保守势力的强烈反对。',
        relations: [
          { targetName: '奥托一世', type: 'colleague', label: '帝国传承' },
          { targetName: '马丁·路德', type: 'colleague', label: '质疑教会权威的先行精神' },
        ],
      },
      {
        name: '马丁·路德', role: '宗教改革者', period: '1483—1546',
        faction: '新教（路德宗）',
        description: '维滕贝格大学神学教授，1517年将《九十五条论纲》钉于教堂门口，挑战天主教会的赎罪券制度，引发宗教改革。将《圣经》译为德语，奠定现代德语标准语的基础，也赋予普通民众直接阅读圣经的权利。其改革撕裂了帝国的宗教统一，引发三十年战争，重塑了欧洲版图。',
        relations: [
          { targetName: '腓特烈二世', type: 'colleague', label: '质疑教会权威的精神传承' },
          { targetName: '查理五世', type: 'rival', label: '帝国皇帝试图压制改革' },
        ],
      },
      {
        name: '查理五世', role: '神圣罗马帝国皇帝', period: '1500—1558',
        faction: '哈布斯堡王朝',
        description: '同时统治西班牙、神圣罗马帝国、低地国家与美洲殖民地，是欧洲历史上控制版图最广的君主之一。面对路德宗教改革采取强硬立场，却因政治现实无力彻底镇压，最终退位出家，将帝国分给弟弟、西班牙分给儿子腓力二世。其退位是神圣罗马帝国走向衰落的象征。',
        relations: [
          { targetName: '马丁·路德', type: 'rival', label: '沃尔姆斯会议对抗' },
        ],
      },
    ],
    analysis: '神圣罗马帝国的独特性在于，它是一个高度分权的政治联合体，而非统一的中央集权国家。这一结构既造就了德意志文化的多元丰富——各邦争相成为文化艺术中心——又阻碍了德意志作为统一民族国家的形成，使德国统一比法国、英国晚了数百年。三十年战争（1618-1648）是欧洲历史上最惨烈的宗教战争，德意志地区部分地区人口减少超过三分之一，其惨烈程度直到第一次世界大战才被超越。战争的终止文件《威斯特伐利亚和约》确立了"主权国家"与"不干涉内政"原则，成为现代国际关系体系的奠基文件，其影响延续至今。神圣罗马帝国解散于1806年，但它所遗留的分权传统深刻影响了现代德国联邦制的形成。',
    createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z', isAIGenerated: false,
  },

  // ── 俄国（更早期）──────────────────────────────────────────────

  {
    id: 'ru-003',
    title: '基辅罗斯与蒙古铁蹄',
    titleEn: 'Kievan Rus\' & Mongol Invasion',
    date: '862年',
    dateEnd: '1480年',
    description: '瓦兰吉亚人留里克建立基辅罗斯，成为俄国、乌克兰、白俄罗斯的共同祖先。988年弗拉基米尔大公受洗东正教，将斯拉夫民族与拜占庭文明联结，奠定俄罗斯文化的精神基础。1240年蒙古旋风席卷，基辅被彻底摧毁，此后两百余年的蒙古统治深刻塑造了俄罗斯的政治文化与民族记忆。',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80',
    references: ['《往年纪事》', '格鲁塞《草原帝国》', '理查德·派普斯《俄国》'],
    tags: ['基辅罗斯', '蒙古入侵', '弗拉基米尔大公', '留里克', '东正教', '金帐汗国', '伊凡三世'],
    country: '俄国', countryCode: 'ru', category: 'world-history',
    timeline: [
      { year: '862年', event: '留里克被诺夫哥罗德人邀请统治，基辅罗斯雏形', significance: '俄国国家起源' },
      { year: '988年', event: '弗拉基米尔大公受洗，基辅罗斯皈依东正教', significance: '俄国文明方向确定' },
      { year: '1019—1054年', event: '雅罗斯拉夫大公执政，基辅罗斯黄金时代', significance: '政治文化顶峰' },
      { year: '1237—1240年', event: '拔都率蒙古军横扫基辅罗斯，基辅被焚毁', significance: '蒙古铁蹄到来' },
      { year: '1242年', event: '亚历山大·涅夫斯基冰上战役击败条顿骑士团', significance: '西方威胁抵御' },
      { year: '1380年', event: '库利科沃战役，莫斯科大公德米特里击败蒙古军', significance: '摆脱蒙古的转折点' },
      { year: '1480年', event: '乌格拉河对峙，蒙古撤退，俄国正式脱离金帐汗国控制', significance: '蒙古枷锁解除' },
    ],
    keyFigures: [
      {
        name: '弗拉基米尔大公', role: '基辅罗斯大公', period: '958—1015',
        faction: '基辅罗斯（留里克王朝）',
        description: '将东正教定为基辅罗斯国教的历史决定性人物。988年在赫尔松受洗，随后强制基辅居民接受洗礼，使东正教成为俄罗斯文明的精神基础，塑造了此后千年俄罗斯的文化认同。被东正教会封为圣徒，称"圣弗拉基米尔"。',
        relations: [
          { targetName: '雅罗斯拉夫大公', type: 'family', label: '父子' },
          { targetName: '亚历山大·涅夫斯基', type: 'colleague', label: '俄罗斯守护者精神传承' },
        ],
      },
      {
        name: '雅罗斯拉夫大公', role: '基辅罗斯大公', period: '978—1054',
        faction: '基辅罗斯（留里克王朝）',
        description: '基辅罗斯的全盛期缔造者，称"智者雅罗斯拉夫"。颁布《罗斯法典》（俄罗斯最早成文法），建造圣索菲亚大教堂，与欧洲各王室联姻确立国际地位。其死后基辅罗斯陷入诸子分封内战，王国逐渐走向分裂，最终无力抵御蒙古入侵。',
        relations: [
          { targetName: '弗拉基米尔大公', type: 'family', label: '父子传承' },
          { targetName: '亚历山大·涅夫斯基', type: 'colleague', label: '俄罗斯文明守护' },
        ],
      },
      {
        name: '亚历山大·涅夫斯基', role: '诺夫哥罗德大公', period: '1221—1263',
        faction: '诺夫哥罗德/弗拉基米尔公国',
        description: '蒙古统治时代最重要的俄罗斯领袖，以外交手段与蒙古周旋保全俄罗斯，同时在涅瓦河战役击败瑞典军队、冰上战役击败条顿骑士团，保卫了俄国西部领土。其"向东顺从、向西抵抗"的战略虽遭争议，却使俄国在蒙古统治下保存了民族的基本完整。20世纪被列为俄国最伟大历史人物之一。',
        relations: [
          { targetName: '弗拉基米尔大公', type: 'colleague', label: '东正教民族英雄精神传承' },
          { targetName: '伊凡三世', type: 'colleague', label: '抵御外敌守护俄罗斯' },
        ],
      },
      {
        name: '伊凡三世', role: '莫斯科大公·全俄罗斯大公', period: '1440—1505',
        faction: '莫斯科公国',
        description: '被称为"伟大的伊凡"，通过外交与战争统一了俄罗斯各公国，1480年终结蒙古金帐汗国对俄国的名义宗主权，娶拜占庭末代皇帝侄女索菲亚·帕列奥洛格，宣称莫斯科是"第三罗马"，为后来的沙皇俄国奠定基础。',
        relations: [
          { targetName: '亚历山大·涅夫斯基', type: 'colleague', label: '摆脱蒙古统治' },
        ],
      },
    ],
    analysis: '蒙古入侵对俄国历史的影响是深远而有争议的。一方面，蒙古统治（1240-1480年）打断了基辅罗斯已初步形成的与西欧接轨的发展轨迹——正当西欧出现大学、城市自治和议会体制时，俄罗斯深陷蒙古统治。另一方面，历史学家争论蒙古究竟带来了多少负面影响：部分学者认为俄国后来的专制传统、强调服从的政治文化，部分源自蒙古征服的历史创伤；另一些人则认为蒙古统治相对宽松（只要按时纳贡），俄国的专制传统有其内生根源。无论如何，基辅罗斯的覆灭与莫斯科的崛起代表了俄罗斯文明的重心转移——从相对开放、与欧洲联系密切的基辅，转向内陆封闭、以教会和沙皇权威为核心的莫斯科，这一转变对俄国此后数百年的历史走向影响深远。',
    createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z', isAIGenerated: false,
  },

  {
    id: 'ru-004',
    title: '彼得大帝与俄国西化改革',
    titleEn: 'Peter the Great & Westernization of Russia',
    date: '1682年',
    dateEnd: '1725年',
    description: '彼得一世以铁腕意志强行推动俄国西化，剪胡须、改服装、建海军、迁都圣彼得堡，将俄国从封建东方帝国改造为欧洲列强。大北方战争击败瑞典，为俄国打开通往波罗的海的出口，使俄国正式跻身欧洲大国舞台，其改革奠定了此后俄国帝国主义扩张的基础。',
    image: 'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=800&q=80',
    references: ['罗伯特·马西《彼得大帝》', '瓦连京·皮丘尔《彼得大帝》', '普希金《青铜骑士》'],
    tags: ['彼得大帝', '俄国西化', '圣彼得堡', '大北方战争', '沙皇俄国', '海军', '改革'],
    country: '俄国', countryCode: 'ru', category: 'world-history',
    timeline: [
      { year: '1682年', event: '彼得登基（与同父异母兄共同执政）', significance: '改革者出现' },
      { year: '1697—1698年', event: '大使团出访西欧，彼得化名木匠学习造船', significance: '西化决心确立' },
      { year: '1700年', event: '大北方战争爆发，与查理十二世争夺波罗的海', significance: '通向西方的战争' },
      { year: '1703年', event: '圣彼得堡破土建城，"欧洲的窗口"', significance: '迁都西化象征' },
      { year: '1709年', event: '波尔塔瓦战役，俄军大败瑞典查理十二世', significance: '北欧霸权确立' },
      { year: '1721年', event: '彼得宣布俄国为帝国，自称"皇帝"', significance: '俄国正式跻身欧洲大国' },
      { year: '1725年', event: '彼得大帝逝世，改革遗产与争议并存', significance: '西化时代的终与续' },
    ],
    keyFigures: [
      {
        name: '彼得一世（彼得大帝）', role: '俄罗斯皇帝', period: '1672—1725',
        faction: '罗曼诺夫王朝',
        description: '身高2.03米的俄国沙皇，亲赴西欧以平民身份学习造船技术，回国后以强制手段推行西化：强迫贵族剪去传统胡须（否则缴税），引进西式历法、服装与礼仪，创立元老院和行政体系，建立俄国第一支海军。以波尔塔瓦战役击败"北方雄狮"查理十二世，将俄国推上欧洲大国舞台。',
        relations: [
          { targetName: '叶卡捷琳娜一世', type: 'family', label: '皇后与继承人' },
          { targetName: '查理十二世', type: 'enemy', label: '波尔塔瓦宿敌' },
          { targetName: '亚历克谢皇子', type: 'family', label: '处死反对改革的儿子' },
        ],
      },
      {
        name: '查理十二世', role: '瑞典国王', period: '1682—1718',
        faction: '瑞典帝国',
        description: '17岁登基，天才军事统帅，纳尔瓦战役以8000人击败彼得4万大军，是欧洲最令人畏惧的军事人才。然而随后深入乌克兰的远征遭到彼得的坚壁清野战术拖垮，波尔塔瓦惨败后逃入奥斯曼帝国，最终在围攻挪威要塞时被射杀，结束了瑞典帝国的大国时代。',
        relations: [
          { targetName: '彼得一世（彼得大帝）', type: 'enemy', label: '北方战争宿敌' },
        ],
      },
      {
        name: '叶卡捷琳娜一世', role: '俄罗斯女皇', period: '1684—1727',
        faction: '罗曼诺夫王朝',
        description: '立陶宛出身的农家女，从军营随军情人成为彼得大帝的皇后，是俄国历史上出身最卑微的皇帝。彼得死后以女皇身份继位，开创了18世纪俄国由女性统治主导的传统（此后叶卡捷琳娜二世将这一传统推向顶峰）。',
        relations: [
          { targetName: '彼得一世（彼得大帝）', type: 'family', label: '皇后继位' },
        ],
      },
    ],
    analysis: '彼得大帝的西化改革是俄国历史上最重大的自上而下的革命，其方式与结果充满矛盾。他引进了西欧的技术、行政制度、世俗文化，使俄国在短期内成为欧洲列强，这是毋庸置疑的成就。然而他的改革手段本身是高度专制的——通过国家暴力强迫贵族阶层改变生活方式，以残酷手段（包括处死反对改革的儿子亚历克谢）镇压反对意见。更深刻的矛盾在于：彼得引进了西方的技术与外壳，却未能真正建立西方的自由与法治内核；他将西欧视为学习对象，却强化而非削弱了俄国的专制体制。这一模式——以专制手段推动现代化——成为俄国乃至许多后发国家现代化进程的反复主题。彼得改革留下的圣彼得堡至今仍是俄国最欧化的城市，而其推行西化与内陆斯拉夫文化之间的张力，在19世纪演化为"西方派"与"斯拉夫派"的激烈思想论争，成为俄国现代性困境的永恒主题。',
    createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z', isAIGenerated: false,
  },

  // ── 日本（更早期）──────────────────────────────────────────────

  {
    id: 'jp-002',
    title: '日本战国时代',
    titleEn: 'Sengoku Period — Age of Warring States',
    date: '1467年',
    dateEnd: '1615年',
    description: '应仁之乱拉开战国时代序幕，全国数百个大名争雄割据近一百五十年。织田信长以革命性军事变革横扫诸敌，豊臣秀吉完成统一，德川家康在关原之战后建立江户幕府，最终为武士道精神与日本文化烙下最深刻印记的战国时代画上句号。三英雄的故事是日本历史中流传最广的史诗。',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80',
    references: ['桑田忠亲《战国武将传》', '比斯利《日本史》', '史蒂芬·特恩布尔《武士》'],
    tags: ['战国时代', '织田信长', '丰臣秀吉', '德川家康', '关原之战', '武士', '大名'],
    country: '日本', countryCode: 'jp', category: 'world-history',
    timeline: [
      { year: '1467年', event: '应仁之乱爆发，足利幕府权威彻底崩溃', significance: '战国时代开始' },
      { year: '1543年', event: '葡萄牙人带来火枪，改变战争形态', significance: '西方武器传入' },
      { year: '1560年', event: '桶狭间之战，织田信长以奇袭击败今川义元', significance: '信长崛起' },
      { year: '1575年', event: '长篠之战，信长以火枪方阵击败骑兵', significance: '战术革命' },
      { year: '1582年', event: '本能寺之变，信长遭明智光秀背叛被杀', significance: '统一中断' },
      { year: '1590年', event: '秀吉完成全国统一', significance: '战国终结初步' },
      { year: '1600年', event: '关原之战，家康击败石田三成', significance: '天下归德川' },
      { year: '1615年', event: '大坂夏之阵，丰臣家灭亡，江户幕府确立', significance: '战国彻底终结' },
    ],
    keyFigures: [
      {
        name: '织田信长', role: '战国大名', period: '1534—1582',
        faction: '织田家',
        description: '战国时代最具革命性的人物，废除关所（关卡税），推行楽市楽座（自由市场），以火枪方阵终结了骑马武士的战场主导地位，开创近代战争形态。敢于挑战传统权威，烧毁延历寺（佛教圣地），以"天下布武"为志横扫诸敌，距统一只差一步，在本能寺之变中遭家臣背叛而死，将统一天下的任务留给秀吉。',
        relations: [
          { targetName: '丰臣秀吉', type: 'superior', label: '最重要的家臣与继承者' },
          { targetName: '德川家康', type: 'ally', label: '同盟关系' },
          { targetName: '明智光秀', type: 'rival', label: '本能寺之变被叛杀' },
        ],
      },
      {
        name: '丰臣秀吉', role: '关白·天下人', period: '1537—1598',
        faction: '丰臣家',
        description: '出身农民，以超凡的外交与军事才能从底层一路跃升为信长最重要的家臣，本能寺之变后迅速击败明智光秀为信长复仇，统一全国。以"太阁"之名发动朝鲜之役，两度出兵朝鲜均以失败告终。死前托孤德川家康，却预见家康终将取代丰臣家，果然一语成谶。',
        relations: [
          { targetName: '织田信长', type: 'subordinate', label: '由草鞋侍从到继承者' },
          { targetName: '德川家康', type: 'rival', label: '同盟但最终取代' },
          { targetName: '明智光秀', type: 'enemy', label: '为主公复仇击败' },
        ],
      },
      {
        name: '德川家康', role: '江户幕府初代将军', period: '1543—1616',
        faction: '德川家',
        description: '以"狸公"著称，以超人的耐心等待时机——历经信长、秀吉两代天下人，始终蛰伏积累实力。关原之战后掌握天下，建立江户幕府，推行严格的身份制度与锁国政策，带来日本两百六十年的和平稳定。"织田揉面、丰臣烤饼、德川享用"是对三英雄命运最著名的概括。',
        relations: [
          { targetName: '织田信长', type: 'ally', label: '同盟共存' },
          { targetName: '丰臣秀吉', type: 'rival', label: '最终取代丰臣家' },
          { targetName: '石田三成', type: 'enemy', label: '关原之战决战' },
        ],
      },
      {
        name: '明智光秀', role: '战国大名', period: '1528—1582',
        faction: '织田家（叛变）',
        description: '织田信长最倚重的家臣之一，以博学多才与精致的文人气质著称。1582年以"敌在本能寺"为号令发动叛变，围攻信长使其自尽，却在十三天后被秀吉击败杀死，史称"三日天下"。其叛变动机至今众说纷纭，成为日本历史最著名的未解之谜。',
        relations: [
          { targetName: '织田信长', type: 'subordinate', label: '叛变杀主' },
          { targetName: '丰臣秀吉', type: 'enemy', label: '被复仇击败' },
        ],
      },
    ],
    analysis: '战国时代是日本历史上最血腥也最富创造力的时代。近一百五十年的持续战乱不仅重塑了日本的政治格局，也深刻影响了日本文化的多个层面：武士道精神在战国时代的反复生死考验中被极度提炼和浪漫化；茶道、能剧、庭园艺术在战乱间歇中获得了战国大名的慷慨庇护；火枪传入后，日本在战争技术上迅速与欧洲接轨，展现了极强的学习能力。织田信长的历史意义不仅在军事：他废除关所、实行楽市楽座的经济政策，打破了封建经济对商业的束缚，是日本近代资本主义萌芽的重要推手。德川家康建立的江户体制以极度的社会管控换来了漫长的和平，但锁国政策也使日本在工业革命时代落后于世界，最终遭遇黑船叩关的历史困境，从而引发明治维新这场举国变法。',
    createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z', isAIGenerated: false,
  },

  {
    id: 'jp-003',
    title: '江户幕府与锁国时代',
    titleEn: 'Edo Shogunate & Sakoku Isolation',
    date: '1603年',
    dateEnd: '1868年',
    description: '德川家康建立的江户幕府统治日本长达二百六十五年，以严格的身份制度、锁国政策与朱子学意识形态维持高度稳定的封建秩序。这一漫长和平孕育了独特的江户文化——浮世绘、歌舞伎、俳句、净琉璃——成为日本传统文化最重要的形成时期，直至1853年美国黑船打破封闭。',
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80',
    references: ['康拉德·托特曼《江户时代》', '唐纳德·基恩《日本文学史》', '松尾芭蕉《奥之细道》'],
    tags: ['江户幕府', '锁国', '德川家康', '黑船来航', '浮世绘', '武士道', '参勤交代'],
    country: '日本', countryCode: 'jp', category: 'world-history',
    timeline: [
      { year: '1603年', event: '德川家康就任征夷大将军，江户幕府正式成立', significance: '江户时代开始' },
      { year: '1615年', event: '大坂夏之阵，丰臣家灭亡，德川统治无人挑战', significance: '权力彻底巩固' },
      { year: '1635年', event: '参勤交代制度确立，大名须在江户与领地间轮住', significance: '诸侯控制体系完成' },
      { year: '1639年', event: '锁国令颁布，仅对荷兰与中国开放长崎贸易', significance: '封闭体制建立' },
      { year: '1657年', event: '明历大火，江户大半焚毁后重建', significance: '城市规划里程碑' },
      { year: '1688—1704年', event: '元禄时代，町人文化与浮世绘繁荣', significance: '江户文化顶峰' },
      { year: '1853年', event: '美国准将佩里黑船来航，要求日本开国', significance: '锁国体制瓦解开始' },
    ],
    keyFigures: [
      {
        name: '德川家光', role: '江户幕府第三代将军', period: '1604—1651',
        faction: '德川幕府',
        description: '确立江户幕府体制的关键人物，完善参勤交代制度、颁布锁国令，建立起高度中央集权的幕藩体制。他的统治将松散的战国武将联盟转变为高度制度化的封建国家，此后德川统治的稳定性很大程度上归功于他奠定的制度框架。',
        relations: [
          { targetName: '德川家康', type: 'family', label: '祖父的事业完成者' },
          { targetName: '松尾芭蕉', type: 'colleague', label: '江户和平孕育文化' },
        ],
      },
      {
        name: '松尾芭蕉', role: '俳句诗人', period: '1644—1694',
        faction: '江户文化',
        description: '日本最伟大的俳句诗人，将俳句提升为独立的高雅文学形式，《奥之细道》是日本文学史的巅峰之作。以"閑さや岩にしみ入る蝉の声"（寂静渗入岩石，蝉声）等作品，以极简语言捕捉自然与人生的瞬间哲思，"物哀"与"侘寂"的美学精神通过他的作品深入日本文化基因。',
        relations: [
          { targetName: '德川家光', type: 'colleague', label: '和平时代孕育的文化成就' },
        ],
      },
      {
        name: '葛饰北斋', role: '浮世绘画家', period: '1760—1849',
        faction: '江户町人文化',
        description: '日本最著名的浮世绘大师，《神奈川冲浪里》是世界美术史最知名的图像之一。一生创作超过三万件作品，90岁高龄仍在创作，以"画狂人"自称。其作品在19世纪传入欧洲后引发"日本主义"热潮，深刻影响了莫奈、梵高等印象派画家。',
        relations: [
          { targetName: '松尾芭蕉', type: 'colleague', label: '江户文化双峰' },
        ],
      },
      {
        name: '马修·佩里', role: '美国海军准将', period: '1794—1858',
        faction: '美国',
        description: '1853年率四艘蒸汽战舰（"黑船"）驶入江户湾，以武力威胁要求日本开放通商口岸，打破了日本两百年的锁国格局。其来访直接引发日本国内政治危机，幕府权威动摇，最终催化明治维新的爆发。佩里在美国被视为开拓外交的英雄，在日本则是强迫性外交的象征。',
        relations: [
          { targetName: '德川家光', type: 'enemy', label: '终结锁国体制' },
        ],
      },
    ],
    analysis: '江户时代是日本历史上独一无二的时期：长达两个半世纪的和平，在几乎与外部世界完全隔绝的条件下，孕育出了高度发展的内生文化。浮世绘、歌舞伎、俳句、净琉璃、围棋、剑道……这些今日被视为"日本传统文化"精髓的事物，大多在江户时代定型。城市商人阶层（町人）的崛起带来了独特的平民文化，江户（今东京）成为世界上人口最密集的城市之一。然而锁国政策的代价在1853年黑船来航后彻底显现：当蒸汽铁甲战舰出现在江户湾，幕府面对着以大炮维护的不平等要求无力应对，两百年的封闭使日本在工业技术上落后了整整一个时代。江户时代的深刻矛盾——稳定与封闭、文化繁荣与技术停滞——为明治维新"文明开化"的迫切感提供了历史注脚，也使日本的现代化转型既彻底又痛苦。',
    createdAt: '2024-01-01T00:00:00Z', updatedAt: '2024-01-01T00:00:00Z', isAIGenerated: false,
  },
];

export function initArchives(): void {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_ARCHIVES));
    return;
  }
  try {
    const archives = JSON.parse(stored) as Archive[];
    const existingIds = new Set(archives.map(a => a.id));
    let changed = false;

    // Migrate existing seed archives: inject enriched keyFigures if missing
    const updated = archives.map(archive => {
      const seed = SEED_ARCHIVES.find(s => s.id === archive.id);
      if (!seed?.keyFigures) return archive;
      const needsMigration = archive.keyFigures?.some(f => !f.description);
      if (!needsMigration) return archive;
      changed = true;
      return { ...archive, keyFigures: seed.keyFigures };
    });

    // Add new seed archives not yet in localStorage
    for (const seed of SEED_ARCHIVES) {
      if (!existingIds.has(seed.id)) {
        updated.push(seed);
        changed = true;
      }
    }

    if (changed) localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch {}
}

export function getArchives(): Archive[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored) as Archive[];
  } catch {}
  initArchives();
  return SEED_ARCHIVES;
}

export function getArchiveById(id: string): Archive | undefined {
  return getArchives().find(a => a.id === id);
}

export function getArchivesByCountry(countryCode: string): Archive[] {
  return getArchives().filter(a => a.countryCode === countryCode);
}

export function saveArchive(archive: Archive): void {
  const archives = getArchives();
  const idx = archives.findIndex(a => a.id === archive.id);
  const now = new Date().toISOString();
  if (idx >= 0) {
    archives[idx] = { ...archive, updatedAt: now };
  } else {
    archives.push({ ...archive, createdAt: now, updatedAt: now });
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(archives));
}

export function deleteArchive(id: string): void {
  const archives = getArchives().filter(a => a.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(archives));
}

export function searchArchives(query: string, tags: string[], countryCode?: string): Archive[] {
  let archives = getArchives();
  if (countryCode) archives = archives.filter(a => a.countryCode === countryCode);
  const q = query.toLowerCase();
  if (q) {
    archives = archives.filter(
      a =>
        a.title.toLowerCase().includes(q) ||
        a.description.toLowerCase().includes(q) ||
        a.tags.some(t => t.toLowerCase().includes(q)) ||
        (a.titleEn || '').toLowerCase().includes(q)
    );
  }
  if (tags.length > 0) {
    archives = archives.filter(a => tags.every(t => a.tags.includes(t)));
  }
  return archives;
}

export function getAllTags(): string[] {
  const tagSet = new Set<string>();
  getArchives().forEach(a => a.tags.forEach(t => tagSet.add(t)));
  return Array.from(tagSet).sort();
}

export function getCountriesWithCounts(): Country[] {
  const archives = getArchives();
  return COUNTRIES.map(c => ({
    ...c,
    archiveCount: archives.filter(a => a.countryCode === c.code).length,
  }));
}

export function getSettings(): ArchiveSettings {
  try {
    const stored = localStorage.getItem(SETTINGS_KEY);
    if (stored) return JSON.parse(stored) as ArchiveSettings;
  } catch {}
  // Default settings with the provided API key
  const defaults: ArchiveSettings = {
    apiKey: '',
    apiEndpoint: 'https://dashscope.aliyuncs.com/compatible-mode/v1/chat/completions',
    apiModel: 'qwen-max',
  };
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(defaults));
  return defaults;
}

export function saveSettings(settings: ArchiveSettings): void {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}
