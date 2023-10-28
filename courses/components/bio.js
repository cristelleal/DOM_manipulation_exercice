export function createBio(author) {
  const authorDescription = author.bio;
  const bio = document.createElement("p");
  bio.textContent = authorDescription;
  bio.style.margin = "2% 20% 2% 20%";
  bio.style.padding = "1rem";

  return bio;
}
