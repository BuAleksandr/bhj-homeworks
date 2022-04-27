const cookie = document.getElementById('cookie');
const clickerCounter = document.getElementById('clicker__counter');

cookie.onclick = () => {
  let clicks = clickerCounter.textContent++;
    if (clicks % 2 == 0) {
        cookie.width = 160;
    } else {
        cookie.width = 200;
    }
}
