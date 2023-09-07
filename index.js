const button = document.querySelector('button')
const introEl = document.querySelector('.ready')
const formEl = document.querySelector('form')
const navigationEl = document.querySelector('.btn')
const HomeInput = document.querySelector('.HomeInput')

// var playerName = "";

button.addEventListener(
    'click',
    (e) => {
        e.preventDefault();
        introEl.style.display = "none"
        formEl.style.display = 'block'
        navigationEl.style.display = 'flex'
    }

    // if(HomeInput.value === ''){

    // }
)

navigationEl.addEventListener(
    'click',
    (e) => {
        e.preventDefault();
        if(HomeInput.value === ''){
            alert("Input Player name to continue")
        }else if(HomeInput.value === null){
            alert("Input Player name to continue")
        }else{
            var playerName = HomeInput.value
            window.location.href = '/selectionPage.html'
            console.log(playerName)
        }
    }
)
