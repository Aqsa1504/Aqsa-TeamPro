const quizData = [
    { 
        question: "What is the capital of France?", 
        options: ["Berlin", "Madrid", "Paris", "Lisbon"], 
        correct: "Paris" 
    },
    { 
        question: "Which is the largest planet?", 
        options: ["Earth", "Mars", "Jupiter", "Saturn"], 
        correct: "Jupiter" 
    },
    { 
        question: "Who wrote 'Romeo and Juliet'?", 
        options: ["Charles Dickens", "William Shakespeare", "Leo Tolstoy", "Mark Twain"], 
        correct: "William Shakespeare" 
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.querySelector(".question");
const optionsEl = document.querySelector(".options");
const nextButton = document.getElementById("nextButton");
const resultEl = document.querySelector(".result");

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    optionsEl.innerHTML = "";
    
    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => selectAnswer(option, currentQuestion.correct));
        optionsEl.appendChild(button);
    });
}

function selectAnswer(selected, correct) {
    if (selected === correct) {
        score++;
    }
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
        nextButton.style.display = "none";
    } else {
        showResult();
    }
});

function showResult() {
    questionEl.style.display = "none";
    optionsEl.style.display = "none";
    nextButton.style.display = "none";
    resultEl.style.display = "block";
    resultEl.textContent = `Your Score: ${score} / ${quizData.length}`;
}

loadQuestion();