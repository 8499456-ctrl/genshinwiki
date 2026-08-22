(function(){
  var zh={
    'Build Planner':'养成规划','Damage Calculator':'伤害计算器','Artifact Scorer':'圣遗物评分','Primogem Calculator':'原石计算器','Version 7.0 Tools':'7.0 版本工具','Weapons':'武器','Artifacts':'圣遗物','Elements':'元素','Abyss':'深境螺旋','Resin Timer':'树脂计时器','Characters':'角色','Materials':'材料','Home':'首页','Search':'搜索','Filter':'筛选','Reset':'重置','Calculate':'计算','Save':'保存','Load':'加载','Clear':'清除','Select':'选择','Level':'等级','Results':'结果','Talent':'天赋','Weapon':'武器','Artifact':'圣遗物','Main Stats':'主词条','Sub Stats':'副词条','Best Builds':'最佳配装','Genshin Build Planner':'原神养成规划','Build Goal':'养成目标','Genshin Damage Calculator':'原神伤害计算器','Damage Inputs':'伤害输入','Breakdown':'伤害拆解','Average Damage':'平均伤害','Genshin Artifact Scorer':'原神圣遗物评分','Artifact Details':'圣遗物详情','Score Breakdown':'评分明细','Next Steps':'下一步','Weapon Guide':'武器指南','Elemental Reactions':'元素反应','Genshin Impact Resin Timer':'原神树脂计时器','Spent Resin Activities':'树脂消耗活动','Genshin 7.0 Tools':'原神 7.0 工具','Pick the Tool You Need':'选择需要的工具','Update Checklist':'版本更新清单','Enter substats':'输入副词条','Best Weapons':'最佳武器','Best Artifacts':'最佳圣遗物','Talent Priority':'天赋优先级','Constellations':'命之座','Strengths':'优势','Weaknesses':'劣势','Ascension':'突破材料','Talent Mat.':'天赋材料','Teams':'队伍','Main Stats':'主词条','Back':'返回','Not found':'未找到','Anemo':'风元素','Geo':'岩元素','Electro':'雷元素','Dendro':'草元素','Hydro':'水元素','Pyro':'火元素','Cryo':'冰元素','Support':'辅助','Main DPS':'主输出','Sub-DPS':'副输出','Healer':'治疗','Characters':'角色'
    'Genshin Impact Talent Books':'原神天赋书','Talent book farming schedule, character costs, and upgrade priorities.':'天赋书刷取时间、角色消耗和升级优先级。','Talent book schedule':'天赋书刷取时间表','Talent upgrade cost':'天赋升级成本','Recommended priority':'推荐优先级','Character role':'角色定位','Farm first':'优先刷取','Five material groups':'五类突破材料','A level 1 to 90 checklist for every Genshin Impact character.':'适用于所有原神角色的 1 到 90 级材料清单。','Efficient farming order':'高效刷取顺序','Level 80 or level 90?':'升到 80 级还是 90 级？','Elemental gemstones':'元素宝石','Local specialty':'地方特产','Normal enemy drops':'普通敌人掉落','Boss material':'Boss 材料','All talent book domains are open.':'所有天赋书秘境均开放。','Farm the boss first while collecting gemstones.':'优先刷 Boss，同时收集元素宝石。','Gather the local specialty across two or three reset cycles.':'利用两到三个刷新周期收集地方特产。','Use the Adventurer Handbook to route enemy drops.':'使用冒险之证规划敌人掉落路线。','Reserve Mora and Hero\'s Wit for the final leveling session.':'最后集中准备摩拉和大英雄的经验。','Level 80/90 is usually enough for supports. Level 90 has the highest value for transformative reaction users, HP or DEF scalers, and on-field carries.':'辅助通常升到 80/90 即可；剧变反应角色、生命或防御倍率角色以及站场主C更适合升到 90 级。'
  };
  function translate(){
    if(new URLSearchParams(location.search).get('lang')!=='zh')return;
    document.documentElement.lang='zh-CN';
    var w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT),n;
    var keys=Object.keys(zh).sort(function(a,b){return b.length-a.length;});
    while(n=w.nextNode()){var value=n.nodeValue;keys.forEach(function(key){if(value.indexOf(key)>=0)value=value.split(key).join(zh[key]);});n.nodeValue=value;}
    document.querySelectorAll('input[placeholder]').forEach(function(el){if(zh[el.placeholder])el.placeholder=zh[el.placeholder];});
  }
  function addSwitcher(){
    if(document.querySelector('[data-tool-lang]')) return;
    var zh=new URL(location.href); zh.searchParams.set('lang','zh');
    var en=new URL(location.href); en.searchParams.delete('lang');
    var b=document.createElement('a'); b.setAttribute('data-tool-lang','1');
    var isZh=new URLSearchParams(location.search).get('lang')==='zh';
    b.href=isZh?en.href:zh.href; b.textContent=isZh?'English':'中文';
    b.style='position:fixed;right:14px;top:10px;z-index:99999;color:#d4a84b;font-size:13px;background:#161b22;border:1px solid #d4a84b;border-radius:14px;padding:4px 10px;text-decoration:none';
    document.body.appendChild(b);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',function(){translate();addSwitcher();});else {translate();addSwitcher();}
})();
