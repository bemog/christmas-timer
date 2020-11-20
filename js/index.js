const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const counter = document.getElementById('counter');
const loading = document.getElementById('loading');

const currentYear = new Date().getFullYear();
const christmasTime = new Date(`December 25 ${currentYear} 00:00:00`);

const updateCounter = () => {
  const currentTime = new Date();
  const difference = christmasTime - currentTime;

  const days = Math.floor(difference / 1000 / 60 / 60 / 24);
  const hours = Math.floor(difference / 1000 / 60 / 60) % 24;
  const minutes = Math.floor(difference / 1000 / 60) % 60;
  const seconds = Math.floor(difference / 1000) % 60;

  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours < 10 ? `0${hours}` : hours;
  minutesEl.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  secondsEl.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
};

setInterval(updateCounter, 1000);
