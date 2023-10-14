import { useEffect, useState } from "react";
import "./Planes.css";
import Free from "../../assets/Free.svg"
import Standard from "../../assets/Standard.svg"
import Premium from "../../assets/Premium.svg"

type planes = {
  title: string;
  price: number | "Free";
  benefits: string[];
  currency: "U$S";
  type: "monthly" | "daily" | "weekly";
}

export default function Planes() {
  const [selectedButton, setSelectedButton] = useState<number | null>(null);
  const [plan, setPlan] = useState<planes[]>([]);

  const handleButtonClick = (index: number) => {
    setSelectedButton(index);
  };

  const imageSelect = (i : number) => {
    if(i === 0) {
      return Free
    } else if(i === 1) {
      return Standard
    } else return Premium
  }

  useEffect(() => {
    fetch("https://6xrb5goi1l.execute-api.us-east-1.amazonaws.com/api/subscription")
      .then((response) => {
        response.json().then((result) => {
          setPlan(result);
        });
      })
  }, []);

  console.log(plan);
  

  return (
    <div className="papaelemento">
      {plan.map((option, i) => {
        return(
          <div key={i} className={`elemento ${selectedButton === i ? "selected" : ""}`}>
        <img src={imageSelect(i)}></img>
        <div className="planes">{option.title}</div>
        <ul className="listita">
          {option.benefits.map((b) => {
            return(
              <li key={b}>{b}</li>
            )
          })}
          {/* <li>Unlimited Bandwitch</li>
          <li>Encrypted Connection</li>
          <li>No Traffic Logs</li>
          <li>Works on All Devices</li> */}
        </ul>
        <div className="precio1">{option.currency}{option.price} {option.price !== "Free"?  <span className="mo">/ mo</span>: null}</div>
        <button className="botones" onClick={() => handleButtonClick(i)}>
          Select
        </button>
      </div>
        )
      })}
      {/* <div className={`elemento ${selectedButton === 0 ? "selected" : ""}`}>
        <img src="Free.svg"></img>
        <div className="planes">Free Plan</div>
        <ul className="listita">
          <li>Unlimited Bandwitch</li>
          <li>Encrypted Connection</li>
          <li>No Traffic Logs</li>
          <li>Works on All Devices</li>
        </ul>
        <div className="precio1">Free</div>
        <button className="botones" onClick={() => handleButtonClick(0)}>
          Select
        </button>
      </div>
      <div className={`elemento ${selectedButton === 1 ? "selected" : ""}`}>
        <img src="Standard.svg"></img>
        <div className="planes">Standard Plan</div>
        <ul className="listita">
          <li>Unlimited Bandwitch</li>
          <li>Encrypted Connection</li>
          <li>Yes Traffic Logs</li>
          <li>Works on All Devices</li>
          <li>Connect Anyware</li>
        </ul>
        <div className="precio1">
          <span className="num">{`$9 `}</span>
          <span className="mo">/ mo</span>
        </div>
        <button className="botones" onClick={() => handleButtonClick(1)}>
          Select
        </button>
      </div>
      <div className={`elemento ${selectedButton === 2 ? "selected" : ""}`}>
        <img src="Premium.svg"></img>
        <div className="planes">Premium Plan</div>
        <ul className="listita">
          <li>Unlimited Bandwitch</li>
          <li>Encrypted Connection</li>
          <li>Yes Traffic Logs</li>
          <li>Works on All Devices</li>
          <li>Connect Anyware</li>
          <li>Get New Features</li>
        </ul>
        <div className="precio1">
          <span className="num">{`$12 `}</span>
          <span className="mo">/ mo</span>
        </div>
        <button className="botones" onClick={() => handleButtonClick(2)}>
          Select
        </button>
      </div> */}
    </div>
  );
}
