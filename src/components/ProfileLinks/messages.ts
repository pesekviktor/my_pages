import { defineMessages } from "react-intl";

export const scope = "app.components.ProfileLinks";

export default defineMessages({
  viewCV: {
    id: `${scope}.viewCV`,
    defaultMessage: "CV",
  },
  linkedIn: {
    id: `${scope}.linkedIn`,
    defaultMessage: "LinkedIn",
  },
  github: {
    id: `${scope}.github`,
    defaultMessage: "GitHub",
  },
  stackOverflow: {
    id: `${scope}.stackOverflow`,
    defaultMessage: "Stack Overflow",
  },
});
