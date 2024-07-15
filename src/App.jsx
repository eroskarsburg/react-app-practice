import './App.css';
import { Greetings } from './components/home/greetings';
import { MainNav } from './components/home/nav';

function App() {
  return (
    <div className="App">
      <MainNav />
      <Greetings />
    </div>
  );
}

export default App;
