import styled from "styled-components";
import MenuButton from "../../atoms/main/MenuButton";

const MainHeader = () => {
  return (
    <Container>
      <MenuButton />
      <MenuButton />
    </Container>
  );
};

export default MainHeader;

const Container = styled.div`
  width: 100%;
  height: 8%;
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;
