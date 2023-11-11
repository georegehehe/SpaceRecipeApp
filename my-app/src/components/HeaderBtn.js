import './Header.css'

function HeaderBtn(props) {
    return (
      <button className="headerBtn" onClick={props.clickResponse}>
        {props.text}
      </button>
    );
  }
  
  export default HeaderBtn;