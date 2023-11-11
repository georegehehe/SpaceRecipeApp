import './Header.css'
import HeaderBtn from './HeaderBtn';

function Header() {
    return (
      <header>
        <h1>THE ORBITAL OVEN</h1>
        <div className="dropdown">
            <HeaderBtn></HeaderBtn>
            <HeaderBtn></HeaderBtn>
            <HeaderBtn></HeaderBtn>
            <HeaderBtn></HeaderBtn>
        </div>
      </header>
    );
  }
  
  export default Header;
  