import "./withsara.css";

export default function WithSara() {
  return (
    <div className="ws-main">
      <img className="ws_portrait" src="/GTP_SaraPortrait.png" />

      <div className="ws-textmain">
        <h1>
          <span className="ws-title1">Working</span> <br></br>
          <span className="ws-title2"> with </span> <span className="ws-title3">Sara</span>
        </h1>
        <p className="ws-p">
          After spending many years in recruitment, I have unique insight into the interview and talent acquisition
          processes. My passion is helping my clients develop essential habits to navigate the transition from college
          life to the workplace, reducing stress through practical strategies.
        </p>
        <div className="ws-buttons">
          <a href="https://www.linkedin.com/in/sarakontalonis/" target="_blank">
            <button className="black">LinkedIn</button>
          </a>
          <a href="/SJKResumeGTS.pdf" download>
            <button className="blackoutline">CV</button>{" "}
          </a>
        </div>

        <br></br>
        {/* <Spacer /> */}
      </div>
    </div>
  );
}
