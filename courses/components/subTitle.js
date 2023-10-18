function createSubTitle() {
    const subTitle = document.createElement('h2');
    subTitle.textContent = challengeSubtitle;
    subTitle.style.textDecoration = 'underline';
    subTitle.style.fontWeight = '100';

    return subTitle;
}