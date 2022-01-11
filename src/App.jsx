import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SquareBorder from './components/square-border';
import ScrollBorder from './components/scroll-border';

function App() {
  const [radial, setRadial] = useState([1, 99, 1, 99, 99, 1, 99, 1])
  function radiaT(param){
    setRadial([param, (100 - param), radial[2], radial[3], radial[4], radial[5], radial[6], radial[7]])
  }
  function radiaB(param){
    setRadial([radial[0], radial[1], param, (100 - param), radial[4], radial[5], radial[6], radial[7]])
  }
  function radiaL(param){
    setRadial([radial[0], radial[1], radial[2], radial[3], (100 - param), radial[5], radial[6], param])
  }
  function radiaR(param){
    setRadial([radial[0], radial[1], radial[2], radial[3], radial[4], param, (100 - param), radial[7]])
  }
  return (
    <div className="App">
      <h1> Border Radius Previewer</h1>
      <div>
        {/* 1 */}
        <div class="d-flex row">
          <div class="col-3"></div>
          <div class="col-6 d-flex ">
            <ScrollBorder radiar={radiaT}/>
          </div>
          <div class="col-3"></div>
        </div>
        {/* 2 */}
        <div class="row">
          <div class="col align-self-center">
            <ScrollBorder orient="vertical" radiar={radiaL}/>
          </div>
          <div class="col py-2">
            <SquareBorder borda={radial}/>
          </div>
          <div class="col align-self-center">
            <ScrollBorder vertiOri="vertized" radiar={radiaR}/>
          </div>
        </div>
        {/* 3 */}
        <div class="row">
          <div class="col-3"></div>
          <div class="col-6">
            <ScrollBorder invert="inverted" radiar={radiaB}/>
          </div>
          <div class="col-3"></div>
        </div>
        <div class="mt-3">
          <h5>{radial[0]}% {radial[1]}% {radial[2]}% {radial[3]}% / {radial[4]}% {radial[5]}% {radial[6]}% {radial[7]}%</h5>
        </div>
      </div>
      <footer class="footer">Criado por <a href="https://github.com/GustavoGajdeczka">Gustavo Gajdeczka</a></footer>
    </div>
  );
}

export default App;
