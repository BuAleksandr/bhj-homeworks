const widget = document.querySelector('.chat-widget');
const messages = document.querySelector('.chat-widget__messages');
const input = document.getElementById('chat-widget__input');
const answers = [
    'Добрый день!',
    'Добрый день, мы ещё не проснулись. Позвоните через 10 лет',
    'Мы ничего не будем вам продавать!',
    'Добрый день! До свидания!',
    'Кто тут?',
    'К сожалению, все операторы сейчас заняты. Не пишите нам больше',
    'Где ваша совесть?',
    'Вы не купили ни одного товара для того, чтобы так с нами разговаривать!'
];
let timerId;

function inputMessage(e) {
    stopTimer();
    startTimer();
    let index = Math.floor(Math.random() * (answers.length));
    if (e.key === 'Enter' && input.value !== '') {
        messages.innerHTML += '
        <div class="message message_client">
            <div class="message__time">${`${(new Date).getHours()}:${(new Date).getMinutes()}`}</div>
            <div class="message__text">${input.value}</div>
        </div>'
        input.value = '';
        messages.innerHTML += '
        <div class="message">
            <div class="message__time">${`${(new Date).getHours()}:${(new Date).getMinutes()}`}</div>
            <div class="message__text">${answers[index]}</div>
        </div>'
    };
    messages.scrollIntoView(false);
};

function question() {
    if (widget.classList.contains('chat-widget_active')) {
        messages.innerHTML += '
        <div class="message">
            <div class="message__time">${`${(new Date).getHours()}:${(new Date).getMinutes()}`}</div>
            <div class="message__text">Вы еще здесь?</div>
        </div>'
    };
    messages.scrollIntoView(false);
};

function startTimer() {
    return timerId = setTimeout(question, 20000);
};

function stopTimer() {
    return timerId = clearTimeout(timerId);
};

widget.addEventListener('click', () => widget.classList.add('chat-widget_active'));

input.addEventListener('keyup', inputMessage);
