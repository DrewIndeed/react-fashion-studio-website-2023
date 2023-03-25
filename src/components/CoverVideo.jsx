import React from "react";
import styled from "styled-components";
import MainVideo from "../assets/WalkingGirl.mp4";
import { motion } from "framer-motion";

const VideoWrapper = styled.section`
  width: 100%;
  height: 100%;
  position: relative;

  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
`;

const Title = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.text};

  div {
    display: flex;
    flex-direction: row;
  }

  h1 {
    font-family: "Kaushan Script";
    font-size: ${(props) => props.theme.fontBig};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};

    @media (max-width: 30em) {
      font-size: calc(5rem + 8vw);
    }
  }

  h2 {
    font-size: ${(props) => props.theme.fontlg};
    font-family: "Sirin Stencil";
    font-weight: 500;
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    margin: 0 auto;
    text-transform: capitalize;

    @media (max-width: 30em) {
      font-size: ${(props) => props.theme.fontmd};
      margin-top: -1.5rem;
    }
  }
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 5, // 2
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const CoverVideo = () => {
  const targetTitle = "Tripcy Closet";
  return (
    <VideoWrapper>
      <DarkOverlay />
      <Title
        className="noselect"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <div>
          {targetTitle.split("").map((letter, idx) => (
            <motion.h1
              key={`${letter}-${idx}`}
              variants={item}
              data-scroll
              data-scroll-speed="8"
              data-scroll-delay={0.05 * (targetTitle.length - idx)}
            >
              {letter}
            </motion.h1>
          ))}
        </div>
        <motion.h2 variants={item}>Inspire. Create. Belive</motion.h2>
      </Title>
      <video src={MainVideo} autoPlay muted loop></video>
    </VideoWrapper>
  );
};

export default CoverVideo;
