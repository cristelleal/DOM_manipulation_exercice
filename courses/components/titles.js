function createTitles(author) {
    const professionalTitles = author.titles;
    const titlesList = document.createElement('ul');

    professionalTitles.forEach(title => {
        const listItem = createTitle(title);
        titlesList.appendChild(listItem);
    });

    return titlesList;
}