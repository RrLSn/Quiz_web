const button = document.querySelector('button')
const introEl = document.querySelector('.ready')
const formEl = document.querySelector('form')
const navigationEl = document.querySelector('.btn')

button.addEventListener(
    'click',
    (e) => {
        e.preventDefault()
        introEl.style.display = "none"
        formEl.style.display = 'block'
        navigationEl.style.display = 'flex'
    }
)