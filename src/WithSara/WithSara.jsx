import "./withsara.css";

export default function WithSara() {
  return (
    <div className="ws-main">
      <div className="ws-line1"></div>
      <div className="ws-line2"></div>
      <div className="ws-line3"></div>
      <div className="ws-line4"></div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-sm-12">
            <img className="ws_portraitA" src="/GTP_SaraPortrait.png" />
          </div>
          <div className="col-lg-8 col-sm-12">
            <div className="ws-textmain">
              <h1 className="ws-titlemain">
                <span className="ws-title1">Working</span> <span className="ws-title20"> with </span> <br></br>
                <span className="ws-title21"> with </span> <span className="ws-title3">Sara</span>
              </h1>
              <p className="ws-p">
                A long and successful career in recruitment gives me powerful insight into the talent acquisition
                process. My passion is helping you develop the habits needed to transition from college life to the
                workplace, or from an early job you don't love to one that's right. All the while reducing your stress
                and anxiety.
              </p>

              <div className="ws-buttons">
                <a href="https://www.linkedin.com/in/sarakontalonis/" target="_blank">
                  <button id="button-gen-solid" className="black">
                    LinkedIn
                  </button>
                </a>
                <br className="break" />
                <a href="/SJKResumeGTS.pdf" download>
                  <button id="button-gen" className="blackoutline">
                    CV
                  </button>{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="portraitB-div">
            <img className="ws_portraitB" src="/GTP_SaraPortrait.png" />
          </div>
        </div>
        <br></br>
        {/* <Spacer /> */}
      </div>
    </div>
  );
}
