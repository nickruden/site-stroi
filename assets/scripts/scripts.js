// Красим шапку при скролле
function colorHeaderToWhite() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('bg-white');
    } else {
        header.classList.remove('bg-white');
    }
}
window.addEventListener("scroll", () => {
   colorHeaderToWhite();
});

// Попап
Fancybox.bind("[data-fancybox]", {
  compact:true,
  tpl: {
    closeButton: '<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.8764 18.1818L2.12132 31.9369L0 29.8155L13.7551 16.0605L9.53674e-07 2.3054L2.12132 0.184082L15.8764 13.9391L29.6315 0.184082L31.7528 2.3054L17.9977 16.0605L31.7528 29.8155L29.6315 31.9369L15.8764 18.1818Z" fill="#2169EF"/></svg></button>'
  }
});

// Маска ввода
$('[type="tel"]').each(function(){
	new IMask(this, {
		mask: '+{7} (000) 000 00 00',
		prepare: function (appended, masked) {
          if (appended === '8' && masked.value === '') {
            return '7';
          }
          return appended;
        },
	});
});

// Моб.меню
const menuButton = $('.button-menu');
menuButton.on("click", function() {
    $('body').toggleClass('menu-active');
});

// Accordion
const accordionHeader = $('.accordion-header');
const accordionContent = $('.accordion-content');
accordionHeader.on("click", function() {
    $(this).toggleClass('active');
    $(this).next().slideToggle();
});

// Slider cases
const swiper = new Swiper('.cases__wrap .swiper', {
  navigation: {
    nextEl: '.cases .swiper-btn-next',
    prevEl: '.cases .swiper-btn-prev',
  }
});

const swiper2 = new Swiper('.thanks-letters .swiper', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.thanks-letters .swiper-btn-next',
    prevEl: '.thanks-letters .swiper-btn-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    992: {
        slidesPerView: 3,
        spaceBetween: 30,
    }
  }
});