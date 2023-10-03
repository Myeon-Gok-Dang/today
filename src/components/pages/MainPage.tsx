import styled from "styled-components";
import MainTemplate from "../templates/MainTemplate";

const MainPage = () => {
  return (
    <Container>
      <MainTemplate />
    </Container>
  );
};

export default MainPage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
