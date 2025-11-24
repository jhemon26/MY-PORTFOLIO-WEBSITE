const API_URL = "https://my-portfolio-website-tip4.onrender.com";

async function loadProjects() {
    const res = await fetch(`${API_URL}/projects`);
    const projects = await res.json();

    const container = document.getElementById("projects");
    container.innerHTML = "";

    projects.forEach(p => {
        const card = document.createElement("div");
        card.className = "project-card";

        card.innerHTML = `
            <h2>${p.title}</h2>
            <p>${p.description}</p>
            <p>
                <a href="${p.github}" target="_blank">GitHub</a> | 
                <a href="${p.live_url}" target="_blank">Live Demo</a>
            </p>
            <img src="${p.image_url}" width="300">
        `;

        container.appendChild(card);
    });
}

loadProjects();
