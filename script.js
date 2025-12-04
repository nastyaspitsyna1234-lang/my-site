// Отримуємо посилання на елементи DOM
const body = document.body;
const container = document.querySelector('.container');
const question1Div = document.getElementById('question1');
const question2Div = document.getElementById('question2');
const resultDiv = document.getElementById('result');
const finalEmoji = document.getElementById('final-emoji');

// Функція для переходу до другого запитання
function showQuestion2() {
    question1Div.style.display = 'none'; // Приховуємо перше запитання
    question2Div.style.display = 'block'; // Показуємо друге запитання
}

// Функція для обробки фінальної відповіді
function handleResponse(response) {
    question2Div.style.display = 'none'; // Приховуємо друге запитання
    container.style.display = 'none'; // Приховуємо контейнер з текстом
    resultDiv.style.display = 'block'; // Показуємо результат

    if (response === 'yes') {
        // Якщо обрано 'так': світло-рожевий фон та ❤️
        body.style.backgroundColor = '#ffc0cb'; 
        finalEmoji.textContent = '❤️'; 
        finalEmoji.style.color = '#e30022'; // Червоний смайлик
    } else {
        // Якщо обрано 'ні': чорний фон та 💔
        body.style.backgroundColor = '#000000'; 
        finalEmoji.textContent = '💔'; 
        finalEmoji.style.color = 'white'; // Робимо смайлик білим на чорному фоні
    }
}
