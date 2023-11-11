import './Header.css'
import HeaderBtn from './HeaderBtn';

function Header() {
    return (
      <header>
        <h1>THE ORBITAL OVEN</h1>
        <div className="dropdown">
            <HeaderBtn text="astrobites"></HeaderBtn>
            <HeaderBtn text="galacticgrub"></HeaderBtn>
            <HeaderBtn text="cosmo crunch"></HeaderBtn>
            <HeaderBtn text="orbital oats"></HeaderBtn>
            <HeaderBtn text="star snacks"></HeaderBtn>
            <HeaderBtn text="zero g zest"></HeaderBtn>
        </div>
      </header>
    );
  }
  
  export default Header;
  