const questions = [
    {
        question: "What will be the output of the following Java code?\n\nint x = 5;\nint y = 3;\nSystem.out.println(x / y);",
        options: ["1", "1.0", "2", "Error"],
        answer: "1"
    },
    {
        question: "Which of the following is used to declare a constant in Java?",
        options: ["const", "final", "constant", "immutable"],
        answer: "final"
    },
    {
        question: "What will be the output of the following Java code?\n\nint x = 10;\nif (x == 10) {\n    System.out.println(\"Hello\");\n} else {\n    System.out.println(\"Goodbye\");\n}",
        options: ["Hello", "Goodbye", "Error", "Nothing"],
        answer: "Hello"
    },
    {
        question: "Which method is used to start a thread in Java?",
        options: ["start()", "run()", "begin()", "init()"],
        answer: "start()"
    },
    {
        question: "What is the result of the following Java expression?\n\nint a = 7;\nint b = 2;\nSystem.out.println(a % b);",
        options: ["1", "3", "2", "0"],
        answer: "1"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = "";

function renderQuestion() {
    const questionContainer = document.getElementById('quiz');
    const question = questions[currentQuestionIndex];
    questionContainer.innerHTML = `
        <h3>${question.question}</h3>
        <ul class="options">
            ${question.options.map((option, index) => `
                <li onclick="selectOption(${index})">${option}</li>
            `).join('')}
        </ul>
        <button onclick="submitAnswer()">Submit Answer</button>
    `;
}

function selectOption(index) {
    const question = questions[currentQuestionIndex];
    selectedAnswer = question.options[index];
    const options = document.querySelectorAll('.options li');
    options.forEach(option => {
        option.style.backgroundColor = '';
    });
    options[index].style.backgroundColor = '#eaeaea'; 
}

function submitAnswer() {
    if (selectedAnswer === "") {
        alert("Please select an answer!");
        return; 
    }

    const question = questions[currentQuestionIndex];
    const options = document.querySelectorAll('.options li');
    options.forEach(option => {
        option.style.pointerEvents = 'none'; 
    });

    const selectedOption = Array.from(options).find(option => option.textContent === selectedAnswer);
    if (selectedAnswer === question.answer) {
        selectedOption.style.backgroundColor = '#28a745'; 
        score++;
    } else {
        selectedOption.style.backgroundColor = '#dc3545';
        const correctOption = Array.from(options).find(option => option.textContent === question.answer);
        correctOption.style.backgroundColor = '#28a745'; 
    }
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            renderQuestion();
        } else {
            document.getElementById('showResultBtn').classList.remove('hidden');
        }
    }, 1000); 
}

function showResult() {
    const resultContainer = document.getElementById('result');
    const passFailMessage = document.getElementById('passFailMessage');
    const scoreElement = document.getElementById('score');

    scoreElement.textContent = `You got ${score} out of ${questions.length} correct.`;

    if (score >= 3) {
        passFailMessage.textContent = "Congratulations! You passed the quiz.";
        passFailMessage.style.color = "green";
    } else {
        passFailMessage.textContent = "Try again! You failed the quiz.";
        passFailMessage.style.color = "red";
    }

    resultContainer.classList.remove('hidden');
}

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswer = "";
    renderQuestion();
    const resultContainer = document.getElementById('result');
    resultContainer.classList.add('hidden');
    const options = document.querySelectorAll('.options li');
    options.forEach(option => {
        option.style.backgroundColor = '';
    });

    document.getElementById('showResultBtn').classList.add('hidden');
}

renderQuestion();