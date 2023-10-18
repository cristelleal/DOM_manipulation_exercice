// Request Data from the server
const client = new Client(asabenehChallenges2020);

const dataInfos = client.getDataInfos();
const challenges = client.getChallenges();
const author = client.getAuthor();
const keywords = client.getKeywords();

const challengeTitle = dataInfos.challengeTitle; 
const challengeYear = dataInfos.challengeYear;
const challengeSubtitle = dataInfos.challengeSubtitle;

document.body.style.fontFamily = fontFamily;
document.body.style.textAlign = 'center';

const mainTitle = createMainTitle();
const year = createYearSpan();
const subTitle = createSubTitle();
const dateTitle = createDateTitle();

const wrapper = createWrapper(challenges);

const authorDiv = createAuthor(author)

const socialMedias = createSocialMedias();
const linkedin = createSocialMedia('fa-linkedin', 'fab', 'https://www.linkedin.com/in/asabeneh/');
const twitter = createSocialMedia('fa-twitter-square', 'fab', 'https://twitter.com/Asabeneh');
const github = createSocialMedia('fa-github-square', 'fab', 'https://github.com/Asabeneh');

const bio = createBio(author);

const titlesDiv = document.createElement('div');
const titlesList = createTitles(author);
const titlesLabel = createTitlesLabel();

document.body.appendChild(mainTitle);
mainTitle.appendChild(year);
document.body.appendChild(subTitle);
document.body.appendChild(dateTitle);
document.body.appendChild(wrapper);
document.body.appendChild(authorDiv);

socialMedias.appendChild(linkedin);
socialMedias.appendChild(twitter);
socialMedias.appendChild(github);
document.body.appendChild(socialMedias);

document.body.appendChild(bio);

titlesDiv.appendChild(titlesLabel);
titlesDiv.appendChild(titlesList);

const professionalSkills = author.skills;
const professionalQualifications = author.qualifications;

const professionalPartDiv = document.createElement('div');
professionalPartDiv.style.display = 'flex';
professionalPartDiv.style.justifyContent = 'center';
professionalPartDiv.style.marginTop = '3rem';

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

const keywordsDiv = document.createElement('div');
keywordsDiv.style.marginTop = '2rem';
const keywordsLabel = document.createElement('strong');
keywordsLabel.textContent = 'Keywords';
keywordsLabel.style.marginRight = '60%';
keywordsDiv.appendChild(keywordsLabel);

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

keywords.forEach(keyword => {
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

keywordsDiv.appendChild(keywordsListDiv);
document.body.appendChild(keywordsDiv);
