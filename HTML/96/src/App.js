import {Component} from 'react';
import WeatherApp from './WeatherApp';


class App extends Component() {
  state = {
    zip: '08701'
  };
  render() {
    return (
      <>
        <div classNameName="container text-center">
          <div className="row row-cols-lg-auto g-3 justify-content-end">
            <div className="col-12">
              <input type="text" className="form-control" id="zip" placeholder="enter a US zip code"
                value={this.state.zip} readOnly/>
            </div>
          </div>
          <div id="noWeather" className="row">
            <div id="error"></div>
            <div>please enter a valid US zip code</div>
          </div>
          <div className="row hasWeather">
            <div>
              the weather in <span id="location"></span>
            </div>
          </div>
          <div className="row justify-content-center hasWeather">
            <img className="col-3" id="icon" />
          </div>
          <div className="row hasWeather">
            <div id="details">
              is <span id="temp"></span> and <span id="description"></span>
            </div>
          </div>
        </div>
        <WeatherApp />
        {/* <input type="text"/>
      <button>Add To do</button>
      <button>Clear Complete</button>
      <div>0 left</div> */}
      </>
    )
  }
}
export default App;
