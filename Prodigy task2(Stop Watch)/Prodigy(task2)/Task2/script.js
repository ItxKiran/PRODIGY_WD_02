let timer;
let startTime;
let elapsedTime = 0;
let running = false;

function startStop() {
  if (running) {
    clearInterval(timer);
    running = false;
  } else {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(updateDisplay, 10);
    running = true;
  }
}

function updateDisplay() {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  const formattedTime = formatTime(elapsedTime);
  document.getElementById('display').textContent = formattedTime;
}

function formatTime(milliseconds) {
  const date = new Date(milliseconds);
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  const centiseconds = Math.floor(date.getMilliseconds() / 10).toString().padStart(2, '0');
  return `${minutes}:${seconds}:${centiseconds}`;
}

function pause() {
  clearInterval(timer);
  running = false;
}

function reset() {
  clearInterval(timer);
  elapsedTime = 0;
  document.getElementById('display').textContent = '00:00:00';
  document.getElementById('laps').innerHTML = '';
  running = false;
}

function lap() {
  if (running) {
    const lapTime = formatTime(elapsedTime);
    const lapItem = document.createElement('li');
    lapItem.textContent = lapTime;
    document.getElementById('laps').appendChild(lapItem);
  }
}
