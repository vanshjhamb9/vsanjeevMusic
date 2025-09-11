import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Headers = styled.header`
  display: flex;
  background: transparent;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5rem;
  color: var(--white);
  position: relative;
  z-index: 500;
  @media only Screen and (max-width: 64em) {
    padding: 0.5rem 3rem;
  }
  @media only Screen and (max-width: 40em) {
    padding: 0.5rem 1.5rem;
  }
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  width: 5rem;
  height: auto;
  cursor: pointer;
  img {
    margin-right: 0.5rem;
    width: 100%; /* Adjusted width for smaller screens */
  }
  @media only screen and (max-width: 40em) {
    width: 3rem; /* Decrease width for smaller screens */
    img {
      margin-right: 0.2rem; /* Adjusted margin for smaller screens */
    }
  }
`;

const Nav = styled.nav`
  width: 80rem;
  max-width: 40rem;
  display: flex;
  align-items: center;
  
  justify-content: space-between; 
  transition: all 0.3s;
  @media only Screen and (max-width: 48em) {
    display: none;
  }
  a {
    line-height: 1.5;
    color: var(--white);
    &::after {
      content: "";
      display: block;
      
      height: 3px;
      width: 0;
      background: #FFE395;
      transition: width 0.5s;
    }
    &:not(:last-child):hover::after {
      width: 100%;
      background: #FFE395;
    }
    /* &:not(:last-child) {
      margin-right: 2rem;
    } */
    /* @media only Screen and (max-width: 48em) {
      &:not(:last-child) {
        margin-right: 1rem;
      }
    } */
  }
`;

const Button = styled.button`
  border:2rem;
  background-color: var(--purple);
  padding: 0.5rem 1rem;
  border-radius: 8px;
  color: var(--white);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.1);
  }
  &:focus {
    transform: scale(0.9);
  }
  @media only Screen and (max-width: 40em) {
    font-size: 1.2rem;
    &:hover {
      transform: none;
    }
    &:focus {
      transform: none;
    }
  }
`;
const HamburgerBtn = styled.button`
  display: none;
  @media only Screen and (max-width: 58em) {
    display: inline-block;
  }
  position: relative;
  background-color: transparent;
  width: 2rem;
  height: 10px;
  margin-top: -12rem;
  margin-left:2rem;
  transition: all 0.3s;
  z-index:1000;
  cursor: pointer;
  &::before,
  &::after {
    content: "";
    background-color: var(--white);
    width: 2.8rem;
    height: 4px;
    display: inline-block;
    position: absolute;
    left: 0;
    cursor: pointer;

    transition: all 0.3s;
  }
  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }
  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.5rem")};
    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }
`;

const MobileMenu = styled.nav`
  display: none;
  @media only Screen and (max-width: 38em) {
    display: flex;
  }
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 0;
  overflow-x: hidden;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  opacity: ${(props) => (props.clicked ? "1" : 0)};
  visibility: ${(props) => (props.clicked ? "visible" : "hidden")};
  transition: all 0.5s;
  z-index: -10;
  background-color: rgb(53 53 63 / 95%);
  border-radius: 5px;
  margin: -1.8rem;
  a {
    color: var(--white);
    font-weight: 600;
    font-size: 1.4rem;
    margin: 1.1rem;
    cursor: pointer;
  }
`;
const Header = () => {
  const [click, setClick] = useState(false);
  //const handleClick = () => setClick(!click);
  const ref = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  const scrollUp = (id, e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  const handleClick = (id, e) => {
    setClick(!click);
    scrollUp(id, e);
  };

  // useEffect(() => {
  //   const element = ref.current;

  //   const mq = window.matchMedia("(max-width: 40em)");
  //   // console.log("mq", mq);
  //   if (mq.matches) {
  //     gsap.to(element, {
  //       position: "fixed",
  //       backgroundColor:"black",
  //       top: "0",
  //       left: "0",
  //       right: "0",
  //       padding: "0.3rem 1.1rem",

  //       borderRadius: "0 0 50px 50px",

  //       duration: 1,
  //       ease: "power1.out",

  //       scrollTrigger: {
  //         trigger: element,
  //         start: "bottom+=200 top",
  //         end: "+=100",
  //         scrub: true,
  //       },
  //     });
  //   } else {
  //     gsap.to(element, {
  //       position: "fixed",
  //       top: "0.4rem",
  //       left: "3rem",
  //       right: "3rem",
  //       padding: "1rem 1.4rem",
  //       duration: 1,
  //       ease: "power1.out",

  //       scrollTrigger: {
  //         trigger: element,
  //         start: "bottom+=300 top",
  //         end: "+=250",
  //         scrub: true,
  //       },
  //     });
  //   }
  // }, []);

  return (
    <Headers className="bg-transparent z-100 " ref={ref}>

      <div className="flex flex-col gap-[1.4rem]  mx-auto border-t-[1px] p-4  border-brown-100">   
      <Nav className="font-bold flex flex-row overflow-x-wrap items-center mx-auto justify-between gap-10" >
        <Link to="/biography" className="font-mono" >
          Biography
        </Link>
        {/* <Link to="/gallery">
          Gallery
        </Link> */}
        <Link to="/videos" className="font-mono" >
          Video
        </Link>
        <Link to="/audios" className="font-mono" >
          Audio
        </Link>
        <Link to="/playlist" className="font-mono" >
          Song Album
        </Link>
        
      </Nav>
      <Nav className="font-bold flex flex-row overflow-x-wrap items-center mx-auto justify-between gap-10" >
      <Link to="/composition">
          Composition
        </Link>
        <Link to="/awards">
          Awards
        </Link>
        <Link to="/upcomigprojects" >
        Recent Project
        </Link>
        <Link to="/fycgrammy" >
        FYC GRAMMY
        </Link>
        <Link to="/contact">
        Contact
        </Link>
        </Nav>

        </div>
      <HamburgerBtn clicked={+click} onClick={() => setClick(!click)}>
        <span></span>
      </HamburgerBtn>
      <MobileMenu clicked={+click}>
      <Link to="/biography" className="font-mono" onClick={() => setClick(false)} >
          Biography
        </Link>
        {/* <Link to="/gallery" onClick={() => setClick(false)}>
          Gallery
        </Link> */}
        <Link to="/videos" className="font-mono"onClick={() => setClick(false)} >
          Video
        </Link>
        <Link to="/audios" className="font-mono" onClick={() => setClick(false)}>
          Audio
        </Link>
        <Link to="/fycgrammy" className="font-mono" onClick={() => setClick(false)}>
        FYC GRAMMY
        </Link>
        <Link to="/playlist" className="font-mono" onClick={() => setClick(false)}>
          Song Album
        </Link>
        <Link to="/composition" onClick={() => setClick(false)}>
          Composition
        </Link>
        <Link to="/awards" onClick={() => setClick(false)}>
          Awards
        </Link>
        <Link to="/upcomigprojects" onClick={() => setClick(false)} >
        Upcoming Project
        </Link>
        <Link to="/contact" onClick={() => setClick(false)}>
        Contact
        </Link>
      </MobileMenu>
    </Headers>
  );
};

export default Header;
