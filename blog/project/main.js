const mapOverlay = document.querySelector(".location__mapOverlay");
const mapLabel = document.querySelector(".location__mapLabel");

const hideOverlayAndLabel = () => {
  mapOverlay.style.display = "none";
  mapLabel.style.display = "none";
};

mapOverlay.addEventListener("click", hideOverlayAndLabel);
mapLabel.addEventListener("click", hideOverlayAndLabel);

const navButtons = document.querySelectorAll(".navbar__item");
const navigableSections = document.querySelectorAll(".navigable");

const scrollToSection = (index) => {
  const sectionOffsetTop = navigableSections[index].offsetTop;
  window.scrollTo({
    left: 0,
    top: sectionOffsetTop,
    behavior: "smooth",
  });
};

navButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    scrollToSection(index);
  });
});

const menuIcon = document.querySelector(".navbar__menuIcon");
const mobileNav = document.querySelector(".mobileNav");
const closeIconMobileNav = document.querySelector(".mobileNav__closeIcon");

const showMobileNav = () => {
  mobileNav.classList.add("mobileNav_active");
};

const hideMobileNav = () => {
  mobileNav.classList.remove("mobileNav_active");
};

menuIcon.addEventListener("click", showMobileNav);
closeIconMobileNav.addEventListener("click", hideMobileNav);

const mobileNavButtons = document.querySelectorAll(".mobileNav__item");

mobileNavButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    scrollToSection(index);
    hideMobileNav();
  });
});
