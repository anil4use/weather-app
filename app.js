const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd021e5d43emsh06011c7e27d6520p1509d6jsn13fe0d8fb850',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather=(city)=>{
	cityname.innerHTML=city;

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then((response) => {

		// console.log(response)
		// document.getElementsByClassName('.cloud_pct').innerHTML=response.cloud_pct
		cloud_pct.innerHTML = response.cloud_pct
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		max_temp.innerHTML = response.max_temp
		min_temp.innerHTML = response.min_temp
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
		t.innerHTML = response.temp
		wind_degrees.innerHTML = response.wind_degrees
		wind_speed.innerHTML = response.wind_speed
	})
	.catch(err => console.error(err));
	
	
}
document.getElementById('submit').addEventListener("click",(ee)=>{

	getWeather(city.value)
	ee.preventDefault();
	
})
getWeather("bhopal")