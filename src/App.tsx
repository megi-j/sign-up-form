import bg from "./images/bg-intro-desktop.png";
import styled, { createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";
import FormBox from "./FormBox";
import mobBg from "./images/bg-intro-mobile.png";
const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style-type: none;
    text-decoration: none;
  }
`;
function App() {
  return (
    <Container>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyles />
      <TitleSection>
        <Title>Learn to code by watching others</Title>
        <Text>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </Text>
      </TitleSection>
      <FormSection>
        <FreePeriodBox>
          <span style={{ fontSize: 15, fontWeight: 700 }}>
            Try it free 7 days
          </span>
          <span style={{ fontSize: 15, fontWeight: 500 }}>
            then $20/mo. thereafter
          </span>
        </FreePeriodBox>
        <FormBox></FormBox>
      </FormSection>
    </Container>
  );
}

export default App;

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  background-color: #ff7979;
  background-image: url(${bg});
  background-position: center;
  background-size: cover;
  padding: 121px 165px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 375px) {
    background-image: url(${mobBg});
    flex-direction: column;
    align-content: space-between;
    justify-content: center;
    padding: 88px 24px 68px 24px;
  }
`;
const TitleSection = styled.section`
  width: 45%;
  @media (max-width: 375px) {
    width: 100%;
  }
`;
const Title = styled.h1`
  font-size: 50px;
  line-height: 55px;
  font-weight: 700;
  color: #ffffff;
  font-family: "Poppins";
  margin-bottom: 11px;
  letter-spacing: -0.520833px;
  @media (max-width: 375px) {
    font-size: 28px;
    line-height: 36px;
    letter-spacing: -0.291667px;
    text-align: center;
  }
`;
const Text = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: #ffffff;
  font-family: "Poppins";
  @media (max-width: 375px) {
    text-align: center;
    margin-bottom: 64px;
  }
`;
const FormSection = styled.section`
  width: 49%;
  @media (max-width: 375px) {
    width: 100%;
  }
`;
const FreePeriodBox = styled.div`
  max-width: 540px;
  width: 100%;
  height: 60px;
  background-color: #5e54a4;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins";
  letter-spacing: 0.267857px;
  color: #ffffff;
  box-shadow: 0px 8px 0px rgba(0, 0, 0, 0.14688);
  border-radius: 10px;
  margin-bottom: 24px;
  @media (max-width: 375px) {
    max-width: 327px;
    width: 100%;
    height: 88px;
    flex-direction: column;
  }
`;
