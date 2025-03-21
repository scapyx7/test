const quizData = [
    {
        question: "What is the capital of Bihar?",
        options: ["New Delhi", "Mumbai", "Patna", "Kolkata"],
        answer: "Patna"
    },
    {
        question: "Who was the first Chief Minister of Bihar?",
        options: ["Satyendra Narayan Sinha", "Sri Krishna Sinha", "Kedar Pandey", "Bindeshwari Dubey"],
        answer: "Sri Krishna Sinha"
    },
    {
        question: "Which river is considered the lifeline of Bihar?",
        options: ["Ganga", "Yamuna", "Kosi", "Son"],
        answer: "Ganga"
    },
    {
        question: "Which of these is the state bird of Bihar?",
        options: ["Peacock", "Crow", "House Sparrow", "Indian Roller"],
        answer: "House Sparrow"
    },
    {
        question: "Who is the author of 'Patna: The City and the People'?",
        options: ["Binod Bihari Verma", "Lalji Singh", "Rajendra Prasad", "Bhola Paswan Shastri"],
        answer: "Binod Bihari Verma"
    },
    {
        question: "Which river is considered the lifeline of Bihar?",
        options: ["Ganga", "Yamuna", "Kosi", "Son"],
        answer: "Ganga"
    },
    
    
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-button");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";
    currentQuestion.options.forEach(option => {
        const optionElement = document.createElement("li");
        optionElement.textContent = option;
        optionElement.onclick = () => checkAnswer(option);
        optionsElement.appendChild(optionElement);
    });
}

function checkAnswer(selectedOption) {
    const correctAnswer = quizData[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
        score++;
    }
    nextButton.disabled = false;
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
        nextButton.disabled = true;
    } else {
        showResult();
    }
});

function showResult() {
    questionElement.textContent = "Quiz Completed!";
    optionsElement.innerHTML = "";
    nextButton.classList.add("hidden");
    resultElement.classList.remove("hidden");
    scoreElement.textContent = `${score} / ${quizData.length}`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.classList.remove("hidden");
    resultElement.classList.add("hidden");
    loadQuestion();
    nextButton.disabled = true;
}

// Initialize the quiz
loadQuestion();
