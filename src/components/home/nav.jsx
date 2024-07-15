import { Items } from './header/items';
import { Logo } from './header/logo';
import './nav.css';

export function MainNav() {
  return (
    <header className="App-header">
      <div className='main-header'>
        <Logo/>
        <Items/>
      </div>
    </header>
  );
}
