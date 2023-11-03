import React from 'react';
import {Pagin,PaginationButton,Active} from "./styledComponents"

const Pagination = (props) => {
  const { totalPosts, postPerPage,setCurrentPage, currentPage } = props;
  console.log(totalPosts)
  console.log(postPerPage)
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i);
  }

  return (
    <Pagin>
      {pages.map((page, index) => {
        let CurrentButton = (page === currentPage) ? Active : PaginationButton;
        console.log(CurrentButton)
        return <CurrentButton key={index} onClick = {() => setCurrentPage(page)}>{page}</CurrentButton>;
      })}
    </Pagin>
  );
};

export default Pagination;
