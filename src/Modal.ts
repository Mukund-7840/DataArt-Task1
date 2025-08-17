import { EventData } from "./types";

export function setupModal(): {
  openModal: (event: EventData) => void;
} {
  const modal = document.createElement("div");
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

  const modalYear = document.getElementById("modalYear") as HTMLElement;
  const modalAchievement = document.getElementById("modalAchievement") as HTMLElement;
  const modalDescription = document.getElementById("modalDescription") as HTMLElement;
  const modalLink = document.getElementById("modalLink") as HTMLAnchorElement;
  const closeModal = document.getElementById("closeModal") as HTMLElement;

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  function openModal(event: EventData) {
    modalYear.textContent = event.year;
    modalAchievement.textContent = event.achievement;
    modalDescription.textContent = event.description;
    modalLink.href = event.link;
    modal.style.display = "block";
  }

  return { openModal };
}
