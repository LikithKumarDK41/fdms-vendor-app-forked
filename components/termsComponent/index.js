import React from "react";

const SubClause = ({ subClause, subClauseIndex }) => (
  <li>{`${String.fromCharCode(97 + subClauseIndex)}. ${
    subClause.sub_clause
  }`}</li>
);

const Clause = ({ clause, clauseIndex, totalClauses, header }) => (
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

const Article = ({ article }) => (
  <div>
    <h2>{article.title}</h2>
    <ol>
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

const TermsAndConditions = ({ data }) => {
  return (
    <div>
      {data.header}
      {data.articles.map((article, articleIndex) => (
        <Article key={articleIndex} article={article} />
      ))}
    </div>
  );
};

export default TermsAndConditions;
