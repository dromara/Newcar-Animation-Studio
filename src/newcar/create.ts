import { CarEngine } from "newcar";

export function create(engine: CarEngine) {
  return engine.createApp(document.querySelector('#canvas')!)
}