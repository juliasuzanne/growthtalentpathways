import { ServicesComponent } from "./ServicesComponent";
export function Services() {
  return (
    <div className="services-main">
      <div className="services-overview">
        <h1>
          <span>Overview</span> <span> of </span> <span>Services</span>
        </h1>
        <p>
          In addition to the technical services and coaching, I provide holistic support every step of the way. From
          managing expectations and staying productive, to overcoming negativity and minimizing stress, our coaching
          offers comprehensive guidance to help you navigate challenges and stay motivated. I‘m here to ensure you
          maintain balance and keep moving forward with confidence.
        </p>
      </div>

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
  );
}
