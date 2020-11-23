import { defineMessages } from "react-intl";

export const scope = "app.global";

export const globalMessages = defineMessages({
  firstName: {
    id: `${scope}.firstName`,
    defaultMessage: "Viktor",
  },
  surname: {
    id: `${scope}.surname`,
    defaultMessage: "Pesek",
  },
  email: {
    id: `${scope}.email`,
    defaultMessage: "Email",
  },
  actualEmail: {
    id: `${scope}.actualEmail`,
    defaultMessage: "pesekviktor@gmail.com",
  },
});
