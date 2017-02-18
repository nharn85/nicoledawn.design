/* global Handlebars */

function getContent() {
// https://gist.github.com/hugolpz/8075193
// 4a.function creation
  const slingshot = (url, tplId, anchor) => {
    $.getJSON(url, (data) => {
      const template = $(tplId).html();
      const stone = Handlebars.compile(template)(data);
      $(anchor).append(stone);
    });
  };
  // 4b.function firing
  const dateObj = new Date();
  const date = dateObj.getTime();
  slingshot(`data.json?ts=${date}`, '#tpl', '#anchor');
}

function logDownload(id) {
  // Add this to a button's onclick handler
  FB.AppEvents.logEvent("userDownloaded-" + id);
}

function masonryIt() {
  const $grid = $('.grid').masonry();
  //   Masonry
  $grid.imagesLoaded(() => {
    $grid.masonry({
      // use outer width of grid-sizer for columnWidth
      columnWidth: '.grid-sizer',
      // do not use .grid-sizer in layout
      itemSelector: '.grid-item',
      percentPosition: true,
      gutter: 10,
    });

    // jQuery, has event argument
    $grid.on('layoutComplete', (event, items) => {
      const download = document.getElementsByClassName('grid-item__link');
      // console.log(download);
      for (let i = 0; i < download.length; i++) {
        download[i].addEventListener('click', (e) => {
          e.stopPropagation();
          logDownload(e.target.id);
        });
      }
    });
  });
}

function doSomething() {
  if ($('#anchor').html().length > 0) {
    masonryIt();
  } else {
    setTimeout(doSomething, 100);
  }
}

$(document).ready(() => {
  getContent();
  setTimeout(doSomething, 10);
});