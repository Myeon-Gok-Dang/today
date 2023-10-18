import styled from "styled-components";
import DayOfWeek from "../../atoms/main/DayOfWeek";
import Days from "../../atoms/main/Days";
import { useEffect, useState } from "react";
import { getDaysInMonth } from "../../../constants/function";

const Calendar = () => {
  const [days, setDays] = useState<JSX.Element[]>([]);
  const [outOfDay, setOutOfDay] = useState<{
    prev: JSX.Element[];
    next: JSX.Element[];
  }>({
    prev: [],
    next: [],
  });
  const year = 2023;
  const month = 10;

  useEffect(() => {
    const daysArr = getDaysInMonth(year, month).arr;
    const prevDow = getDaysInMonth(year, month).prevDow;
    const nextDow = getDaysInMonth(year, month).nextDow;

    setDays(daysArr.map((data, index) => <Days day={data} key={index} />));

    const prevTemp = [];
    for (let i = 0; i < prevDow; i++) {
      prevTemp.push(<Days day={0} key={i} />);
    }
    const nextTemp = [];
    for (let i = 6; i > nextDow; i--) {
      nextTemp.push(<Days day={0} key={i} />);
    }

    setOutOfDay({
      prev: prevTemp,
      next: nextTemp,
    });
  }, []);

  return (
    <Container>
      <CurrentDate>2023-10-18</CurrentDate>
      <DayOfWeek />
      <DaysContainer>
        {outOfDay.prev}
        {days}
        {outOfDay.next}
      </DaysContainer>
    </Container>
  );
};

export default Calendar;

const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid red;
  box-sizing: border-box;
`;

const CurrentDate = styled.div`
  width: 100%;
  height: 10%;
  border: 1px solid red;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
`;

const DaysContainer = styled.div`
  width: 100%;
  height: 75%;
  border: 1px solid green;
  box-sizing: border-box;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
`;
