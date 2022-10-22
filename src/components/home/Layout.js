import styled from "styled-components";

const Layout = ({ children }) => {
  return <Container>dfdf{children}</Container>;
};
export default Layout;

const Container = styled.div`
  min-width: "390px";
  min-height: "900px";
  background-color: tomato;
`;
