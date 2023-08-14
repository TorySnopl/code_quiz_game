let startBtn = document.querySelector('.startbtn');
let startScreen = document.querySelector('.title');
let timerEl = document.querySelector('.timer');
let scoreEl = document.querySelector('.score');
let quizBoard = document.querySelector('.quizboard');
let question = document.querySelector('#theQuestion');
let answer = document.querySelector('.choice');
let choiceOne = document.querySelector('#choice1');
let choiceTwo = document.querySelector('#choice2');
let choiceThree = document.querySelector('#choice3');
let choiceFour = document.querySelector('#choice4');
let feedback = document.querySelector('.result');
let finalScreen =document.querySelector('.finalscreen');
let score = 0;
let questionCount = 0;

console.log(feedback);

timerEl.classList.add('hide');
scoreEl.classList.add('hide');
quizBoard.classList.add('hide');
finalScreen.classList.add('hide');


startBtn.addEventListener('click', quizStart);




const questions = [
    {ask: 'What does Var stand for?', 
    a: ['Variable', 'very difficult', 'varied', 'victory',],
    c: 0},

    {ask: 'what tag in HTML looks at your javascript?', 
    a: ['link', 'java', 'js', 'script'],
    c: 3},

    {ask: 'what symbol will you need to use to get an element by ID?', a: ['!',  '#',  '%',  '*'],
    c: 1},

    {ask: 'What is a boolean?', 
    a: ['and/or',  'if/else',  'true/false', 'when/where'],
    c: 2},

    {ask: 'What is the correct syntax for a function?', 
    a: ['function name()','function = name()','function: name()','create.function.name()'],
    c:0},

    {ask: 'Define i <= 10', 
    a: ['i is always less than 10',  'i is less than or equal to 10', 'is i is less than 10 make it equal to 10',  'i isnt actually less than 10' ],
    c:1}
];


function newQuestion(){
    question.textContent = questions[questionCount].ask;

    choiceOne.textContent = questions[questionCount].a[0];
    choiceTwo.textContent = questions[questionCount].a[1];
    choiceThree.textContent = questions[questionCount].a[2];
    choiceFour.textContent = questions[questionCount].a[3];

    questionCount++;

   
};  


function quizStart(){

    newQuestion();

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
            quizBoard.classList.add('hide');
            feedback.classList.add('hide')
            timerEl.classList.add('hide');
            scoreEl.classList.add('hide');
            finalScreen.classList.remove('hide');
        }
    }, 1000);

    quizBoard.addEventListener('click', function(event){
        let userChoice = event.target.value;
        
        if (userChoice == questions[questionCount].c){
            score ++;
            scoreEl.textContent = score;
            localStorage.setItem('score', score);
            feedback.textContent = ('You Got It!');
            newQuestion();
        } else {
            seconds --;
            feedback.textContent = ('Maybe Next Time!');
            newQuestion();
        }
       
    });  


};

    
  


  
  