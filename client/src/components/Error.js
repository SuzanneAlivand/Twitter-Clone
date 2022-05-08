import styled from "styled-components";
import {FiFrown} from 'react-icons/fi'

const Error = () => {
  return (
    <ErrorDiv>
        <IconDiv><FiFrown></FiFrown></IconDiv>
      <h1>An unknown error has occureed.</h1>
      <p>
        Please try refreshing the page, or <a target="_blank" href="https://help.twitter.com/en/forms">contact Support</a></p><p>if the problem persisted.</p>
    </ErrorDiv>
  );
};

export default Error;

const ErrorDiv = styled.div`
 padding-top: 50px;
  flex: 0.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid var(--twitter-background);
  h1{
      margin: 10px;
  }
  p{
    line-height: 2;
  }
`
const IconDiv =styled.div`
font-size:80px;
color:hsl(258deg, 100%, 50%);
;
`