import React from "react";
import styled from "styled-components";
import logo from "../../assets/993A0545-Enhanced-NR.jpg"


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
    width: 3rem; /* Decrease width for smaller screens */
  }
`;

const HeroSection = () => {
    return (
        <div className="lg:relative md:fixed md:top-[-7.8rem] md:w-full md:-right-0 sm:fixed xs:fixed sm:top-[20%] xs:top-[20%] ">
           <img
    src={logo}
    alt="Project Preview"
    className="w-full  sm:h-[45rem] xs:h-[45rem]  h-auto object-cover rounded-lg"
  />
           
            {/* <img  className="absolute top-0 max-w-screen w-[120%] opacity-[10%]" src={bgImg} alt="Logo"/>
            <img  className="absolute top-[-20rem] left-[-22rem] max-w-screen w-[120%] opacity-[10%]" src={harmony} alt="Logo"/>
           */}

      
        </div>
    );
}

export default HeroSection;