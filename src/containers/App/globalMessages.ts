/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from "react-intl";

export const scope = "app.global";

/**
 * For the purpose of this task I have not been filling the language files, using just default messages
 */
export const globalMessages = defineMessages({
  firstName: {
    id: `${scope}.firstName`,
    defaultMessage: "Viktor",
  },
  surname: {
    id: `${scope}.surname`,
    defaultMessage: "Pesek",
  },
});
