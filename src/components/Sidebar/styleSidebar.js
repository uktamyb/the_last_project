import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100vh;
  border: 1px solid red;
  padding: 30px 0;
`;

export const Header = styled.div`
  display: flex;
  padding: 0 24px;
  align-items: center;
  margin-bottom: 64px;
`;

Header.Logo = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 20px;
  border-radius: 56%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
`;

Wrapper.Title = styled.div`
  font-family: SFProDisplay bold;
  font-size: 16px;
  line-height: 19px;
  color: #2d3a45;
`;

Wrapper.Description = styled.div`
  font-family: SFProDisplay;
  font-size: 12px;
  line-height: 14px;
  color: #2d3a45;
  mix-blend-mode: normal;
  opacity: 0.5;
`;

export const Link = styled(NavLink)`
  display: flex;
  text-decoration: none;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  width: 100%;
  margin-bottom: 20px;
  padding-left: 40px;
  line-height: 18px;
  color: #2d3a45;
`;

export const IconWrapper = styled.div`
  width: 36px;
  height: 36px;
  background: #f6f6f6;
  border-radius: 6px;
`;

