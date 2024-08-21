import { motion } from "framer-motion";
import styled from "styled-components";

export const DashboardContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const MainContent = styled.main`
  background-attachment: fixed;
  background-color: rgb(211 158 222 / 40%);
  background-size: cover;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 1rem;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    flex-direction: row;
    padding: 2rem 2rem 2rem 0rem;
    height: calc(100vh - 10rem);
  }
`;

export const Content = styled.div`
  flex: 1;
  padding: 1rem;

  @media (min-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 0 0 0 2.4rem;
  }
`;
