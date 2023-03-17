const form = document.querySelector('.login-form')
const user = {};

form.addEventListener('submit', onSubmitForm)
form.addEventListener('submit', reset)

function onSubmitForm(event) { 
  event.preventDefault()

  const mail = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;

  if (!mail || !password) {
    alert('Все поля должны быть заполнены!')
  } else { 
    user.email = mail
    user.password = password
    console.log(user)
  }

}

function reset(event) { 
  event.currentTarget.elements.email.value = ''
  event.currentTarget.elements.password.value = ''
}