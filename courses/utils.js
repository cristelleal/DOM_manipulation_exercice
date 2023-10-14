function createDate() {
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
  return (currentDate = `${month} ${day}, ${year} ${hour}:${minutes}:${seconds}`);
}
