import Banner from "./Pages/Banner";
import "./App.css";
import Header from "./Components/Header";
import Services from "./Pages/Services";
import Experience from "./Pages/Experience";
import CaseStudy from "./Pages/CaseStudy";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div>
        <Header />
        <Banner />
        <Services />
        <Experience />
        <CaseStudy />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
