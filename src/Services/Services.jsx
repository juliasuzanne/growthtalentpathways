import { ServicesComponent } from "./ServicesComponent";
export function Services() {
  return (
    <div>
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
