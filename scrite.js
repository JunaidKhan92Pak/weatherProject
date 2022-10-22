let input = document.querySelector('input');
let Btn = document.querySelector('.inputBtn');
let newDate = document.querySelector('#Date');
let newDay = document.querySelector('#Day');
let City = document.querySelector('.city h1');
let Temp = document.querySelector('.Temp h1 span');
let TempStatus = document.querySelector('.tempImg');
let Humi = document.querySelector('#humni');
let minTemp = document.querySelector('#Mintemp');
let speed = document.querySelector('#Speed');
let weatherMood = document.querySelector("#WeatherStatus");

//For Date and Time
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let currentDay = new Date();
let day = (weekday[currentDay.getDay()]);
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const currentTime = new Date();
const currentMonth = months[currentTime.getMonth()]
const currentDate = currentTime.getDate();
newDate.innerHTML = `${currentMonth} - ${currentDate}`
newDay.innerHTML = day;



// function for add the data
const Add = async (event) => {
    const inputVal = input.value;
    if (inputVal == "") {
        City.innerHTML = "Enter City";
    }
    else {
        try {
            // lon: 73.4458, lat: 30.8081 
            let url = ` https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&units=metric&appid=326fa8888f373c10736610bf25d4add8`
            const Api = await fetch(url);
            const data = await Api.json();
            const arryData = [data]
            City.innerHTML = `${arryData[0].name},${arryData[0].sys.country}`;
            Temp.innerHTML = arryData[0].main.temp;
            Humi.innerHTML = arryData[0].main.humidity;
            minTemp.innerHTML = arryData[0].main.temp_min;
            speed.innerHTML = arryData[0].wind.speed;
            weatherMood.innerHTML = arryData[0].weather[0].main
            const tempMood = arryData[0].weather[0].main;
            console.log(arryData);

            if (tempMood === "Clear") {
                TempStatus.style.backgroundImage = "url(/img/sun.png)"
            }
            else if (tempMood === "Smoke") {
                TempStatus.style.backgroundImage = "url(/img/clouds.png)"

            }
            else if (tempMood === "Clouds") {
                TempStatus.style.backgroundImage = "url(/img/cloudy-day.png)"

            }
            else if (tempMood === "Rain") {
                TempStatus.style.backgroundImage = "url(/img/rain.png)"

            }
            else if (tempMood === "Haze") {
                TempStatus.style.backgroundImage = "url(/img/Haze.png)"

            }
            else if (tempMood === "Snow") {
                TempStatus.style.backgroundImage = "url(/img/snowy.png)"

            }

        }
        catch {
            City.innerHTML = "Invalid City ";
            Temp.innerHTML = "00";
        }
    }
}

// addEventListener
Btn.addEventListener('click', Add);