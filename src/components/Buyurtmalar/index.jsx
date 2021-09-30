import React, { useState } from "react";
import {
  Container,
  Header,
  Wrapper,
  Add,
  Tab,
  Toggle,
  IconWrapper,
  MenuH,
  MenuV
} from "./style.js";

export const Buyurtmalar = () => {
  const [isActive, setIsActive] = useState("Yangi");
  const [on, setOn] = useState("Yangi");
  return (
    <Container>
      <Header>
        <Wrapper>
          <Add.Plus />
          <Add.Title>Yangi buyurtma qo'shish</Add.Title>
        </Wrapper>
        <Wrapper center>
          <Tab>
            <Tab.Item
              active={"Yangi" === isActive}
              onClick={() => setIsActive("Yangi")}
            >
              Yangi
            </Tab.Item>
            <Tab.Item
              active={"Qabul qilingan" === isActive}
              onClick={() => setIsActive("Qabul qilingan")}
            >
              Qabul qilingan
            </Tab.Item>
            <Tab.Item
              active={"Jo'natilgan" === isActive}
              onClick={() => setIsActive("Jo'natilgan")}
            >
              Jo'natilgan
            </Tab.Item>
            <Tab.Item
              active={"Yopilgan" === isActive}
              onClick={() => setIsActive("Yopilgan")}
            >
              Yopilgan
            </Tab.Item>
          </Tab>
        </Wrapper>
        <Wrapper>
          <Toggle>
            <IconWrapper active={on} onClick={() => setOn(true)}>
              <MenuH />
            </IconWrapper>

            <IconWrapper active={!on} onClick={() => setOn(false)}>
              <MenuV />
            </IconWrapper>
          </Toggle>
        </Wrapper>
      </Header>
    </Container>
  );
};

export default Buyurtmalar;
