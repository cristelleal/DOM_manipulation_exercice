import { author } from "../main.js";

export function qualificationsPart() {
  const professionalQualifications = author.qualifications;

  const qualificationsDiv = document.createElement("div");
  const qualificationsList = document.createElement("ul");

  professionalQualifications.forEach((qualification) => {
    const listItem = document.createElement("li");
    const bookEmoji = "\uD83D\uDCD6";
    const GraduateEmoji = "\uD83D\uDC68\u200D\uD83C\uDF93";

    if (qualification.includes("Ongoing")) {
      listItem.textContent = `${bookEmoji} ${qualification}`;
    } else {
      listItem.textContent = `${GraduateEmoji} ${qualification}`;
    }

    listItem.style.listStyle = "none";
    listItem.style.textAlign = "left";
    qualificationsList.appendChild(listItem);
  });

  const qualificationsLabel = document.createElement("strong");
  qualificationsLabel.textContent = "Qualifications ";

  qualificationsDiv.appendChild(qualificationsLabel);
  qualificationsDiv.appendChild(qualificationsList);

  return qualificationsDiv;
}
