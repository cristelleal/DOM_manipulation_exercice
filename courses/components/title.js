export function createTitle(title) {
  const titleItem = document.createElement("li");
  titleItem.textContent = `${title[0]} ${title[1]}`;
  titleItem.style.listStyle = "none";
  titleItem.style.textAlign = "left";

  return titleItem;
}
