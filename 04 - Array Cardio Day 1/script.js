// Functions
function logTitle(text) {
  const consoleStyle = 'font-weight: bold; font-size: 140%';

  console.log(`\n\n%c${text}`, consoleStyle);
}

// Variables
const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
];
const people = [
  'Beck, Glenn',
  'Becker, Carl',
  'Beckett, Samuel',
  'Beddoes, Mick',
  'Beecher, Henry',
  'Beethoven, Ludwig',
  'Begin, Menachem',
  'Belloc, Hilaire',
  'Bellow, Saul',
  'Benchley, Robert',
  'Benenson, Peter',
  'Ben-Gurion, David',
  'Benjamin, Walter',
  'Benn, Tony',
  'Bennington, Chester',
  'Benson, Leana',
  'Bent, Silas',
  'Bentsen, Lloyd',
  'Berger, Ric',
  'Bergman, Ingmar',
  'Berio, Luciano',
  'Berle, Milton',
  'Berlin, Irving',
  'Berne, Eric',
  'Bernhard, Sandra',
  'Berra, Yogi',
  'Berry, Halle',
  'Berry, Wendell',
  'Bethea, Erin',
  'Bevan, Aneurin',
  'Bevel, Ken',
  'Biden, Joseph',
  'Bierce, Ambrose',
  'Biko, Steve',
  'Billings, Josh',
  'Biondo, Frank',
  'Birrell, Augustine',
  'Black, Elk',
  'Blair, Robert',
  'Blair, Tony',
  'Blake, William',
];
const meansOfTransport = [
  'car',
  'car',
  'truck',
  'truck',
  'bike',
  'walk',
  'car',
  'van',
  'bike',
  'walk',
  'car',
  'van',
  'car',
  'truck',
];
const boulevards = [
  'Boulevards of Paris',
  'City walls of Paris',
  'Thiers wall',
  'Wall of Charles V',
  'Wall of Philip II Augustus',
  'City gates of Paris',
  "Haussmann's renovation of Paris",
  'Boulevards of the Marshals',
  'Boulevard Auguste-Blanqui',
  'Boulevard Barbès',
  'Boulevard Beaumarchais',
  "Boulevard de l'Amiral-Bruix",
  'Boulevard des Capucines',
  'Boulevard de la Chapelle',
  'Boulevard de Clichy',
  'Boulevard du Crime',
  'Boulevard Haussmann',
  "Boulevard de l'Hôpital",
  'Boulevard des Italiens',
  'Boulevard de la Madeleine',
  'Boulevard de Magenta',
  'Boulevard Montmartre',
  'Boulevard du Montparnasse',
  'Boulevard Raspail',
  'Boulevard Richard-Lenoir',
  'Boulevard de Rochechouart',
  'Boulevard Saint-Germain',
  'Boulevard Saint-Michel',
  'Boulevard de Sébastopol',
  'Boulevard de Strasbourg',
  'Boulevard du Temple',
  'Boulevard Voltaire',
  'Boulevard de la Zone',
];

// Body
// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const inventors1500 = inventors.filter(
  inventor => inventor.year >= 1500 && inventor.year < 1600,
);
logTitle("Inventors who were born in the 1500's");
console.table(inventors1500);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
const inventorsNames = inventors.map(({ first, last }) => `${first} ${last}`);
logTitle("Inventors' first and last names");
console.log(inventorsNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const inventorsSortedBirthDate = inventors.sort((a, b) => a.year - b.year);
logTitle('Inventors sorted by birthdate, oldest to youngest');
console.table(inventorsSortedBirthDate);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const inventorsTotalYears = inventors.reduce(
  (total, inventor) => total + (inventor.passed - inventor.year),
  0,
);
logTitle('How many years did all the inventors live collectively?');
console.log(inventorsTotalYears);

// 5. Sort the inventors by years lived
const inventorsSortedAge = inventors.sort((a, b) => {
  const ageA = a.passed - a.year;
  const ageB = b.passed - b.year;

  return ageB - ageA;
});
logTitle('Inventors sorted by years lived oldest to youngest');
console.table(inventorsSortedAge);

// 6. Create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
const deBoulevards = boulevards.filter(boulevard => boulevard.includes('de'));
logTitle(
  "Boulevards in Paris that contain 'de' anywhere in the name\nhttps://en.wikipedia.org/wiki/Category:Boulevards_in_Paris",
);
console.table(deBoulevards);

// 7. Sort Exercise
// Sort the people alphabetically by last name
const peopleSortedLastName = people.sort((a, b) => {
  const [lastA, firstA] = a.split(', ');
  const [lastB, firstB] = b.split(', ');

  return lastA.localeCompare(lastB);
});
logTitle('People sorted alphabetically by last name');
console.log(peopleSortedLastName);

// 8. Reduce Exercise
// Sum up the instances of each mean of transport
const meansOfTransportInstances = meansOfTransport.reduce((obj, transport) => {
  if (!obj[transport]) obj[transport] = 0;

  obj[transport]++;

  return obj;
}, {});
logTitle('Number of instances for each mean of transport');
console.table(meansOfTransportInstances);
