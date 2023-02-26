const inputEl = document.querySelector('#validation-input')
inputEl.addEventListener('blur', event => {
    if (inputEl.value.length >= inputEl.dataset.length) {
        event.target.classList.add('valid');
        event.target.classList.remove('invalid')
    } else {
        event.target.classList.add('invalid');
        event.target.classList.remove('valid');
    }
})
