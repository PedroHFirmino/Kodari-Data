import logo from './logo.svg';
import './App.css';
import './pages/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Projeto visualização de dados Integrado.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Teste
        </a>
      </header>
    </div>
  );
}

export default App;
