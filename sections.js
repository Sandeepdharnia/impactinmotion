var sections_renders = {}

sections_renders.impact_section = function(year, data) {
    return `
    <div class="impact_section">
        <h2>Impact</h2>
        <p>We are an impact-driven organization and therefore prioritize making a positive impact in the world. 
          We collaborate with other organizations to achieve our goals and jointly work towards achieving the Sustainable Development Goals.
        </p>
        <p>We focus on “Quality Education”, “Decent Work” and “Reduced Inequalities” from the Sustainable Development Goals Agenda 2030.</p>
    </div>`;
}

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

sections_renders.future_talents = function(year, data) {
    return `
    <div class="static-container" data-id="future-talents">
        <div class="static-block">
          <div class="static-content">
            <h2>Future talents</h2>
            <p class="slide-in_description">
              ${data.future_talents_description}
            </p>
                <ul class="impact-container">
                    <li class="impact-item item-without_number">
                    <div>
                        <p class="women-connect_subtext">${data.future_talents_location}</p>
                        <img src="./src/assets/images/Powercoders_Icons_Whatexpect-02-300x300.png" alt="Powercoders_Icons">
                    </div>
                    </li>
                    <li class="impact-item">
                    <div>
                        <p class="impact-counter">
                            <span class="counter" data-target="${data.future_talents_participants}">0</span>
                        </p>
                        <p class="women-connect_subtext">Teenagers took part</p>
                        <img src="./src/assets/images/Powercoders_Icons_Mission.png" alt="Powercoders_Icons">
                    </div>
                    </li>
                    <li class="impact-item">
                    <div>
                        <p class="impact-counter">
                            <span class="counter" data-target="${data.secured_apprenticeships}">0</span>
                        </p>
                        <p class="women-connect_subtext">out of them secured an apprenticeship so far</p>
                        <img src="./src/assets/images/Powercoders_Icons_WhatWeProvide-21-300x300.png" alt="Powercoders_Icons">
                    </div>
                    </li>
                </ul>
                <div class="bootcamp_grid-container">
                    <img src="./src/assets/images/FutureCoders-26-scaled-e1665739372671.jpg" alt="Career Day image">
                    <img src="./src/assets/images/futurecoders-participants-1.jpg" alt="Career Day image">
                </div>
            </div>
        </div>
    </div>`;
}

sections_renders.women_connect = function(year, data) {
    return `
    <div class="slide-in-container women-connect-container" data-id="women-connect">
        <div class="slide-in-block">
          <div class="slide-in-content">
            <h2>Women Connect</h2>
            <p class="slide-in_description">
              ${data.women_connect_description}
            </p>
            <div class="women-connect_flex-container">
                <ul class="impact-container">
                    <li class="impact-item">
                        <div>
                            <p class="impact-counter">
                                <span class="counter" data-target="${data.female_participants}">0</span>
                            </p>
                            <p class="women-connect_subtext">Female Participants</p>
                            <img src="./src/assets/images/Powercoders_Icons_Whatexpect-02-300x300.png" alt="Powercoders_Icons">
                        </div>
                    </li>
                    <li class="impact-item">
                        <div>
                            <p class="impact-counter">
                                <span class="counter" data-target="${data.workshop_leaders}">0</span>
                            </p>
                            <p class="women-connect_subtext">Female workshop leaders</p>
                            <img src="./src/assets/images/Powercoders_Icons_Mission.png" alt="Powercoders_Icons">
                        </div>
                    </li>
                    <li class="impact-item">
                        <div>
                            <p class="impact-counter">
                                <span class="counter" data-target="${data.female_impact}">0</span>%
                            </p>
                            <p class="women-connect_subtext">${data.female_impact_description}</p>
                            <img src="./src/assets/images/Powercoders_Icons_WhatWeProvide-21-300x300.png" alt="Powercoders_Icons">
                        </div>
                    </li>
                </ul>
              <div>
                <img src="./src/assets/images/19-03-Powercoders-Grauduationparty-Basel-058-klein-scaled.jpeg" alt="Powercoders_Icons">
              </div>
            </div>
          </div>
        </div>
    </div>`;
}

sections_renders.futurecoders = function(year, data) {
    return `
    <div class="static-container" data-id="future-talents">
        <div class="static-block">
          <div class="static-content">
            <h2>Futurecoders</h2>
            <p class="slide-in_description">
              ${data.futurecoders_description}
            </p>
                <ul class="impact-container">
                    <li class="impact-item">
                        <div>
                            <p class="impact-counter">
                                <span class="counter" data-target="${data.futurecoders_graduates}">0</span>
                            </p>
                            <p class="women-connect_subtext">Graduates</p>
                            <img src="./src/assets/images/Powercoders_Icons_Mission.png" alt="Powercoders_Icons">
                        </div>
                    </li>
                    <li class="impact-item">
                        <div>
                            <p class="impact-counter">
                                <span class="counter" data-target="${data.futurecoders_average_age}">0</span>
                            </p>
                            <p class="women-connect_subtext">Years old on average</p>
                            <img src="./src/assets/images/Powercoders_Icons_Mission.png" alt="Powercoders_Icons">
                        </div>
                    </li>
                    <li class="impact-item">
                        <div>
                            <p class="impact-counter">
                                <span class="counter" data-target="${data.futurecoders_trial_days}">0</span>
                            </p>
                            <p class="women-connect_subtext">${data.futurecoders_trial_days_description}</p>
                            <img src="./src/assets/images/Powercoders_Icons_WhatWeProvide-21-300x300.png" alt="Powercoders_Icons">
                        </div>
                    </li>
                </ul>
                <div class="impact-images_container">
                    <img src="./src/assets/images/girl-coding-w_1848-1536x1536.jpg" alt="Career Day image">
                    <img src="./src/assets/images/futurecoders-participants-5.jpg" alt="Career Day image">
                </div>
            </div>
        </div>
    </div>`;
}

sections_renders.bootcamp = function(year, data) {
    return `
    <div class="slide-in-container" data-id="bootcamp">
        <div class="slide-in-block">
            <div class="slide-in-content">
                <h2>Bootcamp <span class="year">${year}</span></h2>
                <p class="slide-in_description">
                ${data.bootcamp_description}
                </p>
                <ul class="impact-container">
                    <li class="impact-item">
                        <div>
                            <p class="impact-counter">
                                <span class="counter" data-target="${data.spring_participants}">0</span>
                            </p>
                            <p>In spring</p>
                            <img src="./src/assets/images/Powercoders_Icons_neg_ImpactLab.png" alt="Powercoders_Icons">
                        </div>
                    </li>
                    <li class="impact-item">
                        <div>
                            <p class="impact-counter">
                                <span class="counter" data-target="${data.fall_participants}">0</span>
                            </p>
                            <p>In fall</p>
                            <img src="./src/assets/images/Powercoders_Icons_neg_Participants.png" alt="Powercoders_Icons">
                        </div>
                    </li>
                    <li class="impact-item">
                        <div>
                            <p class="impact-counter">
                                <span class="counter" data-target="${data.internship_placements}">0</span>
                            </p>
                            <p>Placed in internships</p>
                            <img src="./src/assets/images/Powercoders_Icons_Decision_neg-04.png" alt="Powercoders_Icons">
                        </div>
                    </li>
                </ul>
                <div class="bootcamp_grid-container">
                    <img src="./src/assets/images/00763CareerDay-Deutschschweiz-25-Pano-S.jpg" alt="Career Day image">
                    <img src="./src/assets/images/01715Powercoders-CareerDay-25_1-Romandie(20250507-110740)-S.jpg" alt="Career Day image">
                </div>
            </div>
        </div>
    </div>`;
}

sections_renders.community = function(year, data) {
    return `
    <div class="static-container" data-id="future-talents">
        <div class="static-block">
          <div class="static-content">
            <h2>Community</h2>
            <p class="slide-in_description">
              ${data.community_description}
            </p>
                <ul class="impact-container">
                    <li class="impact-item">
                        <div>
                            <p class="impact-counter">
                                <span class="counter" data-target="${data.community_job_coaches}">0</span>
                            </p>
                            <p class="women-connect_subtext">Volunteer Job Coaches</p>
                            <img src="./src/assets/images/Powercoders_Icons_Mission.png" alt="Powercoders_Icons">
                        </div>
                    </li>
                    <li class="impact-item">
                        <div>
                            <p class="impact-counter">
                                <span class="counter" data-target="${data.community_it_trainers}">0</span>
                            </p>
                            <p class="women-connect_subtext">Volunteer IT Trainers</p>
                            <img src="./src/assets/images/Powercoders_Icons_Mission.png" alt="Powercoders_Icons">
                        </div>
                    </li>
                    <li class="impact-item">
                        <div>
                            <p class="impact-counter">
                                <span class="counter" data-target="${data.community_members}">0</span>
                            </p>
                            <p class="women-connect_subtext">${data.community_members_description}</p>
                            <img src="./src/assets/images/Powercoders_Icons_WhatWeProvide-21-300x300.png" alt="Powercoders_Icons">
                        </div>
                    </li>
                </ul>
                <div class="impact-images_container">
                    <img src="./src/assets/images/Community_Party_1.png" alt="Career Day image">
                    <img src="./src/assets/images/Community_Party_2.png" alt="Career Day image">
                </div>
            </div>
        </div>
    </div>`;
}

sections_renders.overview = function(year, data) {
    return `
    <div class="slide-in-container women-connect-container" data-id="women-connect">
        <div class="slide-in-block">
          <div class="slide-in-content">
            <h2>${data.overview_years} years in a nutshell</h2>
            <p class="slide-in_description">
              ${data.overview_description}
            </p>
            <div class="women-connect_flex-container">
                <ul class="impact-container">
                    <li class="impact-item">
                        <div>
                            <p class="impact-counter">
                                <span class="counter" data-target="${data.bootcamp_participants}">0</span>${data.bootcamp_participants_percentage}
                            </p>
                            <p class="women-connect_subtext">${data.bootcamp_participants_description}</p>
                            <img src="./src/assets/images/Powercoders_Icons_Whatexpect-02-300x300.png" alt="Powercoders_Icons">
                        </div>
                    </li>
                    <li class="impact-item">
                        <div>
                            <p class="impact-counter">
                                <span class="counter" data-target="${data.bootcamp_graduates}">0</span>
                            </p>
                            <p class="women-connect_subtext">Bootcamp graduates</p>
                            <img src="./src/assets/images/Powercoders_Icons_Whatexpect-02-300x300.png" alt="Powercoders_Icons">
                        </div>
                    </li>
                    <li class="impact-item">
                        <div>
                            <p class="impact-counter">
                                <span class="counter" data-target="${data.internship_companies}">0</span>
                            </p>
                            <p class="women-connect_subtext">Internship companies</p>
                            <img src="./src/assets/images/Powercoders_Icons_Mission.png" alt="Powercoders_Icons">
                        </div>
                    </li>
                    <li class="impact-item">
                        <div>
                            <p class="impact-counter">
                                <span class="counter" data-target="${data.career_days}">0</span>
                            </p>
                            <p class="women-connect_subtext">Career days</p>
                            <img src="./src/assets/images/Powercoders_Icons_WhatWeProvide-21-300x300.png" alt="Powercoders_Icons">
                        </div>
                    </li>
                </ul>
              <div>
                <img src="${data.overview_image}" alt="Powercoders_Icons">
              </div>
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
