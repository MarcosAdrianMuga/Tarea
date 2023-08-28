import { useState } from 'react';
import "./Planes.css";

export default function Planes() {
    const [selectedButton, setSelectedButton] = useState<number | null>(null);
    const handleButtonClick = (index: number) => {
        setSelectedButton(index);
    };
  return (
    <div className="papaelemento">
      <div className={`elemento ${selectedButton === 0 ? 'selected' : ''}`}>
        <img src="Free.svg"></img>
        <div className="planes">Free Plan</div>
        <ul className="listita">
          <li>Unlimited Bandwitch</li>
          <li>Encrypted Connection</li>
          <li>No Traffic Logs</li>
          <li>Works on All Devices</li>
        </ul>
        <div className="precio1">Free</div>
        <button className='botones' onClick={() => handleButtonClick(0)}>Select</button>
      </div>
      <div className={`elemento ${selectedButton === 1 ? 'selected' : ''}`}>
        <img src="Standard.svg"></img>
        <div className='planes'>Standard Plan</div>
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
        <button className='botones' onClick={() => handleButtonClick(1)}>Select</button>
      </div>
      <div className={`elemento ${selectedButton === 2 ? 'selected' : ''}`}>
        <img src="Premium.svg"></img>
        <div className='planes'>Premium Plan</div>
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
        <button className='botones' onClick={() => handleButtonClick(2)}>Select</button>
      </div>
    </div>
  );
}
