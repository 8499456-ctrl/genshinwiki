// i18n.js — Multi-language support (English / 中文)
// English is the default. Click "中文" in navbar to switch.
// Usage: Add data-i18n="key" to any element.

const i18nData = {
  'en': {
    // Nav
    'nav.home': 'Home',
    'nav.characters': 'Characters',
    'nav.elements': 'Elements',
    'nav.abyss': 'Abyss',
    'nav.weapons': 'Weapons',
    'nav.artifacts': 'Artifacts',
    'nav.materials': 'Materials',
    'nav.download': 'Download',
    'nav.codes': 'Codes',
    'nav.forum': 'Forum',
    'nav.login': 'Login',
    'nav.tierlist': 'Tier List',
    'nav.guides': 'Guides',
    'nav.bugs': 'Bugs',
    'nav.membership': 'Membership',
    
    // Language
    'lang.switch': '中文',
    
    // Home
    'home.title': 'The World of Teyvat',
    'home.subtitle': '— The Most Practical Genshin Guide Encyclopedia —',
    'home.desc': 'Character Reviews · Team Comps · Weapons & Artifacts · Material Farming · Live Codes',
    'home.cta.characters': '⚔️ Character Gallery',
    'home.cta.guides': '📖 Beginner\'s Guide',
    'home.elem.title': 'The Seven',
    'home.elem.inner': 'Elements',
    'home.elem.desc': 'Elemental reactions are the core of Genshin combat. Understand each element\'s power.',
    'home.features.title': 'Site ',
    'home.features.inner': 'Guide Categories',
    'home.features.desc': 'From starter tips to Abyss 36-stars — saving you time and frustration.',
    'home.card.chars': 'Character Gallery',
    'home.card.chars.desc': 'Full skill breakdowns, constellation recommendations, ascension materials, and endgame stat references.',
    'home.card.chars.tag': '90 Characters',
    'home.card.abyss': 'Abyss Comps',
    'home.card.abyss.desc': 'Monthly Spiral Abyss 36-star team recommendations, from budget to whale, floor by floor.',
    'home.card.weapons': 'Weapon Guide',
    'home.card.weapons.desc': 'Full weapon tier lists, BiS picks for each character (4-star and 5-star).',
    'home.card.artifacts': 'Artifacts',
    'home.card.artifacts.desc': 'Artifact set recommendations, main/sub stat priorities, and farming route planning.',
    'home.card.materials': 'Material Farming',
    'home.card.materials.desc': 'Optimal farming routes for character ascension, talent, and weapon materials.',
    'home.card.codes': 'Redeem Codes',
    'home.card.codes.desc': 'Live Primogems, Mora, Resin and other reward codes. Expired codes cleaned regularly.',
    'home.codes.title': '🎁 Live ',
    'home.codes.inner': 'Redeem Codes',
    'home.codes.desc': 'The latest Genshin reward codes — grab them before they expire!',
    'home.guides.title': 'Featured ',
    'home.guides.inner': 'Guides',
    'home.guides.desc': 'From beginner to advanced, all in one place.',
    'home.tools.title': 'Essential ',
    'home.tools.inner': 'Tools',
    'home.tools.desc': 'The pages people land on most often when they need a quick answer.',
    'home.tool.tier.title': 'Tier List',
    'home.tool.tier.desc': 'Fast meta snapshots for teams, element picks, and Abyss-ready characters.',
    'home.tool.tier.tag': 'Core Page',
    'home.tool.build.title': 'Build Planner',
    'home.tool.build.desc': 'Estimate resin, farming days, boss runs, talent books, Mora, EXP books, weapon materials, and artifact time for your next character.',
    'home.tool.primogem.title': 'Primogem Calculator',
    'home.tool.primogem.desc': 'Estimate wishes, pity progress, Welkin income, events, Abyss rewards, and how close you are to a banner guarantee.',
    'home.tool.artifact.title': 'Artifact Scorer',
    'home.tool.artifact.desc': 'Rate artifact substats for DPS, support, healer, Energy Recharge, and reaction builds before you keep or feed a piece.',
    'home.tool.damage.title': 'Damage Calculator',
    'home.tool.damage.desc': 'Estimate non-CRIT, CRIT, and average damage with attack, talent scaling, damage bonus, resistance, and reactions.',
    'home.tool.version70.title': 'Version 7.0 Tools',
    'home.tool.version70.desc': 'Plan pulls, damage, artifacts, resin, codes, and build priorities for the Version 7.0 update cycle.',
    'home.tool.resin.title': 'Resin Timer',
    'home.tool.resin.desc': 'Track Original Resin refill time, condensed resin, daily recovery, and farming sessions without opening a spreadsheet.',
    'home.tool.videos.title': 'Videos',
    'home.tool.videos.desc': 'Official trailers, character demos, and visual references worth revisiting.',
    'home.tool.new': 'New Tool',
    'home.tool.tool': 'Tool',
    'home.tool.media': 'Media',
    'home.guide.beginner.title': 'Beginner\'s Guide · Fast Track AR 1~45',
    'home.guide.beginner.desc': '15 things every new player must know — resin planning, character picks, resource pitfalls. Reach AR 45 in no time.',
    'home.guide.abyss.title': 'Spiral Abyss Floor 12 Full Stars Guide',
    'home.guide.abyss.desc': 'Latest Abyss buff breakdown, optimal team comps, enemy spawn patterns and grouping tips — get your 600 Primogems.',
    'home.guide.elements.title': 'Elemental Reactions — Complete Guide',
    'home.guide.elements.desc': 'Vaporize, Melt, Aggravate, Bloom... all reaction formulas, multipliers, and trigger order explained in one article.',
    'home.guide.boss.title': 'Weekly Boss / Boss Rush Guide',
    'home.guide.boss.desc': 'All weekly boss mechanics explained + speedclear comps. Clear all weekly bosses in 30 minutes.',
    'home.guide.buildorder.title': 'Character Build Order: What to Farm First',
    'home.guide.buildorder.desc': 'A practical resin priority for levels, weapons, talents, artifacts, and knowing when a build is finished.',
    'home.guide.arlecchino.title': 'Arlecchino Build Guide: Weapons, Artifacts & Teams',
    'home.guide.arlecchino.desc': 'A deeper character guide with weapon ranking, artifact explanations, F2P options, team comps, and FAQ.',
    'home.guide.furina.title': 'Furina Build Guide: Weapons, Artifacts, ER & Teams',
    'home.guide.furina.desc': 'A practical Furina guide covering Golden Troupe, Energy Recharge targets, healers, weapons, teams, and FAQ.',
    'home.guide.neuvillette.title': 'Neuvillette Build Guide: Weapons, Artifacts & Teams',
    'home.guide.neuvillette.desc': 'A focused guide for Marechaussee Hunter, HP vs Hydro stats, Furina teams, C1 value, weapons, and FAQ.',
    'home.guide.raiden.title': 'Raiden Shogun Build Guide: DPS, Hyperbloom & Teams',
    'home.guide.raiden.desc': 'Choose between Burst DPS and Hyperbloom builds, with weapons, Emblem artifacts, Energy Recharge, teams, and FAQ.',
    'home.guide.nahida.title': 'Nahida Build Guide: Best Weapons, Artifacts & Teams',
    'home.guide.nahida.desc': 'Deepwood Memories, Elemental Mastery targets, Hyperbloom, Nilou Bloom, Aggravate teams, and FAQ.',
    'home.guide.kazuha.title': 'Kaedehara Kazuha Build Guide: Best Weapons, Artifacts & Teams',
    'home.guide.kazuha.desc': 'Viridescent Venerer, EM and ER targets, Swirl setups, team buffs, F2P weapons, and FAQ.',
    'home.guide.yelan.title': 'Yelan Build Guide: Best Weapons, Artifacts & Teams',
    'home.guide.yelan.desc': 'Emblem artifacts, HP and ER planning, Hydro teams, Favonius builds, F2P options, and FAQ.',
    'home.guide.bennett.title': 'Bennett Build Guide: Best Weapons, Artifacts & Teams',
    'home.guide.bennett.desc': 'Noblesse support, Energy Recharge, Base ATK weapons, healing, team buffs, and FAQ.',
    'home.guide.zhongli.title': 'Zhongli Build Guide: Shield, Artifacts & Teams',
    'home.guide.zhongli.desc': 'HP shield support, Tenacity, Archaic Petra, weapon choices, team utility, and FAQ.',
    'home.guide.xingqiu.title': 'Xingqiu Build Guide: ER, Weapons, Artifacts & Teams',
    'home.guide.xingqiu.desc': 'Sacrificial Sword, Emblem sets, Energy Recharge targets, Hydro application, and FAQ.',
    'home.guide.xiangling.title': 'Xiangling Build Guide: Weapons, Artifacts & Teams',
    'home.guide.xiangling.desc': 'The Catch, Emblem, Energy Recharge, Vaporize teams, National core, and FAQ.',
    'home.guide.mavuika.title': 'Mavuika Build Guide: Weapons, Artifacts & Teams',
    'home.guide.mavuika.desc': 'Pyro carry planning, Nightsoul teams, artifact choices, F2P weapons, rotations, and FAQ.',
    'home.guide.skirk.title': 'Skirk Build Guide: Weapons, Artifacts & Teams',
    'home.guide.skirk.desc': 'Cryo on-field DPS setup, CRIT stats, Freeze teams, premium options, F2P choices, and FAQ.',
    'home.guide.xilonen.title': 'Xilonen Build Guide: Support, Artifacts & Teams',
    'home.guide.xilonen.desc': 'Geo support builds, Scroll set value, Energy Recharge, team buffs, weapon choices, and FAQ.',
    'home.guide.artifact.title': 'Artifact Farming: When to Farm and What to Keep',
    'home.guide.artifact.desc': 'Know when artifact domains are worth your resin, which main stats matter, and when to stop farming.',
    'home.guide.resinpriority.title': 'Daily Resin Priority: What to Farm Today',
    'home.guide.resinpriority.desc': 'A simple daily checklist for domains, bosses, Mora, EXP books, and artifacts.',
    'home.elem.anemo': 'Anemo',
    'home.elem.geo': 'Geo',
    'home.elem.electro': 'Electro',
    'home.elem.dendro': 'Dendro',
    'home.elem.hydro': 'Hydro',
    'home.elem.pyro': 'Pyro',
    'home.elem.cryo': 'Cryo',
    'home.card.live': 'Live',
    'home.sidebar.boosters': '⚡ Game Booster',
    'home.sidebar.boosters.desc': 'Download slow? Lag in co-op? Try a game accelerator.',
    'home.sidebar.boosters.cta': 'Learn more →',
    'home.footer.copyright': '© 2026 Genshin Guide · Not affiliated with HoYoverse',
    
    // General
    'general.search': 'Search...',
    
    // Characters page
    'chars.title': 'All Characters — 90 Builds & Tier List (v6.3)',
    'chars.subtitle': '90 characters · Build guides · Teams · Materials',
    'chars.filter.all': 'All',
    'chars.search.placeholder': 'Search character...',
    
    // Tierlist
    'tier.title': 'Character Tier List',
    'tier.subtitle': 'Based on current meta and community consensus (v6.3)',
    'tier.all': 'All Roles',
    'tier.dd': 'Main DPS',
    'tier.sub': 'Sub DPS',
    'tier.support': 'Support',
    
    // Materials calendar
    'mat.calendar.title': 'Materials Farming Calendar',
    'mat.calendar.subtitle': 'Check what talent books and weapon materials are available each day (v6.3)',
    'mat.domains': 'Domains rotate daily',
  },
  'zh': {
    // Nav
    'nav.home': '首页',
    'nav.characters': '角色',
    'nav.elements': '元素',
    'nav.abyss': '深渊',
    'nav.weapons': '武器',
    'nav.artifacts': '圣遗物',
    'nav.materials': '材料',
    'nav.download': '下载',
    'nav.codes': '兑换码',
    'nav.forum': '论坛',
    'nav.login': '登录',
    'nav.tierlist': 'Tier 榜',
    'nav.guides': '指南',
    'nav.bugs': '问题反馈',
    'nav.membership': '会员',
    
    // Language
    'lang.switch': 'English',
    
    // Home
    'home.title': '原神攻略指南 2026',
    'home.subtitle': '最佳配装 · 角色排名 · 深渊攻略',
    'home.desc': '角色评测 · 配队方案 · 武器圣遗物 · 材料刷取 · 兑换码',
    'home.cta.characters': '⚔️ 查看所有角色',
    'home.cta.guides': '📖 新手指南',
    'home.elem.title': '七种',
    'home.elem.inner': '元素',
    'home.elem.desc': '元素反应是原神战斗的核心机制。了解每种元素的力量。',
    'home.features.title': '网站',
    'home.features.inner': '功能分类',
    'home.features.desc': '从新手到深渊满星 — 帮你省时省力。',
    'home.card.chars': '角色图鉴',
    'home.card.chars.desc': '天赋分析、命座推荐、突破材料、毕业面板参考。',
    'home.card.chars.tag': '90 位角色',
    'home.card.abyss': '深渊阵容',
    'home.card.abyss.desc': '每月深渊满星推荐阵容，从平民到氪佬，逐层解析。',
    'home.card.weapons': '武器指南',
    'home.card.weapons.desc': '全武器 T 度排名、各角色最佳武器推荐（4星和5星）。',
    'home.card.artifacts': '圣遗物',
    'home.card.artifacts.desc': '圣遗物套装推荐、主副词条优先级、刷取路线规划。',
    'home.card.materials': '材料刷取',
    'home.card.materials.desc': '角色突破、天赋、武器突破材料的最优刷取路线。',
    'home.card.codes': '兑换码',
    'home.card.codes.desc': '最新的原石、摩拉、树脂等奖励兑换码，过期码定期清理。',
    'home.codes.title': '🎁 实时',
    'home.codes.inner': '兑换码',
    'home.codes.desc': '最新原神兑换码 — 过期不候！',
    'home.guides.title': '精选',
    'home.guides.inner': '攻略',
    'home.guides.desc': '从新手入门到高阶进阶，一站式搞定。',
    'home.tools.title': '必备',
    'home.tools.inner': '工具',
    'home.tools.desc': '玩家需要快速答案时最常用的页面。',
    'home.tool.tier.title': '角色强度榜',
    'home.tool.tier.desc': '快速查看队伍、元素选择和深渊可用角色的版本参考。',
    'home.tool.tier.tag': '核心页面',
    'home.tool.build.title': '养成规划工具',
    'home.tool.build.desc': '估算下一个角色需要的树脂、刷取天数、Boss 次数、天赋书、摩拉、经验书、武器材料和圣遗物时间。',
    'home.tool.primogem.title': '原石计算器',
    'home.tool.primogem.desc': '估算抽数、垫数、月卡收益、活动、深渊奖励，以及距离卡池保底还差多少。',
    'home.tool.artifact.title': '圣遗物评分器',
    'home.tool.artifact.desc': '按输出、辅助、治疗、充能和反应玩法评分副词条，判断圣遗物该保留还是当狗粮。',
    'home.tool.damage.title': '伤害估算器',
    'home.tool.damage.desc': '用攻击、倍率、增伤、抗性和反应估算非暴击、暴击与平均伤害。',
    'home.tool.version70.title': '7.0 版本工具',
    'home.tool.version70.desc': '为 7.0 版本规划抽卡、伤害、圣遗物、树脂、兑换码和养成优先级。',
    'home.tool.resin.title': '树脂计时器',
    'home.tool.resin.desc': '追踪原粹树脂恢复时间、浓缩树脂、每日恢复和刷本安排，不用再开表格。',
    'home.tool.videos.title': '视频',
    'home.tool.videos.desc': '官方预告、角色演示和适合回看的视觉资料。',
    'home.tool.new': '新工具',
    'home.tool.tool': '工具',
    'home.tool.media': '媒体',
    'home.guide.beginner.title': '新手指南 · 快速到达 AR 45',
    'home.guide.beginner.desc': '15 个新手必知 — 树脂规划、角色选择、资源陷阱。轻松到 AR 45。',
    'home.guide.abyss.title': '深渊第 12 层满星攻略',
    'home.guide.abyss.desc': '最新深渊增益解析、最优配队、怪物刷新规律和聚怪技巧 — 拿满 600 原石。',
    'home.guide.elements.title': '元素反应完整指南',
    'home.guide.elements.desc': '蒸发、融化、激化、绽放... 所有反应公式、倍率和触发机制一文说清。',
    'home.guide.boss.title': '周常 Boss 速刷指南',
    'home.guide.boss.desc': '所有周本 Boss 机制详解 + 速通阵容。30 分钟内清完所有周本。',
    'home.guide.buildorder.title': '角色养成顺序：优先刷什么',
    'home.guide.buildorder.desc': '按树脂优先级安排等级、武器、天赋和圣遗物，并判断一个角色什么时候算养成完成。',
    'home.guide.arlecchino.title': '阿蕾奇诺配装指南：武器、圣遗物与队伍',
    'home.guide.arlecchino.desc': '更深入的角色攻略，包含武器排名、圣遗物解释、平民选择、配队和常见问题。',
    'home.guide.furina.title': '芙宁娜配装指南：武器、圣遗物、充能与队伍',
    'home.guide.furina.desc': '覆盖黄金剧团、充能目标、治疗位、武器、队伍和常见问题的实用芙宁娜攻略。',
    'home.guide.neuvillette.title': '那维莱特配装指南：武器、圣遗物与队伍',
    'home.guide.neuvillette.desc': '聚焦逐影猎人、生命与水伤选择、芙宁娜队伍、1 命价值、武器和常见问题。',
    'home.guide.raiden.title': '雷电将军配装指南：输出、超绽放与队伍',
    'home.guide.raiden.desc': '帮你选择大招输出或超绽放玩法，包含武器、绝缘套、充能、队伍和常见问题。',
    'home.guide.nahida.title': '纳西妲配装指南：武器、圣遗物与队伍',
    'home.guide.nahida.desc': '覆盖草套、精通目标、超绽放、妮露绽放、激化队伍和常见问题。',
    'home.guide.kazuha.title': '枫原万叶配装指南：武器、圣遗物与队伍',
    'home.guide.kazuha.desc': '覆盖风套、精通和充能目标、扩散玩法、队伍增伤、平民武器和常见问题。',
    'home.guide.yelan.title': '夜兰配装指南：武器、圣遗物与队伍',
    'home.guide.yelan.desc': '覆盖绝缘套、生命和充能规划、水后台队伍、西风弓玩法、平民选择和常见问题。',
    'home.guide.bennett.title': '班尼特配装指南：武器、圣遗物与队伍',
    'home.guide.bennett.desc': '覆盖宗室辅助、充能、高白值武器、治疗、队伍增益和常见问题。',
    'home.guide.zhongli.title': '钟离配装指南：护盾、圣遗物与队伍',
    'home.guide.zhongli.desc': '覆盖生命护盾辅助、千岩、磐岩、武器选择、队伍功能和常见问题。',
    'home.guide.xingqiu.title': '行秋配装指南：充能、武器、圣遗物与队伍',
    'home.guide.xingqiu.desc': '覆盖祭礼剑、绝缘套、充能目标、水后台挂水和常见问题。',
    'home.guide.xiangling.title': '香菱配装指南：武器、圣遗物与队伍',
    'home.guide.xiangling.desc': '覆盖渔获、绝缘套、充能目标、蒸发队、国家队核心和常见问题。',
    'home.guide.mavuika.title': '玛薇卡配装指南：武器、圣遗物与队伍',
    'home.guide.mavuika.desc': '覆盖火系主C规划、夜魂队伍、圣遗物选择、平民武器、循环和常见问题。',
    'home.guide.skirk.title': '丝柯克配装指南：武器、圣遗物与队伍',
    'home.guide.skirk.desc': '覆盖冰系站场输出、双暴词条、冻结队、高配选择、平民方案和常见问题。',
    'home.guide.xilonen.title': '希诺宁配装指南：辅助、圣遗物与队伍',
    'home.guide.xilonen.desc': '覆盖岩系辅助、烬城套价值、充能、队伍增益、武器选择和常见问题。',
    'home.guide.artifact.title': '圣遗物刷取：什么时候刷、什么值得留',
    'home.guide.artifact.desc': '判断圣遗物本什么时候值得投入树脂，哪些主词条重要，以及什么时候该停手。',
    'home.guide.resinpriority.title': '每日树脂优先级：今天该刷什么',
    'home.guide.resinpriority.desc': '用于安排秘境、Boss、摩拉、经验书和圣遗物的简单每日清单。',
    'home.elem.anemo': '风',
    'home.elem.geo': '岩',
    'home.elem.electro': '雷',
    'home.elem.dendro': '草',
    'home.elem.hydro': '水',
    'home.elem.pyro': '火',
    'home.elem.cryo': '冰',
    'home.card.live': '最新',
    'home.sidebar.boosters': '🚀 游戏加速器',
    'home.sidebar.boosters.desc': '海外玩家专用，延迟从 200ms 降至 30ms',
    'home.sidebar.boosters.cta': '了解详情 →',
    'home.footer.copyright': '© 2026 Genshin Guide · 与 HoYoverse 无关',
    
    // General
    'general.search': '搜索...',
    
    // Characters page
    'chars.title': '全部角色 — 90位配装 & Tier 榜 (v6.3)',
    'chars.subtitle': '90位角色 · 配装指南 · 队伍推荐 · 养成材料',
    'chars.filter.all': '全部',
    'chars.search.placeholder': '搜索角色名...',
    
    // Tierlist
    'tier.title': '角色强度排行榜',
    'tier.subtitle': '基于当前版本元数据和社区共识',
    'tier.all': '全部定位',
    'tier.dd': '主C',
    'tier.sub': '副C',
    'tier.support': '辅助',
    
    // Materials calendar
    'mat.calendar.title': '材料刷取日历',
    'mat.calendar.subtitle': '查看每天可以刷的天赋书和武器材料',
    'mat.domains': '秘境每日轮换',
  }
};

// Store original text for each data-i18n element so we can restore English
let originalTexts = {};

function detectLang() {
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get('lang');
  if (urlLang === 'zh') return 'zh';
  return 'en';
}

let currentLang = detectLang();

function applyTranslations(lang) {
  currentLang = lang;
  const data = i18nData[lang] || {};
  
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  
  // Save originals on first run only
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = data[key];
    if (text === undefined) return;
    
    const children = el.children;
    if (children.length > 0) {
      // Element has child tags (like <span> in titles)
      // Only replace the first text node (before any children)
      for (let child of el.childNodes) {
        if (child.nodeType === Node.TEXT_NODE && child.textContent.trim()) {
          child.textContent = text;
          break;
        }
      }
    } else {
      el.textContent = text;
    }
  });
  
  // data-i18n-inner (for <span> in titles)
  document.querySelectorAll('[data-i18n-inner]').forEach(el => {
    const key = el.getAttribute('data-i18n-inner');
    if (data[key]) el.textContent = data[key];
  });
  
  // data-i18n-prefix (for h2/h3 that have child <span>, only replaces first text node)
  document.querySelectorAll('[data-i18n-prefix]').forEach(el => {
    const key = el.getAttribute('data-i18n-prefix');
    const text = data[key];
    if (text === undefined) return;
    for (let child of el.childNodes) {
      if (child.nodeType === Node.TEXT_NODE && child.textContent.trim()) {
        child.textContent = text;
        break;
      }
    }
  });
  
  // Placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (data[key]) el.placeholder = data[key];
  });
  
  // Titles
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    if (data[key]) el.title = data[key];
  });
  
  // Update switcher text (in nav bar)
  const switchers = document.querySelectorAll('.lang-switcher');
  switchers.forEach(btn => {
    const key = btn.getAttribute('data-i18n-switch') || 'lang.switch';
    if (data[key]) btn.textContent = data[key];
  });
  
  // Dispatch event
  document.dispatchEvent(new CustomEvent('langChanged', { detail: { lang } }));
  
  // Update URL
  const url = new URL(window.location);
  if (lang === 'en') url.searchParams.delete('lang');
  else url.searchParams.set('lang', lang);
  window.history.replaceState({}, '', url);
}

function toggleLang(e) {
  if (e) e.preventDefault();
  const newLang = currentLang === 'zh' ? 'en' : 'zh';
  applyTranslations(newLang);
}

// Init
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => applyTranslations(currentLang));
} else {
  applyTranslations(currentLang);
}
