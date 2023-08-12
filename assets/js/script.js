let startBtn = document.querySelector('.startbtn');
let startScreen = document.querySelector('.title');
let timerEl = document.querySelector('.timer');
let scoreEl = document.querySelector('.score');
let quizBoard = document.querySelector('.quizboard');
let question = document.querySelector('.question');
let answer = document.querySelector('.choice');


timerEl.classList.add('hide');
scoreEl.classList.add('hide');
quizBoard.classList.add('hide');


startBtn.addEventListener('click', quizStart);

const questions = [
    {ask: 'What does Var stand for?', 
    a: ['Variable', 'very difficult', 'varied', 'victory',],
    c: 1},

    {ask: 'what tag in HTML looks at your javascript?', 
    a: ['script', 'java', 'js', 'link'],
    c: 1},

    {ask: 'what symbol will you need to use to get an element by ID?', a: ['#',  '!',  '%',  '*'],
    c: 1},

    {ask: 'What is a boolean?', 
    a: ['true/false',  'if/else',  'and/or', 'when/where'],
    c: 1},

    {ask: 'What is the correct syntax for a function?', 
    a: ['function name()','function = name()','function: name()','create.function.name()'],
    c:1},

    {ask: 'Define i <= 10', 
    a: ['i is less than or equal to 10',  'i is always less than 10', 'is i is less than 10 make it equal to 10',  'i isnt actually less than 10' ],
    c:1}
];

function quizStart(){
    startBtn.classList.add('hide');
    startScreen.classList.add('hide');
    timerEl.classList.remove('hide');
    scoreEl.classList.remove('hide');
    quizBoard.classList.remove('hide');

    let seconds = 20;
    let timerInterval = setInterval(() => {
        seconds--;
        timerEl.textContent = seconds;

        if (seconds === 0){
            clearInterval(timerInterval);
        }
    }, 1000);

    let randomAsk = (questions[Math.floor(Math.random() * questions.length)]);

    question.textContent = randomAsk.ask;
    
  
   }