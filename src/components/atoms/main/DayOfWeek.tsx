import styled from "styled-components";

const DayOfWeek = () => {
  return (
    <Container>
      <Dow>일</Dow>
      <Dow>월</Dow>
      <Dow>화</Dow>
      <Dow>수</Dow>
      <Dow>목</Dow>
      <Dow>금</Dow>
      <Dow>토</Dow>
    </Container>
  );
};

export default DayOfWeek;

const Container = styled.div`
  width: 100%;
  height: 8%;
  margin-top: 5%;
  border: 1px solid blue;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Dow = styled.div`
  width: 13%;
  height: 100%;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
