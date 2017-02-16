document.addEventListener('DOMContentLoaded', () => {

  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu-animate');

  toggle.addEventListener('click', () => {
    this.classList.toggle('is-active');
    menu.classList.toggle('is-active');
  });

  /* eslint-disable */
  function logDownload(id) {
    // Add this to a button's onclick handler
    FB.AppEvents.logEvent("userDownloaded-" + id);
  }
  /* eslint-enable */

  setTimeout(() => {
    const download = document.getElementsByClassName('download');
    for (let i = 0; i < download.length; i++) {
      download[i].addEventListener('click', () => {
        logDownload(this.id);
      });
    }
  }, 50);
});
