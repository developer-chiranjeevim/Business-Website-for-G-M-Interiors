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
      <div className="relative">
        <Navbar />
        <CarouselBanner />
        {/* <Banner /> */}
        <About />
        <Portfolio />
        <Services />
        {/* <TimelineSec /> */}
        <Reviews />
        <Contact />
        <Footer />

        <a href="https://api.whatsapp.com/send/?phone=%2B919487288218&text&type=phone_number&app_absent=0" target="_blank" className="fixed z-30 bottom-5 right-5 bg-green-700 hover:bg-green-800 duration-300 rounded-full rounded-full p-4 cursor-pointer">
          <img src="/icons/whatsapp.svg" alt="whatsapp call to action icon" className="w-auto h-[2rem]" />
        </a>
      </div>
    </>
  )
};

export default Home;