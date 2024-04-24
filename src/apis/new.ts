export async function newProject(name: string, width: number, height: number, path: string) {
  const res = await fetch(`127.0.0.1:2021/file/${name}/${width}/${height}/${path}`)
  if (res.ok) {
    return 'success'
  }
}