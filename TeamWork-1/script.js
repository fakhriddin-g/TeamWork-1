// tabcontents
let tabcontents = document.querySelectorAll(".tabcontent");
let btns = document.querySelectorAll(".tabheader__item");

reload();
function reload(n = 0) {
  tabcontents.forEach((tabcontent) => {
    tabcontent.style.display = "none";
    tabcontent.classList.remove("fade");
  });
  tabcontents[n].style.display = "block";
  tabcontents[n].classList.add("fade");
}

btns.forEach((btn, index) => {
  btn.onclick = () => {
    btns.forEach((b) => b.classList.remove("tabheader__item_active"));
    btn.classList.add("tabheader__item_active");
    reload(index);
  };
});

// slides
const slides = document.querySelectorAll(".offer__slide");
const offer__slider_prev = document.querySelector(".offer__slider-prev");
const offer__slider_next = document.querySelector(".offer__slider-next");
const current = document.querySelector("#current");

let slideIndex = 0;

showSlides(slideIndex);
function showSlides(n) {
  if (slideIndex > slides.length - 1) {
    slideIndex = 0;
  }

  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  current.innerHTML = `0${slideIndex + 1}`;
  slides.forEach((el) => (el.style.display = "none"));
  slides[slideIndex].style.display = "block";
  slides[slideIndex].classList.add("fade");
}

offer__slider_next.onclick = () => {
  slideIndex++;
  showSlides(slideIndex);
};

offer__slider_prev.onclick = () => {
  slideIndex--;
  showSlides(slideIndex);
};

// modal
let modals = document.querySelectorAll(".modal");
let modalbtn = document.querySelectorAll(".btn");
let modalCLose = document.querySelectorAll(".modal__close");

modals.forEach((modal) => {
  modalbtn.forEach((btn) => {
    btn.onclick = () => {
      modal.style.display = "block";
      modalCLose.forEach((close) => {
        close.onclick = () => {
          modal.style.display = "none";
        };
      });
    };
  });
});

let calculates = document.querySelectorAll('.calculating__choose_big .calculating__choose-item')

calculates.forEach(calculet => {
    calculet.onclick = () => {
        calculates.forEach(i => i.classList.remove('calculating__choose-item_active'))
        calculet.classList.add('calculating__choose-item_active')
    }
})