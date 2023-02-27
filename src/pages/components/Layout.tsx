import styled from "styled-components";
import { height_size } from "../../utils/style";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <BodyLayout>
      <Header />
      <Outlet />
    </BodyLayout>
  );
};
export default Layout;

const BodyLayout = styled.div`
  width: 100%;
  height: ${height_size(1000)};
`;
