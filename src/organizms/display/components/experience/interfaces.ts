import { ReactText } from "react";

export interface JobProps {
  company: ReactText;
  companyLink?: string;
  job: ReactText;
  period: {
    from: ReactText;
    to: ReactText;
  };
  description: string;
  pic?: string;
}
