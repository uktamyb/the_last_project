import styled from "styled-components";
import { ReactComponent as plus } from "../../assets/icons/Buyurtmalar/plus.svg";
import { ReactComponent as menuH } from "../../assets/icons/Buyurtmalar/menuH.svg";
import { ReactComponent as menuV } from "../../assets/icons/Buyurtmalar/menuV.svg";

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
  align-items: center;
  width: ${({ center }) => (center ? "100%" : "320px")};
  height: 90px;
  border: 1px solid #e5e5e5;
  padding: 10px 40px;
`;

export const Add = styled.div`
  display: flex;
  cursor: pointer;
`;

Add.Plus = styled(plus)`
  width: 36px;
  height: 36px;
  min-width: 36px;
  min-height: 36px;
  cursor: pointer;
`;

Add.Title = styled.div`
  font-family: SFProDisplay bold;
  font-size: 12px;
  line-height: 16px;
  color: #2d3a45;
  margin-left: 14px;
  cursor: pointer;
`;

export const Tab = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 60px;
  background: #edeff3;
  border-radius: 24px;
  padding: 6px;
`;

Tab.Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 170px;
  height: 40px;
  background: ${({ active }) => (active ? "#ffffff" : "transparent")};
  box-shadow: ${({ active }) =>
    active && "0px 2px 2px rgba(174, 176, 181, 0.314986)"};
  border-radius: 18px;
  color: #b7bcc0;
  cursor: pointer;
  transition: all 0.3s;
`;

export const Toggle = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 97px;
  height: 50px;
  background: #edeff3;
  border-radius: 24px;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  min-width: 36px;
  min-height: 36px;
  cursor: pointer;
  background: ${({ active }) => active && "white"};
  border-radius: 50%;
  transition: all 0.3s;
`;

export const MenuH = styled(menuH)`
  width: 16px;
  height: 16px;
`;

export const MenuV = styled(menuV)`
  width: 16px;
  height: 16px;
`;
