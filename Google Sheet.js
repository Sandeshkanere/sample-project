const scriptURL = 'https://script.google.com/macros/s/AKfycbzOmP1MQdruSFW5-4XFJznXUJsCFcAD5F-5oY7Zqu8glBYFgLeagQhO1CQCKGUzcVOo5Q/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})