// DOM elements
const words = document.querySelector('.words');
let p = document.createElement('p');

// Variables
const recognition = new (window.SpeechRecognition ||
  window.webkitSpeechRecognition)();

// Events
recognition.addEventListener('result', e => {
  const results = [...e.results];
  const transcript = results
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

  // Funny that "shit" will never be triggered because the speech recognition
  // returns a censored string like "s***"
  const emojifiedTranscript = transcript
    .replace(/poop?|dump|shit/gi, '💩')
    .replace(/unicorns?/gi, '🦄')
    .replace(/love|heart/gi, '️❤️')
    .replace(/(?:ro)?bot/gi, '🤖')
    .replace(/aliens?/gi, '👽')
    .replace(/clowns?/gi, '🤡');

  p.textContent = emojifiedTranscript;

  if (results[0].isFinal) {
    p = document.createElement('p');
    words.appendChild(p);
  }
});

// Body
recognition.interimResults = true;
recognition.lang = 'en-US';

words.appendChild(p);

recognition.addEventListener('end', recognition.start);

recognition.start();
