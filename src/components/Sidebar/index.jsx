import React from "react";
import { Container, Header, Wrapper, Link, IconWrapper } from "./styleSidebar";
import logo from "../../assets/img/loginPage/login.png";
import { sidebar } from "../../utils/sidebar";

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
      <Wrapper>
        {sidebar.map(({ title, Icon, path }) => (
          <Link to={path}>
            {" "}
            <IconWrapper>
              <Icon />
            </IconWrapper>{" "}
            {title}
          </Link>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Sidebar;
