import styled from "styled-components";

interface InputBoxProps {
  name: any;
}
export const InputBox = styled.div<InputBoxProps>`
  width: 100%;
  height: 56px;
  background: #ffffff;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  padding-right: 16px;
  align-items: center;
  border: ${(props) =>
    props.name ? "2px solid #FF7979" : "1px solid #DEDEDE"};
  &:focus {
    border: 1px solid #5e54a4;
  }
`;
