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
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-3">
            <img className="services-icon" src={props.image} />
          </div>
          <div className="col-lg-8 col-sm-9">
            <h2 className="services-div-headline">{props.headline}</h2>

            <ul hidden={showContent}>
              {props.content.map((el) => {
                return <li>{el}</li>;
              })}
            </ul>
            <p className="more-button" onClick={() => handleClickMore()}>
              {buttonText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
