import styled from "styled-components";
import React from "react";
import {Link} from "react-router-dom";
import {FormattedMessage} from "react-intl";
import {globalMessages} from "../../containers/App/globalMessages";

const HeaderLayout = styled.div`
  height: 52px;
  width: 100%;
  display: flex;
  margin-bottom: 10px;
`;

const Logo = styled.img`
  max-height: 100%;
  margin-right: 15px;
`;

const LogoLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: 22px;
  font-weight: 600;
  display: flex;
  align-items: center;
`;

export const Header = () => {
  return (
    <HeaderLayout>
      <LogoLink to={"/"}>
        <Logo src={"logo.svg"}/>
        <FormattedMessage {...globalMessages["firstName"]} />{" "}
        <FormattedMessage {...globalMessages["surname"]} />
      </LogoLink>
    </HeaderLayout>
  );
};
