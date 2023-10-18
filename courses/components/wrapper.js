function createWrapper(challenges) {
  const wrapper = document.querySelector(".wrapper");

  for (let i = 0; i < challenges.length; i++) {
    const box = document.createElement("div");
    const name = challenges[i].name;
    const topics = challenges[i].topics;
    const status = challenges[i].status;

    const nameElement = document.createElement("p");
    nameElement.textContent = name;
    nameElement.style.textAlign = "left";

    const detailsElement = document.createElement("details");
    const firstElement = document.createElement("summary");
    firstElement.textContent = ` ${topics[0]}`;
    firstElement.style.cursor = "pointer";
    firstElement.style.fontWeight = "bold";
    firstElement.style.textAlign = "left";
    detailsElement.appendChild(firstElement);

    const topicsList = document.createElement("ul");

    for (let i = 0; i < topics.length; i++) {
      const topicItem = document.createElement("li");
      topicItem.textContent = topics[i];
      topicItem.style.listStyle = "none";
      topicItem.style.textAlign = "left";
      topicItem.style.marginLeft = "-38%";
      topicsList.appendChild(topicItem);
    }

    detailsElement.appendChild(topicsList);

    const statusElement = document.createElement("p");
    statusElement.textContent = status;
    statusElement.style.textAlign = "left";

    if (status === "Done") {
      box.style.backgroundColor = "#21BF73";
      nameElement.style.textDecoration = "underline";
    } else if (status === "Ongoing") {
      box.style.backgroundColor = "#FCDB3A";
      nameElement.style.textDecoration = "underline";
    } else if (status === "Coming") {
      box.style.backgroundColor = "#FD5E53";
    }

    box.appendChild(nameElement);
    box.appendChild(detailsElement);
    box.appendChild(statusElement);

    box.style.display = "grid";
    box.style.width = "58%";
    box.style.gridTemplateColumns = "220px 150px 90px";
    box.style.alignItems = "center";
    box.style.justifyContent = "space-between";
    box.style.padding = "1.5rem";
    box.style.margin = ".3% 20% .3% 20%";

    wrapper.appendChild(box);
  }

  wrapper.style.marginTop = "2rem";

  return wrapper;
}
