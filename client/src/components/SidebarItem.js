import styled from "styled-components";

const SidbarItem = ({ Icon, text }) => {
  return (
    <ItemDiv>
      <Icon />
      <h2>{text}</h2>
    </ItemDiv>
  );
};
export default SidbarItem;

// some styles for items in sidebar
const ItemDiv = styled.div`
  display: flex;
  width: 100%;
  border-radius: 30px;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
  font-size: 20px;
  svg {
    padding: 20px;
  }
  h2{
    font-size: 20px;
    font-weight:700;
  }
  &:hover {
    background-color: #e8f5fe;
    color: hsl(258deg, 100%, 50%);
    transition: color 0.1s ease-out;
  }
`;
