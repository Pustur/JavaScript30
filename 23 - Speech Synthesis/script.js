// Functions
function loadVoices(e) {
  const { currentTarget } = e;

  voices = currentTarget.getVoices();

  const voicesByLang = voices.sort(sortByLangThenName).reduce((obj, curr) => {
    const key = curr.lang.slice(0, 2);

    return {
      ...obj,
      [key]: obj[key] ? obj[key].concat(curr) : [].concat(curr),
    };
  }, {});

  renderSelect(voicesByLang);
  utterance.voice = voices.find(voice => voice.name === defaultVoice);
}

function sortByLangThenName(a, b) {
  const langComparison = a.lang.slice(0, 2).localeCompare(b.lang.slice(0, 2));

  if (langComparison === 0) return a.name.localeCompare(b.name);

  return langComparison;
}

function renderSelect(voicesByLang) {
  voicesDropdown.innerHTML = Object.entries(voicesByLang)
    .map(entry => {
      const [langGroup, voices] = entry;
      const optionsHtml = voices
        .map(voice => {
          const { name, lang } = voice;
          const selected = name === defaultVoice ? 'selected' : '';

          return `<option value="${name}" ${selected}>${lang} (${name})</option>`;
        })
        .join('');

      return `<optgroup label="${langGroup}">${optionsHtml}</optgroup>`;
    })
    .join('');
}

function voiceChangeHandler(e) {
  const { currentTarget: { value } } = e;

  utterance.voice = voices.find(voice => voice.name === value);
  stop();
  speak();
}

function optionChangeHandler(e) {
  const { currentTarget: { value, name } } = e;

  utterance[name] = value;
  stop();
  speak();
}

function speak() {
  if (!speechSynthesis.speaking) speechSynthesis.speak(utterance);
}

function stop() {
  speechSynthesis.cancel();
}

// DOM elements
const voicesDropdown = document.querySelector('[name="voice"]');
const textarea = document.querySelector('[name="text"]');
const options = document.querySelectorAll('[type="range"]');
const speakButton = document.querySelector('.speak');
const stopButton = document.querySelector('.stop');

// Variables
const utterance = new SpeechSynthesisUtterance();
const defaultVoice = 'Alex';
let voices = [];

// Events
speechSynthesis.addEventListener('voiceschanged', loadVoices, { once: true });
voicesDropdown.addEventListener('change', voiceChangeHandler);
speakButton.addEventListener('click', speak);
stopButton.addEventListener('click', stop);
[textarea, ...options].forEach(option =>
  option.addEventListener('change', optionChangeHandler),
);

// Body
utterance.text = textarea.value;
