import { dataInfos } from "/courses/main.js";

export function createMainTitle() {
  const challengeTitle = dataInfos.challengeTitle;
  const mainTitle = document.createElement("h1");
  mainTitle.textContent = `${challengeTitle} in `;
  return mainTitle;
}
