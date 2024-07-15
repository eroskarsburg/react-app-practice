import { Hamburger } from './hamburger';
import './items.css';

const headerItems = ['Projects', 'About me', 'Contact me'];

export function Items(){
  return (
    <div className='items'>
      { headerItems.map( (item) => (
        <h3>{item}</h3>
      ) ) }
      <Hamburger/>
    </div>
  );
}
