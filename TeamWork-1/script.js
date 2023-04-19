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

//userdate
const user_data = {
  gender: 'woman'
}

//gender
const genderBtns = document.querySelectorAll('#gender .calculating__choose-item')

genderBtns.forEach(btn => (
  btn.onclick = () => {
    let gender = btn.getAttribute("data-gender")
    user_data.gender = gender

    setTimeout(() => {
      genderBtns.forEach(btn => btn.classList.remove('calculating__choose-item_active'))
    }, 50);

    setTimeout(() => {
      btn.classList.add('calculating__choose-item_active')
    }, 200);
  }
))

//input
const inputs = document.querySelectorAll('.calculating__choose_medium .calculating__choose-item')
inputs.forEach(input => {
  input.oninput = () => {
    user_data[input.id] = input.value
  }
  input.onclick = () => {
    input.classList.remove('error')
  }
})

//activeType
const all_act_btns = document.querySelectorAll('.calculating__choose_big .calculating__choose-item')

all_act_btns.forEach(btn => {
  btn.onclick = () => {
    let type_active = btn.getAttribute('id')
    user_data.activity = type_active
    all_act_btns.forEach(btn => btn.classList.remove('calculating__choose-item_active'))
    btn.classList.add('calculating__choose-item_active')
    let allInputsFilled = true;
    inputs.forEach(input => {
      if (input.value.length === 0 || parseFloat(input.value) === 0) {
        input.classList.add('error')
        allInputsFilled = false;
      }
    })
    if (allInputsFilled) {
      let BMR = calculateBMR()
      calc_result.innerHTML = BMR.toFixed()
    } else {
      calc_result.innerHTML = '0'
    }
  }
})

// result
const calc_result = document.querySelector('.calculating__result span')

//calculator
function calculateBMR() {
  let BMR = 0;
  switch (user_data.gender) {
    case 'man':
      BMR = 88.36 + (13.4 * user_data.weight) + (4.8 * user_data.height) - (5.7 * user_data.age);
      break;
    case 'woman':
      BMR = 447.6 + (9.2 * user_data.weight) + (3.1 * user_data.height) - (4.3 * user_data.age);
      break;
    default:
      break;
  }
  switch (user_data.activity) {
    case 'low':
      BMR *= 1.2;
      break;
    case 'small':
      BMR *= 1.375;
      break;
    case 'medium':
      BMR *= 1.55;
      break;
    case 'high':
      BMR *= 1.725;
      break;
    default:
      break;
  }
  return BMR;
}

//timer
const deadline = `2023-4-30 00:00`
console.log(deadline);

function getTime(endtime) {
  const t = Date.parse(endtime) - Date.parse(new Date()),
    days = Math.round((t / 1000) / 60 / 60 / 24),
    hours = Math.round((t / 1000) / 60 / 60 % 24),
    minutes = Math.round((t / 1000) / 60 % 60),
    seconds = Math.round((t / 1000) % 60)
  return {
    t,
    days,
    hours,
    minutes,
    seconds
  }
}

function showTime(endTime, selector) {
  const timer = document.querySelector(selector),
    days = timer.querySelector('#days')
  hours = timer.querySelector('#hours')
  minutes = timer.querySelector('#minutes')
  seconds = timer.querySelector('#seconds')
  interval = setInterval(setTime, 1000)

  function setTime() {
    const t = getTime(endTime)
    days.innerHTML = t.days
    hours.innerHTML = t.hours
    minutes.innerHTML = t.minutes
    seconds.innerHTML = t.seconds
  }
}

showTime(deadline, '.timer')