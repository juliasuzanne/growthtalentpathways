import "./hero.css";

export default function Hero() {
  return (
    <div className="hero-main">
      <img src="/logo.png" />

      <h1 className="hero-text">
        Getting your first ‘real job’ or making a career change in your early years can be overwhelming.
      </h1>
      <p className="hero-p">
        Our Early Career Coaching (ECC) program is crafted to help you overcome challenges and position yourself for
        success in today’s competitive job market. Whether you’re a recent graduate or looking to pivot, we provide the
        tools and support you need to land the right job and build a fulfilling career.
      </p>
      <button className="white">Contact</button>
      <button className="whiteoutline">Services</button>
    </div>
  );
}
