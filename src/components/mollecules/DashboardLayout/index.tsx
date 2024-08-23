import React from "react";
import { Outlet } from "react-router-dom";
import { Content, DashboardContainer, MainContent } from "./Dashboard.styled";
import { pageAnimations } from "../../../utils/motion";
import Header from "header/Header";
import Sidebar from "header/Sidebar";

const DashboardLayout: React.FunctionComponent = () => {
  return (
    <DashboardContainer
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={pageAnimations}
      transition={{ duration: 0.5, type: "easeInOut" }}
      className="relative"
    >
      <Header />
      <MainContent>
        <Sidebar />
        <Content>
          <Outlet />
        </Content>
      </MainContent>
    </DashboardContainer>
  );
};

export default DashboardLayout;
