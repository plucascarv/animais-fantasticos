function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");
  const activeClass = "ativo"

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add(activeClass);

    function activateTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove(activeClass);
    });
    tabContent[index].classList.add(activeClass);
  }

  tabMenu.forEach((item, index) => {
    item.addEventListener("click", function() {
      activateTab(index);
      });
    });
  };
}
initTabNav();


function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo"

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activateAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    };

    accordionList.forEach((item) => {
      item.addEventListener("click", activateAccordion);
    });
  };
}
initAccordion();


function initSmoothScroll () {
  const linksInternos = document.querySelectorAll('.js-menu ul li a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const coord = document.querySelector(href).offsetTop;

    window.scrollTo({
      top: coord,
      behavior: "smooth",
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
initSmoothScroll();


function initAnimateScroll() {
  const sections = document.querySelectorAll(".js-scroll");

  if (sections.length) {
    const windowHalf = window.innerHeight * 0.6;

    function animateScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isVisible = (sectionTop - windowHalf) < 0;
        if (isVisible) {
          section.classList.add("ativo");
        } else {
          section.classList.remove("ativo");
        }
      });
    }

    animateScroll();
    window.addEventListener("scroll", animateScroll);
  }
}
initAnimateScroll();