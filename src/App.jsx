import './App.css';
import { Greetings } from './components/home/greetings';
import { MainNav } from './components/home/nav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainNav />
      </header>
      <main>
        <Greetings />
      </main>
    </div>
  );
}

export default App;
