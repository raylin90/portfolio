import './App.scss';
import Menu from './components/Menu';
import Main from './views/Main';
import Container from 'react-bootstrap/Container'
function App() {
  return (
    <div className="App">
      <Menu/>
      <Main/>
    </div>
  );
}

export default App;