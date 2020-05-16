$(function () {
  // 當#myNavbar上的<a>連結按鈕click時, 讓整頁慢慢滑動到指定位置=============================
  $("#navbarr a").on("click", function (event) {
    // this.hash 是取得目前URL中的錨點位置,例如:#section1
    // 當 this.hash (錨點位置) 不是空的時, 也就是有指定滑動到錨點位置時
    if (this.hash !== "") {
      // 阻止<a>連結被click時執行連結工作 (雷同return false, 但return false通常寫在最後)
      event.preventDefault();
      // 設定 hash 變數, 記錄目前的錨點
      var hash = this.hash;
      // 控制 html,body 執行 animate 動畫, 讓捲出的距離 = 目前錨點位置的 offset().top 座標
      $("html, body")
        .stop()
        .animate({ scrollTop: $(hash).offset().top }, 800, function () {
          // 將錨點名稱加到URL網址列的後方
          window.location.hash = hash;
        });
    } // if end
  }); // click end
});
document.addEventListener(
  "wheel",
  () => {
    if (window.scrollY > 1) {
      document.querySelector(".navannn").classList.add("sticky-top");
    } else {
      document.querySelector(".navannn").classList.remove("sticky-top");
    }
  },
  { capture: false, passive: true }
);
window.onload = function () {
  new TypeIt("#titleetypeit", {
    strings: "KAOÜM",
    speed: 500,
    waitUntilVisible: true,
    loop: true,
  }).go();
};
