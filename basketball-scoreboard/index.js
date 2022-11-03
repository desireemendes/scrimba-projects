let homeScoreBtnOne = document.getElementById("add-1")
let homeStoreEl = document.getElementById("home-score")
let homeScore = 0

add1 = () => {
    // console.log("button clicked")
    homeScore += 1
    homeStoreEl.textContent = homeScore
}

add2 = () => {
    homeScore += 2
    homeStoreEl.textContent = homeScore
}

add3 = () => {
    homeScore += 3
    homeStoreEl.textContent = homeScore
}

//guest score