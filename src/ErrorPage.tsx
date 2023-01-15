import styled from "styled-components";
import errorVideo from "./assets/errorVideo.mp4";

const StyledContent = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  color: white;
`;

const StyledWrapper = styled.div`
  position: fixed;
  min-width: 100%;
  min-height: 100%;
  right: 0;
  bottom: 0;
  background-color: #969389;
  display: flex;
  align-items: center;
`;

const StyledTitle = styled.h1`
  font-size: 200px;
  margin: 0;
  margin-bottom: 10%;
`;

const StyledText = styled.p`
  font-size: 50px;
  margin: 0;
`;

const TextWrapper = styled.div`
  position: absolute;
  top: 10%;
  left: 50%;
  width: 30%;
`;

export const ErrorPage = () => {
  return (
      <StyledWrapper>
        <StyledContent>
          <video autoPlay loop muted width="70%">
            <source src={errorVideo} type="video/mp4" />
          </video>
          <TextWrapper>
            <StyledTitle>404</StyledTitle>
            <StyledText>Where's the page, Lebowski?</StyledText>
          </TextWrapper>
        </StyledContent>
      </StyledWrapper>
  );
};
