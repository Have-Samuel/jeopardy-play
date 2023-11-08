/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
// /* eslint-disable max-len */
// /* eslint-disable no-plusplus */

// Create clue board
// Initialize the game board on the page load

let categoryArray = [];
const btnReset = document.querySelector('button');

// Award points to the user
function awardPoints(checkAnswer, possiblePoints, confirmAnswer) {
  if (!(checkAnswer === 'incorrect' && confirmAnswer === true)) {
    // Award the points to the user
    const target = document.getElementById('score');
    // making sure we know the curent score
    let currentScore = Number(target.innerHTML);
    currentScore += possiblePoints;
    target.innerHTML = currentScore;
  } else {
    alert('No points awarded.');
  }
}

// Evaluation of the user answer and show the user to confirm
function evaluateAnswer(userAnswer, correctAnswer, possiblePoints) {
  const checkAnswer = (userAnswer === correctAnswer) ? 'correct' : 'incorrect';
  const confirmAnswer = confirm(
    `For $${possiblePoints}, you answered ${userAnswer}, and the correct answer was ${correctAnswer}. 
    Your answer appears to be${checkAnswer}. Click OK to accept or click cancel if the answer was not properly evaluated.`,
  );
  // Pass all that to one function that will award the points
  awardPoints(checkAnswer, possiblePoints, confirmAnswer);
  // if (checkAnswer) {
  //   alert(`Correct! You earned ${possiblePoints} points`);
  // } else {
  //   alert(`Wrong! The correct answer is ${correctAnswer}`);
  // }
}

// Function to show the Question and their answers
function showQuestion(clue, target, boxValue) {
  const userAnswer = prompt(clue.question).toLowerCase();
  const correctAnswer = clue.answer.toLowerCase();
  const possiblePoints = Number(boxValue);
  // To remove the event listener and prevent the user from clicking again
  target.innerHTML = clue.answer;
  target.removeEventListener('click', showQuestion, false);
  evaluateAnswer(userAnswer, correctAnswer, possiblePoints);
}

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

// Reset Board and $$ amount if needed
function resetBoard() {
  // Reset the Board
  const board = document.getElementById('clue-board');
  while (board.firstChild) {
    board.removeChild(board.firstChild);
  }
  const catParent = document.getElementById('category-row');
  while (catParent.firstChild) {
    catParent.removeChild(catParent.firstChild);
  }
  document.getElementById('score').innerHTML = 0;
  initBoord();
  setCategories(categoryArray);
}

// Funtion Build categories to fetch all the Categories and clues
// And Build out the top Row of our Jeopard board
// Call API

function buildCategories() {
  // Reset the Board
  // All the categories should be empty
  if (!(document.getElementById('category-row').firstChild.innerHTML === '')) {
    resetBoard();
  }

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