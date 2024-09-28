import { ServicesComponent } from "./ServicesComponent";
export function Services() {
  return (
    <div className="container">
      <div className="services-main row">
        <div className="services-overview">
          <div className="col-lg-6">
            <h1>
              <span className="services-title1">Overview</span> <span className="services-title2"> of </span>{" "}
              <span className="services-title3">Services</span>
            </h1>
            <p className="services-p">
              <span className="services-p-bold">
                {" "}
                In addition to the technical services and coaching, I provide holistic support every step of the way.{" "}
              </span>{" "}
              From managing expectations and staying productive, to overcoming negativity and minimizing stress, our
              coaching offers comprehensive guidance to help you navigate challenges and stay motivated. I‘m here to
              ensure you maintain balance and keep moving forward with confidence.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <ServicesComponent
              image={"https://cdn-icons-png.flaticon.com/512/2815/2815428.png"}
              content={[
                "Build a strong work mindset that drives motivation and productivity.",
                "Set goals that link long term dreams to short term steps.",
                "Create systems to help keep you on track.",
              ]}
              headline={"JOB SEARCH STRATEGY"}
            />
            <ServicesComponent
              image={"https://cdn-icons-png.flaticon.com/512/2815/2815428.png"}
              content={[
                "Assistance with target lists",
                "Resume and Cover Letter review",
                "LI profile review and optimization",
              ]}
              headline={"SELF-MARKETING & NETWORKING"}
            />
            <ServicesComponent
              image={"https://cdn-icons-png.flaticon.com/512/2815/2815428.png"}
              content={[
                "Pre-Interview preparation: role play and company research",
                "Presence: zoom etiquette, wardrobe",
                "Post-Interview practices: follow up process",
              ]}
              headline={"INTERVIEW PREP"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
