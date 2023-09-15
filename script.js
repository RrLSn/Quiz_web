//selector
    // const inputNameEl = 
    const formEl = document.getElementById("form")
    const introEl = document.getElementById("ready")
    const readyButton = document.querySelector(".ready-btn")
    const navigatorEl = document.getElementById("gamePage-navigator")

    readyButton.addEventListener(
        "click",
        ()=>{
            formEl.style.display = "block"
            introEl.style.display = "none"
        }
    )

    let inputValue = ""

    const navigate = (e) => {
        e.preventDefault()
        inputValue = document.getElementById("HomeInput").value
        // console.log(`clicked: ${value}`)
        if(inputValue === ""){
            alert('Please Enter Player Name to continue')
        }else{
            window.location.href = "selectionPage.html"
            const event = new Event("inputValueChanged");
            document.dispatchEvent(event);
            
        }
    }

    navigatorEl.addEventListener("click", navigate)

    window.inputValue = inputValue

