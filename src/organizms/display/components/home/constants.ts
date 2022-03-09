import MY_AVATAR from "../../assets/avatar.jpg";

import { HomeProps } from "./interfaces";

export const HOME: NonNullable<HomeProps["data"]> = {
  imageURL: MY_AVATAR,
  userName: "Kirill Arturov",
  job: "Frontend Developer",
  greating:
    "I'm looking for opportunities to be a part of strong TEAM creating outstanding products!!!",
  description:
    "With this webapp I expose my abilities and skills as well as demonstrate some of ones by the app itself =)",
  slogan: "Feel free to explore!!!",
};
