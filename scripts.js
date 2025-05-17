let score = 0
let activeMole = null
const scoreDisplay = document.getElementById('score')
const holes = document.querySelectorAll('.hole')

function randomHole() {
    const index = Math.floor(Math.random() * holes.length)
    return holes [index]
}
function showMole() {
    const Mole = document.createElement('div')
    Mole.classList.add('mole')
    Mole.onclick = catchMole
    activeMole = randomHole()
    activeMole.appendChild(Mole)
    Mole.style.display = 'block'
    setTimeout (() => {
        if (activeMole) {
            activeMole.removeChild(Mole)
            activeMole = null
        }
    }, 1000)
}
function catchMole () {
    score++
    scoreDisplay.textContent = `Очки: ${score}`
    if (activeMole) {
        activeMole.removeChild(this)
        activeMole = null
    }
}
setInterval(showMole, 1500)