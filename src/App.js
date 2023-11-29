import './App.css';
import { useState , useEffect} from 'react';
import axios from 'axios';

import clearSky from './icons/clearSky.svg';
import fewClouds from './icons/fewClouds.svg';
import brokenClouds from './icons/brokenClouds.svg';
import clouds from './icons/clouds.svg';
import rain from './icons/rain.svg';
import thunderstorm from './icons/thunderstorm.svg';


import air from './icons/air.svg';
import salinity from './icons/salinity.svg';
import rainy_light from './icons/rainy_light.svg';
import cloudiness from './icons/Icon.svg';
import brightness_high from './icons/brightness_high.svg';
import calendar from './icons/calendar.svg';
import eye from './icons/eye.svg';
import tire_repair from './icons/tire_repair.svg';

import BGclearSky from './images/weather-clear-sky.jpg';
import BGfewClouds from './images/weather-few-clouds.jpg';
import BGbrokenClouds from './images/broken-clouds.jpg';
import BGshowerRain from './images/weather-shower-rain.jpg';
import BGrain from './images/weather-rain.jpg';
import BGthunderstorm from './images/weather-thunderstorm.jpg';
import BGsnow from './images/weather-snow.jpg';
import BGmist from './images/weather-mist.jpg';

function App() {
  const APIkey = process.env.REACT_APP_API_KEY
  const [cities, setCities] = useState(
    {
      'Monterrey' : {},
      'Veracruz': {},
      'Colima': {},
      'Ciudad de mexico': {},
      'Houston': {},
    }
  )
  /*const [cities, setCities] = useState(
    {
      "Monterrey": {
          "coord": {
              "lon": -100.3167,
              "lat": 25.6667
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "base": "stations",
          "main": {
              "temp": 23.75,
              "feels_like": 23.98,
              "temp_min": 23.75,
              "temp_max": 23.75,
              "pressure": 1023,
              "humidity": 69,
              "sea_level": 1023,
              "grnd_level": 959
          },
          "visibility": 10000,
          "wind": {
              "speed": 1.77,
              "deg": 72,
              "gust": 1.91
          },
          "clouds": {
              "all": 100
          },
          "dt": 1701114727,
          "sys": {
              "type": 2,
              "id": 2011306,
              "country": "MX",
              "sunrise": 1701090469,
              "sunset": 1701129016
          },
          "timezone": -21600,
          "id": 3995465,
          "name": "Monterrey",
          "cod": 200
      },
      "Veracruz": {
          "coord": {
              "lon": -96.6667,
              "lat": 19.3333
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "base": "stations",
          "main": {
              "temp": 22.47,
              "feels_like": 22.65,
              "temp_min": 22.47,
              "temp_max": 22.47,
              "pressure": 1017,
              "humidity": 72,
              "sea_level": 1017,
              "grnd_level": 964
          },
          "visibility": 10000,
          "wind": {
              "speed": 0.72,
              "deg": 4,
              "gust": 2.76
          },
          "clouds": {
              "all": 100
          },
          "dt": 1701115199,
          "sys": {
              "country": "MX",
              "sunrise": 1701088907,
              "sunset": 1701128826
          },
          "timezone": -21600,
          "id": 3514780,
          "name": "Veracruz",
          "cod": 200
      },
      "Colima": {
          "coord": {
              "lon": -104,
              "lat": 19.1667
          },
          "weather": [
              {
                  "id": 804,
                  "main": "Clouds",
                  "description": "overcast clouds",
                  "icon": "04d"
              }
          ],
          "base": "stations",
          "main": {
              "temp": 25.78,
              "feels_like": 25.59,
              "temp_min": 25.78,
              "temp_max": 25.78,
              "pressure": 1012,
              "humidity": 45,
              "sea_level": 1012,
              "grnd_level": 928
          },
          "visibility": 10000,
          "wind": {
              "speed": 0.31,
              "deg": 302,
              "gust": 1.25
          },
          "clouds": {
              "all": 100
          },
          "dt": 1701115365,
          "sys": {
              "type": 1,
              "id": 7116,
              "country": "MX",
              "sunrise": 1701090651,
              "sunset": 1701130603
          },
          "timezone": -21600,
          "id": 4013513,
          "name": "Colima",
          "cod": 200
      },
      "Ciudad de mexico": {
          "coord": {
              "lon": -99.1277,
              "lat": 19.4285
          },
          "weather": [
              {
                  "id": 500,
                  "main": "Rain",
                  "description": "light rain",
                  "icon": "10d"
              }
          ],
          "base": "stations",
          "main": {
              "temp": 19.97,
              "feels_like": 19.2,
              "temp_min": 19.96,
              "temp_max": 19.97,
              "pressure": 1027,
              "humidity": 45
          },
          "visibility": 8047,
          "wind": {
              "speed": 2.06,
              "deg": 10
          },
          "rain": {
              "1h": 0.13
          },
          "clouds": {
              "all": 100
          },
          "dt": 1701115227,
          "sys": {
              "type": 2,
              "id": 47729,
              "country": "MX",
              "sunrise": 1701089508,
              "sunset": 1701129407
          },
          "timezone": -21600,
          "id": 3530597,
          "name": "Mexico City",
          "cod": 200
      },
      "Houston": {
          "coord": {
              "lon": -95.3633,
              "lat": 29.7633
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "base": "stations",
          "main": {
              "temp": 14.16,
              "feels_like": 12.81,
              "temp_min": 12.72,
              "temp_max": 16.07,
              "pressure": 1024,
              "humidity": 45
          },
          "visibility": 10000,
          "wind": {
              "speed": 4.63,
              "deg": 360
          },
          "clouds": {
              "all": 0
          },
          "dt": 1701114931,
          "sys": {
              "type": 2,
              "id": 2001415,
              "country": "US",
              "sunrise": 1701089764,
              "sunset": 1701127343
          },
          "timezone": -21600,
          "id": 4699066,
          "name": "Houston",
          "cod": 200
      }
  }
  )*/

const [selectedCity, setSelectedCity] = useState("Monterrey")
const [weather, setWeather] = useState({})
const [background, setBackground] = useState(BGbrokenClouds)

  useEffect(() => {
    fillCities()
  }, [])

  const fillCities = async () => {
    if(cities){
      for (let [city, value] of Object.entries(cities)) {
        if(Object.keys(value).length === 0){
          let response = await fetchWeather(city)
          if(city == 'Monterrey')
            setWeather(response)
          setCities(prevState => (
            {...prevState, [city]: response})
          )
        }
      }
    }
  }
  
  const fetchWeather = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`
      );
      return response.data
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };
  
  const getSvgIcon = (iconP) => {
    let icon = clouds
    switch (iconP) {
      case '01d': case '01n':
        icon = clearSky
        break;
      case '02d': case '02n':
        icon = fewClouds
        break;
      case '03d': case '03n': case '04d': case '04n':
        icon = brokenClouds
        break;
      case '09d': case '09n': case '10d': case '10n':
        icon = rain
        break;
      case '11d': case '11n':
        icon = thunderstorm
        break;
    }
    return icon
  }

  const getBackgroundImage = (iconP) => {
    let bg = BGclearSky
    switch (iconP) {
      case '01d': case '01n':
        bg = BGclearSky
        break;
      case '02d': case '02n':
        bg = BGfewClouds
        break;
      case '03d': case '03n': case '04d': case '04n':
        bg = BGbrokenClouds
        break;
      case '09d': case '09n':
        bg = BGshowerRain
        break;
      case '10d': case '10n':
        bg = BGrain
        break;
      case '11d': case '11n':
        bg = BGthunderstorm
        break;
      case '13d': case '13n':
        bg = BGsnow
        break;
      case '50d': case '50n':
        bg = BGmist
        break;
    }
    return bg
  }

  const selectCity = (city,obj) => {
    setSelectedCity(city)
    setWeather(cities[city])
    setBackground(getBackgroundImage(obj?.weather[0]?.icon))
  }

  function fixNumber(n) {
    if (isNaN(n)) {
      return 0;
    }
    return Number(n).toFixed();
  }

  function kmOverHr ( mOs) {
    return mOs ? ((mOs * 3600) / 1000).toFixed() : 0
  }
  return (
    <div className="App" style={{ backgroundImage: `url(${background})`,backgroundRepeat: "no-repeat",
    backgroundSize: "cover" }}>
        <div className='main-container'>
          {Object.keys(weather).length !== 0 &&
          <>
            <div className='header-title'>
              <div className='icon-container'>
                <img src={getSvgIcon(weather.weather[0].icon)} alt="weatherIcon" />
                <div>
                  <p className='header-md'>{weather.weather[0].description}</p>
                </div>
              </div>
              <div>
                <div>
                  <p className='header-temp'>{weather.name}</p>
                </div>
                <div className='header-temps-cont'>
                  <div>
                  <p className='header-temp'>{fixNumber(weather.main.temp)}°</p>
                  </div>
                  <div>
                    <div style={{display:'flex',flexDirection:'row'}}>
                      <p className='header-md'>H:{fixNumber(weather.main.temp_max)}°</p>
                      <p className='header-md'>L:{fixNumber(weather.main.temp_min)}°</p>
                    </div>
                    <div>
                      <p className='header-sm'>Feels like: {fixNumber(weather.main.feels_like)}°</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='content'>
              <div className='section-1'>
                <div className='innerSection'>
                  <div className='icon-title'>
                    <img src={air} alt="airIcon"></img> 
                    <p>Wind</p> 
                  </div>
                  <div className='winds-container'>
                    <div>
                      <p className='content-p'>Speed</p>
                      <span className='content-span'>{kmOverHr(weather.wind.speed)} km/h</span>
                    </div>
                    <div>
                      <p className='content-p'>Direction</p>
                      <span className='content-span'>{weather.wind.deg}°</span>
                    </div>
                    <div>
                      <p className='content-p'>Gust</p>
                      <span className='content-span'>{kmOverHr(weather.wind.gust)} km/h</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='section-2'>
                <div className='innerSection'>
                  <div className='icon-title'>
                    <img src={salinity} alt="airIcon"></img> 
                    <p>Humidity</p> 
                  </div>
                  <div className='regular-container'>
                    <span className='content-span'>{weather.main.humidity}%</span>
                  </div>
                </div>
              </div>
              <div className='section-3'>
                <div className='innerSection'>
                  <div className='icon-title'>
                    <img src={rainy_light} alt="airIcon"></img> 
                    <p>Precipitation</p> 
                  </div>
                  <div className='winds-container'>
                    <div>
                      <p className='content-p'>Last hour</p>
                      <span className='content-span'>0mm</span>
                    </div>
                    <div>
                      <p className='content-p'>Last 3 hours</p>
                      <span className='content-span'>0mm</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='section-4'>
                <div className='innerSection'>
                  <div className='icon-title'>
                    <img src={cloudiness} alt="airIcon"></img> 
                    <p>Cloudiness</p> 
                  </div>
                  <div className='regular-container'>
                    <span className='content-span'>{weather.clouds.all}%</span>
                  </div>
                </div>
              </div>
              <div className='section-5'>
                <div className='innerSection'>
                  <div className='icon-title'>
                    <img src={brightness_high} alt="airIcon"></img> 
                    <p>UV</p> 
                  </div>
                  <div className='regular-container'>
                    <span className='content-span'>0</span>
                    <p className='content-p'>Moderate protection</p>
                    
                  </div>
                </div>
              </div>
              <div className='section-6'>
                <div className='innerSection'>
                  <div className='icon-title'>
                    <img src={calendar} alt="airIcon"></img> 
                  </div>
                  <div className='regular-container'>
                    <span className='content-span'>5-day forecast</span>
                  </div>
                </div>
              </div>
              <div className='section-7'>
                <div className='innerSection'>
                  <div className='icon-title'>
                    <img src={eye} alt="airIcon"></img> 
                    <p>Visibility</p> 
                  </div>
                  <div className='regular-container'>
                    <span className='content-span'>{weather.visibility /1000} km</span>
                  </div>
                </div>
              </div>
              <div className='section-8'>
                <div className='innerSection'>
                  <div className='icon-title'>
                    <img src={tire_repair} alt="airIcon"></img> 
                    <p>Pressure</p> 
                  </div>
                  <div className='regular-container'>
                    <span className='content-span'>{weather.main.pressure}hPa</span>
                  </div>
                </div>
              </div>
            </div>
          </>
          }
        </div>  
        <div className="container">
          <p className='title-nav' >Locations</p>
          <div className='scrolleable-div'>
            {Object.keys(cities).map((index) => (
              Object.keys(cities[index]).length !== 0 ?
              <div key={index}  className={index == selectedCity ? 'city-container city-container-selected ' : 'city-container'}
              onClick={() => selectCity(index,cities[index])}>
                <div className='city-grow-section'>
                  <p className='cg-title'>{cities[index].name}</p>
                  <p className='cg-subtitle'>{cities[index].weather[0].description}</p>
                </div>
                <div>
                  <img src={getSvgIcon(cities[index].weather[0].icon)} alt="weatherIcon" />
                </div>
                <div className='temp'>
                  <p>{fixNumber(cities[index].main.temp)}°</p>
                </div>
                <div className='hl-temp'>
                  <p>H:{fixNumber(cities[index].main.temp_max)}°</p>
                  <p>L:{fixNumber(cities[index].main.temp_min)}°</p>
                </div>
              </div>
              : 
              <div className='city-container-hidden' >
              </div>
            ))}
          </div>
          

        </div>
    </div>
  );
}

export default App;
