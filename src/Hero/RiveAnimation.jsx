import { useRive, useStateMachineInput, onLoad, Fit, Layout as RiveLayout, Alignment } from "@rive-app/react-canvas";
import { useCallback, useEffect, useState, useRef } from "react";
import "./rive.css";
import { ObserverComponent } from "../ObserverComponent";

export function RiveAnimation() {
  const [play, setPlay] = useState(false);

  const { rive, RiveComponent } = useRive({
    src: "gtp-hero.riv",
    stateMachines: "State Machine 1",
    autoplay: play,
    // layout: new RiveLayout({
    //   fit: Fit.FitHeight,
    //   alignment: Alignment.CenterRight,
    // }),
  });
  const scrollPos = useStateMachineInput(rive, "ScrollingBehavior", "scrollPos", 0);

  const playTrue = () => {
    console.log("play is true");

    setPlay(true);
    rive.play();
  };

  const playFalse = () => {
    console.log("play is false");

    setPlay(false);
  };

  useEffect(() => {
    let scrollListener;
    if (scrollPos) {
      const body = document.querySelector("body");
      const bodyParent = body.parentNode;
      const pageLength = bodyParent.scrollHeight;

      const scrollCallback = () => {
        const scrollOffset = bodyParent.scrollTop;
        const scrollPosValue = (130 * scrollOffset) / (pageLength - bodyParent.clientHeight);
        scrollPos.value = scrollPosValue;
      };
      scrollListener = document.addEventListener("scroll", scrollCallback);
    }

    return () => {
      if (scrollListener) {
        document.removeEventListener("scroll", scrollListener);
      }
    };
  });

  return (
    <div>
      <div className="rivecontainer">
        <div>
          <RiveComponent className="hero-figures" />
        </div>
      </div>
      <ObserverComponent
        mainDivClass={"riveobserver"}
        settingVisible={playTrue}
        settingNotVisible={playFalse}
      ></ObserverComponent>
    </div>
  );
}
