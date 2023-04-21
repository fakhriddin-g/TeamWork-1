// // carousel

// const slides = document.querySelectorAll('.offer__slide')
// const offer__slider_prev = document.querySelector('.offer__slider-prev')
// const offer__slider_next = document.querySelector('.offer__slider-next')
// const total_slide = document.querySelector('#total')
// const current = document.querySelector('#current')

// let slideIndex = 0
// showSlides(slideIndex)

// function showSlides(n) {

//     if (slideIndex > slides.length - 1) {
//         slideIndex = 0
//     }
//     if (slideIndex < 0) {
//         slideIndex = slides.length - 1
//     }
//     current.innerHTML = slideIndex + 1 < 10 ? '0' + (slideIndex + 1) : slideIndex + 1
//     total_slide.innerHTML = slides.length < 10 ? '0' + slides.length : slides.length

//     slides.forEach(el => el.style.display = "none")

//     slides[slideIndex].style.display = "block"
//     slides[slideIndex].classList.add('fade')
// }


// offer__slider_next.onclick = () => {
//     slideIndex++

//     showSlides(slideIndex)
// }
// offer__slider_prev.onclick = () => {
//     slideIndex--

//     showSlides(slideIndex)
// }

// carousel

const slides = document.querySelectorAll('.offer__slide')
const prev = document.querySelector('.offer__slider-prev')
const next = document.querySelector('.offer__slider-next')
const current = document.querySelector('#current')
const total = document.querySelector('#total')

let i = 0

showSlides()

function showSlides(n) {

    if (i > slides.length - 1) {
        i = 0
    }

    if (i < 0) {
        i = slides.length - 1
    }

    current.innerHTML = i + 1 < 10 ? '0' + (i + 1) : i + 1
    total.innerHTML = slides.length < 10 ? '0' + (slides.length) : slides.length

    slides.forEach(slide => slide.style.display = 'none')

    slides[i].style.display = 'block'
    slides[i].classList.add('fade')

}

prev.onclick = () => {

    i--
    showSlides()

}

next.onclick = () => {

    i++
    showSlides()

}

// modal

const btns = document.querySelectorAll("button[data-modal]")
const modal = document.querySelector(".modal")
const modal_close = document.querySelector(".modal__close")

btns.forEach(btn => {

    btn.onclick = () => {
        modal.style.display = "block"

        setTimeout(() => {
            modal.style.opacity = "1"
        }, 200);
    }
    modal_close.onclick = () => {
        modal.style.opacity = "0"

        setTimeout(() => {
            modal.style.display = "none"
        }, 200);
    }

})

// // tabs

// const tabheader__items = document.querySelectorAll('.tabheader__item')
// const tab__contents = document.querySelectorAll(".tabcontent")

// let tabIndex = 0

// showtabs()
// function showtabs(n) {

//     tab__contents.forEach(el => {
//         el.style.display = "none"

//         tab__contents[tabIndex].style.display = "block"
//         tab__contents[tabIndex].classList.add('fade')
//     })

// }

// tabheader__items.forEach((btn, i) => {

//     btn.addEventListener('click', () => {

//         document.querySelector('.tabheader__item_active')?.classList.remove('tabheader__item_active')
//         btn.classList.add('tabheader__item_active')
//         tabIndex = i
//         showtabs()
//     })


// })

// tabs

const tabs = document.querySelectorAll('.tabcontent')
const items = document.querySelectorAll('.tabheader__item')
let index = 0
showtabs()

function showtabs(n) {
    tabs.forEach(tab => tab.style.display = 'none')
    tabs[index].style.display = 'block'
    tabs[index].classList.add('fade')
}
items.forEach((el, i) => {
    el.onclick = () => {
        items.forEach(el => el.classList.remove('tabheader__item_active'))
        el.classList.add('tabheader__item_active')
        index = i
        console.log(index);
        showtabs()
    }
})

// // calc

// const genderBtns = document.querySelectorAll('#gender .calculating__choose-item')
// const inputs = document.querySelectorAll('.calculating__choose_medium .calculating__choose-item')
// const all_act_btns = document.querySelectorAll('.calculating__choose_big .calculating__choose-item')
// const calc_result = document.querySelector('.calculating__result span')
// let BMR = 0
// const user_data = {
//     gender: 'woman'
// }

// genderBtns.forEach(btn => (
//     btn.onclick = () => {
//         let gender = btn.getAttribute("data-gender")
//         user_data.gender = gender

//         setTimeout(() => {
//             genderBtns.forEach(btn => btn.classList.remove('calculating__choose-item_active'))
//         }, 50);

//         setTimeout(() => {
//             btn.classList.add('calculating__choose-item_active')
//         }, 200);
//     }
// ))

// inputs.forEach(input => {
//     input.oninput = () => {
//         user_data[input.id] = input.value
//     }
//     input.onclick = () => {
//         input.classList.remove('error')
//     }
// })

// function calculateBMR() {
//     let BMR = 0;
//     switch (user_data.gender) {
//         case 'man':
//             BMR = 88.36 + (13.4 * user_data.weight) + (4.8 * user_data.height) - (5.7 * user_data.age);
//             break;
//         case 'woman':
//             BMR = 447.6 + (9.2 * user_data.weight) + (3.1 * user_data.height) - (4.3 * user_data.age);
//             break;
//         default:
//             break;
//     }
//     switch (user_data.activity) {
//         case 'low':
//             BMR *= 1.2;
//             break;
//         case 'small':
//             BMR *= 1.375;
//             break;
//         case 'medium':
//             BMR *= 1.55;
//             break;
//         case 'high':
//             BMR *= 1.725;
//             break;
//         default:
//             break;
//     }
//     return BMR;
// }

// all_act_btns.forEach(btn => {
//     btn.onclick = () => {
//         let act = btn.getAttribute('id')
//         user_data.activity = act
//         setTimeout(() => {
//             all_act_btns.forEach(btn => btn.classList.remove('calculating__choose-item_active'))
//         }, 50);

//         setTimeout(() => {
//             btn.classList.add('calculating__choose-item_active')
//         }, 200);

//         let allInputsFilled = true;
//         inputs.forEach(input => {
//             if (input.value.length === 0 || parseFloat(input.value) === 0) {
//                 input.classList.add('error')
//                 allInputsFilled = false;
//             }
//         })

//         if (allInputsFilled) {
//             let BMR = calculateBMR()
//             calc_result.innerHTML = BMR.toFixed()
//         } else {
//             calc_result.innerHTML = '0'
//         }
//     }
// })

// calc

////// gender

const genderBtns = document.querySelectorAll('#gender .calculating__choose-item')
const user_data = {
    gender: "woman"
}
genderBtns.forEach(btn => {
    btn.onclick = () => {
        let gender = btn.getAttribute('data-gender')
        user_data.gender = gender
        setTimeout(() => {
            genderBtns.forEach(btn => btn.classList.remove("calculating__choose-item_active"))
        }, 50);
        setTimeout(() => {
            btn.classList.add("calculating__choose-item_active")
        }, 200);
    }
})

const inputs = document.querySelectorAll('.calculating__choose_medium input')

inputs.forEach(inp => {
    inp.oninput = () => {
        user_data[inp.id] = inp.value
        inp.classList.remove('error')
    }
})

const all_act_btns = document.querySelectorAll('.calculating__choose_big .calculating__choose-item')
const calc_result = document.querySelector('.calculating__result span')
all_act_btns.forEach(btn => {
    btn.onclick = () => {
        let act = btn.getAttribute('id')
        user_data.activity = act
        setTimeout(() => {
            all_act_btns.forEach(btn => btn.classList.remove('calculating__choose-item_active'))
        }, 50);

        setTimeout(() => {
            btn.classList.add('calculating__choose-item_active')
        }, 200);

        let allInputsFilled = true;
        inputs.forEach(input => {
            if (input.value.length === 0 || parseFloat(input.value) === 0) {
                input.classList.add('error')
                allInputsFilled = false;
            }
        })

        if (allInputsFilled) {
            let BMR = calcBMR()
            calc_result.innerHTML = BMR.toFixed()
        } else {
            calc_result.innerHTML = '0'
        }
    }
})

function calcBMR() {
    let BMR = 0
    const { gender, weight, height, age, activity } = user_data
    switch (gender) {
        case 'man':
            BMR = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
            break;
        case 'woman':
            BMR = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
            break;
        default:
            break;
    }

    switch (activity) {
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

// liteTimer

// let h = 1, m = 1, s = 10,
//     timer = setInterval(() => {
//         s--
//         console.log(`${h}:${m}:${s}`);
//         if (s === 0) {
//             s = 59
//             m--
//             if (m === -1) {
//                 m = 59
//                 h--
//                 if (h <= -1) {
//                     clearInterval(timer)
//                 }
//             }
//         }
//     }, 0);

//timer
const deadline = "2023-05-20 00:00"
function getTime(endTime) {

    const t = Date.parse(endTime) - Date.parse(new Date),
        days = Math.floor((t / 1000) / 60 / 60 / 24),
        hours = Math.floor((t / 1000) / 60 / 60 % 24),
        minutes = Math.floor((t / 1000) / 60 % 60),
        seconds = Math.floor((t / 1000) % 60);

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
        days = timer.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        interval = setInterval(setTime, 1000);

    function setTime() {
        const t = getTime(endTime)
        days.innerHTML = t.days
        hours.innerHTML = t.hours
        minutes.innerHTML = t.minutes
        seconds.innerHTML = t.seconds
        if (t.t <= 0) {
            days.innerHTML = '0'
            hours.innerHTML = '0'
            minutes.innerHTML = '0'
            seconds.innerHTML = '0'
            console.log(t.t);
            clearInterval(interval)
        }

    }
}
showTime(deadline, ".timer")

// forms

let forms = document.querySelectorAll('form')

forms.forEach((form) => {
    let inputs = form.querySelectorAll('input')

    form.addEventListener('submit', (event) => {
        event.preventDefault()

        let allInputsFilled = true

        inputs.forEach((input) => {
            input.style.border = '2px solid blue'

            if (input.value.length === 0) {
                input.style.border = '2px solid red'
                allInputsFilled = false
            }
        })

        if (allInputsFilled) {
            submit(form)
        } else {
            alert('Please fill in all fields')
        }
    })
})

function submit(form) {
    let user = {}
    let formData = new FormData(form)

    formData.forEach((value, key) => {
        user[key] = value
    })

    form.reset()
    console.log(user)
}