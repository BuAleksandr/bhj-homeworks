(() => {
    const choise = document.querySelectorAll('div > .hole');
    for (let i = 0; i < choise.length; i++) {
        choise[i].addEventListener("click", gameFunction);
    }
    function gameFunction() {
        const dead = document.getElementById("dead");
        const lost = document.getElementById("lost");
        if (dead.textContent <= 9 & lost.textContent <= 5) {
            if (this.className == "hole hole_has-mole") {
                dead.textContent++ + 1;
            } else {
                lost.textContent++ + 1;
            }
        } else 
        if (dead.textContent >= 9) {
            alert('Вы выиграли');
            dead.textContent = 0;
            lost.textContent = 0;
        } else if (lost.textContent >= 5){
            alert('Вы проиграли');
            dead.textContent = 0;
            lost.textContent = 0;
        }
    }
    })();
