import styled from "styled-components";
import MenuButton from "../../atoms/main/MenuButton";

const MainHeader = () => {
  return (
    <Container>
      <MenuButton type="menu" />
      <span className="title">오늘은.</span>
      <MenuButton type="search" />
    </Container>
  );
};

export default MainHeader;

const Container = styled.div`
  width: 100%;
  height: 8%;
  border-bottom: 2px solid lightgray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  .title {
    font-size: 2rem;
    font-family: "Gowun Batang", serif;
  }
`;
