let dailyCounter = 0;

let currentDay =
  new Date().toDateString();

export function canSendEmail() {
  const today =
    new Date().toDateString();

  if (today !== currentDay) {
    currentDay = today;
    dailyCounter = 0;
  }

  if (dailyCounter >= 90) {
    return false;
  }

  dailyCounter++;

  return true;
}