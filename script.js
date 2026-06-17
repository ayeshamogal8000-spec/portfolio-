async function getData(){

    const cityName = document.getElementById("cityInput").value

    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=ca018df54353f065aaed7d802825b8be`)
    .then(res=>res.json())
    .then(data=>renderData(data))
}


function renderData(data){
     const weather = data.weather[0].main;

    // Change background based on weather
    if (weather === "Clouds") {
        document.body.style.backgroundImage = "url('cloudy.jpg')";
    } else if (weather === "Clear") {
        document.body.style.backgroundImage = "url('sunny.jpg')";
    } else if (weather === "Rain") {
        document.body.style.backgroundImage = "url('rainy.jpg')";
    } else{
        document.body.style.backgroundImage = "url('default.jpg')";
    }

    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.getElementById("result").innerHTML = `
                                <h1> ${data.name} (<i>${data.sys.country}</i>)</h1>
                                <p>Temparature : <b>${data.main.temp}<sup>o</sup>C</b></p>
                                <p>Humidity : <b>${data.main.humidity}</b></p>
                                <p>${data.weather[0].main} : <b>${data.weather[0].description}</b></p>
                                <p>
                                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
                                <p>
    `
}
