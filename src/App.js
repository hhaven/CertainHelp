import './App.css';
import {NavBar} from './components/NavBar'
import {NavBar2} from './components/NavBar2'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Registro} from './components/Register'

function App() {
  return (
    <div className="App">

      <NavBar2/>
      <body>
        <Registro/>
      </body>
    </div>
  );
}

export default App;
