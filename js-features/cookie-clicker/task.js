const timer = function () {
  const p = document.getElementById('timer');
  
  p.textContent = Number(p.textContent) - 1;
    if ((p.textContent) <= 0) {
      alert('Вы победили!');
      clearInterval(inervalID);
    } 
  }

const inervalID = setInterval(timer, 1000);
