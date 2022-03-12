import React, { FC } from "react";
import parse from "html-react-parser";

import { JobProps } from "../interfaces";

import s from "../styles/experience.module.scss";
import { Link } from "react-router-dom";

export const Job: FC<JobProps> = (props) => {
  const { company, companyLink, job, period, description, pic, linkToWorks } =
    props;
  const { from, to } = period;

  return (
    <div className={s.jobblock}>
      {companyLink && (
        <a
          href={companyLink}
          className={s.companyTextLink}
          target="_blank"
          rel="noreferrer"
        >
          <h2>{company}</h2>
        </a>
      )}

      {!companyLink && <h2 className={s.company}>{company}</h2>}

      <h3 className={s.job}>{job}</h3>

      <p className={s.period}>{`${from} - ${to || "Nowdays"}`}</p>

      <div className={s.description}>
        <p>{parse(description)}</p>

        {linkToWorks && <Link to={linkToWorks}>See more details</Link>}
      </div>

      {companyLink && pic && (
        <a
          href={companyLink}
          className={s.companylink}
          target="_blank"
          rel="noreferrer"
        >
          <img src={pic} alt={company as string} />
        </a>
      )}
    </div>
  );
};
