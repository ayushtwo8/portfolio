import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills"; 
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

const Index = () => {

    return <div className="min-h-screen flex flex-col ">
        <Header />
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Footer />
    </div>
};

export default Index;