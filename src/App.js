import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div class="row">
          <div class="search col-6">
            <form id="search-engine" autocomplete="off">
              <input id="city-input" type="text" />
              <label for="city-input">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-search"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                  />
                </svg>
              </label>
            </form>
          </div>
          <div class="col-6">
            <button id="weather-unit-toggle" class="btn">
              <span class="celsius-button selected-unit">C</span> |{" "}
              <span class="fahrenheit-button">F</span>
            </button>
            <button class="btn location-btn">
              <img src="location-pin.png" width="200px" />
            </button>
          </div>
        </div>

        <div class="row">
          <div class="col-12 city">
            <h1>Paris</h1>
          </div>
        </div>

        <div class="detail row">
          <div class="col-6 main-temp">
            <h3>
              <span class="weather-value">23</span>°
            </h3>
          </div>
          <div class="col-6 main-icon">
            <h2 id="icon">
              <img src="" />
            </h2>
          </div>
        </div>

        <div class="row">
          <div class="col-12 ">
            <p id="date-real">Sunday 16:09</p>
            <p>
              <span class="feels">feels </span> like{" "}
              <span class="weather-value">22</span>°
              <span class="weather-unit">C</span>
              <p id="description">clear sky</p>
            </p>
          </div>
        </div>

        <div class="info row">
          <div class="col-4">
            <p>
              <img
                src="https://www.flaticon.com/svg/static/icons/svg/219/219816.svg"
                width="10%"
              />
              <br />
              <span class="humidity">0</span> %
            </p>
          </div>
          <div class="col-4">
            <p>
              <img
                src="https://www.flaticon.com/svg/static/icons/svg/2316/2316581.svg"
                width="12%"
              />
              <br />
              <span class="min-temp weather-value ">20</span>°
              <span class="weather-unit">C</span>-
              <span class="max-temp weather-value">22</span>°
              <span class="weather-unit">C</span>
            </p>
          </div>
          <div class="col-4">
            <p>
              <img
                src="https://www.flaticon.com/svg/static/icons/svg/481/481476.svg"
                width="10%"
              />
              <br />
              <span class="wind">18</span>m/s
            </p>
          </div>
          <footer>
            <a href="https://github.com/Izza-aadil/My-cool-app">
              {" "}
              Open-source Code{" "}
            </a>{" "}
            by Izza Aadil
          </footer>{" "}
        </div>
      </div>
    </div>
  );
}

export default App;
