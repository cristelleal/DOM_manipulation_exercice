import { author } from '../main.js';

export function skills() {
  const professionalSkills = author.skills;

  const skillsDiv = document.createElement("div");
  const skillsList = document.createElement("ul");

  professionalSkills.forEach((skill) => {
    const listItem = document.createElement("li");
    listItem.textContent = `\u2705 ${skill}`;
    listItem.style.listStyle = "none";
    listItem.style.textAlign = "left";
    skillsList.appendChild(listItem);
  });

  const skillsLabel = document.createElement("strong");
  skillsLabel.textContent = "Skills ";
  skillsDiv.appendChild(skillsLabel);
  skillsDiv.appendChild(skillsList);

  return skillsDiv;
}
