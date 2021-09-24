import React from "react";
import {
  Container,
  Header,
  Wrapper,
  Link,
  IconWrapper,
  activeStyle,
  Logout
} from "./styleSidebar";
import logo from "../../assets/img/loginPage/login.png";
import { sidebar } from "../../utils/sidebar";
import { ReactComponent as Chiqish } from "../../assets/icons/Buyurtmalar/chiqish.svg";

export const Sidebar = () => {
  return (
    <Container>
      <Header>
        <Header.Logo src={logo} alt="alt" />
        <Wrapper>
          <Wrapper.Title>Fast Food</Wrapper.Title>
          <Wrapper.Description>Online maxsulot sotuvi</Wrapper.Description>
        </Wrapper>
      </Header>
      <Wrapper left>
        {sidebar.map(({ title, Icon, path }) => (
          <Link activeStyle={activeStyle} to={path}>
            <IconWrapper>
              <Icon />
            </IconWrapper>
            {title}
          </Link>
        ))}
        <Logout>
          <IconWrapper>
            <Chiqish />
          </IconWrapper>
          Chiqish
        </Logout>
      </Wrapper>
    </Container>
  );
};

export default Sidebar;
