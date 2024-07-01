import React from "react";

import { useTranslation } from "next-i18next";

const SubClause = ({ subClause, subClauseIndex }) => {
  const { t } = useTranslation("translation");

  return (
    <li className="termsOfService-list">
      {`${String.fromCharCode(97 + subClauseIndex)}. ${subClause.sub_clause}`}
    </li>
  );
};

const Clause = ({ clause, clauseIndex, totalClauses, header }) => {
  const { t } = useTranslation("translation");

  return (
    <>
      <li className="text12 font-normal">
        {totalClauses > 1 && `${clauseIndex + 1}. `}
        {clause.clause}
        {clause.sub_clauses && (
          <ul>
            {clause.sub_clauses.map((subClause, subClauseIndex) => (
              <SubClause
                key={subClauseIndex}
                subClause={subClause}
                subClauseIndex={subClauseIndex}
              />
            ))}
          </ul>
        )}
      </li>
    </>
  );
};

const Article = ({ article }) => {
  const { t } = useTranslation("translation");

  return (
    <div>
      <span className="font-bold text12">{article.title}</span>
      <ol className="">
        {article.header && (
          <li className="font-normal text12">{article.header}</li>
        )}
        {article?.clauses?.map((clause, clauseIndex) => (
          <Clause
            key={clauseIndex}
            clause={clause}
            clauseIndex={clauseIndex}
            totalClauses={article.clauses.length}
          />
        ))}
      </ol>
    </div>
  );
};

const TermsAndConditions = ({ data }) => {
  const { t } = useTranslation("translation");

  return (
    <div className="text-[#474747]">
      <span className="font-normal text12"> {data.header}</span>
      {data?.articles?.map((article, articleIndex) => (
        <div className="mt-[20px]" key={articleIndex}>
          <Article key={articleIndex} article={article} />
        </div>
      ))}
    </div>
  );
};

export default TermsAndConditions;
