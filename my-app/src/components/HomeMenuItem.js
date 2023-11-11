import "./HomeMenuItem.css"
import LearnMoreBtn from "./LearnMoreBtn";

function HomeMenuItem(props) {
    return (
        <div className="menuitemcont">
            <div>
                <img src={props.food} alt="food" className="menuimg"/>
            </div>
            <h2 className="menuName">{props.menuName}</h2>
            <p className="menuDiscription">{props.menuDiscription}</p>
            <LearnMoreBtn></LearnMoreBtn>
        </div>
    );
  }
  
  export default HomeMenuItem;