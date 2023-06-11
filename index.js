document.addEventListener('DOMContentLoaded', () => {
    const deadline = new Date (2023, 6, 24)

    let timerId = null;

    function countdownTimer() {
    const diff = deadline - new Date();

    if (diff <= 0) {
      clearInterval(timerId);
    }
    const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
    const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
    $days.textContent = days < 10 ? '0' + days : days;
    $hours.textContent = hours < 10 ? '0' + hours : hours;
    $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
    $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
  }

    const $days = document.querySelector('.days');
    const $hours = document.querySelector('.hours');
    const $minutes = document.querySelector('.minutes');
    const $seconds = document.querySelector('.seconds');

    countdownTimer();

    timerId = setInterval(countdownTimer, 1000);
})

const ValidateEmail = async () =>
{   const url = 'https://disposable.debounce.io/?email='
    const emailInput = document.querySelector('.emailInput')
    const value = document.getElementById('emailInput').value
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
    {  
        const response = await fetch(`${url+value}`)

        if(response.ok) {
          OpenPopup(true)
        } else {
          OpenPopup(false)
        }

        return
    }
    emailInput.value = 'Invalid Email, please try again'
}
const OpenPopup = (success) => {
  document.getElementById('popupTitle').textContent = success ? 'success!' : 'failure!'
  document.getElementById('popupDescription').textContent = success ? 'You have successfully subscribed to the email newsletter' : 'Not today('
  document.getElementById('popup').classList.add('popupOpen')
  document.getElementById('popup').classList.remove('popupClose')
}

const ClosePopup = () => {
    document.getElementById('popup').classList.add('popupClose')
    document.getElementById('popup').classList.remove('popupOpen')
}

const ClearInput = () => {
    const emailInput = document.querySelector('.emailInput')
    emailInput.value = ''
}