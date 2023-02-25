// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const counterValue = {
    value: 0,
    increment() { this.value += 1; },
    decrement() { this.value -= 1; },
} ;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

decrementBtn.addEventListener('click', function () {
    counterValue.decrement();
    valueEl.textContent = counterValue.value
});

incrementBtn.addEventListener('click', function () {
    counterValue.increment();
    valueEl.textContent = counterValue.value
});

