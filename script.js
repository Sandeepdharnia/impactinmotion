
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

// Slide block from left side of the page
document.addEventListener('DOMContentLoaded', () => {
  const slideInContainers = document.querySelectorAll('.slide-in-container');

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }

  function checkScroll() {
    slideInContainers.forEach(container => {
      const block = container.querySelector('.slide-in-block');
      
      if (block && !block.classList.contains('slide-in-active') && isInViewport(container)) {
        block.classList.add('slide-in-active');
      }
    });
  }

  window.addEventListener('scroll', checkScroll);
  
  checkScroll();
});

// Animate numbers
document.addEventListener('DOMContentLoaded', () => {

  const containers = document.querySelectorAll('.slide-in-container');

  containers.forEach(container => {
    const counters = container.querySelectorAll('.counter');
    let animated = false;

    const targetsMap = {
      // Enter json data here
      'impact-in-figures': [90, 70, 48],
      'women-connect': [36, 15, 90],
    };

    const id = container.dataset.id;
    const targets = targetsMap[id] || [];

    function animateCounters() {
      if (animated) return;

      const rect = container.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        counters.forEach((counter, index) => {
          const target = targets[index] || 0;
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
});