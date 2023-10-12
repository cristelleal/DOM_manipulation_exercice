// console.log(asabenehChallenges2020);

document.body.style.fontFamily = 'sans-serif';
document.body.style.textAlign = 'center';

const challengeTitle = asabenehChallenges2020.challengeTitle; 
const challengeYear = asabenehChallenges2020.challengeYear;
const challengeSubtitle = asabenehChallenges2020.challengeSubtitle;

const mainTitle = document.createElement('h1');
mainTitle.textContent = `${challengeTitle} in `;
document.body.appendChild(mainTitle);

const year = document.createElement('span');
year.textContent = challengeYear;
year.style.fontSize = '6.2rem';
mainTitle.appendChild(year);

const arrayOfColors = ['#FFD903', '#FF4E49', '#00CC28', '#665CAA'];
let colorIndex = 0;
let indexColor = 1;

function yearAppearance() {
    year.style.color = arrayOfColors[colorIndex];
    colorIndex = (colorIndex + 1) % arrayOfColors.length;
};

setInterval(yearAppearance, 1000);
setTimeout(yearAppearance, 0);

const subTitle = document.createElement('h2');
subTitle.textContent = challengeSubtitle;
subTitle.style.textDecoration = 'underline';
subTitle.style.fontWeight = '100';
document.body.appendChild(subTitle);

function createDate() {
    const now = new Date();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = months[now.getMonth()];
    const day = now.getDate();
    const year = now.getFullYear();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    return currentDate = `${month} ${day}, ${year} ${hour}:${minutes}:${seconds}`;
};

const dateTitle = document.createElement('p');
dateTitle.textContent = createDate();
document.body.appendChild(dateTitle);

function dateAppearance() {
    dateTitle.style.padding = '.8rem';
    dateTitle.style.margin = '0 40% 0 40%';
    dateTitle.style.fontSize = 'small';
    dateTitle.style.backgroundColor = arrayOfColors[indexColor];
    indexColor = (indexColor + 1) % arrayOfColors.length;
};

setInterval(dateAppearance, 1000);
setTimeout(dateAppearance, 0);

const challenges = asabenehChallenges2020.challenges;

const wrapper = document.querySelector('.wrapper');

for (let i = 0; i < challenges.length; i++) {
    const box = document.createElement('div');
    const name = challenges[i].name;
    const topics = challenges[i].topics;
    const status = challenges[i].status;

    const nameElement = document.createElement('p');
    nameElement.textContent = name;
    nameElement.style.textAlign = 'left';

    const detailsElement = document.createElement('details');
    const firstElement = document.createElement('summary');
    firstElement.textContent = ` ${topics[0]}`;
    firstElement.style.cursor = 'pointer';
    firstElement.style.fontWeight = 'bold';
    firstElement.style.textAlign = 'left'
    detailsElement.appendChild(firstElement);

    const topicsList = document.createElement('ul');

        for (let i = 0; i < topics.length; i++) {
            const topicItem = document.createElement('li');
            topicItem.textContent = topics[i];
            topicItem.style.listStyle = 'none';
            topicItem.style.textAlign = 'left';
            topicItem.style.marginLeft = '-38%';
            topicsList.appendChild(topicItem);
        };

    detailsElement.appendChild(topicsList);

    const statusElement = document.createElement('p');
    statusElement.textContent = status;
    statusElement.style.textAlign = 'left';

    if (status === 'Done') {
        box.style.backgroundColor = '#FD5E53';
        nameElement.style.textDecoration = 'underline';
    } else if (status === 'Ongoing') {
        box.style.backgroundColor = '#FCDB3A';
        nameElement.style.textDecoration = 'underline';
    } else if (status === 'Coming') {
        box.style.backgroundColor = '#21BF73';
    };

    box.appendChild(nameElement);
    box.appendChild(detailsElement);
    box.appendChild(statusElement);

    box.style.display = 'grid';
    box.style.width = '58%';
    box.style.gridTemplateColumns = '220px 150px 90px';
    box.style.alignItems = 'center';
    box.style.justifyContent = 'space-between';
    box.style.padding = '1.5rem';
    box.style.margin = '.3% 20% .3% 20%';

    wrapper.appendChild(box);
};

document.body.appendChild(wrapper);
wrapper.style.marginTop = '2rem';

const authorName = `${asabenehChallenges2020.author.firstName} ${asabenehChallenges2020.author.lastName}`;

const author = document.createElement('div');
author.textContent = authorName;
author.style.fontSize = '1.8rem';
author.style.fontWeight = 'bold';
author.style.marginTop = '2rem';
document.body.appendChild(author);

const socialMedias = document.createElement('div');
socialMedias.style.margin = '.5rem';
socialMedias.style.fontSize = '2.5rem';

const linkedin = document.createElement('i');
linkedin.classList.add('fab', 'fa-linkedin'); 
linkedin.style.margin = '.4rem';
linkedin.style.cursor = 'pointer';
linkedin.addEventListener('click', () => {
    window.open('https://www.linkedin.com/in/asabeneh/', '_blank');
});

const twitter = document.createElement('i');
twitter.classList.add('fab', 'fa-twitter-square');
twitter.style.margin = '.4rem';
twitter.style.cursor = 'pointer';
twitter.addEventListener('click', () => {
    window.open('https://twitter.com/Asabeneh', '_blank');
});

const github = document.createElement('i');
github.classList.add('fab', 'fa-github-square');
github.style.margin = '.4rem';
github.style.cursor = 'pointer';
github.addEventListener('click', () => {
    window.open('https://github.com/Asabeneh', '_blank');
});

socialMedias.appendChild(linkedin);
socialMedias.appendChild(twitter);
socialMedias.appendChild(github);
document.body.appendChild(socialMedias);


const authorDescription = asabenehChallenges2020.author.bio;
const bio = document.createElement('p');
bio.textContent = authorDescription;
document.body.appendChild(bio);
bio.style.margin = '2% 20% 2% 20%';
bio.style.padding = '1rem';

const professionalTitles = asabenehChallenges2020.author.titles;
const professionalSkills = asabenehChallenges2020.author.skills;
const professionalQualifications = asabenehChallenges2020.author.qualifications;

const professionalPartDiv = document.createElement('div');
professionalPartDiv.style.display = 'flex';
professionalPartDiv.style.justifyContent = 'center';
professionalPartDiv.style.marginTop = '3rem';

const titlesDiv = document.createElement('div');
const titlesList = document.createElement('ul');

professionalTitles.forEach(title => {
    const listItem = document.createElement('li');
    listItem.textContent = `${title[0]} ${title[1]}`;
    listItem.style.listStyle = 'none';
    listItem.style.textAlign = 'left';
    titlesList.appendChild(listItem);
});

const titlesLabel = document.createElement('strong');
titlesLabel.textContent = 'Titles ';
titlesDiv.appendChild(titlesLabel);
titlesDiv.appendChild(titlesList);

const skillsDiv = document.createElement('div');
const skillsList = document.createElement('ul');

professionalSkills.forEach(skill => {
    const listItem = document.createElement('li');
    listItem.textContent = `\u2705 ${skill}`;
    listItem.style.listStyle = 'none';
    listItem.style.textAlign = 'left';
    skillsList.appendChild(listItem);
});

const skillsLabel = document.createElement('strong');
skillsLabel.textContent = 'Skills ';
skillsDiv.appendChild(skillsLabel);
skillsDiv.appendChild(skillsList);

const qualificationsDiv = document.createElement('div');
const qualificationsList = document.createElement('ul');

professionalQualifications.forEach(qualification => {
    const listItem = document.createElement('li');
    const bookEmoji = '\uD83D\uDCD6';
    const GraduateEmoji = '\uD83D\uDC68\u200D\uD83C\uDF93';

    if (qualification.includes('Ongoing')) {
        listItem.textContent = `${bookEmoji} ${qualification}`;
    } else {
        listItem.textContent = `${GraduateEmoji} ${qualification}`;
    };

    listItem.style.listStyle = 'none';
    listItem.style.textAlign = 'left';
    qualificationsList.appendChild(listItem);
});

const qualificationsLabel = document.createElement('strong');
qualificationsLabel.textContent = 'Qualifications ';
qualificationsDiv.appendChild(qualificationsLabel);
qualificationsDiv.appendChild(qualificationsList);

professionalPartDiv.appendChild(titlesDiv);
professionalPartDiv.appendChild(skillsDiv);
professionalPartDiv.appendChild(qualificationsDiv);
document.body.appendChild(professionalPartDiv);

const keywordsList = asabenehChallenges2020.keywords;

const keywords = document.createElement('div');
keywords.style.marginTop = '2rem';
const keywordsLabel = document.createElement('strong');
keywordsLabel.textContent = 'Keywords';
keywordsLabel.style.marginRight = '60%';
keywords.appendChild(keywordsLabel);

const keywordsListDiv = document.createElement('div');
keywordsListDiv.style.margin = '1% 17% 2% 17%';
keywordsListDiv.style.display = 'flex';
keywordsListDiv.style.flexWrap = 'wrap';
keywordsListDiv.style.justifyContent = 'center';
keywordsListDiv.style.alignItems = 'center';

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    };
    return color;
};

keywordsList.forEach(keyword => {
    const keywordSpan = document.createElement('span');
    keywordSpan.textContent = `# ${keyword}`;
    keywordSpan.style.backgroundColor = getRandomColor();
    keywordSpan.style.padding = '1px 5px 1px 5px';
    keywordSpan.style.margin = '5px';
    keywordSpan.style.borderRadius = '15px'; 
    keywordSpan.style.lineHeight = '2em';
    keywordSpan.style.fontWeight = 'bold';
    keywordSpan.style.fontSize = 'small';
    keywordsListDiv.appendChild(keywordSpan);
});

keywords.appendChild(keywordsListDiv);
document.body.appendChild(keywords);


