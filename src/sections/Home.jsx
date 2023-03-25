import React from "react";
import styled from "styled-components";
import { CoverVideo, Logo } from "../components";

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
      <h1>Navbar</h1>
    </HomeWrapper>
  );
};

export default Home;
