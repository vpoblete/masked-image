import './style.css'

let masksOn: boolean;

function init() {
  masksOn = true;
  const button: HTMLButtonElement = document.getElementById('btnMasksToggle') as HTMLButtonElement;
  button.innerText = 'Set masks OFF';
  if (button) {
    button.addEventListener('click', toggleMasks);
  }
}

function toggleMasks(event: Event): void {
  console.log(event);
  const button: HTMLButtonElement = event.currentTarget as HTMLButtonElement;
  const cards: HTMLDivElement = document.querySelector('.cards') as HTMLDivElement;
  if (masksOn) {
    console.log("Quitando máscaras");
    cards.classList.add('masks-off');
    button.innerText = 'Set masks ON';
  } else {
    console.log("Poniendo máscaras");
    cards.classList.remove('masks-off');
    button.innerText = 'Set masks OFF';
  }
  masksOn = !masksOn;
}

init();