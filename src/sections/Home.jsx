import React from "react";
import styled from "styled-components";
import { CoverVideo, Logo, Navbar } from "../components";

const HomeWrapper = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`;

const Home = () => {
  return (
    <HomeWrapper id="home-section" data-scroll-section>
      <CoverVideo />
      <Logo />
      <Navbar />
    </HomeWrapper>
  );
};

export default Home;
