import { useState } from "react";
import "./services.css";

export function ServicesComponent(props) {
  const [showContent, setShowContent] = useState(true);
  const [buttonText, setButtonText] = useState("More");

  function handleClickMore() {
    if (showContent) {
      setShowContent(false);
    } else {
      setShowContent(true);
    }
    if (showContent) {
      setButtonText("Less");
    } else {
      setButtonText("More");
    }
  }

  return (
    <div className="services-div">
      <img className="services-icon" src={props.image} />
      <h2>{props.headline}</h2>

      <ul hidden={showContent}>
        {props.content.map((el) => {
          return <li>{el}</li>;
        })}
      </ul>
      <button onClick={() => handleClickMore()}>{buttonText}</button>
    </div>
  );
}
