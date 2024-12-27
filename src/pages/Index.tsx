import ContactForm from "@/components/ContactForm";
import Header from "@/components/Header";
import Landing from "@/components/Landing";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Landing />
      <Projects />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;