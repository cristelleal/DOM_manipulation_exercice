function allKeywords() {
  const keywordsListDiv = document.createElement("div");
  keywordsListDiv.style.margin = "1% 17% 2% 17%";
  keywordsListDiv.style.display = "flex";
  keywordsListDiv.style.flexWrap = "wrap";
  keywordsListDiv.style.justifyContent = "center";
  keywordsListDiv.style.alignItems = "center";

  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  keywords.forEach((keyword) => {
    const keywordSpan = document.createElement("span");
    keywordSpan.textContent = `# ${keyword}`;
    keywordSpan.style.backgroundColor = getRandomColor();
    keywordSpan.style.padding = "1px 5px 1px 5px";
    keywordSpan.style.margin = "5px";
    keywordSpan.style.borderRadius = "15px";
    keywordSpan.style.lineHeight = "2em";
    keywordSpan.style.fontWeight = "bold";
    keywordSpan.style.fontSize = "small";
    keywordsListDiv.appendChild(keywordSpan);
  });

  return keywordsListDiv;
}
