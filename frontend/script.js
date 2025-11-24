const BACKEND_URL = "https://my-portfolio-website-tip4.onrender.com";

async function loadProjects() {
    const container = document.getElementById("projects-container");
    container.innerHTML = "⏳ Loading projects...";

    try {
        const response = await fetch(`${BACKEND_URL}/projects`);
        
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const projects = await response.json();

        container.innerHTML = "";

        if (projects.length === 0) {
            container.innerHTML = "No projects added yet.";
            return;
        }

        projects.forEach(project => {
            container.innerHTML += `
                <div class="project-card">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <a href="${project.github}" target="_blank">GitHub</a>
                    <a href="${project.live_url}" target="_blank">Live Demo</a>
                </div>
            `;
        });

    } catch (error) {
        container.innerHTML = "⚠ Cannot load projects (Backend Offline)";
        console.error(error);
    }
}

loadProjects();
