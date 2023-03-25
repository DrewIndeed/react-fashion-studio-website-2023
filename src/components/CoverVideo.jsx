import React from "react";
import styled from "styled-components";
import MainVideo from "../assets/WalkingGirl.mp4";

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

const Title = styled.div`
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

const CoverVideo = () => {
  const targetTitle = "Tripcy Closet";
  return (
    <VideoWrapper>
      <DarkOverlay />
      <Title className="noselect">
        <div>
          {targetTitle.split("").map((letter, idx) => (
            <h1
              data-scroll
              data-scroll-speed="8"
              data-scroll-delay={0.05 * (targetTitle.length - idx)}
            >
              {letter}
            </h1>
          ))}
        </div>
        <h2>Inspire. Create. Belive</h2>
      </Title>
      <video src={MainVideo} autoPlay muted loop></video>
    </VideoWrapper>
  );
};

export default CoverVideo;
