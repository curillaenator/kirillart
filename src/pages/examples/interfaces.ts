import { ReactText } from "react";

// interface Screenshot {
//   src: string;
//   width: number;
//   height: number;
//   sizes?: string;
// }

type LinkNames = "Github" | "Website";
type Links = Record<LinkNames, string>;

export interface SlideProps {
  title: ReactText;
  id: ReactText;
  // screenshots?: Screenshot[];
  links?: Links;
}
