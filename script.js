
// Animate letters
let textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  });

document.addEventListener('DOMContentLoaded', () => {
  const slideInContainer = document.querySelector('.slide-in-container');
  const slideInBlock = document.querySelector('.slide-in-block');

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }

  function checkScroll() {
    if (isInViewport(slideInContainer)) {
      slideInBlock.classList.add('slide-in-active');
      window.removeEventListener('scroll', checkScroll);
    }
  }

  window.addEventListener('scroll', checkScroll);
  
  checkScroll();
});

 document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    let animated = false;

    function animateCounters() {
      if (animated) return;

      const container = document.querySelector('.impact-container');
      const rect = container.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        counters.forEach((counter, index) => {
          
          // Enter json data here
          const targets = [90, 70, 48];
          counter.dataset.target = targets[index];

          const target = +counter.dataset.target;
          const isPercent = counter.textContent.includes('%');
          let count = 0;
          const increment = target / 300;

          const updateCount = () => {
            count += increment;
            if (count < target) {
              counter.textContent = Math.floor(count);
              requestAnimationFrame(updateCount);
            } else {
              counter.textContent = target;
            }
          };

          updateCount();
        });
        animated = true;
      }
    }

    window.addEventListener('scroll', animateCounters);
    animateCounters();
  });