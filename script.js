function updateTime() {
  const timeDiv = document.getElementById('time');
  const now = new Date();

  // Montreal is UTC -5 during standard time, UTC -4 during DST
  // We'll use Intl.DateTimeFormat for accurate local time
  const options = {
    timeZone: 'America/Montreal',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZoneName: 'short'
  };

  const formatter = new Intl.DateTimeFormat([], options);
  const parts = formatter.formatToParts(now);

  const timeString = parts
    .filter(p => ['hour', 'minute', 'second', 'timeZoneName'].includes(p.type))
    .map(p => p.value)
    .join(' ');

  timeDiv.textContent = timeString;
}

setInterval(updateTime, 1000);
updateTime();
