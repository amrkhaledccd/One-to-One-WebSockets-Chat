import { atom } from "recoil";

export const loggedInUser = atom({
  key: "loggedInUser",
  default: {},
  persistence_UNSTABLE: {
    type: "loggedInUser",
  },
});

export const chatActiveContact = atom({
  key: "chatActiveContact",
  persistence_UNSTABLE: {
    type: "chatActiveContact",
  },
});

export const chatMessages = atom({
  key: "chatMessages",
  default: [],
  persistence_UNSTABLE: {
    type: "chatMessages",
  },
});
