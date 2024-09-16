async function loadHTML(file) {
    try {
        const response = await fetch(file);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.text();
    } catch (error) {
        console.error('ファイルの読み込みに失敗しました:', error);
    }
}

async function loadContent() {
    const content = document.getElementById('headercontent');

    // 例として、header.htmlとfooter.htmlをロード
    const headerHTML = await loadHTML('/HTML/header.html');

    // コンテンツを結合して挿入
    content.innerHTML = `
        ${headerHTML}
    `;
}

loadContent();
