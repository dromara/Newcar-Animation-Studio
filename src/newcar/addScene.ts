import { App, Scene, Widget } from "newcar";

export function addScene(app: App, root: Widget) {
  const scene = new Scene(root)
  app.checkout(scene)
  return app
}