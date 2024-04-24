export async function ensure() {
  try {
    const response = await fetch('127.0.0.1:2021/');
    if (!response.ok) {
      return 'opps!'
    }
    const text = await response.text()
    return text
} catch (error) {
    // 处理错误
    console.error('Error fetching text:', error);
}
}