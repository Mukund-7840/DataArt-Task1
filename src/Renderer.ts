import { EventData } from "./types";

export function renderEvents(
  events: EventData[],
  onEventClick: (event: EventData) => void
): void {
  const container = document.querySelector(".timeline") as HTMLElement;

  events.forEach(event => {
    const block = document.createElement("div");
    block.classList.add("block");

    block.innerHTML = `
      <h2 class="year">${event.year}</h2>
      <h2 class="achievement">${event.achievement}</h2>
      <p class="description">${event.description}</p>
      <button class="next">></button>
    `;

    block.querySelector(".next")?.addEventListener("click", () => {
      onEventClick(event);
    });

    container.appendChild(block);
  });
}
