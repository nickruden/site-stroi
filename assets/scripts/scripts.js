// Красим шапку при скролле
function colorHeaderToWhite() {
  const header = document.querySelector(".header");
  if (window.scrollY > 50) {
    header.classList.add("bg-white");
  } else {
    header.classList.remove("bg-white");
  }
}

window.addEventListener("scroll", () => {
  colorHeaderToWhite();
});

// Попап
Fancybox.bind("[data-fancybox]", {
  compact: true,
  tpl: {
    closeButton:
      '<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.8764 18.1818L2.12132 31.9369L0 29.8155L13.7551 16.0605L9.53674e-07 2.3054L2.12132 0.184082L15.8764 13.9391L29.6315 0.184082L31.7528 2.3054L17.9977 16.0605L31.7528 29.8155L29.6315 31.9369L15.8764 18.1818Z" fill="#2169EF"/></svg></button>',
  },
});

// Маска ввода
$('[type="tel"]').each(function () {
  new IMask(this, {
    mask: "+{7} (000) 000 00 00",
    prepare: function (appended, masked) {
      if (appended === "8" && masked.value === "") {
        return "7";
      }
      return appended;
    },
  });
});

// Моб.меню
const menuButton = $(".button-menu");
menuButton.on("click", function () {
  $("body").toggleClass("menu-active");
});

// Accordion
$(document).ready(function () {
  $(".my-accordion-header").each(function () {
    if ($(this).hasClass("active")) {
      $(this).next(".my-accordion-content").css("display", "flex");
    } else {
      $(this).next(".my-accordion-content").css("display", "none");
    }
  });

  $(".my-accordion-header").on("click", function () {
    $(this).toggleClass("active");
    var content = $(this).next(".my-accordion-content");
    if (content.is(":visible")) {
      content.slideUp(function () {
        $(this).css("display", "none");
      });
    } else {
      content.css("display", "flex").hide().slideDown();
    }
  });
});

// Slider cases
const swiper = new Swiper(".cases__wrap .swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".cases .swiper-btn-next",
    prevEl: ".cases .swiper-btn-prev",
  },
});

const swiper2 = new Swiper(".thanks-letters .swiper", {
  slidesPerView: 1.15,
  spaceBetween: 20,
  navigation: {
    nextEl: ".thanks-letters .swiper-btn-next",
    prevEl: ".thanks-letters .swiper-btn-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2.15,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3.1,
      spaceBetween: 30,
    },
  },
});

const swiper3 = new Swiper(".long-work .swiper", {
  slidesPerView: 1.14,
  spaceBetween: 20,
  navigation: {
    nextEl: ".long-work .swiper-btn-next",
    prevEl: ".long-work .swiper-btn-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2.12,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 3.1,
      spaceBetween: 40,
    },
  },
});

const swiper4 = new Swiper(".promotions .swiper", {
  slidesPerView: 1.48,
  spaceBetween: 20,
  slidesOffsetAfter: 0,
  watchOverflow: true,
  navigation: {
    nextEl: ".promotions .swiper-btn-next",
    prevEl: ".promotions .swiper-btn-prev",
  },
  breakpoints: {
    576: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: "auto",
      spaceBetween: 50,
    },
    1199: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  },
});

const swiper5 = new Swiper(".our-articles .swiper", {
  slidesPerView: 1.19,
  spaceBetween: 25,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});

const swiper6 = new Swiper(".service-cases .swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".service-cases .swiper-btn-next",
    prevEl: ".service-cases .swiper-btn-prev",
  },
});

const swiper7 = new Swiper(".templates__slider .swiper", {
  slidesPerView: 1.19,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2.1,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 3.1,
      spaceBetween: 40,
      allowTouchMove: true,
    },
    1199: {
      slidesPerView: 3,
      spaceBetween: 40,
      allowTouchMove: false,
    },
  },
});

// модальное окно
document.addEventListener("DOMContentLoaded", function () {
  const modalOpeners = document.querySelectorAll("[data-open-modal]");

  modalOpeners.forEach((opener) => {
    opener.addEventListener("click", function (e) {
      e.preventDefault();

      let modalId = opener.getAttribute("data-open-modal");
      if (modalId.startsWith("#")) modalId = modalId.slice(1);

      const modal = document.getElementById(modalId);

      document.body.style.overflow = "hidden";
      modal.style.display = "flex";
      modal.setAttribute("opened", "");

      modal.addEventListener("click", function (e) {
        if (e.target === this) {
          this.style.display = "none";
          modal.removeAttribute("opened");
          document.body.style.overflow = "";
        }
      });

      const closeButtons = modal.querySelectorAll(".close-modal-button");
      closeButtons.forEach((btn) => {
        btn.addEventListener("click", function () {
          modal.style.display = "none";
          modal.removeAttribute("opened");
          document.body.style.overflow = "";
        });
      });
    });
  });
});


// скрипт строки поиска в хедере
const searchBtn = document.querySelectorAll('.button-search');
const searchOverlay = document.querySelector('.search-overlay');
const searchClose = searchOverlay.querySelector('.search__close');
const searchInput = searchOverlay.querySelector('.search-line__input');

searchBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    searchOverlay.classList.add('active');
    searchInput.focus();
    searchInput.select();
    document.body.classList = "";
    setTimeout( () => document.querySelector(".header").classList.remove("bg-white"), 330);
  });
});

searchClose.addEventListener('click', () => {
  searchOverlay.classList.remove('active');
  searchInput.value = '';
  colorHeaderToWhite();
});
