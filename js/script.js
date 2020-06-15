(function () {
  var flipButton = document.querySelector(
    '.header__theme--button, .header__theme--button *'
  );
  var flip = document.querySelector('.header__theme--flip');
  var body = document.querySelector('body');
  var tracker = true;

  flipButton.addEventListener('click', function () {
    if (tracker) {
      flip.style.justifyContent = 'flex-start';
      body.dataset.theme = 'dark';
      tracker = false;
    } else {
      flip.style.justifyContent = 'flex-end';
      body.dataset.theme = 'light';
      tracker = true;
    }
  });
})();
