// carousel

const slides = document.querySelectorAll('.offer__slide')
const offer__slider_prev = document.querySelector('.offer__slider-prev')
const offer__slider_next = document.querySelector('.offer__slider-next')
const tabcontents = document.querySelectorAll('.tabcontent')
const tabheader_item = document.querySelectorAll('.tabheader__item')
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

