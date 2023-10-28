import { createDate } from "/courses/utils.js";
import { arrayOfColors } from "/courses/constants.js";

export function createDateTitle() {
  const dateTitle = document.createElement("p");
  dateTitle.textContent = createDate();
  document.body.appendChild(dateTitle);

  let indexColor = 1;

  function dateAppearance() {
    dateTitle.style.padding = ".8rem";
    dateTitle.style.margin = "0 40% 0 40%";
    dateTitle.style.fontSize = "small";
    dateTitle.style.backgroundColor = arrayOfColors[indexColor];
    indexColor = (indexColor + 1) % arrayOfColors.length;
  }

  setInterval(dateAppearance, 1000);
  setTimeout(dateAppearance, 0);

  return dateTitle;
}
