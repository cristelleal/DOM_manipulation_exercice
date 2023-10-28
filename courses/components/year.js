import { challengeYear } from '../main.js';
import { arrayOfColors } from '../constants.js';

export function createYearSpan() {
  const year = document.createElement("span");
  year.textContent = challengeYear;
  year.style.fontSize = "6.2rem";

  let colorIndex = 0;

  function yearAppearance() {
    year.style.color = arrayOfColors[colorIndex];
    colorIndex = (colorIndex + 1) % arrayOfColors.length;
  }

  setInterval(yearAppearance, 1000);
  setTimeout(yearAppearance, 0);

  return year;
}
