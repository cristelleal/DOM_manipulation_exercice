export function createSocialMedia({ className, link }) {
  const socialMedia = document.createElement("i");
  socialMedia.className = className;
  socialMedia.style.margin = ".4rem";
  socialMedia.style.cursor = "pointer";
  socialMedia.addEventListener("click", () => {
    window.open(link, "_blank");
  });

  return socialMedia;
}
