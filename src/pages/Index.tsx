import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import Landing from "@/components/Landing";
import Projects from "@/components/Projects";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Landing />
      <Projects />
      <ContactForm />
    </div>
  );
};

export default Index;