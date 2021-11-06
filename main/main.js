const countdowwn = () => {
	const comingDate = new Date("Dec 1, 2021 00:00:00").getTime();
	const currentDate = new Date().getTime();

	const leftDate = comingDate - currentDate;

	const seconds = 1000;
	const minutes = 60 * seconds;
	const hours = 60 * minutes;
	const days = 24 * hours;

	let dateDays = Math.floor(leftDate/days);
	let dateHours = Math.floor((leftDate%days)/hours);
	let dateMinutes = Math.floor((leftDate%hours)/minutes);
	let dateSeconds = Math.floor((leftDate%minutes)/seconds);

	dateDays = dateDays < 10 ? "0" + dateDays : dateDays;
	dateHours = dateHours < 10 ? "0" + dateHours : dateHours;
	dateMinutes = dateMinutes < 10 ? "0" + dateMinutes : dateMinutes;
	dateSeconds = dateSeconds < 10 ? "0" + dateSeconds : dateSeconds;
	
	document.getElementById('days').innerHTML = dateDays;
	document.getElementById('hours').innerHTML = dateHours;
	document.getElementById('minutes').innerHTML = dateMinutes;
	document.getElementById('seconds').innerHTML = dateSeconds;
}

setInterval(countdowwn, 1000);