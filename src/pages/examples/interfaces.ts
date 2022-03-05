import { ReactText } from "react";

interface Screenshot {
  src: string;
  width: number;
  height: number;
  sizes?: string;
}

export interface SlideProps {
  title: ReactText;
  id: ReactText;
  screenshots?: Screenshot[];
  link?: string;
  github?: string;
}
