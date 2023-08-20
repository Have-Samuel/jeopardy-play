/* eslint-disable max-len */
// categories is the main data structure for the app; it looks like this:

const categories = [
  {
    title: 'American Revolution',
    id: 150,
    clues: [
      { question: 'Nickname of the British from the color of their clothing?', answer: 'The Redcoats', showing: null },
      { question: '1768 American war tune which was set to a 1500s melody', answer: 'Yankee Doodle', showing: null },
      { question: 'Brigadier Gen. O Hara went through the final surrender in place of this English commander', answer: 'Cornwallis', showing: null },
      { question: 'The 2 foreign countries which fought on our side', answer: 'France \u0026 Spain', showing: null },
      { question: 'General Howe faced him in Brandywine, Germantown, \u0026 Long Island battles', answer: 'George Washington', showing: null },
    ],
  },
  {
    title: 'World Geography',
    id: 121,
    clues: [
      { question: 'Capital of Sri Lanka, it sounds like Peter Falk\'s been there', answer: 'Colombo', showing: null },
      { question: 'Continent Greenland is considered part of..', answer: 'North America', showing: null },
      { question: 'As Cape Horn is to South America, this is to Africa', answer: 'The Cape of Good Hope', showing: null },
      { question: 'Closest foreign country to Fairbanks, Alaska', answer: 'Canada', showing: null },
      { question: 'The Gulf of Aqaba separates these 2 Mid-East peninsulas', answer: 'The Arabian Peninsula \u0026 the Sinai Peninsula', showing: null },
    ],
  },
  {
    title: 'Winter Sports',
    id: 50,
    clues: [
      { question: 'Motorized sledding', answer: 'Snowmobiling', showing: null },
      { question: 'To do this, you put 2 \\"baskets\\" on your feet \u0026 take three giant steps', answer: 'Snowshoe', showing: null },
      { question: 'The diagonal stride is the basic move in this popular form of Nordic skiing', answer: 'Cross Country', showing: null },
      { question: 'In the 18th C., iceboating originated on the frozen canals of this north European country', answer: 'Holland (the Netherlands)', showing: null },
      { question: 'They were 1st held at Chamonix, France in 1924', answer: 'The Winter Olympics', showing: null },
    ],
  },
  {
    title: '1933',
    id: 40,
    clues: [
      { question: 'You never saw FDR smoking a cigarette without one of these', answer: 'Cigarette Holder', showing: null },
      { question: 'He came to the U.S. in 1933 \u0026 helped found the School of American Ballet', answer: 'George Balanchine', showing: null },
      { question: 'In Berlin, in May, this was done to works of Freud, Einstein and Thomas Mann, among others', answer: 'Burning', showing: null },
      { question: 'Ratified in 1933, the 21st Amendment repealed Prohibition, put into effect by this amendment', answer: 'The 18th Amendment', showing: null },
      { question: 'On February 15 this president-elect survived an assassination attempt by Giuseppe Zangara', answer: 'Franklin D. Roosevelt', showing: null },
    ],
  },
  {
    title: 'Awards',
    id: 160,
    clues: [
      { question: 'British decoration named for former queen', answer: 'Victoria Cross', showing: null },
      { question: 'In the 80s Mario Lemieux \u0026 this man won every MVP award in the NHL', answer: 'Wayne Gretzky', showing: null },
      { question: 'Since 32 the U.S. Badge of Military Merit has had this colorful name', answer: 'The Purple Heart', showing: null },
      { question: 'The Grammy Album of the Year for 1960 was this comic\\s \\"Button Down Mind\\"', answer: 'Bob Newhart', showing: null },
      { question: '26 years after writing it for the stage, he won Oscar for the screenplay \\"Pygmalion\\"', answer: 'George Bernard Shaw', showing: null },
    ],
  },
  {
    title: 'The Bible',
    id: 105,
    clues: [
      { question: 'The 1st book of the Bible', answer: 'Genesis', showing: null },
      { question: 'The 2nd book of the Bible', answer: 'Exodus', showing: null },
      { question: 'The 3rd book of the Bible', answer: 'Leviticus', showing: null },
      { question: 'The 4th book of the Bible', answer: 'Numbers', showing: null },
      { question: 'The 5th book of the Bible', answer: 'Deuteronomy', showing: null },
    ],
  },
];

// let categories = [];

/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */

async function getCategoryIds() {
  // Fetching the data from the API
  const response = await axios.get('https://jservice.io/api/clues', {
    params: {
      question: 'question', answer: 'answer',
    },
  });
  // Getting the data from the response
  const { data } = response;
  console.log(data);
  // Getting the category ids from the data
  const categoryIds = data.map((category) => category.category_id);
  console.log(categoryIds);
  console.log(categories);
}

getCategoryIds();

function getCategory(catId) {
}

// Fill the HTML table#jeopardy with the categories & cells for questions.
const jeopardy = document.querySelector('#jeopardy');
jeopardy.classList = 'headings';
// The first row should be filled with <th> elements, one for each category

function addCategory(category) {
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');

  const tr1 = document.createElement('tr');
  const th = document.createElement('th');

  th.innerText = category.title;
  tr1.appendChild(th);

  // thead.appendChild(tr);
  tbody.appendChild(tr1);
  jeopardy.append(thead);

  category.clues.forEach((clue) => {
    const tr2 = document.createElement('tr');
    const td = document.createElement('td');
    td.classList.add('card');
    td.innerText = '#';
    tr2.appendChild(td);
    tbody.appendChild(tr2);
    jeopardy.append(tbody);
    // Adding attributes to each td
    // Each td should have the clue question, answer, and showing status stored as data attributes on the HTML element.
    td.setAttribute('data-question', clue.question);
    td.setAttribute('data-answer', clue.answer);
    td.setAttribute('data-showing', clue.showing);
    // Adding event listener to each td
    // When clicked, the td should show either the question or the answer.
    td.addEventListener('click', (e) => {
      const card = e.target;
      const question = card.getAttribute('data-question');
      const answer = card.getAttribute('data-answer');
      const showing = card.getAttribute('data-showing');

      if (showing === 'null') {
        card.innerText = question;
        card.setAttribute('data-showing', 'question');
      } else if (showing === 'question') {
        card.innerText = answer;
        card.setAttribute('data-showing', 'answer');
      }
      // else {
      // card.innerText = '#';
      // card.setAttribute('data-showing', '#');
      // }
    });
  });
}

categories.forEach((category) => addCategory(category));

// When one card is clicked, all other cards in that category should be disabled.

async function fillTable() {
}

/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * */

function handleClick(evt) {
}

/** Wipe the current Jeopardy board, show the loading spinner,
 * and update the button used to fetch data.
 */

function showLoadingView() {

}

/** Remove the loading spinner and update the button used to fetch data. */

function hideLoadingView() {
}

/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */

async function setupAndStart() {
}

/** On click of start / restart button, set up game. */

// TODO

/** On page load, add event handler for clicking clues */

// TODO