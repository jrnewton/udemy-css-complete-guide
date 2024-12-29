function docReady(callback) {
  //From MDN
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", callback);
  } else {
    callback();
  }
}

// nav menu toggle button
docReady(() => {
  const navBackdrop = document.querySelector('#mobile-nav-backdrop');
  console.debug('navBackdrop', navBackdrop);
  if (navBackdrop == null) {
    console.warn('exit, navBackdrop is null');
    return;
  }

  const toggleButton = document.querySelector('.toggle-button');
  console.debug('toggleButton', toggleButton);
  if (toggleButton == null) {
    console.warn('exit, toggleButton is null');
    return;
  }

  const navMenu = document.querySelector('.mobile-nav');
  console.debug('navMenu', navMenu);
  if (navMenu == null) {
    console.warn('exit, navMenu is null');
    return;
  }

  const enableNavMenu = function (enable) {
    if (enable) {
      navMenu.classList.add('open');
      navBackdrop.classList.add('open');
    }
    else {
      navMenu.classList.remove('open');
      navBackdrop.classList.remove('open');
    }
  }

  toggleButton.addEventListener('click', (event) => {
    console.info('nav button clicked');
    enableNavMenu(true);
  });

  navBackdrop.addEventListener('click', (event) => {
    console.info('nav backdrop clicked');
    enableNavMenu(false);
  });
});