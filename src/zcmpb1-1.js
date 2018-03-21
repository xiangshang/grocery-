(function () {
  var path = window.location.href.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/)[5];
  var m = path.replace(/^\//, '');
  // m是最后埋点的名字 
  m = m.replace(/\//g, '_');

  window._trackURL = "{'cate':'', 'area':'','pagetype':'special','pageState':'','page':'" + m + "'}";
  var script = document.createElement('script');
  script.src = "//tracklog.58.com/referrer_m.js";
  script.onload = function (state) {
    var m_counter = 1;
    document.addEventListener('click', function (e) {
      var target = e.target;
      // 埋点数据
      try{
        var mkey = target.attributes["m-key"].value;
      }catch(e){
        return;
      }

      if (!mkey) {
        return;
      }
      clickc(m + "_" + mkey);
    });

    function clickc(m) {
      console.log(m);
      try { window.clickLog("from=" + m); } catch (ex) { console.error(ex); }
    }
    clickc(m + "_pv");
  };
  document.body.appendChild(script);
})();