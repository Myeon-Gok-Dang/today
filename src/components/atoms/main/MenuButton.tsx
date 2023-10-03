import styled from "styled-components";
import { FaBars, FaSearch } from "react-icons/fa";
import { MenuButtonProps } from "../../../constants/types";

const MenuButton = (props: MenuButtonProps) => {
  return (
    <Container>
      {props.type === "menu" ? (
        <FaBars className="icon" fontSize={"2.5rem"} />
      ) : (
        <FaSearch className="icon" fontSize={"2.5rem"} />
      )}
    </Container>
  );
};

export default MenuButton;

const Container = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .icon {
    color: #c2c2c2;
  }
`;
