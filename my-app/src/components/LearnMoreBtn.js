import "./LearnMoreBtn.css"
function LearnMoreBtn(props) {
    return (
        <button onClick={props.clickBehavior} className="learnMore">Learn More</button>
    );
  }
  
  export default LearnMoreBtn;