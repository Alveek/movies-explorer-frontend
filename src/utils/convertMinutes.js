export function getHoursAndMinutes(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (hours === 0) {
    return `${minutes > 0 ? ` ${minutes}м` : ''}`;
  } else {
    return `${hours}ч${minutes > 0 ? ` ${minutes}м` : ''}`;
  }
}
