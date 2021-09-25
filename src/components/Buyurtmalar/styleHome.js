const { default: styled } = require("styled-components");

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  background: #fff;
`;

export const Wrapper = styled.div`
  display: flex;
  width: ${({ center }) => (center ? "100%" : "300px")};
  height: 90px;
  border: 1px solid green;
`;
