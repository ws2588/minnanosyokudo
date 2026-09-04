$(function () {
  /*=================================================
    ハンバーガ―メニュー
    ===================================================*/
  $(".sub-page-header-btn,.toggle-btn").on("click", function () {
    // .sub-page-header-btn,toggle-btnにopenクラスがあるか判定する
    if ($("header").hasClass("open")) {
      // headerにopenクラスが存在する場合、openクラスを削除する
      $("header").removeClass("open");
    } else {
      // headerにopenクラスが存在しない場合、openクラスを加える
      $("header").addClass("open");
    }
  });
  // メニューが表示されている時に画面をクリックした場合
  $(".header-menu a").on("click", function () {
    $("header").removeClass("open");
  });

  //   /*=================================================
  //   スムーススクロール
  //   ===================================================*/

  $('a[href^="#"]').click(function () {
    // クリックしたaタグのリンクを取得
    let href = $(this).attr("href");
    // ジャンプ先のid名をセット hrefの中身が#もしくは空欄なら,htmlタグをセット
    let target = $(href == "#" || href == "" ? "html" : href);
    // ページトップからジャンプ先の要素までの距離を取得
    let position = target.offset().top;
    // animateでスムーススクロールを行う   ページトップからpositionだけスクロールする
    // 600はスクロール速度で単位はミリ秒  swingはイージングのひとつ
    $("html, body").animate({ scrollTop: position }, 700, "swing");
    // urlが変化しないようにfalseを返す
    return false;
  });

  //   /*=================================================
  //   フェードイン
  //   ===================================================*/
  //   // スクロール時のイベント
  $(window).scroll(function () {
    //     // fadeinクラスに対して順に処理を行う
    $(".fadein").each(function () {
      //       // スクロールした距離
      let scroll = $(window).scrollTop();
      //       // fadeinクラスの要素までの距離
      let target = $(this).offset().top;
      //       // 画面の高さ
      let windowHeight = $(window).height();
      //       // fadeinクラスの要素が画面下にきてから200px通過した
      //       // したタイミングで要素を表示
      if (scroll > target - windowHeight + 250) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });
  });

  //   /*=================================================
  //   アコーディオン
  //   ===================================================*/
  // アコーディオンクリック時のイベント
  $(".qa-question").on("click", function () {
    $(this).toggleClass("open");
    $(this).next(".qa-answer").slideToggle();
  });

  //   /*=================================================
  //   ページトップボタン
  //   ===================================================*/
  // スクロール時のイベント
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 300) {
      $(".page-top").addClass("is-show");
    } else {
      $(".page-top").removeClass("is-show");
    }
  });
});