import Benefits from "./_components/Benefits";
import CallToAction from "./_components/CallToAction";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import ProgramOverview from "./_components/ProgramOveriew";
import Testimonials from "./_components/Testimonials";
import ValueProposition from "./_components/ValueProposition";

function App() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <ProgramOverview />
      <Benefits />
      <ValueProposition />
      <Testimonials />
      <CallToAction />
      <Footer />
    </main>
  );
}

export default App;
