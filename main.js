function setHandlers() {
    // Animate letters
    let textWrapper = document.querySelector('.ml12');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: false}).add({
        targets: '.ml12 .letter',
        translateX: [40,0],
        translateZ: 0,
        opacity: [0,1],
        easing: "easeOutExpo",
        duration: 1200,
        delay: (el, i) => 500 + 30 * i
    });

    // Slide block from left side of the page
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

    // Counters
    const containers = document.querySelectorAll('.slide-in-container');

    containers.forEach(container => {
        const counters = container.querySelectorAll('.counter');
        let animated = false;

        function animateCounters() {
            if (animated) return;

            const rect = container.getBoundingClientRect();

            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                counters.forEach((counter, index) => {
                    const target = counter.dataset.target || 0;

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
}

function renderHtml(data) {
    document.querySelector('.impact_container').innerHTML = '';
    for (let i = 0; i < data.sections.length; i++) {
        let section_data = data.sections[i];
        document.querySelector('.impact_container').insertAdjacentHTML('beforeend', sections_renders[section_data.type](data.year, section_data));
    }
    document.querySelector('.ml12').textContent = 'Impact report ' + data.year; 
    // document.querySelector('.ml12 .year').textContent = data.year;
    setHandlers();
}

function loadData(path) {
    fetch(path)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('JSON data:', data);
        renderHtml(data);
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });
}

window.addEventListener('DOMContentLoaded', () => {
    loadData('./data/2024.json');
});
