import { asabenehChallenges2020 } from "/api/challenges_info.js";
import { Client } from "/courses/client.js";
import { fontFamily } from "/courses/constants.js";
import { createMainTitle } from "/courses/components/mainTitle.js";
import { createYearSpan } from "/courses/components/year.js";
import { createSubTitle } from "/courses/components/subTitle.js";
import { createDateTitle } from "/courses/components/dateTitle.js";
import { createWrapper } from "/courses/components/wrapper.js";
import { createAuthor } from "/courses/components/author.js";
import { socialMedias } from "/courses/components/socialMedias.js";
import { createSocialMedia } from "/courses/components/socialMedia.js";
import { createBio } from "/courses/components/bio.js";
import { createTitleDiv } from "/courses/components/titlesDiv.js";
import { createTitles } from "/courses/components/titles.js";
import { createTitlesLabel } from "/courses/components/titlesLabel.js";
import { professionalInfos } from "/courses/components/professionalInfos.js";
import { skills } from "/courses/components/skills.js";
import { qualificationsPart } from "/courses/components/qualifications.js";
import { keywordsPart } from "/courses/components/keywords.js";
import { labelKeywords } from "/courses/components/keywordsLabels.js";
import { allKeywords } from "/courses/components/keyword.js";

//Request Data from the server
const client = new Client(asabenehChallenges2020);

export const dataInfos = client.getDataInfos();
export const challenges = client.getChallenges();
export const author = client.getAuthor();
export const keywords = client.getKeywords();
export const challengeYear = dataInfos.challengeYear;
export const challengeSubtitle = dataInfos.challengeSubtitle;

document.body.style.fontFamily = fontFamily;
document.body.style.textAlign = "center";

const subTitle = createSubTitle();
const dateTitle = createDateTitle();

const wrapper = createWrapper(challenges);

const authorDiv = createAuthor(author);

const socialMediaIcons = socialMedias();
const linkedin = createSocialMedia({
  className: "fab fa-linkedin",
  link: "https://www.linkedin.com/in/asabeneh/",
});
const twitter = createSocialMedia({
  className: "fab fa-twitter-square",
  link: "https://twitter.com/Asabeneh",
});
const github = createSocialMedia({
  className: "fab fa-github-square",
  link: "https://github.com/Asabeneh",
});

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
