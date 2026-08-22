(function(){
  var zh={
    'Build Planner':'养成规划','Damage Calculator':'伤害计算器','Artifact Scorer':'圣遗物评分','Primogem Calculator':'原石计算器','Version 7.0 Tools':'7.0 版本工具','Weapons':'武器','Artifacts':'圣遗物','Elements':'元素','Abyss':'深境螺旋','Resin Timer':'树脂计时器','Characters':'角色','Materials':'材料','Home':'首页','Search':'搜索','Filter':'筛选','Reset':'重置','Calculate':'计算','Save':'保存','Load':'加载','Clear':'清除','All':'全部','Select':'选择','Level':'等级','Results':'结果','Talent':'天赋','Weapon':'武器','Artifact':'圣遗物','Team':'队伍','Main Stats':'主词条','Sub Stats':'副词条','Best Builds':'最佳配装','Genshin Build Planner':'原神养成规划','Build Goal':'养成目标','Genshin Damage Calculator':'原神伤害计算器','Damage Inputs':'伤害输入','Breakdown':'伤害拆解','Average Damage':'平均伤害','Genshin Artifact Scorer':'原神圣遗物评分','Artifact Details':'圣遗物详情','Score Breakdown':'评分明细','Next Steps':'下一步','Weapon Guide':'武器指南','Elemental Reactions':'元素反应','Genshin Impact Resin Timer':'原神树脂计时器','Spent Resin Activities':'树脂消耗活动','Genshin 7.0 Tools':'原神 7.0 工具','Pick the Tool You Need':'选择需要的工具','Update Checklist':'版本更新清单','Enter substats':'输入副词条','Best Weapons':'最佳武器','Best Artifacts':'最佳圣遗物','Talent Priority':'天赋优先级','Constellations':'命之座','Strengths':'优势','Weaknesses':'劣势','Ascension':'突破材料','Talent Mat.':'天赋材料','Teams':'队伍','Main Stats':'主词条','Back':'返回','Not found':'未找到'
  };
  function translate(){
    if(new URLSearchParams(location.search).get('lang')!=='zh')return;
    document.documentElement.lang='zh-CN';
    var w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT),n;
    while(n=w.nextNode()){var t=n.nodeValue.trim();if(zh[t])n.nodeValue=n.nodeValue.replace(t,zh[t]);}
    document.querySelectorAll('input[placeholder]').forEach(function(el){if(zh[el.placeholder])el.placeholder=zh[el.placeholder];});
    var b=document.createElement('a');b.href=location.pathname;b.textContent='English';b.style='position:fixed;right:14px;top:10px;z-index:99999;color:#d4a84b;font-size:13px';document.body.appendChild(b);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',translate);else translate();
})();
