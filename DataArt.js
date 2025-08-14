fetch("java0.5.js")
document.addEventListener("DOMContentLoaded", () => {
    const timelineContainer = document.querySelector(".timeline");
    const modal = document.createElement("div");

    // Modal HTML
    modal.id = "modal";
    modal.style.display = "none";
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.backgroundColor = "rgba(0,0,0,0.7)";
    modal.style.zIndex = "1000";
    modal.innerHTML = `
        <div style="background:#1E1E1E; padding:20px; margin:100px auto; width:500px; border-radius:15px; color:white; position:relative;">
            <span id="closeModal" style="position:absolute; top:10px; right:15px; font-size:22px; cursor:pointer;">&times;</span>
            <h2 id="modalYear"></h2>
            <h3 id="modalAchievement"></h3>
            <p id="modalDescription"></p>
            <a id="modalLink" href="" style="color:#0856CC;">Read More</a>
        </div>
    `;
    document.body.appendChild(modal);

    const modalYear = document.getElementById("modalYear");
    const modalAchievement = document.getElementById("modalAchievement");
    const modalDescription = document.getElementById("modalDescription");
    const modalLink = document.getElementById("modalLink");
    const closeModal = document.getElementById("closeModal");

    // Fetch and render events
    fetch("events.json")
        .then(res => res.json())
        .then(events => {
            events.forEach(event => {
                const block = document.createElement("div");
                block.classList.add("block");
                block.innerHTML = `
                    <h2 class="year">${event.year}</h2>
                    <h2 class="achievement">${event.achievement}</h2>
                    <p class="description">${event.description}</p>
                    <button class="next">></button>
                `;
                block.querySelector(".next").addEventListener("click", () => {
                    modalYear.textContent = event.year;
                    modalAchievement.textContent = event.achievement;
                    modalDescription.textContent = event.description;
                    modalLink.href = event.link;
                    modal.style.display = "block";
                });
                timelineContainer.appendChild(block);
            });
        })
        .catch(err => console.error("Error loading events:", err));

    // Close modal
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});
