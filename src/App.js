import { useState, useEffect } from 'react';
import './App.css';
import countries from 'i18n-iso-countries';

countries.registerLocale(require('i18n-iso-countries/langs/en.json'));

function App() {

  // (2) Creating state to store Api data and input:
  //STATE:
  const [apiData, setApiData] = useState({});
  const [getState, setGetState] = useState('abbottabad');
  const [state, setState] = useState('abbottabad');


  // (1) Api key and URL:
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${apiKey}`;

  // (3) Making an api request using fetch and useEffect Hook: 
  // Side Effect:
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setApiData(data));
  }, [apiUrl]);


  // (4) // function to handle Input:
  const inputHandler = (event) => {
    setGetState(event.target.value);
  };

  const submitHandler = () => {
    setState(getState);
  };

  const kelvinToFarenheit = (k) => {
    return (k - 273.15).toFixed(2);
  };

  return (
    <div className="App">
      <header className="d-flex justify-content-center align-items-center">
        <h2>React Weather App</h2>
      </header>
      <div className="container">
        <div className="mt-3 d-flex flex-column justify-content-center align-items-center">
          <div classname="col-auto">
            <label for="location-name" class="col-form-label">
              Enter Location :
            </label>
          </div>
          <div className="col-auto">
            <input
              type="text"
              id="location-name"
              class="form-control"
              onChange={inputHandler}
              value={getState}
            />
          </div>
          <button className="btn btn-primary mt-2" onClick={submitHandler}>
            Search
          </button>
        </div>
  
        <div className="card mt-3 mx-auto" style={{ width: '60vw' }}>
          {apiData.main ? (
            <div class="card-body text-center">
              <img
                src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}
                alt="weather status icon"
                className="weather-icon"
              />
  
              <p className="h2">
                {kelvinToFarenheit(apiData.main.temp)}&deg; C
              </p>
  
              <p className="h5">
                <i className="fas fa-map-marker-alt"></i>{' '}
                <strong>{apiData.name}</strong>
              </p>
  
              <div className="row mt-4">
                <div className="col-md-6">
                  <p>
                    <i className="fas fa-temperature-low "></i>{' '}
                    <strong>
                      {kelvinToFarenheit(apiData.main.temp_min)}&deg; C
                    </strong>
                  </p>
                  <p>
                    <i className="fas fa-temperature-high"></i>{' '}
                    <strong>
                      {kelvinToFarenheit(apiData.main.temp_max)}&deg; C
                    </strong>
                  </p>
                </div>
                <div className="col-md-6">
                  <p>
                    {' '}
                    <strong>{apiData.weather[0].main}</strong>
                  </p>
                  <p>
                    <strong>
                      {' '}
                      {countries.getName(apiData.sys.country, 'en', {
                        select: 'official',
                      })}
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <h1>Loading</h1>
          )}
        </div>
      </div>
    </div>
  );

  

};

export default App;