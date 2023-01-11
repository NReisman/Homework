import React,{useState} from 'react';
import WeatherApp from './WeatherApp';


function App() {
  const [todos, setTodos] = useState([{id: 1, name: 'Todo 1', complete: false}])
  return (
    <>
      <div class="container text-center">
        <div class="row row-cols-lg-auto g-3 justify-content-end">
          <div class="col-12">
            <input type="text" class="form-control" id="zip" placeholder="enter a US zip code"/>
          </div>
        </div>
        <div id="noWeather" class="row">
          <div id="error"></div>
          <div>please enter a valid US zip code</div>
        </div>
        <div class="row hasWeather">
          <div>
            the weather in <span id="location"></span>
          </div>
        </div>
        <div class="row justify-content-center hasWeather">
          <img class="col-3" id="icon"/>
        </div>
        <div class="row hasWeather">
          <div id="details">
            is <span id="temp"></span> and <span id="description"></span>
          </div>
        </div>
      </div>
      <WeatherApp todos={todos} />
      {/* <input type="text"/>
      <button>Add To do</button>
      <button>Clear Complete</button>
      <div>0 left</div> */}
    </>
  )
}

export default App;
