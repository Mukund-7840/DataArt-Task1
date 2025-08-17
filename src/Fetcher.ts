import { EventData } from "./types";

export async function fetchEvents(): Promise<EventData[]> {
  const response = await fetch("java0.5.json"); // your JSON file
  if (!response.ok) throw new Error("Failed to load events");
  return response.json();
}
