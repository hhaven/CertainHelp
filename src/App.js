import './App.css';
import {NavBar} from './components/NavBar'
import {NavBar2} from './components/NavBar2'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Registro} from './components/Register'
import {FormE} from './components/FormE'

function App() {
  return (
    <div className="App">

      <NavBar2/>
      <body>
        <FormE/>
      </body>
    </div>
  );
}

export default App;
