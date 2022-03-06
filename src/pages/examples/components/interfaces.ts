import { ReactText } from "react";
import { ReactImageGalleryItem } from "react-image-gallery";

import { WebIcons } from "@src/assets/webIcons";

export interface HeaderProps {
  title: ReactText;
  onBack: () => void;
  prevDisabled: boolean;
  onPrev: () => void;
  nextDisabled: boolean;
  onNext: () => void;
}

export interface SlideProps {
  id: ReactText;
  title: ReactText;
  description: string;
  links?: Record<string, string>;
  stack?: WebIcons[];
  screenshots?: ReactImageGalleryItem[];
}
