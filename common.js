function docReady(callback) {
  //From MDN
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", callback);
  } else {
    callback();
  }
}

docReady(() => {
  const backdrop = document.querySelector('#backdrop');
  console.debug('backdrop', backdrop);
  if (backdrop == null) {
    console.warn('exit, backdrop is null');
    return;
  }

  const modalDialog = document.querySelector('.modal');
  console.debug('modal', modalDialog);
  if (modalDialog == null) {
    console.warn('exit, modalDialog is null');
    return;
  }

  const modalNoButton = document.querySelector('.modal__action--negative');
  console.debug('modalNoButton', modalNoButton);
  if (modalNoButton == null) {
    console.warn('exit, modalNoButton is null');
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
      backdrop.style.display = 'block';
      modalDialog.style.display = 'block';
    }
    else {
      backdrop.style.display = 'none';
      modalDialog.style.display = 'none';
    }
  }

  modalNoButton.addEventListener('click', (event) => {
    console.info('modal no button clicked');
    enableModal(false);
  });

  backdrop.addEventListener('click', (event) => {
    console.info('backdrop clicked');
    enableModal(false);
  });

  for (const b of buttons) {
    b.addEventListener('click', (event) => {
      console.info('button clicked');
      enableModal(true);
    });
  }
});
