//selector
const inputNameEl = document.getElementById("HomeInput")
const welcomeNote = document.querySelector("welcome-note")
const formEl = document.getElementById("form")
const introEl = document.getElementById("ready")
const readyButton = document.querySelector(".ready-btn")
const navigatorEl = document.getElementById("gamePage-navigator")

console.log("Hello World!")

readyButton.addEventListener(
    "click",
    ()=>{
        formEl.style.display = "block"
        introEl.style.display = "none"
    }
)

const navigate = () => {

}

navigatorEl.addEventListener("click", navigate)