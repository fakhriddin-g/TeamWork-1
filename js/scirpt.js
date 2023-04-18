//carousel
const slides = document.querySelectorAll('.offer__slide')
const offer__slider_prev = document.querySelector('.offer__slider-prev')
const offer__slider_next = document.querySelector('.offer__slider-next')
const current = document.querySelector('#current')
const total = document.querySelector('#total')
const totall = [10]
let slideIndex = 0

showSlides(slideIndex)
function showSlides(n) {
      
    if(slides.length < 9 ) {
        total.innerHTML = "0" + slides.length
    }  else {
        total.innerHTML = slides.length
    }
    
    
    if(slideIndex > slides.length - 1) {
        slideIndex = 0
    } 
    if(slideIndex < 0) {
        slideIndex = slides.length - 1
    }

  
    current.innerHTML = slideIndex + 1
    current.innerHTML = (slideIndex + 1) < 10 ? `0${(slideIndex + 1)}` : slideIndex + 1
    total.innerHTML = slides.length < 10 ? "0" + slides.length : slides.length
    
    slides.forEach(el => el.style.display = "none")
    
    slides[slideIndex].style.display = "block"
    slides[slideIndex].classList.add('fade')
}


offer__slider_next.onclick = () => {
    slideIndex++

    showSlides(slideIndex)
}
offer__slider_prev.onclick = () => {
    slideIndex--

    showSlides(slideIndex)
}

// modal
let modal = document.querySelector('.modal')
let buttons = document.querySelectorAll('.btn')
let modal__close = document.querySelector('.modal__close')
buttons.forEach((btn) => {
    btn.onclick = () => {
        modal.classList.add('show')
    }
})

modal__close.onclick = () => {
    modal.classList.remove('show')
}
//food 
let tabcontents = document.querySelectorAll(".tabcontent")
let tabheader__items = document.querySelectorAll(".tabheader__item")
let tabcontent__descrs = document.querySelectorAll(".tabcontent__descr")
let tabIndex = 0

tabShow(tabIndex)
function tabShow(img) {
    tabcontents.forEach(el => el.style.display = 'none')
    tabcontents[img].classList.add('fade')
    tabcontents[img].style.display = 'block'
    
}
tabheader__items.forEach((i, tabIndex) => {
    i.onclick = () => {
        tabheader__items.forEach(el => el.classList.remove('tabheader__item_active'))
        i.classList.add('tabheader__item_active')
        tabShow(tabIndex)
    }
})
//

// calc

let genderBtns = document.querySelectorAll('#gender .calculating__choose-item')
let inputs = document.querySelectorAll('.calculating__choose_medium input')
let all_act_btns = document.querySelectorAll('.calculating__choose_big .calculating__choose-item')
let resultOutput = document.querySelector('#result')


let user_data = {
  	gender: "woman"
}


// Формула для мужчин:
// BMR = 88.36 + (13.4 * user_data.weight) + (4.8 × рост в см) - (5,7 × возраст в годах).

// Формула для женщин:
// BMR = 447,6 + (9,2 × вес в кг) + (3,1 × рост в см) – (4,3 × возраст в годах).

genderBtns.forEach(btn => {
	btn.onclick = () => {
		let gender = btn.getAttribute('data-gender')
		user_data.gender = gender

		genderBtns.forEach(el => el.classList.remove('calculating__choose-item_active'))

		btn.classList.add('calculating__choose-item_active')

	}
})
all_act_btns.forEach((btn) => {
    btn.onclick = () => {
        all_act_btns.forEach(el => el.classList.remove('calculating__choose-item_active'))
        btn.classList.add('calculating__choose-item_active')
    }
})

inputs.forEach(inp => {
	inp.oninput = () => {
		user_data[inp.id] = inp.value
	}
});




all_act_btns.forEach(btn => {
    btn.onclick = () => {
        all_act_btns.forEach(el => el.classList.remove('calculating__choose-item_active'))
        btn.classList.add('calculating__choose-item_active')
        let activeNum = +btn.getAttribute('data-active') 

        let {age, weight, height, gender} = user_data

        let result = (10 * weight) + (6.25 * height) - (5 * age)

        if(gender === 'man') {
            resultOutput.innerHTML = Math.round((result + 5) * activeNum)
        } else {
            resultOutput.innerHTML = Math.round((result - 161) * activeNum)
        }

    }
})
