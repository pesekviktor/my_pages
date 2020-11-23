/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from "react-intl";

export const scope = "app.components.ProfileLinks";

/**
 * For the purpose of this task I have not been filling the language files, using just default messages
 */
export default defineMessages({
  viewCV: {
    id: `${scope}.viewCV`,
    defaultMessage: "CV (Resume)",
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
