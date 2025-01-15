let count = 0;
const questions = [
    {
        question: "1. Как называется раздел химии, изучающей скорость химической реакции?",
        options: [
            { value: "1", text: "электропроводность растворов;" },
            { value: "2", text: "кинетика и катализ;" },
            { value: "3", text: "растворы;" },
            { value: "4", text: "дисперсные системы" }
        ],
        correctAnswer: "2"
    },
    {
        question: "2.Какова молекулярность реакции разложения Н₂О₂ =Н₂О+1/2О₂?",
        options: [
            { value: "1", text: "двухмолекулярная;" },
            { value: "2", text: "тримолекулярная;" },
            { value: "3", text: "мономолекулярная;" },
            { value: "4", text: "многомолекулярная." }
        ],
        correctAnswer: "3"
    },
    {
        question: "3. Во сколько раз увеличится скорость реакции, если температура увеличилась на 30 градусов, а температурный коэффициент равен 2?",
        options: [
            { value: "1", text: "16;" },
            { value: "2", text: "8;" },
            { value: "3", text: "32;" },
            { value: "4", text: "64." }
        ],
        correctAnswer: "2"
    },
    {
        question: "4. Скорость химической реакции -это?",
        options: [
            { value: "1", text: "изменение концентрации за единицу времени в единице объема;" },
            { value: "2", text: "изменение концентрации за одну секунду;" },
            { value: "3", text: "время проведения реакции;" },
            { value: "4", text: "изменение концентрации в одном литре." }
        ],
        correctAnswer: "1"
    },
    {
        question: "5. Скорость химической реакции лимитируется:",
        options: [
            { value: "1", text: "температурой;" },
            { value: "2", text: "энергией активации;" },
            { value: "3", text: "скоростью распада промежуточного активного комплекса;" },
            { value: "4", text: "концентрацией." }
        ],
        correctAnswer: "3"
    },
    {
        question: "6. Какое выражение отвечает времени полураспада для реакции первого порядка",
        options: [
            { value: "1", image: "images/4-6-1.png" },
            { value: "2", image: "images/4-6-2.png" },
            { value: "3", image: "images/4-6-3.png" },
            { value: "4", image: "images/4-6-4.png" }
        ],
        correctAnswer: "1"
    },
    {
        question: "7. Чем является К₂Cr₂O₇ в реакции разложения пероксида водорода?",
        options: [
            { value: "1", text: "катализатором;" },
            { value: "2", text: "ингибитором;" },
            { value: "3", text: "ничем не является;" },
            { value: "4", text: "исходным веществом." }
        ],
        correctAnswer: "1"
    },
    {
        question: "8. Какое выражение соответствует кинетическому уравнению реакции первого порядка?",
        options: [
            { value: "1", text: "в 2- 4 раза;" },
            { value: "2", text: "в 10 раз;" },
            { value: "3", text: "в 30 раз;" },
            { value: "4", text: "в 5-6 раз" }
        ],
        correctAnswer: "3"
    },
    {
        question: "9. Катализ может быть",
        options: [
            { value: "1", text: "быстрым;" },
            { value: "2", text: "активным;" },
            { value: "3", text: "гетерогенным;" },
            { value: "4", text: "цепным." }
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
