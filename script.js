// script.js - contador até o próximo 25 de setembro
function nextBirthday(month=9, day=25) {
  const now = new Date();
  const year = now.getFullYear();
  let target = new Date(year, month - 1, day, 0, 0, 0, 0);
  if (target <= now) target = new Date(year + 1, month - 1, day, 0, 0, 0, 0);
  return target;
}

const targetDate = nextBirthday(9,25);
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('minutes');
const secsEl = document.getElementById('seconds');

function pad(n){ return String(n).padStart(2,'0'); }

function updateCountdown(){
  const now = new Date();
  const diff = targetDate - now;
  if (diff <= 0){
    daysEl.textContent = '00';
    hoursEl.textContent = '00';
    minsEl.textContent = '00';
    secsEl.textContent = '00';
    document.querySelector('.overlay h1').textContent = 'Já é dia 25/09 — vamos comemorar! 🎉';
    return;
  }
  const s = Math.floor(diff / 1000);
  const days = Math.floor(s / (3600*24));
  const hours = Math.floor((s % (3600*24)) / 3600);
  const minutes = Math.floor((s % 3600) / 60);
  const seconds = s % 60;

  daysEl.textContent = pad(days);
  hoursEl.textContent = pad(hours);
  minsEl.textContent = pad(minutes);
  secsEl.textContent = pad(seconds);
}

updateCountdown();
setInterval(updateCountdown, 1000);
