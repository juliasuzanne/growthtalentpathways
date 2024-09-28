import { Services } from "./Services/Services";
import Hero from "./Hero/Hero";
import WithSara from "./WithSara/WithSara";
import { ContactForm } from "./Contact/ContactForm";
export function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <WithSara />
      <ContactForm />
    </div>
  );
}
