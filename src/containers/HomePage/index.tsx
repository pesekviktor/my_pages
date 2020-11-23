import * as React from "react";
import { useDispatch } from "react-redux";
import {
  Capabilities,
  HomeContent,
  HomeLayout,
  InfoHolder,
  JobTitle,
  LoginFormFooter,
  LoginFormFooterSelect,
  Name,
  PageLayout,
  Photo,
  PhotoBox,
  PhotoHolder,
} from "./componentStyles";
import { FormattedMessage, useIntl } from "react-intl";
import messages from "./messages";
import { FormControl, InputLabel, MenuItem } from "@material-ui/core";
import { themes } from "../ThemesProvider/themes";
import { appLocales } from "../../locales";
import { changeTheme } from "../ThemesProvider/actions";
import { changeLocale } from "../LanguageProvider/actions";
import { Header } from "../Header/Header";
import { ProfileLinks } from "../../components/ProfileLinks/ProfileLinks";

const LoginPage = () => {
  const dispatch = useDispatch();
  const t = useIntl();

  const onThemeChange = (event) => {
    dispatch(changeTheme(event.target.value));
  };

  const onLanguageChange = (event) =>
    dispatch(changeLocale(event.target.value));

  return (
    <PageLayout>
      <Header />
      <HomeLayout>
        <HomeContent>
          <PhotoHolder>
            <PhotoBox>
              <Photo />
            </PhotoBox>
          </PhotoHolder>
          <InfoHolder>
            <JobTitle>
              <FormattedMessage {...messages["jobTitle"]} />
            </JobTitle>
            <Name>
              <FormattedMessage {...messages["fullName"]} />
            </Name>
            <Capabilities>
              <FormattedMessage {...messages["capabilities"]} />
              <ProfileLinks />
            </Capabilities>
          </InfoHolder>

          <LoginFormFooter
            style={{
              display: "none",
            }}
          >
            <FormControl>
              <InputLabel id="themeLabel">
                {t.formatMessage(messages["selectTheme"])}
              </InputLabel>
              <LoginFormFooterSelect
                labelId="themeLabel"
                onChange={onThemeChange}
                value={""}
              >
                {Object.keys(themes).map((themeKey) => (
                  <MenuItem key={themeKey} value={themeKey}>
                    {t.formatMessage(messages[themeKey])}
                  </MenuItem>
                ))}
              </LoginFormFooterSelect>
            </FormControl>
            <FormControl>
              <InputLabel id="languageLabel">
                {t.formatMessage(messages["selectLanguage"])}
              </InputLabel>
              <LoginFormFooterSelect
                labelId={"languageLabel"}
                onChange={onLanguageChange}
                value={""}
              >
                {appLocales.map((language) => (
                  <MenuItem key={language} value={language}>
                    {t.formatMessage(messages[language])}
                  </MenuItem>
                ))}
              </LoginFormFooterSelect>
            </FormControl>
          </LoginFormFooter>
        </HomeContent>
      </HomeLayout>
    </PageLayout>
  );
};

export default LoginPage;
