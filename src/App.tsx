import bg from "./images/bg-intro-desktop.png";

import styled from "styled-components";
function App() {
  return (
    <Container>
      <TitleSection>
        <Title>Learn to code by watching others</Title>
        <Text>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </Text>
      </TitleSection>
    </Container>
  );
}

export default App;

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  background-color: #ff7979;
  background-image: url(${bg});
  background-position: center;
  background-size: cover;
  padding: 121px 165px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TitleSection = styled.section`
  width: 40%;
`;
const Title = styled.h1`
  font-size: 50px;
  line-height: 55px;
  font-weight: 700;
  color: #ffffff;
`;
const Text = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: #ffffff;
`;
