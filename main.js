function docReady(callback) {
  //From MDN
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", callback);
  } else {
    callback();
  }
}

// modal dialog for plan select buttons
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