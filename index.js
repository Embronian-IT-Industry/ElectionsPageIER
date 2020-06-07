$(document).ready(function () {
  $("a[href*='#header']").click(function (event) {
    event.preventDefault();
    $("html, body")
      .stop()
      .animate({ scrollTop: $("#wb_header").offset().top }, 600, "easeOutCirc");
  });
  $(document).on("click", ".Menu_vibors-navbar-collapse.in", function (e) {
    if ($(e.target).is("a") && $(e.target).attr("class") != "dropdown-toggle") {
      $(this).collapse("hide");
    }
  });
  $("a[href*='#home']").click(function (event) {
    event.preventDefault();
    $("html, body")
      .stop()
      .animate(
        { scrollTop: $("#wb_home").offset().top - 88 },
        600,
        "easeOutCirc"
      );
  });
  $("a[href*='#FAQ']").click(function (event) {
    event.preventDefault();
    $("html, body")
      .stop()
      .animate(
        { scrollTop: $("#wb_FAQ").offset().top - 88 },
        600,
        "easeOutCirc"
      );
  });
  $("a[href*='#features']").click(function (event) {
    event.preventDefault();
    $("html, body")
      .stop()
      .animate(
        { scrollTop: $("#wb_features").offset().top - 88 },
        600,
        "easeOutCirc"
      );
  });
  $("a[href*='#actyal_banner']").click(function (event) {
    event.preventDefault();
    $("html, body")
      .stop()
      .animate(
        { scrollTop: $("#wb_actyal_banner").offset().top - 88 },
        600,
        "easeOutCirc"
      );
  });
  $("a[href*='#tablo_vibors']").click(function (event) {
    event.preventDefault();
    $("html, body")
      .stop()
      .animate(
        { scrollTop: $("#wb_tablo_vibors").offset().top - 88 },
        600,
        "easeOutCirc"
      );
  });
  $("a[href*='#tablo_vibors_2']").click(function (event) {
    event.preventDefault();
    $("html, body")
      .stop()
      .animate(
        { scrollTop: $("#wb_tablo_vibors_2").offset().top - 88 },
        600,
        "easeOutCirc"
      );
  });
  $("a[href*='#interface-ydobm']").click(function (event) {
    event.preventDefault();
    $("html, body")
      .stop()
      .animate(
        { scrollTop: $("#wb_interface-ydobm").offset().top },
        600,
        "easeOutCirc"
      );
  });
  $("a[href*='#vibors_zaiavka']").click(function (event) {
    event.preventDefault();
    $("html, body")
      .stop()
      .animate(
        { scrollTop: $("#wb_vibors_zaiavka").offset().top - 88 },
        600,
        "easeOutCirc"
      );
  });
  $("a[href*='#stably-banner']").click(function (event) {
    event.preventDefault();
    $("html, body")
      .stop()
      .animate(
        { scrollTop: $("#wb_stably-banner").offset().top },
        600,
        "easeOutCirc"
      );
  });
  $("a[href*='#questions']").click(function (event) {
    event.preventDefault();
    $("html, body")
      .stop()
      .animate(
        { scrollTop: $("#wb_questions").offset().top - 88 },
        600,
        "easeOutCirc"
      );
  });
  var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
  if (iOS) {
    $("#wb_home,#wb_actyal_banner,#wb_interface-ydobm,#wb_stably-banner").css(
      "background-attachment",
      "scroll"
    );
  }
});

document.write(
  '<div style="color:#000000;font-size:16px;font-family:Arial;font-weight:normal;font-style:normal;text-align:center;text-decoration:none">Последнее обновление: ' +
    document.lastModified +
    "</div>"
);
