import logo from './logo.svg';
import './App.css';
import Welcome from './components/Hello'
import Porjotok from './components/porjotok'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Welcome/>
        <Porjotok/>
      </header>
    </div>
  );
}

export default App;
