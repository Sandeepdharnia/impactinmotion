var Report = {
    currentJSON: {},
    currentJSONString: '',
    schemaJSON: {},
    schemaJSONString: '',
    editor: null
}

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
    const containers = document.querySelectorAll('.slide-in-container, .static-container');

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

function renderHtml() {
    let data = Report.currentJSON;
    document.querySelector('.impact_container').innerHTML = '';
    for (let i = 0; i < data.sections.length; i++) {
        let section_data = data.sections[i];
        document.querySelector('.impact_container').insertAdjacentHTML('beforeend', sections_renders[section_data.type](data.year, section_data));
    }
    document.querySelector('.ml12').textContent = 'Impact report ' + data.year; 
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
        Report.currentJSON = data;
        renderHtml();
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });
}

function openEditor() {
    Report.editor.set(Report.currentJSON);
    document.getElementById('jsoneditor-container').style.display = 'grid';
}

function closeEditor() {
    document.getElementById('jsoneditor-container').style.display = 'none';
}

function applyEditor() {
    Report.currentJSON = Report.editor.get()
    renderHtml();
    closeEditor();
}

function saveEditor() {
    let fname = window.prompt("Save as...")

    if (fname.indexOf(".") === -1) {
      fname = fname + ".json"
    } else {
      if (fname.split('.').pop().toLowerCase() === "json") {
        // Nothing to do
      } else {
        fname = fname.split('.')[0] + ".json"
      }
    }
    const blob = new Blob([Report.editor.getText()], {type: 'application/json;charset=utf-8'})
    saveAs(blob, fname)
}

window.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById("jsoneditor");
    const options = {
        schema: {},
        mode: 'code',
        modes: ['code', 'tree', 'preview']
    }
    Report.editor = new JSONEditor(container, options);

    const fileInput = document.getElementById('fileInput');
    const openFileBtn = document.getElementById('openFileBtn');

    openFileBtn.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            const fileContent = e.target.result;
            console.log("File content loaded:", fileContent);
            Report.currentJSON = JSON.parse(fileContent);
            Report.editor.set(Report.currentJSON);
        };
        reader.readAsText(file);
    });

    fetch('schema/report.schema.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('schema JSON data:', data);
        Report.schemaJSON = data;
        Report.editor.setSchema(data);
    })
    .catch(error => {
        console.error('Fetch error:', error);
    });

    loadData('./data/2025.json');
});
