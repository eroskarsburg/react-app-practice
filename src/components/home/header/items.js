import { Hamburger } from './hamburger';

const headerItems = ['Projects', 'About me', 'Contact me'];

export function Items(){
  return (
    <div className='items'>
      { headerItems.map( (item) => (
        <h3>{item}</h3>
      ) ) }
      <div className='hamburger'>
        <Hamburger/>
      </div>
    </div>
  );
}
