import { asabenehChallenges2020 } from "/api/challenges_info.js";
import { Client } from "./client.js";
import { fontFamily } from "./constants.js";
import { createSubTitle } from "./components/subTitle.js";
import { createDateTitle } from "./components/dateTitle.js";
import { createWrapper } from "./components/wrapper.js";
import { createAuthor } from "./components/author.js";
import { socialMedias } from "./components/socialMedias.js";
import { createSocialMedia } from "./components/socialMedia.js";
import { createBio } from "./components/bio.js";
import { createTitleDiv } from "./components/titlesDiv.js";
import { createTitles } from "./components/titles.js";
import { createTitlesLabel } from "./components/titlesLabel.js";
import { professionalInfos } from "./components/professionalInfos.js";
import { skills } from "./components/skills.js";
import { qualificationsPart } from "./components/qualifications.js";
import { keywordsPart } from "./components/keywords.js";
import { labelKeywords } from "./components/keywordsLabels.js";
import { allKeywords } from "./components/keyword.js";

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
