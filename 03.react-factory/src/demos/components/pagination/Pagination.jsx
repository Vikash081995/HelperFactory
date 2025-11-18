import React from "react";

const Pagination = ({ totalPosts, postPerPage, onClick }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i);
  }

  return (
    <div>
      <ul>
        {pages.map((page) => {
          return (
            <li key={page}>
              <button onClick={() => onClick(page)}>{page}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Pagination;
