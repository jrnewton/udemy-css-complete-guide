// TODO: 
// null checks
// get backdrop by ID (there should only be a single backdrop)
// only run code once document is loaded/ready.
const backdrop = document.querySelector('.backdrop');
console.log('backdrop', backdrop);

const modalDialog = document.querySelector('.modal');
console.log('modal', modalDialog);

const modalNoButton = document.querySelector('.modal__action--negative');
console.log('modalNoButton', modalNoButton);

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
  console.log('modal no button clicked');
  enableModal(false);
});

backdrop.addEventListener('click', (event) => {
  console.log('backdrop clicked');
  enableModal(false);
});

let buttons = document.querySelectorAll('.button');
console.log('buttons');

for (const b of buttons) {
  console.log(b);
  b.addEventListener('click', (event) => {
    console.log('button clicked');
    enableModal(true);
  });
}
