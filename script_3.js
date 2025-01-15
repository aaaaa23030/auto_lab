let count = 0;
const questions = [
    {
        question: "1. Энергия активации это:",
        options: [
            { value: "1", text: "энергия избыточная по сравнению со средней энергией молекул;" },
            { value: "2", text: "средняя энергия молекул;" },
            { value: "3", text: "энергия молекул в электрическом поле;" },
            { value: "4", text: "энергия молекул в магнитном поле." }
        ],
        correctAnswer: "1"
    },
    {
        question: "2. При столкновении реагируют:",
        options: [
            { value: "1", text: "все молекулы;" },
            { value: "2", text: "только самые медленные молекулы;" },
            { value: "3", text: "только активные молекулы;" },
            { value: "4", text: "половина молекул." }
        ],
        correctAnswer: "3"
    },
    {
        question: "3.Зависимость скорости реакции от температуры –правило Вант- Гоффа:",
        options: [
            { value: "1", image: "images/3-3-1.png" },
            { value: "2", image: "images/3-3-2.png" },
            { value: "3", image: "images/3-3-3.png" },
            { value: "4", image: "images/3-3-4.png" }
        ],
        correctAnswer: "3"
    },
    {
        question: "4. Какова размерность энергии активации?",
        options: [
            { value: "1", text: "Дж;" },
            { value: "2", text: "Дж/моль;" },
            { value: "3", text: "моль;" },
            { value: "4", text: "мл." }
        ],
        correctAnswer: "2"
    },
    {
        question: "5. Катализ может быть",
        options: [
            { value: "1", text: "быстрым;" },
            { value: "2", text: "активным;" },
            { value: "3", text: "гомогенным;" },
            { value: "4", text: "цепным." }
        ],
        correctAnswer: "3"
    },
    {
        question: "6. Причина катализа.",
        options: [
            { value: "1", text: "образование промежуточного активного комплекса;" },
            { value: "2", text: "адсорбция;" },
            { value: "3", text: "диффузия;" },
            { value: "4", text: "теплопроводность" }
        ],
        correctAnswer: "1"
    },
    {
        question: "7. Укажите катализатор реакции разложения пероксида водорода ?",
        options: [
            { value: "1", image: "images/3-7-1.png" },
            { value: "2", image: "images/3-7-2.png" },
            { value: "3", image: "images/3-7-3.png" },
            { value: "4", image: "images/3-7-4.png" }
        ],
        correctAnswer: "3"
    },
    {
        question: "8. Уравнение Аррениуса это...",
        options: [
            { value: "1", image: "images/3-8-1.png" },
            { value: "2", image: "images/3-8-2.png" },
            { value: "3", image: "images/3-8-3.png" },
            { value: "4", image: "images/3-8-4.png" }
        ],
        correctAnswer: "1"
    },
    {
        question: "9. Во сколько раз увеличится скорость реакции, если температура увеличилась на 20 градусов, а температурный коэффициент равен 3?",
        options: [
            { value: "1", text: "16;" },
            { value: "2", text: "8;" },
            { value: "3", text: "32;" },
            { value: "4", text: "9" }
        ],
        correctAnswer: "4"
    },
    {
        question: "10. Скорость цепной реакции может зависеть от:",
        options: [
            { value: "1", text: "диффузии ;" },
            { value: "2", text: "адсорбции;" },
            { value: "3", text: "абсорбции;" },
            { value: "4", text: "формы и материала стенок реактора." }
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
