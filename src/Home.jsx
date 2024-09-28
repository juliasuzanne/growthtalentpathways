import { Services } from "./Services/Services";
import Hero from "./Hero/Hero";
import WithSara from "./WithSara/WithSara";
import { ContactForm } from "./Contact/ContactForm";
import Spacer from "./Spacer";
export function Home() {
  return (
    <div className="main-div">
      <Hero />
      <Services />
      <WithSara />
      <ContactForm />
    </div>
  );
}
