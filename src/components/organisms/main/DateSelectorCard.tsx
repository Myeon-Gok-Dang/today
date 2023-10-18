import styled from "styled-components";
import CalendarBox from "../../moleclues/main/CalendarBox";
import "react-calendar/dist/Calendar.css";
import Calendar from "../../moleclues/main/Calendar";

const DateSelectorCard = () => {
  return (
    <Container>
      {/* <CalendarBox /> */}
      <Calendar />
    </Container>
  );
};

export default DateSelectorCard;

const Container = styled.div`
  width: 90%;
  height: 70%;
  border: 1px solid red;

  display: flex;
  align-content: space-between;
  justify-content: center;
  flex-wrap: wrap;
`;

const Date = styled.div`
  width: 100%;
  height: 20%;
  box-sizing: border-box;
  font-size: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
