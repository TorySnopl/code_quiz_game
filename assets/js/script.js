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
let nameInput = document.querySelector ('.name');
let finalScore = document.querySelector('.finalScore');
let saveBtn = document.querySelector('.submit');
let pastName = document.querySelector('.pastName');
let pastScore = document.querySelector('.pastScore');

//initialize variables
let score = 0;
let questionCount = 0;
let seconds = 20;
let timerInterval = '';

localStorage.setItem('name', nameInput) || "";
localStorage.setItem('saveScore', score) || 0;

//function to reset quiz on replay
function resetQuiz(){

score = 0;
questionCount = 0;
console.log(questionCount)
feedback.textContent ="";
localStorage.removeItem('name');
localStorage.removeItem('saveScore');
};




timerEl.classList.add('hide');
scoreEl.classList.add('hide');
quizBoard.classList.add('hide');
finalScreen.classList.add('hide');

//opens quiz when start button is clicked
startBtn.addEventListener('click', function(){
    resetQuiz();
    quizStart();
});



//question array
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

//picks new question from array
function newQuestion(){
    question.textContent = questions[questionCount].ask;

    choiceOne.textContent = questions[questionCount].a[0];
    choiceTwo.textContent = questions[questionCount].a[1];
    choiceThree.textContent = questions[questionCount].a[2];
    choiceFour.textContent = questions[questionCount].a[3];
};  

// starts timer and runs new question function
function quizStart(){
    

    newQuestion();

    startBtn.classList.add('hide');
    startScreen.classList.add('hide');
    timerEl.classList.remove('hide');
    scoreEl.classList.remove('hide');
    quizBoard.classList.remove('hide');

     seconds = 20;
     timerInterval = setInterval(() => {
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

   
};
// takes users answer and compares it to the correct index;
quizBoard.addEventListener('click', function(event){
    let userChoice = event.target.textContent.trim();
    let correctIndex = questions[questionCount].c;
    
        
    
    
    if (userChoice == questions[questionCount].a[correctIndex]){
        score ++;
        scoreEl.textContent = score;
        feedback.textContent = ('You Got It!');
        
    } else {
        seconds --;
        feedback.textContent = ('Maybe Next Time!');
    }

    questionCount = questionCount + 1;

    if (questionCount<questions.length){
        newQuestion();
    } else {
        clearInterval(timerInterval);
        quizBoard.classList.add('hide');
        feedback.classList.add('hide')
        timerEl.classList.add('hide');
        scoreEl.classList.add('hide');
        finalScreen.classList.remove('hide');
        finalScore.textContent = score;
        
    }
   
});  

// saves name and score to high score
saveBtn.addEventListener('click', function(){
    localStorage.setItem('name', nameInput.value);
    localStorage.setItem('saveScore', score)
    pastName.innerHTML = localStorage.getItem('name');
    pastScore.textContent = localStorage.getItem('saveScore');
    questionCount = 0;
    score = 0;
    finalScreen.classList.add ('hide');
    startScreen.classList.remove('hide');
    startBtn.classList.remove('hide');

    
});
    
  


  
  