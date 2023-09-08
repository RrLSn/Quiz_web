document.addEventListener("DOMContentLoaded", function(){
    //Selector
    const button = document.querySelector('.pageButton')
    const introEl = document.querySelector('.ready')
    const formEl = document.querySelector('form')
    const navigationEl = document.querySelector('.btn')
    const HomeInput = document.querySelector('.HomeInput')
    const Selections = document.querySelector('.SelContainer')


    //Initialization
    const playerName = "";


    button.addEventListener(
        'click',
        () => {
            introEl.style.display = "none"
            formEl.style.display = 'block'
            navigationEl.style.display = 'flex'
        }
    )

    navigationEl.addEventListener(
        'click',
        () => {
            if(HomeInput.value === ''){
                alert("Input Player name to continue")
            }else{
                playerName = HomeInput.value
                window.location.href = '/selectionPage.html'
            }
        }
    )
})