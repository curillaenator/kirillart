import { ReactText } from "react";
import { ReactImageGalleryItem } from "react-image-gallery";

export interface HeaderProps {
  title: ReactText;
  onBack: () => void;
  prevDisabled: boolean;
  onPrev: () => void;
  nextDisabled: boolean;
  onNext: () => void;
}

// type LinkNames = "Github" | "Website";
// type Links = Record<string, string>;

export interface SlideProps {
  id: ReactText;
  title: ReactText;
  description?: ReactText;
  links?: Record<string, string>;
  stack?: Record<string, string>;
  screenshots?: ReactImageGalleryItem[];
}
