import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LogoWrapper = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;

  z-index: 6;
  width: 100%;
  width: fit-content;

  .logo-content {
    display: flex;
  }

  a {
    width: 100%;
    display: flex;
    align-items: flex-end;
  }
  svg {
    width: 4rem;
    height: auto;
    overflow: visible;
    stroke-linejoin: round;
    stroke-linecap: round;
    g {
      path {
        stroke: ${(props) => props.theme.text};
      }
    }
  }
`;

const Text = styled(motion.span)`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.text};
  padding-bottom: 0.5rem;
`;

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,

    transition: {
      duration: 2,
      delay: 3, // 0
      ease: "easeInOut",
    },
  },
};
const textVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: -5,

    transition: {
      duration: 2,
      delay: 5, // 2
      ease: "easeInOut",
    },
  },
};

const Logo = () => {
  return (
    <LogoWrapper>
      <Link to="/" className="logo-content">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          height="48px"
          viewBox="0 0 24 24"
          width="48px"
          fill="none"
        >
          <g>
            <g>
              <motion.path
                variants={pathVariants}
                initial="hidden"
                animate="visible"
                d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
              />
            </g>
          </g>
        </svg>
        <Text variants={textVariants} initial="hidden" animate="visible">
          Tripcy Closet
        </Text>
      </Link>
    </LogoWrapper>
  );
};

export default Logo;
