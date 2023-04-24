let form = document.forms.sign_up
let inputs = document.querySelectorAll('input')
let btn = document.querySelector('button')
let inpNeed = document.querySelectorAll('.inp-need')
let textNeed = document.querySelector('.need')
let texterror = document.querySelector('.error')
let textsuccess = document.querySelector('.success')

form.onsubmit = (event) => {
    event.preventDefault();
    let errors = ''

    inputs.forEach((inp) => {
        inp.style.border = '2px solid #543FD3'

        if(inp.value.length == 0) {
            inpNeed.forEach(input => {
                input.style.border = '2px solid red'
            })
        errors += ` ${inp.name}`
        btn.style.background = 'red'
        }
    }) 

    if(!errors) {
        submit()
    } else {
        texterror.innerHTML = `Error: ${errors.split(' ').shift().length}/7`;
        textsuccess.innerHTML = `Success: ${errors.split(' ').shift().length}/7`;
        console.log(errors.split(' ').shift());
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

