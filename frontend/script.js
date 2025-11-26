const backendURL = "https://my-portfolio-website-tip4.onrender.com";

async function loadProjects() {
    const container = document.getElementById("projects-container");
    container.innerHTML = "⏳ Loading projects...";

    try {
        const response = await fetch(`${backendURL}/projects`);
        const projects = await response.json();

        if (!projects.length) {
            container.innerHTML = "No projects added yet.";
            return;
        }

        container.innerHTML = "";

        projects.forEach(project => {
            container.innerHTML += `
                <div class="project-card">
                    ${
                        project.image_url
                        ? `<img src="${project.image_url}" class="project-image" alt="">`
                        : ""
                    }
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>

                    <div class="project-links">
                        <a href="${project.github}" target="_blank">GitHub</a><br>
                        <a href="${project.live_url}" target="_blank">Live Demo</a>
                    </div>
                </div>
            `;
        });

    } catch (err) {
        container.innerHTML = "⚠ Backend Offline";
    }
}

loadProjects();
