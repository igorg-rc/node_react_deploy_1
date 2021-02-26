import logo from './logo.svg';
import node_logo from './node_logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={node_logo} className="Node-logo" alt="logo" />

        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Nodejs + React app
        </h1>
      </header>
    </div>
  );
}

export default App;
