let cityName=document.querySelector('.weather_city');
let dateTime=document.querySelector('.weather_date_time');
let w_forecast=document.querySelector('.weather_forecast');
let w_temperature=document.querySelector('.weather_temperature');
let w_icon=document.querySelector('.weather_icon');
let w_minTem=document.querySelector('.weather_min');
let w_maxTem=document.querySelector('.weather_max');
const weather_feelsLike=document.querySelector('.weather_feelsLike');
const weather_humidity=document.querySelector('.weather_humidity');
const weather_wind=document.querySelector('.weather_wind');
const weather_pressure=document.querySelector('.weather_pressure');
let citySearch=document.querySelector('.weather_search');
// to get the actual country name
const getCountryName=(code )=>{
   return new Intl.DisplayNames([code ], { type: "region" }).of(code);
}

const getTime=(dt)=>{
    
    const curDate=new Date(dt*1000);
    console.log(curDate); 
    const options={
        weekday:"long",
        year:"numeric",
        month:"numeric",
        day:"numeric",
        hour:"numeric",
        minute:"numeric",

    };
    const formatter=new Intl.DateTimeFormat("en-us",options);
    return formatter.format(curDate);

}
let city="pune";
citySearch.addEventListener('submit',(e)=>{
    e.preventDefault();
    let cityName=document.querySelector('.city_name');
    console.log(cityName.value);
    city=cityName.value;
    getWeatherData(); 
    cityName.value="";
    
})


const getWeatherData = async () => {
    const weatherUrl =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=199d5344b26837e4c7a016e214b9da58`
    try {
        const res = await fetch(weatherUrl);
        const data = await res.json();
         console.log(data);
        const{main,name,weather,wind,sys,dt}=data;
        cityName.innerHTML=`${name},${getCountryName(sys.country)}`;
        dateTime.innerHTML=getTime(dt);

        w_forecast.innerHTML=weather[0].main;
        w_icon.innerHTML=`<img src=http://openweathermap.org/img/wn/${weather[0].icon}@4x.png />`;
        http://openweathermap.org/img/wn/${weather[0].icon}@4x.png

      




        
        w_temperature.innerHTML=`${main.temp}&#176`;
        w_minTem.innerHTML=`Min: ${main.temp_min.toFixed()}&#176`;
        w_maxTem.innerHTML=`Max: ${main.temp_max.toFixed()}&#176`
        
        ;
        weather_feelsLike.innerHTML=`${main.feels_like}&#176`;
        weather_humidity.innerHTML=`${main.humidity}%`;
        weather_wind.innerHTML=`${wind.speed}hpa`;
        weather_pressure.innerHTML=`${main.pressure}m/s`;
        


        } catch (error) {
        console.log(error);
    }
}

// Example usage:
// Replace 'your_city' and 'your_api_key' with actual values



document.body.addEventListener('load',getWeatherData());




// 199d5344b26837e4c7a016e214b9da58
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}