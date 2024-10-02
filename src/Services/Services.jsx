import { ServicesComponent } from "./ServicesComponent";
import { ObserverComponent } from "../ObserverComponent";
import { useState } from "react";

export function Services() {
  const [startAnim, setStartAnim] = useState(false);
  const [scrollAnim, setScrollAnim] = useState(false);

  const startAnimating = () => {
    console.log("startFixedHeadline");
    setStartAnim(true);
  };

  const stopAnimating = () => {
    console.log("stopFixedHeadline");
    setStartAnim(false);
  };

  const startScroll = () => {
    console.log("startFixedHeadline");
    setScrollAnim(true);
  };

  const stopScroll = () => {
    console.log("stopFixedHeadline");
    setScrollAnim(false);
  };

  return (
    <div className="services-main" id="services">
      <div className="services-overview">
        <div className="container">
          <div className="row">
            <ObserverComponent
              mainDivClass={"blue"}
              settingVisible={startScroll}
              settingNotVisible={stopScroll}
            ></ObserverComponent>
            <ObserverComponent
              mainDivClass={"red"}
              settingVisible={startAnimating}
              settingNotVisible={stopAnimating}
            ></ObserverComponent>

            <div className="col-lg-6 col-sm-12">
              <div
                className={`${
                  startAnim && scrollAnim ? "services-title-main-sticky" : `services-title-main-rel${scrollAnim}`
                }`}
              >
                <h1>
                  <span className="services-title1">Overview</span> <span className="services-title2"> of </span>{" "}
                  <br></br>
                  <span className="services-title3">Services</span>
                </h1>

                <p className="services-p">
                  <span className="services-p-bold">
                    {" "}
                    In addition to the technical services and coaching, I provide holistic support every step of the
                    way.{" "}
                  </span>{" "}
                  From managing expectations and staying productive, to overcoming negativity and minimizing stress, our
                  coaching offers comprehensive guidance to help you navigate challenges and stay motivated. I‘m here to
                  ensure you maintain balance and keep moving forward with confidence.
                </p>
              </div>
            </div>

            <img className="balance" src="/balance.png" />

            <div className="col-lg-6 col-sm-12">
              <ServicesComponent
                image={"/icons-reg-03.png"}
                content={[
                  "Build a strong work mindset that drives motivation and productivity.",
                  "Set goals that link long term dreams to short term steps.",
                  "Create systems to help keep you on track.",
                ]}
                headline={"JOB SEARCH STRATEGY"}
              />

              <ServicesComponent
                image={"/icons-reg-07.png"}
                content={[
                  "Assistance with target lists",
                  "Resume and Cover Letter review",
                  "LI profile review and optimization",
                ]}
                headline={"SELF-MARKETING & NETWORKING"}
              />

              <ServicesComponent
                image={"/icons-reg-06.png"}
                content={[
                  "Pre-Interview preparation: role play and company research",
                  "Presence: zoom etiquette, wardrobe",
                  "Post-Interview practices: follow up process",
                ]}
                headline={"INTERVIEW PREP"}
              />
            </div>
          </div>

          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}
