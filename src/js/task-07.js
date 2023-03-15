const inputRange = document.querySelector('#font-size-control')
const text = document.querySelector('#text')

inputRange.addEventListener('input',onInputRange)

function onInputRange(event) { 
  text.style.fontSize = `${Number(event.currentTarget.value)}px`
}

