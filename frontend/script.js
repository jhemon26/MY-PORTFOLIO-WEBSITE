const backendURL = "https://my-portfolio-website-tip4.onrender.com";

async function loadProjects() {
    const container = document.getElementById("projects-container");

    try {
        const response = await fetch(`${backendURL}/projects`);
        if (!response.ok) throw new Error("Backend error");

        const projects = await response.json();
        container.innerHTML = "";

        if (projects.length === 0) {
            container.innerHTML = "<p>No projects added yet.</p>";
            return;
        }

        projects.forEach(p => {
            const div = document.createElement("div");
            div.classList.add("project-card");

            div.innerHTML = `
                <h3>${p.title}</h3>
                <p>${p.description}</p>
                <a href="${p.github}" target="_blank">GitHub</a> |
                <a href="${p.live_url}" target="_blank">Live Demo</a>
            `;

            container.appendChild(div);
        });

    } catch (err) {
        container.innerHTML = `<p style="color:red;">⚠ Backend Offline or Not Reachable</p>`;
    }
}

loadProjects();
