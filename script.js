let form = document.forms.sign_up
let inputs = document.querySelectorAll('input')
let btn = document.querySelector('button')
let inpNeed = document.querySelectorAll('.inp-need')
let textNeed = document.querySelectorAll('.need')
let texterror = document.querySelector('#error')
let textsuccess = document.querySelector('#success')
let imgError = document.querySelectorAll('.img-error')

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

