import './Header.css'
import HeaderBtn from './HeaderBtn';

function Header(props) {
    return (
      <header>
        <h1>THE ORBITAL OVEN</h1>
        <div className="dropdown">
            <HeaderBtn clickResponse={() => props.goToPage(props.recipes.astrobites)} text="astrobites"></HeaderBtn>
            <HeaderBtn clickResponse={() => props.goToPage(props.recipes.galacticgrub)} text="galacticgrub"></HeaderBtn>
            <HeaderBtn clickResponse={() => props.goToPage(props.recipes.cosmocrunch)} text="cosmo crunch"></HeaderBtn>
            <HeaderBtn clickResponse={() => props.goToPage(props.recipes.orbitaloats)} text="orbital oats"></HeaderBtn>
            <HeaderBtn clickResponse={() => props.goToPage(props.recipes.starsnacks)} text="star snacks"></HeaderBtn>
            <HeaderBtn clickResponse={() => props.goToPage(props.recipes.zerogzest)} text="zero g zest"></HeaderBtn>
        </div>
      </header>
    );
  }
  
  export default Header;
  