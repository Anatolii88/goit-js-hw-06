const inputName = document.querySelector('#name-input')
const textNameOutput = document.querySelector('#name-output')

inputName.addEventListener('input', onInputName)

function onInputName(event) {

  if (!event.currentTarget.value) {
    textNameOutput.textContent = 'Anonymous'
  } else { 
    textNameOutput.textContent = event.currentTarget.value
  }
  
}