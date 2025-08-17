import { fetchEvents } from "./fetcher";
import { renderEvents } from "./renderer";
import { setupModal } from "./modal";

async function init() {
  try {
    const events = await fetchEvents();
    const { openModal } = setupModal();
    renderEvents(events, openModal);
  } catch (err) {
    console.error("Error initializing app:", err);
  }
}

document.addEventListener("DOMContentLoaded", init);
