// Modal
const modal = document.querySelector('.modal')
const buttons = document.querySelectorAll('button[data-modal]')
const modalCls = document.querySelector('.modal__close')

buttons.forEach(btn => {
  btn.onclick = () => {
    modal.style.display = 'block'
  }
})
modalCls.onclick = () => {
  modal.style.display = 'none'
}


// Slides
const slides = document.querySelectorAll('.offer__slide')
const offer__slider_prev = document.querySelector('.offer__slider-prev')
const offer__slider_next = document.querySelector('.offer__slider-next')
const current = document.querySelector('#current')

let slideIndex = 0
showSlides(slideIndex)

function showSlides(n) {
  if(n >= slides.length) {
    slideIndex = 0
  }
  if(n < 0) {
    slideIndex = slides.length - 1
  }

  if(slides.length < 10) {
    current.innerHTML = "0" + (slideIndex + 1)
    total.innerHTML = "0" + slides.length
  } else{
    current.innerHTML = slideIndex + 1
    total.innerHTML = slides.length
  }

  slides.forEach(el => el.style.display = "none")
  slides[slideIndex].style.display = "block"

}

offer__slider_next.onclick = () => {
  slideIndex++
  showSlides(slideIndex)
}

offer__slider_prev.onclick = () => {
  slideIndex--
  showSlides(slideIndex)
}


// Tabs
const tabcontents = document.querySelectorAll('.tabcontent')
const tabheader_item = document.querySelectorAll('.tabheader__item')

tabsShow(slideIndex)
function tabsShow(i) {
  tabcontents.forEach(el => el.style.display = "none")
  tabcontents[i].style.display = "block"
}

tabheader_item.forEach((tab, slideIndex) => {
  tab.addEventListener('click', () => {
    document.querySelector('.tabheader__item_active')?.classList.remove('tabheader__item_active')
    tab.classList.add('tabheader__item_active')

    tabsShow(slideIndex)
  })
})


// Calc
const genderBtns = document.querySelectorAll('#gender .calculating__choose-item')
const inputs = document.querySelectorAll('.calculating__choose_medium input')
const activeBtns = document.querySelectorAll('.calculating__choose_big .calculating__choose-item')
const result = document.querySelector('.calculating__result span')
result.innerHTML = 0
// let ratio = activeBtns.forEach(el => el.getAttribute('data-active'))


let user_data = {
  gender: "woman",
  ratio: "1.375"
}

genderBtns.forEach(btn => {
  btn.onclick = () => {
    let gender = btn.getAttribute('data-gender')
    user_data.gender = gender

    genderBtns.forEach(el => el.classList.remove('calculating__choose-item_active'))
    btn.classList.add('calculating__choose-item_active')

    calc(user_data.ratio)
  }
})

inputs.forEach(input => {
  input.oninput = () => {
    user_data[input.id] = input.value

    calc(user_data.ratio, input)
  }
})

activeBtns.forEach(btn => {
  btn.onclick = () => {
    let ratio = btn.getAttribute('data-active')
    user_data.active = btn.id
    user_data.ratio = ratio
    
    activeBtns.forEach(el => el.classList.remove('calculating__choose-item_active'))
    btn.classList.add('calculating__choose-item_active')

    calc(user_data.ratio)
  }
})

function calc(ratio, input) {
  if (!user_data.weight || !user_data.height || !user_data.age || !user_data.ratio) {
    result.innerHTML = 0
  } else if(user_data.gender === "man") {
    result.innerHTML = Math.round((88.36 + (13.4 * user_data.weight) + (4.8 * user_data.height) - (5.7 * user_data.age)) * ratio)
  } else if(user_data.gender === "woman"){
    result.innerHTML = Math.round((447.6 + (9.2 * user_data.weight) + (3.1 * user_data.height) - (4.3 * user_data.age)) * ratio)
  }


}

// Promotion Timer
const deadline = "2023-04-21 13:28"
function getTime(endTime) {
  const t = Date.parse(endTime) - Date.parse(new Date()),
    days = Math.round((t / 1000) / 60 / 60 / 24),
    hours = Math.round((t / 1000) / 60 / 60 % 24),
    minutes = Math.round(((t - 30000) / 1000) / 60 % 60),
    seconds = Math.round((t / 1000) % 60);

  return{
    t,
    days,
    hours,
    minutes,
    seconds
  }
}

function showTime(endTime, selector) {
  const timer = document.querySelector(selector),
    days = timer.querySelector('#days'),
    hours = timer.querySelector('#hours'),
    minutes = timer.querySelector('#minutes'),
    seconds = timer.querySelector('#seconds'),
    interval = setInterval(setTime, 1000)
    
  function setTime() {
    const t = getTime(endTime)
    days.innerHTML = t.days
    hours.innerHTML = t.hours
    minutes.innerHTML = t.minutes
    seconds.innerHTML = t.seconds
    
    stopTime(t.t, interval)
  }
}

showTime(deadline, '.timer')

function stopTime(endPromotion, interval) {
  if (endPromotion < interval) {
    days.innerHTML = 0
    hours.innerHTML = 0
    minutes.innerHTML = 0
    seconds.innerHTML = 0
  }
}

// Forms
const form = document.forms.sign_up
const dataInputs = form.querySelectorAll('input')

form.onsubmit = (event) => {
  event.preventDefault()

  let errors = ''

  dataInputs.forEach(inp => {
    inp.style.border = '2px solid green'
    if (inp.value.length === 0) {
      inp.style.border = '2px solid red'
      errors +=  ` ${inp.name}`
    }
  })

  if (!errors) {
    submit()
  } else {
    alert("You didn't fill " + errors)
  }
}

function submit() {
  let user = {}

  let db = new FormData(form)

  db.forEach((value, key) => {
    user[key] = value
  })

  console.log(user);
}