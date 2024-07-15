import './hamburger.css';

export function Hamburger(){
  return (
    <div className='hamburger'>
        <input type="checkbox" id="menyAvPaa"></input>
        <label id="burger" for="menyAvPaa">
            <div></div>
            <div></div>
            <div></div>
        </label>
      <nav id="meny">
        <ul>
          <li>Teste</li>
          <li>Teste</li>
          <li>Teste</li>
          <li>Teste</li>
          <li>Teste</li>
          <li>Teste</li>
        </ul>
      </nav>
    </div>
  );
}
