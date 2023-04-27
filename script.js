let form = document.forms.sign_up
let inputs = document.querySelectorAll('input')
let btn = document.querySelector('button')
let inpNeed = document.querySelectorAll('.inp-need')
let textNeed = document.querySelectorAll('.need')
let texterror = document.querySelector('#error')
let textsuccess = document.querySelector('#success')
let imgError = document.querySelectorAll('.img-error')



let inps = form.querySelectorAll('input')
inps.forEach((inp) => {
    inp.onkeyup = () => {
        let key = inp.name
        patterns[key]
        validate(patterns[key], inp)
    }
})

let patterns = {
    name: /^[a-z а-я ,.'-]+$/i,
    surname: /^[a-z а-я ,.'-]+$/i,
    email:  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i,
    number: /^998[012345789][0-9]{8}$/,
    mumName: /^[a-z а-я ,.'-]+$/i,
    papName: /^[a-z а-я ,.'-]+$/i,
    age: /^\S[0-9]{0,2}$/,
    aboutYou: /^[a-z а-я ,.'-]+$/i,
    whatIsJS: /^[a-z а-я ,.'-]+$/i,
    whatIsHTML: /^[a-z а-я ,.'-]+$/i,
    whatIsCSS: /^[a-z а-я ,.'-]+$/i,
    yourCar: /^[a-z а-я ,.'-]+$/,
}

inps.forEach(inp => {
    inp.onkeyup = () => {
      let value = inp.value
      if(!patterns[inp.name].test(value)) {
        value = value.replace(new RegExp(`[^${patterns[inp.name].source}]`, 'g'), 'i')
      }
      inp.value = value
      if(patterns[inp.name].test(inp.value)) {
        inp.style.border = '2px solid green'
      } else {
        inp.style.border = '2px solid red'
      }
    }
  })


form.onsubmit = (event) => {
    event.preventDefault();
    let errors = ''
    let errorCount = 0



    inputs.forEach((inp) => {
        inp.style.border = '2px solid #543FD3'

        inpNeed.forEach(inp => {
            imgError.forEach(img => {
        if(inp.value.length == 0) {
        inp.style.border = '2px solid red'
        errors += ` ${inp.name}`
        btn.classList.add('red-btn')
        btn.classList.remove('main-btn')
        img.style.display = 'block'
        } else {
            btn.classList.remove('red-btn')
            btn.classList.add('main-btn')
        }
        inp.oninput = () => {
            inp.style.border = '2px solid #4200FF'
            inp.nextElementSibling.style.display = 'none'
        }
    })
    })
    }) 




    inpNeed.forEach(inp => {
        if(inp.value.length == 0) {
            errorCount++
        } 
    })

    if(!errors) {
        submit()
    } else {
        texterror.innerHTML = `Error: ${errorCount}/7`
        textsuccess.innerHTML = inpNeed.length - errorCount;
        textsuccess.innerHTML = 'Success:' + textsuccess.innerHTML + '/7'
    }
}
    function submit() {
        let user = {}  

        let fm = new FormData(form)
    
        fm.forEach((value, key) => {
            user[key] = value
        })
    
        form.reset()
    
        console.log(user);
        
    }


//   let searchInp = document.querySelector('#search')
// let pSearch = document.querySelector('.lor-p')

// searchInp.onkeyup = () => {
//   let re = new RegExp(searchInp.value, 'ig')

//   console.log(re);

//   let text = pSearch.innerHTML

//   if(searchInp.value.length) {
//     let result = text.replace(re, `<b>${searchInp.value}</b>`)

//     pSearch.innerHTML = result
//   }
// }
