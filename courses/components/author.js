export function createAuthor(author) {
  const authorDiv = document.createElement("div");
  const authorName = `${author.firstName} ${author.lastName}`;
  authorDiv.textContent = authorName;
  authorDiv.style.fontSize = "1.8rem";
  authorDiv.style.fontWeight = "bold";
  authorDiv.style.marginTop = "2rem";

  return authorDiv;
}
