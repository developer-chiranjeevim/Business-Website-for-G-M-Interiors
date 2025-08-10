import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";

function Home(){


  return(
    <>
      <Navbar />
      <Banner />
      <About />
      <Portfolio />
      <Services />
      <Reviews />
      <Contact />
    </>
  )
};

export default Home;