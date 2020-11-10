/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import {defineMessages} from "react-intl";

export const scope = "app.containers.HomePage";

/**
 * For the purpose of this task I have not been filling the language files, using just default messages
 */
export default defineMessages({
  jobTitle: {
    id: `${scope}.jobTitle`,
    defaultMessage: "",
  },
  fullName: {
    id: `${scope}.fullName`,
  },
  capabilities: {
    id: `${scope}.capabilities`,
  },
  createAccount: {
    id: `${scope}.createAccount`,
    defaultMessage: "",
  },
  selectTheme: {
    id: `${scope}.selectTheme`,
    defaultMessage: "",
  },
  light: {
    id: `${scope}.light`,
    defaultMessage: "",
  },
  dark: {
    id: `${scope}.dark`,
    defaultMessage: "",
  },
  selectLanguage: {
    id: `${scope}.selectLanguage`,
    defaultMessage: "",
  },
  cs: {
    id: `${scope}.cs`,
    defaultMessage: "",
  },
  en: {
    id: `${scope}.en`,
    defaultMessage: "",
  },
});
