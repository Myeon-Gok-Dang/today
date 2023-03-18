import styled from "styled-components";
import WriteDiaryButton from "../atoms/main/WriteDiaryButton";
import DateSelectorCard from "../organisms/main/DateSelectorCard";
import MainHeader from "../organisms/main/MainHeader";

const MainTemplate = () => {
  return (
    <Container>
      <MainHeader />
      <DateSelectorCard />
      <WriteDiaryButton />
    </Container>
  );
};

export default MainTemplate;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
`;
