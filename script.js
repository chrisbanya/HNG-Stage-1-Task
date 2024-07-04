function displayTime() {
  let time = new Date;
  let hours = time.getUTCHours() % 12 || 12; 
  let minutes = time.getUTCMinutes();
  let seconds = time.getUTCSeconds();
  let meridian = time.getUTCHours() < 12;
  standardTimeFormat = `${hours.toString().padStart(2, "0")}:${minutes}:${seconds.toString().padStart(2, "0")}  ${meridian ? 'AM' : 'PM'}`;
 // 4 day
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayToday = daysOfWeek[time.getUTCDay()];
 
document.getElementById("currentTime").textContent = standardTimeFormat;
document.getElementById("currentDate").textContent = dayToday;
}
 setInterval(displayTime, 1000); //countdown like effect
displayTime();

