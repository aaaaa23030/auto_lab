let count = 0;
const questions = [
    {
        question: "1. Какое выражение отвечает определению скорости химической реакции?",
        options: [
            { value: "1", image: "images/1-1.png" },
            { value: "2", image: "images/1-2.png" },
            { value: "3", image: "images/1-3.png" },
            { value: "4", image: "images/1-4.png" }
        ],
        correctAnswer: "4"
    },
    {
        question: "2.Что является измеряемым параметром в работе по определению энергии активации каталитического разложения пероксида водорода?",
        options: [
            { value: "1", text: "потенциал" },
            { value: "2", text: "масса" },
            { value: "3", text: "ток" },
            { value: "4", text: "объём" }
        ],
        correctAnswer: "1"
    },
    {
        question: "3. Скорость реакции зависит от:",
        options: [
            { value: "1", text: "концентрации, температуры, природы реагирующих веществ и наличия катализатора;" },
            { value: "2", text: "теплоемкости" },
            { value: "3", text: "природы реагирующих веществ;" },
            { value: "4", text: "природы ингибитора" }
        ],
        correctAnswer: "1"
    },
    {
        question: "4. Константа скорости химической реакции это…",
        options: [
            { value: "1", text: "скорость химической реакции при единичной концентрации реагирующих веществ;" },
            { value: "2", text: "постоянная скорость реакции;" },
            { value: "3", text: "скорость химической реакции при равной концентрации реагирующих веществ;" },
            { value: "4", text: "сумма показателей степени для концентраций реагирующих веществ." }
        ],
        correctAnswer: "1"
    },
    {
        question: "5. Молекулярность реакции это-",
        options: [
            { value: "1", text: "число молекул участвующих в элементарной реакции;" },
            { value: "2", text: "количество веществ участвующих в реакции;" },
            { value: "3", text: "количество молекул, сталкивающихся за одну секунду;" },
            { value: "4", text: "число продуктов реакции." }
        ],
        correctAnswer: "1"
    },
    {
        question: "6. Какое выражение соответствует кинетическому уравнению реакции первого порядка?",
        options: [
            { value: "1", image: "images/6-1.png" },
            { value: "2", image: "images/6-2.png" },
            { value: "3", image: "images/6-3.png" },
            { value: "4", image: "images/6-4.png" }
        ],
        correctAnswer: "3"
    },
    {
        question: "7. Катализатор:",
        options: [
            { value: "1", text: "изменяет скорость диффузии исходных веществ;" },
            { value: "2", text: "не реагирует с исходными веществами;" },
            { value: "3", text: "реагирует с исходными веществами;" },
            { value: "4", text: "реагирует с продуктами реакции" }
        ],
        correctAnswer: "3"
    },
    {
        question: "8. При увеличении температуры на 10 градусов скорость реакции увеличивается.",
        options: [
            { value: "1", text: "в 2- 4 раза;" },
            { value: "2", text: "в 10 раз;" },
            { value: "3", text: "в 30 раз;" },
            { value: "4", text: "в 5-6 раз" }
        ],
        correctAnswer: "1"
    },
    {
        question: "9. Характерная особенность свободных радикалов это наличие.",
        options: [
            { value: "1", text: "химической связи;" },
            { value: "2", text: "квантового выхода;" },
            { value: "3", text: "не спаренного электрона" },
            { value: "4", text: "диффузии молекул." }
        ],
        correctAnswer: "3"
    },
    {
        question: "10. Скорость цепной реакции может зависеть:",
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
