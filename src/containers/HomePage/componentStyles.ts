import styled from "styled-components";
import { Select, TextField } from "@material-ui/core";
import { SCREEN } from "../ThemesProvider/themes";

export const HomeLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.background.color};
`;

export const PageLayout = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 15px 15px;
`;

export const HomeContent = styled.div`
  ${SCREEN.maxMedium} {
    justify-content: center;
    max-height: unset;
  }
  min-width: 300px;
  max-width: 1000px;
  max-height: 500px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
  > div {
    margin: 0 15px;
  }
`;
export const PhotoHolder = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
`;

export const PhotoBox = styled.div`
  border-radius: 100%;
  width: 300px;
  height: 300px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow(4)};
`;

export const JobTitle = styled.h2`
  font-size: 20px;
  margin: 0;
`;

export const Name = styled.h1`
  font-size: 35px;
  margin-top: 5px;
  margin-bottom: 14px;
`;

export const InfoHolder = styled.div`
  ${SCREEN.maxMedium} {
    max-width: unset;
    padding: 35px 20px 0;
    justify-content: center;
    text-align: center;
  }
  display: flex;
  max-width: 600px;
  flex-direction: column;
  justify-content: center;
`;

export const Photo = styled.div`
  background-image: url(./profi_foto_transparent.png);
  background-repeat: no-repeat;
  background-size: contain;
  width: 100%;
  height: 100%;
`;

export const LoginInput = styled(TextField)`
  width: 100%;
  fieldset {
    ${(props) => props.theme.radiusStyle}
  }
`;

export const Capabilities = styled.div`
  white-space: pre-line;
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
