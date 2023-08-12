let startBtn = document.querySelector('.startbtn');
let startScreen = document.querySelector('.title');
let timerEl = document.querySelector('.timer');
let scoreEl = document.querySelector('.score');


startBtn.addEventListener('click', function(){
    startBtn.classList.add('hide');
    startScreen.classList.add('hide');
})

const questions = [
    {ask: 'What does Var stand for?', a: 'Variable', w: 'very difficult', w: 'varied', w: 'victory'},
    {ask: 'what tag in HTML looks at your javascript?', a: 'script', w: 'java', w: 'js', w: 'link'},
    {ask: 'what symbol will you need to use to get an element by ID?', a: '#', w: '!', w: '%', w: '*'},
    {ask: 'What is a boolean?', a: 'true/false', w: 'if/else', w: 'and/or', w:'when/where'},
    {ask: 'What is the correct syntax for a function?', a: 'function name()', w:'function = name()', w:'function: name()', w: 'create.function.name()'},
    {ask: 'Define i <= 10', a: 'i is less than or equal to 10', w: 'i is always less than 10', w:'is i is less than 10 make it equal to 10', w: 'i isnt actually less than 10' }
];

