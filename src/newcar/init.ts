import { CarEngine } from 'newcar'

export async function initialize() {
  return await new CarEngine()
    .init('../../node_modules/canvaskit-wasm/bin/canvaskit.wasm')
}