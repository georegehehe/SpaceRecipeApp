import './Header.css'

function HeaderBtn(props) {
    return (
      <button className="headerBtn">
        {props.text}
      </button>
    );
  }
  
  export default HeaderBtn;