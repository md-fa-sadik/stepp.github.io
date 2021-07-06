gsap.registerPlugin(ScrollTrigger);

/* change navbar background color on scroll */
const mainNav = document.querySelector("nav");
function changeNav(e) {
  let scrolled = window.scrollY;
  if (scrolled >= 10) {
    mainNav.classList.add("navGlass");
  } else {
    mainNav.classList.remove("navGlass");
  }
}
window.addEventListener("scroll", changeNav);

/* navbar drop down link */
const dropdownMenu = document.querySelectorAll("nav .dropdown-menu");
dropdownMenu.forEach((menu) => {
  menu.addEventListener("mouseenter", (e) => {
    let menu = e.target;
    let wrapper = menu.parentElement;
    wrapper.querySelector(".dropdown-link").classList.add("active");
  });
  menu.addEventListener("mouseleave", (e) => {
    let menu = e.target;
    let wrapper = menu.parentElement;
    wrapper.querySelector(".dropdown-link").classList.remove("active");
  });
});
/* accordion icon */
const accordionBtn = document.querySelectorAll(".mobile-nav .accordion-link");
const accordionCollapse = document.querySelectorAll(".accordion-collapse");
accordionBtn.forEach((menu) => {
  menu.addEventListener("click", (e) => {
    e.preventDefault();
    menu.classList.toggle("accordionActive");
  });
});

/* user side bar */
const userSideBarWrapepr = document.querySelector(".user-sidebar-wrapper");
const userSideOpenBtn = document.querySelector(".navbar-avatar");
const userSideCloseBtn = document.querySelector(".sideBarCloseBtn");
function sideBarOpen(e) {
  sidebarTL.play();
  sidebarTL.time(0);
  userSideBarWrapepr.style.transform = `translateX(0)`;
  mobileNav.style.transform = `translateX(100%)`;
}
function sideBarClose(e) {
  userSideBarWrapepr.style.transform = `translateX(-100%)`;
}
function closeSideBar(e) {
  let target = e.target.id;
  if (target === "userSideBackdrop") {
    userSideBarWrapepr.style.transform = `translateX(-100%)`;
  }
}
/* side bar items timeline */
let sidebarTL = new gsap.timeline();
sidebarTL.paused(true);
sidebarTL.from(".user-sidebar li", {
  x: "-100%",
  opacity: 0,
  duration: 0.8,
  stagger: 0.1,
});

userSideOpenBtn.addEventListener("click", sideBarOpen);
userSideCloseBtn.addEventListener("click", sideBarClose);
userSideBarWrapepr.addEventListener("click", closeSideBar);

/* mobile navbar */
const mobileNav = document.querySelector(".mobile-nav");
const mobileNavOpenBtn = document.querySelector(".navbar-toggler");
const mobileNavCloseBtn = document.querySelector(".mobileNavCloseBtn");
const mobileNavLinks = document.querySelectorAll(".mobile-nav .menu-link");
const mobileNavUserBtn = document.querySelector(".mobile-nav .navbar-avatar");
function mobileNavOpen(e) {
  mobileNav.style.transform = `translateX(0)`;
  mobileNavTL.play();
  mobileNavTL.time(0);
}
function mobileNavClose(e) {
  mobileNav.style.transform = `translateX(100%)`;
}
let mobileNavTL = new gsap.timeline();
mobileNavTL.paused(true);
mobileNavTL.from(".mobile-nav .menu-item", {
  x: "100%",
  opacity: 0,
  duration: 0.8,
  stagger: 0.1,
});
mobileNavOpenBtn.addEventListener("click", mobileNavOpen);
mobileNavCloseBtn.addEventListener("click", mobileNavClose);
mobileNavLinks.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    mobileNavLinks.forEach((i) => {
      i.classList.remove("mobileNavLinkActive");
    });
    item.classList.add("mobileNavLinkActive");
  });
});
mobileNavUserBtn.addEventListener("click", sideBarOpen);

/* featuer section */
const featureSectionTrigger = document.querySelector(".feature .container");
const featureCards = document.querySelectorAll(".feature .row");
const featureImages = document.querySelectorAll(".feature .feature-image");
let featureTL = new gsap.timeline({
  scrollTrigger: {
    trigger: featureSectionTrigger,
  },
});
featureTL
  .from(featureCards, {
    duration: 1,
    y: 300,
    opacity: 0,
    stagger: 0.3,
  })
  .to(
    featureImages,
    {
      duration: 0.5,
      clipPath: " polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      stagger: 0.3,
    },
    "-=0.9"
  );
/* cards section */
const cardsSectionTrigger = document.querySelector(".cards .container");
const cards = document.querySelectorAll(".cards .container .col-xl");

let cardsTL = new gsap.timeline({
  scrollTrigger: {
    trigger: cardsSectionTrigger,
  },
});
cardsTL.from(cards, {
  duration: 0.5,
  y: 300,
  opacity: 0,
  stagger: 0.1,
});
