import styled from "styled-components";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import messages from "./messages";
import { Button, LinkProps } from "@material-ui/core";
import { SCREEN } from "../../containers/ThemesProvider/themes";
import { globalMessages } from "../../containers/App/globalMessages";

const ProfileLinksStyle = styled.div`
  ${({ theme }) => theme.spacedFlexbox(5)}
  ${SCREEN.maxMedium} {
    justify-content: center;
  }
  margin-top: 25px;
  a {
    display: flex;
    align-items: center;
    img {
      margin-right: 5px;
      height: 20px;
      max-width: 100%;
    }
  }
`;

const ProfileButton = styled(Button)`
  && {
    border-radius: 25px;
    border: none;
    padding: 4px 10px;
  }
`;

const LinkButton = ({
  linkProps,
  children,
}: {
  linkProps: LinkProps;
  children: React.ReactNode;
}) => {
  return (
    <a {...linkProps}>
      <ProfileButton variant={"outlined"}>{children}</ProfileButton>
    </a>
  );
};

export const ProfileLinks = () => {
  const intl = useIntl();
  const actualEmail = intl.formatMessage(globalMessages.actualEmail);

  return (
    <ProfileLinksStyle>
      <LinkButton
        linkProps={{
          href: "files/vpesek_CV.pdf",
          target: "_blank",
        }}
      >
        <img src={"icons/CV.svg"} alt={"cv"} />
        <FormattedMessage {...messages.viewCV} />
      </LinkButton>
      <LinkButton
        linkProps={{
          href: `mailto:${actualEmail}`,
        }}
      >
        <img src={"icons/email.svg"} alt={"email"} />
        <FormattedMessage {...globalMessages.email} />
      </LinkButton>
      <LinkButton
        linkProps={{
          href: "https://www.linkedin.com/in/pesekviktor",
          target: "_blank",
        }}
      >
        <img src={"icons/linkedin2.svg"} alt={"linkedin"} />
        <FormattedMessage {...messages.linkedIn} />
      </LinkButton>
      <LinkButton
        linkProps={{
          href: "https://github.com/pesekviktor",
          target: "_blank",
        }}
      >
        <img src={"icons/github.svg"} alt={"github"} />
        <FormattedMessage {...messages.github} />
      </LinkButton>
      <LinkButton
        linkProps={{
          href: "https://stackoverflow.com/users/1228261/viktor",
          target: "_blank",
        }}
      >
        <img src={"icons/stackoverflow.svg"} alt={"stackoverflow"} />
        <FormattedMessage {...messages.stackOverflow} />
      </LinkButton>
    </ProfileLinksStyle>
  );
};
