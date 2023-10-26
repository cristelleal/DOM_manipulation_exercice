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

const socialMediaIcons = socialMedias();
const linkedin = createSocialMedia({ className: 'fab fa-linkedin', link: 'https://www.linkedin.com/in/asabeneh/' });
const twitter = createSocialMedia({ className: 'fab fa-twitter-square', link: 'https://twitter.com/Asabeneh' });
const github = createSocialMedia({ className: 'fab fa-github-square', link: 'https://github.com/Asabeneh' });

const bio = createBio(author);

const titlesDiv = createTitleDiv();
const titlesList = createTitles(author);
const titlesLabel = createTitlesLabel();

const professionalPartDiv = professionalInfos();

const skillsDiv = skills();

const qualifications = qualificationsPart();

const keywordsDiv = keywordsPart();
const keywordsLabel = labelKeywords();
const keywordsListDiv = allKeywords();

document.body.appendChild(mainTitle);
mainTitle.appendChild(year);
document.body.appendChild(subTitle);
document.body.appendChild(dateTitle);
document.body.appendChild(wrapper);
document.body.appendChild(authorDiv);

document.body.appendChild(bio);

document.body.appendChild(socialMediaIcons);
socialMediaIcons.appendChild(linkedin);
socialMediaIcons.appendChild(twitter);
socialMediaIcons.appendChild(github);

titlesDiv.appendChild(titlesLabel);
titlesDiv.appendChild(titlesList);
professionalPartDiv.appendChild(titlesDiv);
professionalPartDiv.appendChild(skillsDiv);
professionalPartDiv.appendChild(qualifications);
document.body.appendChild(professionalPartDiv);

keywordsDiv.appendChild(keywordsLabel);
keywordsDiv.appendChild(keywordsListDiv);
document.body.appendChild(keywordsDiv);