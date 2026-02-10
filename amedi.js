let word = ["ну пожалуйста", "ну нажми да", "ну ради меня", "ну ты же меня любишь", "ну умоляю нажми да"]
const yes = document.getElementById("yes")
let x = 50
let y = 20
let z = null
function onClickNo(el) {
    let random = Math.floor(Math.random() * word.length)
    let randomWord = word[random]
    el.innerHTML = randomWord
    x += y   
    yes.style.width = x + "px"
}
function onClickYes(el){
    location.href = "amediyes.html"
}