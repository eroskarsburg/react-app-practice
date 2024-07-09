import logo from './images/unnamed-logo.png';

export function Logo(){
    return (
      <div className='header-logo'>
          <img src={logo} className='main-logo'></img>
          <h1>Portfolio</h1>
        </div>
    );
}
