'use client'
import React from 'react';
import * as S from './Pagination.styled';

interface IProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: IProps) => {
  const handleClick = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <S.PaginationWrapper>
      <S.PageLink onClick={() => handleClick(currentPage - 1)} disabled={currentPage === 1}>
        &laquo; Previous
      </S.PageLink>

      <S.PageLink
        key={1}
        active={currentPage === 1}
        onClick={() => handleClick(1)}
      >
        1
      </S.PageLink>

      {totalPages >= 2 && (
        <S.PageLink
          key={2}
          active={currentPage === 2}
          onClick={() => handleClick(2)}
        >
          2
        </S.PageLink>
      )}
      {totalPages >= 3 && (
        <S.PageLink
          key={3}
          active={currentPage === 3}
          onClick={() => handleClick(3)}
        >
          3
        </S.PageLink>
      )}

      {totalPages > 3 && currentPage < totalPages - 1 && (
        <S.Ellipsis key="ellipsis">...</S.Ellipsis>
      )}

      {totalPages > 3 && (
        <S.PageLink
          key={totalPages}
          active={currentPage === totalPages}
          onClick={() => handleClick(totalPages)}
        >
          {totalPages}
        </S.PageLink>
      )}

      <S.PageLink onClick={() => handleClick(currentPage + 1)} disabled={currentPage === totalPages}>
        Next &raquo;
      </S.PageLink>
    </S.PaginationWrapper>
  );
};

export default Pagination;
