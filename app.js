// /* eslint-disable max-len */
// // categories is the main data structure for the app; it looks like this:

// const categories = [
//   {
//     title: 'American Revolution',
//     id: 150,
//     clues: [
//       { question: 'Nickname of the British from the color of their clothing?', answer: 'The Redcoats', showing: null },
//       { question: '1768 American war tune which was set to a 1500s melody', answer: 'Yankee Doodle', showing: null },
//       { question: 'Brigadier Gen. O Hara went through the final surrender in place of this English commander', answer: 'Cornwallis', showing: null },
//       { question: 'The 2 foreign countries which fought on our side', answer: 'France \u0026 Spain', showing: null },
//       { question: 'General Howe faced him in Brandywine, Germantown, \u0026 Long Island battles', answer: 'George Washington', showing: null },
//     ],
//   },
//   {
//     title: 'World Geography',
//     id: 121,
//     clues: [
//       { question: 'Capital of Sri Lanka, it sounds like Peter Falk\'s been there', answer: 'Colombo', showing: null },
//       { question: 'Continent Greenland is considered part of..', answer: 'North America', showing: null },
//       { question: 'As Cape Horn is to South America, this is to Africa', answer: 'The Cape of Good Hope', showing: null },
//       { question: 'Closest foreign country to Fairbanks, Alaska', answer: 'Canada', showing: null },
//       { question: 'The Gulf of Aqaba separates these 2 Mid-East peninsulas', answer: 'The Arabian Peninsula \u0026 the Sinai Peninsula', showing: null },
//     ],
//   },
//   {
//     title: 'Winter Sports',
//     id: 50,
//     clues: [
//       { question: 'Motorized sledding', answer: 'Snowmobiling', showing: null },
//       { question: 'To do this, you put 2 \\"baskets\\" on your feet \u0026 take three giant steps', answer: 'Snowshoe', showing: null },
//       { question: 'The diagonal stride is the basic move in this popular form of Nordic skiing', answer: 'Cross Country', showing: null },
//       { question: 'In the 18th C., iceboating originated on the frozen canals of this north European country', answer: 'Holland (the Netherlands)', showing: null },
//       { question: 'They were 1st held at Chamonix, France in 1924', answer: 'The Winter Olympics', showing: null },
//     ],
//   },
//   {
//     title: '1933',
//     id: 40,
//     clues: [
//       { question: 'You never saw FDR smoking a cigarette without one of these', answer: 'Cigarette Holder', showing: null },
//       { question: 'He came to the U.S. in 1933 \u0026 helped found the School of American Ballet', answer: 'George Balanchine', showing: null },
//       { question: 'In Berlin, in May, this was done to works of Freud, Einstein and Thomas Mann, among others', answer: 'Burning', showing: null },
//       { question: 'Ratified in 1933, the 21st Amendment repealed Prohibition, put into effect by this amendment', answer: 'The 18th Amendment', showing: null },
//       { question: 'On February 15 this president-elect survived an assassination attempt by Giuseppe Zangara', answer: 'Franklin D. Roosevelt', showing: null },
//     ],
//   },
//   {
//     title: 'Awards',
//     id: 160,
//     clues: [
//       { question: 'British decoration named for former queen', answer: 'Victoria Cross', showing: null },
//       { question: 'In the 80s Mario Lemieux \u0026 this man won every MVP award in the NHL', answer: 'Wayne Gretzky', showing: null },
//       { question: 'Since 32 the U.S. Badge of Military Merit has had this colorful name', answer: 'The Purple Heart', showing: null },
//       { question: 'The Grammy Album of the Year for 1960 was this comic\\s \\"Button Down Mind\\"', answer: 'Bob Newhart', showing: null },
//       { question: '26 years after writing it for the stage, he won Oscar for the screenplay \\"Pygmalion\\"', answer: 'George Bernard Shaw', showing: null },
//     ],
//   },
//   {
//     title: 'The Bible',
//     id: 105,
//     clues: [
//       { question: 'The 1st book of the Bible', answer: 'Genesis', showing: null },
//       { question: 'The 2nd book of the Bible', answer: 'Exodus', showing: null },
//       { question: 'The 3rd book of the Bible', answer: 'Leviticus', showing: null },
//       { question: 'The 4th book of the Bible', answer: 'Numbers', showing: null },
//       { question: 'The 5th book of the Bible', answer: 'Deuteronomy', showing: null },
//     ],
//   },
//   // {
//   //   title: 'The 50 States',
//   //   id: 10,
//   //   clues: [
//   //     { question: 'The 1st state', answer: 'Delaware', showing: null },
//   //     { question: 'The 2nd state', answer: 'Pennsylvania', showing: null },
//   //     { question: 'The 3rd state', answer: 'New Jersey', showing: null },
//   //     { question: 'The 4th state', answer: 'Georgia', showing: null },
//   //     { question: 'The 5th state', answer: 'Connecticut', showing: null },
//   //   ],
//   // },
// ];

// // let categories = [];

// /** Get NUM_CATEGORIES random category from API.
//  *
//  * Returns array of category ids
//  */

// // Reset Button
// // const gameBtn = document.getElementsByName('button');

// // gameBtn.addEventListener('click', () => {

// // });

// async function getCategoryIds() {
//   // Fetching the data from the API
//   const response = await axios.get('https://jservice.io/api/clues', {
//     params: {
//       question: 'question', answer: 'answer',
//     },
//   });
//   // Getting the data from the response
//   const { data } = response;
//   console.log(data);
//   // Getting the category ids from the data
//   const categoryIds = data.map((category) => category.category_id);
//   console.log(categoryIds);
//   console.log(categories);

//   // When the showing variable is empty, the data should show null, when it has the answer,
//   it should show answer, and when it has question it should show question in the data attribute.
// }

// getCategoryIds();

// function getCategory(catId) {
// }

// // Fill the HTML table#jeopardy with the categories & cells for questions.
// const jeopardy = document.querySelector('#jeopardy');
// jeopardy.classList = 'whole-board';

// // The first row should be filled with <th> elements, one for each category

// function addCategory(category) {
//   // const thead = document.createElement('thead');
//   // const tbody = document.createElement('tbody');
//   const thead = document.querySelector('#head');
//   thead.classList = 'show-up';
//   const tbody = document.querySelector('#body');
//   // tbody.classList = 'body-stuf';

//   const trHead = document.createElement('tr');
//   const th = document.createElement('th');
//   th.classList = 'head-stuf';

//   th.innerHTML = category.title;
//   trHead.appendChild(th);
//   console.log(trHead);
//   thead.appendChild(trHead);
//   // tbody.appendChild(tr1);
//   jeopardy.append(thead);

//   category.clues.forEach((clue) => {
//     const trBody = document.createElement('tr');
//     const td = document.createElement('td');
//     trBody.classList = 'card';
//     td.innerText = '#';
//     // td.classList = 'show-me';
//     trBody.appendChild(td);
//     tbody.appendChild(trBody);
//     jeopardy.append(tbody);
//     // Adding attributes to each td
//     // Each td should have the clue question, answer, and showing status
//     // stored as data attributes on the HTML element.
//     td.setAttribute('data-question', clue.question);
//     td.setAttribute('data-answer', clue.answer);
//     td.setAttribute('data-showing', clue.showing);
//     // Adding event listener to each td
//     // When clicked, the td should show either the question or the answer.
//     td.addEventListener('click', (e) => {
//       const card = e.target;
//       const question = card.getAttribute('data-question');
//       const answer = card.getAttribute('data-answer');
//       const showing = card.getAttribute('data-showing');

//       if (showing === 'null') {
//         card.innerText = question;
//         card.setAttribute('data-showing', 'question');
//       } else if (showing === 'question') {
//         card.innerText = answer;
//         card.setAttribute('data-showing', 'answer');
//       }
//     });
//   });
// }

// categories.forEach((category) => addCategory(category));

// // When one card is clicked, all other cards in that category should be disabled.

// async function fillTable() {
// }

// /** Handle clicking on a clue: show the question or answer.
//  *
//  * Uses .showing property on clue to determine what to show:
//  * - if currently null, show question & set .showing to "question"
//  * - if currently "question", show answer & set .showing to "answer"
//  * - if currently "answer", ignore click
//  * */

// function handleClick(evt) {
// }

// /** Wipe the current Jeopardy board, show the loading spinner,
//  * and update the button used to fetch data.
//  */

// function showLoadingView() {

// }

// /** Remove the loading spinner and update the button used to fetch data. */

// function hideLoadingView() {
// }

// /** Start game:
//  *
//  * - get random category Ids
//  * - get data for each category
//  * - create HTML table
//  * */

// async function setupAndStart() {
// }

/** On click of start / restart button, set up game. */

// TODO

/** On page load, add event handler for clicking clues */

// Create clue board
// Initialize the game board on the page load

let categoryArray = [];
const btnReset = document.querySelector('button');

// Using currentTarget to know which Item was Clicked
function getClue(event) {
  // currentTarget targets the real item clicked
  const child = event.currentTarget;
  child.classList.add('clicked-box');
  // console.log(child);
  // Extracting the value of the clicked Item
  // and replacing the initial display using slice
  const boxValue = child.innerHTML.slice(1);
  // Need to know which Item was clicked, from which category
  // We need to get the parent Row and then get its index.
  const parent = child.parentNode;
  const index = Array.prototype.findIndex.call(parent.children, (c) => c === child);
  // The above statement find the index from the Array of a certain ROW
  const cluesList = categoryArray[index].clues;
  // Getting into the clues and finding the one with that clicked index
  const clue = cluesList.find((obj) => obj.value === Number(boxValue));
  console.log(clue);

  // Displaying the Question
  showQuestion(clue, child, boxValue);
}

function initBoord() {
  const board = document.getElementById('clue-board');

  // Creating the Category Row
  function initCatRow() {
    const catRow = document.getElementById('category-row');

    for (let i = 0; i < 6; i += 1) {
      const box = document.createElement('div');
      box.className = 'clue-box category-box';
      catRow.appendChild(box);
    }
  }
  // Create the Category Row
  initCatRow();

  // Generate 5 rows, then place 6 boxes in each row
  for (let i = 0; i < 5; i += 1) {
    const row = document.createElement('div');
    const boxValue = 200 * (i + 1);
    row.classList = 'clue-row';

    for (let j = 0; j < 6; j += 1) {
      // creating six 'divs' inside the row (Boxes)
      const box = document.createElement('div');
      box.classList = 'clue-box';
      // Box inner text
      box.textContent = `$${boxValue}`;
      box.addEventListener('click', getClue, false);
      row.appendChild(box);
    }
    // Appending the Row to the board
    board.appendChild(row);
  }
}

initBoord();

// Funtion Build categories to fetch all the Categories and clues
// And Build out the top Row of our Jeopard board
// Call API

// Generation of a random Integer for us
function randInt() {
  return Math.floor(Math.random() * (28163) + 1);
}

// Generate Our Categories to the Board
function setCategories(categoryArray) {
  // Getting the title of each category and dropping it into the DOM
  const element = document.getElementById('category-row');
  // The children are children of the parent Row
  // const { children } = element;
  const { children } = element;
  // Loop thro the children giving the title
  for (let i = 0; i < children.length; i += 1) {
    children[i].innerHTML = categoryArray[i].title;
  }
}

function buildCategories() {
  // Fetching and hitting the API six times
  const fetchReq1 = fetch(
    `https://jservice.io/api/category/?&id=${randInt()}`,
    // Hit the result and pass it as Json
    // and save it in the fetchReq1 Variable.
  ).then((res) => res.json());
  const fetchReq2 = fetch(
    `https://jservice.io/api/category/?&id=${randInt()}`,
  ).then((res) => res.json());

  const fetchReq3 = fetch(
    `https://jservice.io/api/category/?&id=${randInt()}`,
  ).then((res) => res.json());

  const fetchReq4 = fetch(
    `https://jservice.io/api/category/?&id=${randInt()}`,
  ).then((res) => res.json());

  const fetchReq5 = fetch(
    `https://jservice.io/api/category/?&id=${randInt()}`,
  ).then((res) => res.json());

  const fetchReq6 = fetch(
    `https://jservice.io/api/category/?&id=${randInt()}`,
  ).then((res) => res.json());

  // Collect all our variable in an array
  const allData = Promise.all([fetchReq1, fetchReq2, fetchReq3, fetchReq4, fetchReq5, fetchReq6]);

  allData.then((res) => {
    console.log(res);
    // CategoryArray helps us to use it any where in our game
    categoryArray = res;
    setCategories(categoryArray);
  });
}

// buildCategories();
btnReset.addEventListener('click', buildCategories);