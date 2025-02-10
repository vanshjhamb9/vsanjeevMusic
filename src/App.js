import { GlobalStyle } from "./globalStyles";
import { lazy, Suspense } from "react";
import "./App.css"
import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import logo from "./assets/logo2(1).png"
import HeroSection from "./Sections/Hero1";
import Biography from "./Pages/Biography";
import VideosPage from "./Pages/Videos";
import AudioPage from "./Pages/Audios";
import YouTubePlaylists from "./Pages/Playlist";
import CompositionPage from "./Pages/Composition";
import Awards from "./Pages/Awards";
import UpcomingProjects from "./Pages/Upcoming";
import Contact from "./Pages/Contact";
import Gallery from "./Pages/Gallery";

const Header = lazy(() => import("./components/Header/index"));




const Logo = styled.a`
  display: flex;
  align-items: center;
  width: 25rem;
  height: auto;
  cursor: pointer;
  fontFamily:
  img {
    margin-right: 0.5rem;
    width: 100%; /* Adjusted width for smaller screens */
  }
  @media only screen and (max-width: 40em) {
    width: 20rem; /* Decrease width for smaller screens */
  }
`;


function App() {
  
  return (
    <>
    <div className="w-full min-h-screen bg-[#000000] overflow-hidden  flex flex-col font-inter">
      <Suspense fallback={null}>
        <GlobalStyle />
        {/* Hi There! */}
         
        <Link to="/">
        <Logo  className="items-baseline relative w-screen mx-auto">
        <div className="flex flex-col -space-y-1.5 mx-auto items-start items-baseline">
        <img src={logo} alt="Logo" className="w-80 lg:w-80 md:w-80 xs:w-[10rem] lg:h-40 md:h-40 xs:h-26 mx-auto" />
        <p className="font-mono w-[120%] lg:[140%] md:[140%] sm:w-[100%] xs:w-[90%] text-center  mx-auto text-[1rem] xs:text-[0.8rem] mx-auto text-brown-5">Carnatic Violinist | Composer | Orchestral Arranger</p>
        </div>
      </Logo>
      </Link>
        <Header />

        <Routes>
              <Route path="/" element={<HeroSection />} />
              <Route path="/biography" element={<Biography />} />
              <Route path="/videos" element={<VideosPage />} />
              <Route path="/audios" element={<AudioPage />} />
              <Route path="/playlist" element={<YouTubePlaylists />} />
              <Route path="/composition" element={<CompositionPage />} />
              <Route path="/awards" element={<Awards />} />
              <Route path="/upcomigprojects" element={<UpcomingProjects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/gallery" element={<Gallery />} />
            </Routes>
        
      
      </Suspense>
      </div>
    </>
  );
}

export default App;
