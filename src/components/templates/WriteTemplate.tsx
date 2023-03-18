import styled from "styled-components";
import TitleCard from "../organisms/write/TitleCard";
import WritingCard from "../organisms/write/WritingCard";

const WriteTemplate = () => {
  return (
    <Container>
      <TitleCard />
      <WritingCard />
    </Container>
  );
};

export default WriteTemplate;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
`;
