const inputText = document.querySelector('#validation-input')
const valueLengthInput = Number(inputText.getAttribute('data-length'))

inputText.addEventListener('blur', onInputText)

function onInputText(event) { 

  if (event.currentTarget.value.length === valueLengthInput) {
    // inputText.style.borderColor = '#4caf50'
    inputText.classList.add('valid')
    inputText.classList.remove('invalid')
  } else { 
  //  inputText.style.borderColor = '#f44336'
    inputText.classList.remove('valid')
    inputText.classList.add('invalid')
  }

}
 
//  Альтернативный вариант изменения border-color указал  указал в комментраиях