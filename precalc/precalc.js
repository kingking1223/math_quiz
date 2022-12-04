const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progessText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progessBarFull = document.querySelector("#progessBarFull");

let currentq = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = []
let questions = [
    {
        question: "test1",
        choice1: '1',
        choice2: '2',
        choice3: '3',
        choice4: '4',
        answer: '1'
    },
    {
        question: "test2",
        choice1: '1',
        choice2: '2',
        choice3: '3',
        choice4: '4',
        answer: '2'
    },
    {
        question: "test3",
        choice1: '1',
        choice2: '2',
        choice3: '3',
        choice4: '4',
        answer: '3'
    },
    {
        question: "test4",
        choice1: '1',
        choice2: '2',
        choice3: '3',
        choice4: '4',
        answer: '4'
    }
];

const SCORE = 100;
const MAXQ = 4;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAXQ) {
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('/end.html');
    } 

    questionCounter++;
    progessText.innerText = `Question ${questionCounter} of ${MAXQ}`;
    progessBarFull.style.width = `${(questionCounter / MAXQ) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentq = availableQuestions[questionIndex];
    question.innerText = currentq.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentq['choice' + number];
    })

    availableQuestions.splice(questionIndex, 1)
}