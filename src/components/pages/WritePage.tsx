import styled from "styled-components";
import WriteTemplate from "../templates/WriteTemplate";

const WritePage = () => {
  return (
    <Container>
      <WriteTemplate />
    </Container>
  );
};

export default WritePage;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
