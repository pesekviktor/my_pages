import styled from "styled-components";
import {Button, Select, TextField} from "@material-ui/core";

export const HomeLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.background.color};
`;

export const PageLayout = styled.div`
  min-height: 100vh;
  padding: 40px 70px 60px;
  display: flex;
  flex-direction: column;
`;

export const HomeContent = styled.div`
  min-width: 300px;
  max-width: 1000px;
  max-height: 500px;
  display: flex;
`;
export const LoginFormFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const LoginFormFooterSelect = styled(Select)`
  width: 150px;
  justify-content: space-between;
`;

export const PhotoHolder = styled.div`
  border-radius: 100%;
  border: 18px solid black;
  width: 100vw;
  height: 100vw;
  box-shadow: 0px 0px 25px 0px rgba(0,0,0,.8);
`;

export const InfoHolder = styled.div`
  display: flex;
  min-width: 300px;
  flex-direction: column;
`;

export const LoginInput = styled(TextField)`
  width: 100%;
  fieldset {
    ${(props) => props.theme.radiusStyle}
  }
`;
export const LoginLink = styled.a`
  color: ${(props) => props.theme.navyBlue};
`;

export const ActionsHolder = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10px;
  align-items: center;
`;

export const LoginButton = styled(Button)`
  ${(props) => props.theme.radiusStyle}
`;
