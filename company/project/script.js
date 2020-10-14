const navigableSections = document.querySelectorAll(".navigable");
const navButtons = document.querySelectorAll(".navbar__item");
const sideDrawerButtons = document.querySelectorAll(".sideDrawer__item");
const navBarHeight = document.querySelector(".navbar").clientHeight;

const scrollToSection = (index) => {
  const sectionOffsetTop = navigableSections[index].offsetTop;
  window.scrollTo({
    left: 0,
    top: sectionOffsetTop - navBarHeight,
    behavior: "smooth",
  });
};

navButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    scrollToSection(index);
  });
});

const scrollToServices = () => {
  window.scrollTo({
    left: 0,
    top: servicesOffsetTop - navBarHeight,
    behavior: "smooth",
  });
};

const headerScrollDown = document.querySelector(".header__scrollDown");
const servicesOffsetTop = document.querySelector(".services").offsetTop;
headerScrollDown.addEventListener("click", scrollToServices);

const sideDrawer = document.querySelector(".sideDrawer");
const hamburgerIcon = document.querySelector(".navbar__hamburgerIcon");
const sideDrawerCloseIcon = document.querySelector(".sideDrawer__closeIcon");

const showSideMenu = () => {
  sideDrawer.classList.add("sideDrawer__active");
};

const hideSideMenu = () => {
  sideDrawer.classList.remove("sideDrawer__active");
};

sideDrawerButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    scrollToSection(index);
    hideSideMenu();
  });
});
hamburgerIcon.addEventListener("click", showSideMenu);
sideDrawerCloseIcon.addEventListener("click", hideSideMenu);
