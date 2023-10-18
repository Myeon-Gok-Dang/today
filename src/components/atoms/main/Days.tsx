import styled from "styled-components";
import { DaysProps } from "../../../constants/types";

const Days = (props: DaysProps) => {
  return <Container>{props.day}</Container>;
};

export default Days;

const Container = styled.div`
  width: 13%;
  height: 4rem;
  border: 1px solid purple;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.5rem;
`;
