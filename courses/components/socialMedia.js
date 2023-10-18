function createSocialMedia({ icon, className, link }) {
  const socialMedia = document.createElement("i");
  socialMedia.className.add(className, icon);
  socialMedia.style.margin = ".4rem";
  socialMedia.style.cursor = "pointer";
  socialMedia.addEventListener("click", () => {
    window.open(link, "_blank");
  });

  return socialMedia;
}
