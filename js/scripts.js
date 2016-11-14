document.addEventListener("DOMContentLoaded", function() {

  var toggle = document.getElementById('nav-toggle');
  var menu = document.getElementById('nav-menu-animate');

  toggle.addEventListener("click", function() {
    this.classList.toggle("is-active");
    menu.classList.toggle("is-active");
  });

  setTimeout(function() {
    var download = document.getElementsByClassName('download');

    for (var i = 0; i < download.length; i++) {
      download[i].addEventListener("click", function() {
        logDownload(this.id);
      });

    }

  }, 50);

  function logDownload(id) {
    // Add this to a button's onclick handler
    FB.AppEvents.logEvent("userDownloaded-" + id);
  }
});