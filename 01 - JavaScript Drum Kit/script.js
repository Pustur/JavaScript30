// Functions
function addActiveClass(target) {
  const activeClass = 'drum-kit__button--active';

  target.classList.add(activeClass);
  target.addEventListener(
    'transitionend',
    () => target.classList.remove(activeClass),
    { once: true },
  );
}

function createAudio(keyCode) {
  const soundUrl = soundsMap[keyCode];

  if (!soundUrl) return;

  const audio = new Audio();
  const source = document.createElement('source');

  source.src = `sounds/${soundUrl}`;
  audio.appendChild(source);

  return audio;
}

function playAudio(keyCode) {
  const audio = createAudio(keyCode);

  if (audio) {
    const button = document.querySelector(`button[data-key="${keyCode}"]`);

    addActiveClass(button);
    audio.play();
  }
}

// DOM elements
const drumKit = document.getElementsByClassName('drum-kit')[0];

// Variables
const soundsMap = {
  65: 'clap.wav',
  83: 'hihat.wav',
  68: 'kick.wav',
  70: 'openhat.wav',
  71: 'boom.wav',
  72: 'ride.wav',
  74: 'snare.wav',
  75: 'tom.wav',
  76: 'tink.wav',
};

// Events
window.addEventListener('keydown', e => playAudio(e.keyCode));
drumKit.addEventListener('click', e => {
  let { target } = e;

  while (target && !target.matches('button')) {
    target = target.parentElement;

    if (!target) return;
  }

  playAudio(target.dataset.key);
});
