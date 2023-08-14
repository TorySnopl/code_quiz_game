let startBtn = document.querySelector('.startbtn');
let startScreen = document.querySelector('.title');
let timerEl = document.querySelector('.timer');
let scoreEl = document.querySelector('.score');
let quizBoard = document.querySelector('.quizboard');
let question = document.querySelector('.question');
let answer = document.querySelector('.choice');
let feedback = document.querySelector('.result');
let finalScreen =document.querySelector('.finalscreen');
let score = 0;
let questionCount = 0;


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

    let userChoice = questions[questionCount].a;

    questionCount++;

    userChoice.forEach((choice) => {
            let options = document.createElement('p');
            options.textContent = choice;
            answer.append(options);

        
            options.addEventListener('click', function(){
                if (options.innerHTML==questions[questionCount].c){
                    score++;
                    scoreEl.textContent = score;
                    feedback.textContent = "Way To Go!"
                    localStorage.setItem('score', score);
                   
                 } else {
                    seconds--;
                    feedback.textContent = "Not Quite!"
                 }
            newQuestion();
            })
            
    });

};

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

  


};

    
  


  
  