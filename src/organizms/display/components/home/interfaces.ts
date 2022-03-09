import { ReactText } from "react";

export interface HomeProps {
  data?: {
    greating: ReactText;
    imageURL: string;
    userName: ReactText;
    job: ReactText;
    description: string;
    slogan: string;
  };
}
