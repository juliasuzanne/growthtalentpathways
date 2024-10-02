import "./hero.css";

export default function Hero() {
  return (
    <div className="hero-main">
      <img className="hero-logo" src="/logo-website.png" />

      <h1 className="hero-text">
        Getting your first ‘real job’ or making a career change in your early years{" "}
        <span className="bold-italic"> can be overwhelming.</span>
      </h1>

      <div className="hero-container container">
        <div className="row">
          <div className="hero-row col-lg-6 col-sm-12">
            <p className="hero-p">
              Our Early Career Coaching (ECC) program is crafted to help you overcome challenges and position yourself
              for success in today’s competitive job market. Whether you’re a recent graduate or looking to pivot, we
              provide the tools and support you need to land the right job and build a fulfilling career.
            </p>
            <div className="hero-button-group">
              <a href="#contact">
                <button className="white">Contact</button>
              </a>
              <a href="#services">
                <button className="whiteoutline">Services</button>
              </a>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <img className="hero-figures" src="/figure-art-crop.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
