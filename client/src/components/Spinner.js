import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";
const Spinner = () => {
  return (
    <Div>
      <CircularProgress />
    </Div>
  );
};

export default Spinner;

const Div=styled.div`
padding-top: 50px;
  flex: 0.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid var(--twitter-background);
color: hsl(258deg, 100%, 50%);
`
