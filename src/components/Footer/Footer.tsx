import styled from "styled-components";
import React from "react";
import { useIntl } from "react-intl";
import { globalMessages } from "../../containers/App/globalMessages";
import { SCREEN } from "../../containers/ThemesProvider/themes";

const FooterLayout = styled.div`
  ${SCREEN.maxMedium} {
    justify-content: center;
  }
  height: 20px;
  display: flex;
  justify-content: flex-end;
  padding: 5px 10px 5px;
  margin-top: 10px;
`;

export const Footer = () => {
  const intl = useIntl();
  const actualEmail = intl.formatMessage(globalMessages.actualEmail);
  return (
    <FooterLayout>
      <a href={`mailto:${actualEmail}`}>{actualEmail}</a>
    </FooterLayout>
  );
};
