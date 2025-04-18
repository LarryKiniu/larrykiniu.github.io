function redirectAPP({ playStore, appleStore }) {
  var isMobile = {
    Android: function () {
      return /Android/i.test(navigator.userAgent);
    },

    iOS: function () {
      return /iPhone|iPad|iPod/i.test(navigator.userAgent);
    },
  };

  if (isMobile.Android()) {
    location.replace(playStore);
  } else if (isMobile.iOS()) {
    location.replace(appleStore);
  }
}
