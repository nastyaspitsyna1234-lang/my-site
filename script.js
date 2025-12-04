// Отримуємо посилання на елементи DOM
const body = document.body;
const container = document.querySelector('.container');
const question1Div = document.getElementById('question1');
const question2Div = document.getElementById('question2');
const question3Div = document.getElementById('question3'); // НОВЕ посилання
const resultDiv = document.getElementById('result');
const finalEmoji = document.getElementById('final-emoji');

// Функція для переходу до другого запитання
function showQuestion2() {
    question1Div.style.display = 'none'; 
    question2Div.style.display = 'block'; 
}

// НОВА Функція для переходу до третього запитання
function showQuestion3() {
    question2Div.style.display = 'none'; // Приховуємо друге запитання
    question3Div.style.display = 'block'; // Показуємо третє запитання
}

// Функція для обробки ФІНАЛЬНОЇ відповіді
function handleFinalResponse(response) {
    // Приховуємо всі робочі блоки
    question1Div.style.display = 'none'; 
    question2Div.style.display = 'none'; 
    question3Div.style.display = 'none'; 
    container.style.display = 'none'; 
    resultDiv.style.display = 'block'; // Показуємо результат

    if (response === 'yes') {
        // Якщо відповідь веде до позитивного фіналу: рожевий фон та ❤️
        body.style.backgroundColor = '#ffc0cb'; 
        finalEmoji.textContent = '❤️'; 
        finalEmoji.style.color = '#e30022'; 
    } else {
        // Якщо відповідь веде до негативного фіналу: чорний фон та 💔
        body.style.backgroundColor = '#000000'; 
        finalEmoji.textContent = '💔'; 
        finalEmoji.style.color = 'white'; 
    }
}
