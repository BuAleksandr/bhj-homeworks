const reveals = Array.from(document.querySelectorAll(".reveal"));

const inViewport = function(reveal) {
  const viewportHeight = window.innerHeight;
  const revealTop = reveal.getBoundingClientRect().top;

  return ((revealTop < viewportHeight) && (revealTop > 0)) ? true : false;   
};

function checkReveals () {
  reveals.forEach((reveal) => {
    if (inViewport(reveal)) {
      reveal.classList.add("reveal_active");
    } else {
      reveal.classList.remove("reveal_active");
    }
  })
}

window.onscroll = checkReveals;
