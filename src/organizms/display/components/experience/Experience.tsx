import React, { FC } from "react";
import { Wrapper } from "../Wrapper";

import { useGetExperience } from "./hooks";

import { Job } from "./components";
import { Scrollbar } from "@src/components/scrollbar";

export const Experience: FC = () => {
  const { data } = useGetExperience();

  return (
    <Wrapper>
      <Scrollbar>
        {data.map((job) => (
          <Job {...job} key={job.company} />
        ))}
      </Scrollbar>
    </Wrapper>
  );
};
