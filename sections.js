var sections_renders = {}

sections_renders.integration_numbers = function(year, data) {
    return `
    <div class="slide-in-container">
        <div class="slide-in-block">
            <div class="slide-in-content">
                <h2>Impact in Figures <span class="year">${year}</span></h2>
                <ul class="impact-container">
                    <li class="impact-item">
                        <div>
                            <p class="impact-counter">
                                <span class="counter" data-target="${data.internship_placement_rate}">0</span>%
                            </p>
                            <p>Placement Rate</p>
                            <img src="./src/assets/images/Powercoders_Icons_neg_ImpactLab.png" alt="Powercoders_Icons">
                        </div>
                    </li>
                    <li class="impact-item">
                        <div>
                            <p class="impact-counter">
                                <span class="counter" data-target="${data.employment_probability}">0</span>%
                            </p>
                            <p>Higher employment probability</p>
                            <img src="./src/assets/images/Powercoders_Icons_neg_Participants.png" alt="Powercoders_Icons">
                        </div>
                    </li>
                    <li class="impact-item">
                        <div>
                            <p class="impact-counter">
                                <span class="counter" data-target="${data.integration_rate}">0</span>%
                            </p>
                            <p>Integration Rate</p>
                            <img src="./src/assets/images/Powercoders_Icons_Decision_neg-04.png" alt="Powercoders_Icons">
                        </div>
                    </li>
                </ul>
                <div class="impact-images_container">
                    <img src="./src/assets/images/20220420_A11y-Workshop_Powercoders-19-scaled.jpeg" alt="Bootcamp image">
                    <img src="./src/assets/images/20220420_A11y-Workshop_Powercoders-44-scaled.jpeg" alt="Bootcamp image">
                </div>
            </div>
        </div>
    </div>`;
}

sections_renders.partners = function(year, data) {
    let partners_logos = [];
    for (let i = 0; i < data.partners.length; i++) {
        partners_logos.push(`<img src="${data.partners[i].logo_path}" alt="${data.partners[i].name} logo" />`);
    }

    return `
    <div class="partners-section">
        <h2>Internship Partners</h2>
        <div class="marquee">
            <div class="marquee-content">
                ${partners_logos.join('')}
            </div>
        </div>
    </div>`;
}
