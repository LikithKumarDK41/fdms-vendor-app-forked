import React from "react";
import { useTranslation } from "next-i18next";

const SubClause = ({ subClause, subClauseIndex }) => {
  const { t } = useTranslation("translation");

  return (
    <li className="text-[12px] 2xl:text-[1.1vw] font-normal">
      {`${String.fromCharCode(97 + subClauseIndex)}. ${subClause.sub_clause}`}
    </li>
  );
};

const Clause = ({ clause, clauseIndex, totalClauses, header }) => {
  const { t } = useTranslation("translation");
  return (
    <>
      <li>
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
    <div className="">
      <span className="font-bold text-[16px] 2xl:text-[1.3vw]">
        {article.title}
      </span>
      <ol className="mb-[20px] mt-[20px] font-normal">
        {article.header && <li>{article.header}</li>}
        {article.clauses.map((clause, clauseIndex) => (
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

const PrivacyPolicy = ({ data }) => {
  return (
    <div className="text-[#474747] text-[12px] 2xl:text-[1.1vw]">
      {data.header}
      {data?.articles?.map((article, articleIndex) => (
        <Article key={articleIndex} article={article} />
      ))}
    </div>
  );
};

export default PrivacyPolicy;
