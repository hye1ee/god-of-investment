import React from "react";
import styled from "styled-components";
import { height_size } from "../../utils/style";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <LayoutWrapper>
      <Header />
      <Outlet />
    </LayoutWrapper>
  );
};
export default Layout;

const LayoutWrapper = styled.div`
  width: 100%;
  height: ${height_size(1000)};
`;
