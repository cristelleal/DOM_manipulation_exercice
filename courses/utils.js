export function createDate() {
  const now = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = months[now.getMonth()];
  const day = now.getDate();
  const year = now.getFullYear();
  const hour = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  return `${month} ${day}, ${year} ${hour}:${minutes}:${seconds}`;
}

export function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export const challengeStatus = {
  DONE: "Done",
  ONGOING: "Ongoing",
  COMING: "Coming",
};
