import { createTitle } from '/courses/components/title.js';

export function createTitles(author) {
  const titlesList = document.createElement("ul");
  const professionalTitles = author.titles;

  professionalTitles.forEach((title) => {
    const listItem = createTitle(title);
    titlesList.appendChild(listItem);
  });
  return titlesList;
}
