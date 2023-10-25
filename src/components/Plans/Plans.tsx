import "./Plans.css";
import Free from "../../assets/Free.svg";
import Standard from "../../assets/Standard.svg";
import Premium from "../../assets/Premium.svg";
import { usePlanSelection } from "../../Hooks/usePlanSelection";

export default function Plans() {
  const { selectedButton, handleButtonClick, plans } = usePlanSelection();

  const imageSelect = (i: number) => {
    if (i === 0) {
      return Free;
    } else if (i === 1) {
      return Standard;
    } else return Premium;
  };

  return (
    <div id="pricing" className="papaelemento">
      {plans.map((option, i) => {
        return (
          <div
            key={i}
            className={`elemento ${selectedButton === i ? "selected" : ""}`}
          >
            <img src={imageSelect(i)}></img>
            <div className="planes">{option.title}</div>
            <ul className="listita">
              {option.benefits.map((b) => {
                return <li key={b}>{b}</li>;
              })}
            </ul>
            <div className="precio1">
              {option.currency}
              {option.price}{" "}
              {option.price !== "Free" ? (
                <span className="mo">/ mo</span>
              ) : null}
            </div>
            <button className="botones" onClick={() => handleButtonClick(i)}>
              Select
            </button>
          </div>
        );
      })}
    </div>
  );
}
