// Selecionando os elementos e atribuindo em suas variáveis
const nextYearContainer = document.getElementById("year")
const countdownContainer = document.getElementById("countdownContainer")
const daysContainer = document.getElementById("days")
const hoursContainer = document.getElementById("hours")
const minutesContainer = document.getElementById("minutes")
const secondsContainer = document.getElementById("seconds")
const spinnerLoading = document.getElementById("spinner")

// Selecionando o próximo ano
const nextYear = new Date().getFullYear() + 1

// Adicionando na variável o ano selecionado
const nextYearTime = new Date(`January 01 ${nextYear} 00:00:00`)

// Mostrando na tela o texto do próximo ano
nextYearContainer.textContent = nextYear

// Atribuindo elemento
const assignElement = assignElement => assignElement < 10 ? "0" + assignElement : assignElement

// Atribuindo elemento ao contador
const assignElementToCountdown = ({days, hours, minutes, seconds}) => {
    daysContainer.textContent = assignElement(days)
    hoursContainer.textContent = assignElement(hours)
    minutesContainer.textContent = assignElement(minutes)
    secondsContainer.textContent = assignElement(seconds)
}

// Contador para o ano novo
const countdownToNewYear = () => {
    const date = new Date()
    const difference = nextYearTime - date
    const days = Math.floor(difference / 1000 / 60 / 60 / 24)
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24
    const minutes = Math.floor(difference / 1000 / 60) % 60
    const seconds = Math.floor(difference / 1000) % 60
    
    assignElementToCountdown({days, hours, minutes, seconds})   
}

// Display do spinner + countdown container
const countdownDisplay = () => {
    spinnerLoading.remove()
    countdownContainer.style.display = "flex"
}

// Tempo do display do spinner + countdown container
setTimeout(countdownDisplay, 1000)

// Intervalo do contador para o ano novo
setInterval(countdownToNewYear, 1000)