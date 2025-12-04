// Отримуємо посилання на елементи DOM
const body = document.body;
const container = document.querySelector('.container');
const question1Div = document.getElementById('question1');
const question2Div = document.getElementById('question2');
const question3Div = document.getElementById('question3');
const resultDiv = document.getElementById('result');
const finalEmoji = document.getElementById('final-emoji');
const finalImage = document.getElementById('final-image'); // Змінна для тегу <img>

// Функція для переходу до другого запитання
function showQuestion2() {
    question1Div.style.display = 'none'; 
    question2Div.style.display = 'block'; 
}

// Функція для переходу до третього запитання
function showQuestion3() {
    question2Div.style.display = 'none'; 
    question3Div.style.display = 'block'; 
}

// Функція для обробки ФІНАЛЬНОЇ відповіді
function handleFinalResponse(response) {
    // Приховуємо всі робочі блоки
    question1Div.style.display = 'none'; 
    question2Div.style.display = 'none'; 
    question3Div.style.display = 'none'; 
    container.style.display = 'none'; 
    resultDiv.style.display = 'block'; 
    
    // Скидаємо відображення зображення (на випадок повторного виклику)
    finalImage.style.display = 'none';

    if (response === 'yes') {
        // Якщо позитивний фінал
        body.style.backgroundColor = '#ffc0cb'; // Рожевий фон
        finalEmoji.textContent = '❤️'; 
        finalEmoji.style.color = '#e30022'; 
        
        // ВІДОБРАЖЕННЯ ФОТО: ТЕПЕР З РОЗШИРЕННЯМ .HEIC
        finalImage.src = 'IMG_4907.HEIC'; // <-- ВИКОРИСТОВУЄМО ТЕПЕР НОВЕ РОЗШИРЕННЯ
        finalImage.style.display = 'block';

    } else {
        // Якщо негативний фінал
        body.style.backgroundColor = '#000000'; // Чорний фон
        finalEmoji.textContent = '💔'; 
        finalEmoji.style.color = 'white'; 
        // Фото не відображається
    }
}
