import Navbar from "./components/Navbar";
import CarouselBanner from "./components/CarouselBanner";
import Banner from "./components/Banner";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import TimelineSec from "./components/TimeLineSec";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function Home(){


  return(
    <>
      <Navbar />
      <CarouselBanner />
      {/* <Banner /> */}
      <About />
      <Portfolio />
      <Services />
      <TimelineSec />
      <Reviews />
      <Contact />
      <Footer />
    </>
  )
};

export default Home;