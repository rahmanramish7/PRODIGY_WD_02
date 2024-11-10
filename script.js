let timer;
let isRunning = false;
let startTime = 0;
let elapsedTime = 0;

function updateDisplay() {
  const time = Date.now() - startTime + elapsedTime;
  const hours = Math.floor(time / 3600000).toString().padStart(2, '0');
  const minutes = Math.floor((time % 3600000) / 60000).toString().padStart(2, '0');
  const seconds = Math.floor((time % 60000) / 1000).toString().padStart(2, '0');
  document.getElementById('display').textContent = `${hours}:${minutes}:${seconds}`;
}

function start() {
  if (!isRunning) {
    isRunning = true;
    startTime = Date.now();
    timer = setInterval(updateDisplay, 1000);
  }
}

function pause() {
  if (isRunning) {
    isRunning = false;
    clearInterval(timer);
    elapsedTime += Date.now() - startTime;
  }
}

function reset() {
  isRunning = false;
  clearInterval(timer);
  startTime = 0;
  elapsedTime = 0;
  document.getElementById('display').textContent = "00:00:00";
  document.getElementById('laps').innerHTML = '';
}

function recordLap() {
  if (isRunning) {
    const lapTime = document.getElementById('display').textContent;
    const lapItem = document.createElement('li');
    lapItem.textContent = lapTime;
    document.getElementById('laps').appendChild(lapItem);
  }
}
