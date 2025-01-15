let count = 0;
const questions = [
    {
        question: "1. Какое выражение отвечает закону действия масс?",
        options: [
            { value: "1", image: "images/2-1-1.png" },
            { value: "2", image: "images/2-1-2.png" },
            { value: "3", image: "images/2-1-3.png" },
            { value: "4", image: "images/2-1-4.png" }
        ],
        correctAnswer: "1"
    },
    {
        question: "2. Порядок реакции это:",
        options: [
            { value: "1", text: "разность показателей степени для концентрации в уравнении закона действия масс;" },
            { value: "2", text: "число молекул, участвующих в элементарной реакции;" },
            { value: "3", text: "cсумма показателей степени для концентрации в уравнении законадействия масс;" },
            { value: "4", text: "в каком порядке реагируют молекулы." }
        ],
        correctAnswer: "3"
    },
    {
        question: "3.Какая реакция протекает при разложении пероксида водорода:",
        options: [
            { value: "1", image: "images/2-3-1.png" },
            { value: "2", image: "images/2-3-2.png" },
            { value: "3", image: "images/2-3-3.png" },
            { value: "4", image: "images/2-3-4.png" }
        ],
        correctAnswer: "2"
    },
    {
        question: "4. Катализатор-:",
        options: [
            { value: "1", text: "ускоряет скорость химической реакции;" },
            { value: "2", text: "замедляет скорость химической реакции;" },
            { value: "3", text: "не изменяет скорость химической реакции;" },
            { value: "4", text: "сначала ускоряет, а потом замедляет скорость химической реакции." }
        ],
        correctAnswer: "1"
    },
    {
        question: "5. Какое выражение отвечает времени полураспада для реакции первого порядка",
        options: [
            { value: "1", image: "images/2-5-1.png" },
            { value: "2", image: "images/2-5-2.png" },
            { value: "3", image: "images/2-5-3.png" },
            { value: "4", image: "images/2-5-4.png" }
        ],
        correctAnswer: "1"
    },
    {
        question: "6. Укажите факторы, влияющие на скорость химической реакции.",
        options: [
            { value: "1", text: "природа реагирующих веществ, температура, концентрация;" },
            { value: "2", text: "природа вещества, температура;" },
            { value: "3", text: "природа вещества, концентрация;" },
            { value: "4", text: "природа вещества, окраска раствора." }
        ],
        correctAnswer: "1"
    },
    {
        question: "7. Укажите вещество, объем которого определяют в ходе каталитического разложения пероксида водорода:",
        options: [
            { value: "1", image: "images/2-7-1.png" },
            { value: "2", image: "images/2-7-2.png" },
            { value: "3", image: "images/2-7-3.png" },
            { value: "4", image: "images/2-7-4.png" }
        ],
        correctAnswer: "2"
    },
    {
        question: "8. . Во сколько раз увеличится скорость реакции, если температура увеличилась на 30 градусов, а температурный коэффициент равен 2?",
        options: [
            { value: "1", text: "16;" },
            { value: "2", text: "8;" },
            { value: "3", text: "32;" },
            { value: "4", text: "64." }
        ],
        correctAnswer: "2"
    },
    {
        question: "9. Скорость химической реакции лимитируется:",
        options: [
            { value: "1", text: "температурой;" },
            { value: "2", text: "энергией активации;" },
            { value: "3", text: "скоростью распада промежуточного активного комплекса;" },
            { value: "4", text: "концентрацией." }
        ],
        correctAnswer: "3"
    },
    {
        question: "10. Цепная реакция может быть:",
        options: [
            { value: "1", text: "с постоянной цепью;" },
            { value: "2", text: "с замкнутой цепью;" },
            { value: "3", text: "со свободно-радикальной цепью;" },
            { value: "4", text: "с разветвленной цепью." }
        ],
        correctAnswer: "4"
    }
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const questionDiv = document.getElementById('question');
    const optionsDiv = document.getElementById('options');
    
    const currentQuestion = questions[currentQuestionIndex];
    
    questionDiv.textContent = currentQuestion.question;
    
    optionsDiv.innerHTML = '';
    
    currentQuestion.options.forEach(option => {
        const label = document.createElement('label');
        
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'answer';
        input.value = option.value;

        if (option.image) {
            const img = document.createElement('img');
            img.src = option.image;
            img.alt = option.value.toUpperCase();
            img.className = 'option-image';
            label.appendChild(input);
            label.appendChild(img);
        } else {
            label.appendChild(input);
            label.appendChild(document.createTextNode(option.text));
        }

        optionsDiv.appendChild(label);
    });
}

function checkAnswer() {
    const options = document.getElementsByName('answer');
    let selectedAnswer = null;

    for (const option of options) {
        if (option.checked) {
            selectedAnswer = option.value;
            break;
        }
    }

    const resultDiv = document.getElementById('result');
    
    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
        resultDiv.textContent = 'Правильно!';
        resultDiv.style.color = 'green';
        count++;
    } else if (selectedAnswer) {
        resultDiv.textContent = 'Неправильно!';
        // Правильный ответ - ' + questions[currentQuestionIndex].correctAnswer.toUpperCase() + '.'
        resultDiv.style.color = 'red';
    } else {
        resultDiv.textContent = 'Пожалуйста, выберите ответ.';
        resultDiv.style.color = 'orange';
    }

    document.getElementById('submit').style.display = 'none';
    document.getElementById('next').style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        
        document.getElementById('result').textContent = '';
        document.getElementById('submit').style.display = 'block';
        document.getElementById('next').style.display = 'none';
        
        // Сброс выбора
        const options = document.getElementsByName('answer');
        for (const option of options) {
            option.checked = false;
        }
        
    } else {
        // Завершение теста
        document.getElementById('question').textContent = 'Тест завершен!';
        document.getElementById('options').innerHTML = '';
        document.getElementById('submit').style.display = 'none';
        document.getElementById('next').style.display = 'none';
        
        // Здесь можно добавить логику для отображения результатов теста
        document.getElementById('result').textContent = 'Всего правильных ответов: ' + count;
        document.getElementById('result').style.color = 'green';
    }
}

// Загрузить первый вопрос при загрузке страницы
window.onload = loadQuestion;


function loadQuestion() {
    const questionDiv = document.getElementById('question');
    const optionsDiv = document.getElementById('options');
    
    const currentQuestion = questions[currentQuestionIndex];
    
    questionDiv.textContent = currentQuestion.question;
    
    optionsDiv.innerHTML = '';
    
    currentQuestion.options.forEach(option => {
        const label = document.createElement('label');
        
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'answer';
        input.value = option.value;

        // Добавляем обработчик события для выбора ответа
        label.addEventListener('click', () => {
            // Убираем выделение со всех вариантов
            const allLabels = optionsDiv.getElementsByTagName('label');
            for (const lbl of allLabels) {
                lbl.classList.remove('selected');
            }
            // Добавляем выделение к текущему
            label.classList.add('selected');
        });

        if (option.image) {
            const img = document.createElement('img');
            img.src = option.image;
            img.alt = option.value.toUpperCase();
            img.className = 'option-image';
            label.appendChild(input);
            label.appendChild(img);
        } else {
            label.appendChild(input);
            label.appendChild(document.createTextNode(option.text));
        }

        optionsDiv.appendChild(label);
    });
}
