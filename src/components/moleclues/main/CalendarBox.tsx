import styled from "styled-components";
import Calendar from "react-calendar";
import { format } from "date-fns";
import { useState } from "react";
import "react-calendar/dist/Calendar.css";

const CalendarBox = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (e: any) => {
    setDate(new Date(e));
  };

  const dummyData = [
    {
      no: 1,
      cdate: "2023-09-23",
    },
  ];

  return (
    <Container>
      <Calendar
        onChange={onChange}
        value={date}
        locale="en"
        className="calendar"
        formatDay={(locale, date) => format(date, "d")}
        tileContent={
          dummyData.length !== 0
            ? ({ activeStartDate, date, view }) =>
                view === "month" &&
                format(date, "yyyy-MM-dd") ===
                  dummyData[
                    dummyData.findIndex((x) => {
                      return x.cdate === format(date, "yyyy-MM-dd");
                    }) === -1
                      ? 0
                      : dummyData.findIndex((x) => {
                          return x.cdate === format(date, "yyyy-MM-dd");
                        })
                  ].cdate ? (
                  <>휴무일</>
                ) : null
            : null
        }
      />
    </Container>
  );
};

export default CalendarBox;

const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid red;
  box-sizing: border-box;

  .calendar {
    width: 100%;
    height: 100%;
  }
`;
