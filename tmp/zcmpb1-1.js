!function(){var e=window.location.href.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/)[5].replace(/^\//,"");e=e.replace(/\//g,"_"),window._trackURL="{'cate':'', 'area':'','pagetype':'special','pageState':'','page':'"+e+"'}";var t=document.createElement("script");t.src="//tracklog.58.com/referrer_m.js",t.onload=function(t){document.addEventListener("click",function(t){var r=t.target;try{var a=r.attributes["m-key"].value}catch(t){return}a&&c(e+"_"+a)});function c(e){console.log(e);try{window.clickLog("from="+e)}catch(e){console.error(e)}}c(e+"_pv")},document.body.appendChild(t)}();