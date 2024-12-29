function docReady(callback) {
  //From MDN
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", callback);
  } else {
    callback();
  }
}

docReady(() => {
  const modalBackdrop = document.querySelector('#modal-backdrop');
  console.debug('modalBackdrop', modalBackdrop);
  if (modalBackdrop == null) {
    console.warn('exit, modalBackdrop is null');
    return;
  }

  const modalDialog = document.querySelector('.modal');
  console.debug('modal', modalDialog);
  if (modalDialog == null) {
    console.warn('exit, modalDialog is null');
    return;
  }

  const modalCloseButton = document.querySelector('.modal__action--negative');
  console.debug('modalCloseButton', modalCloseButton);
  if (modalCloseButton == null) {
    console.warn('exit, modalCloseButton is null');
    return;
  }

  let buttons = null;
  try {
    buttons = document.querySelectorAll('.button');
    console.debug('buttons');
  }
  catch (e) {
    console.error("exit, button queryselector got exception", e);
    return;
  }

  if (buttons.length === 0) {
    console.warn('exit, .button nodelist is empty');
    return;
  }

  const enableModal = function (enable) {
    if (enable) {
      // the style property provides access to inline styles
      modalDialog.classList.add('open');
      modalBackdrop.classList.add('open');
    }
    else {
      modalDialog.classList.remove('open');
      modalBackdrop.classList.remove('open');
    }
  }

  modalCloseButton.addEventListener('click', (event) => {
    console.info('modal no button clicked');
    enableModal(false);
  });

  modalBackdrop.addEventListener('click', (event) => {
    console.info('modal backdrop clicked');
    enableModal(false);
  });

  for (const b of buttons) {
    b.addEventListener('click', (event) => {
      console.info('button clicked');
      enableModal(true);
    });
  }
});

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