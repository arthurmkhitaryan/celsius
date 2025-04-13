'use client';
import React from 'react';
import * as S from './Pagination.styled';
import { useTranslation } from 'next-i18next';
import { useTranslations } from 'next-intl';

interface IProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: IProps) => {
  const t = useTranslations('Pagination');
  const handleClick = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pageLinks = [];

    pageLinks.push(
      <S.PageLink key={1} active={currentPage === 1} onClick={() => handleClick(1)}>
        1
      </S.PageLink>
    );

    if (currentPage > 3) {
      pageLinks.push(<S.Ellipsis key="startEllipsis">...</S.Ellipsis>);
    }

    const startPage = Math.max(2, currentPage - 2);
    const endPage = Math.min(totalPages - 1, currentPage + 2);

    for (let i = startPage; i <= endPage; i++) {
      pageLinks.push(
        <S.PageLink key={i} active={currentPage === i} onClick={() => handleClick(i)}>
          {i}
        </S.PageLink>
      );
    }

    if (currentPage < totalPages - 2) {
      pageLinks.push(<S.Ellipsis key="endEllipsis">...</S.Ellipsis>);
    }

    if (totalPages > 1) {
      pageLinks.push(
        <S.PageLink
          key={totalPages}
          active={currentPage === totalPages}
          onClick={() => handleClick(totalPages)}
        >
          {totalPages}
        </S.PageLink>
      );
    }

    return pageLinks;
  };

  return (
    <S.PaginationWrapper>
      <S.PageLink
        onClick={() => handleClick(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &laquo; {t('previous')}
      </S.PageLink>
      {renderPageNumbers()}
      <S.PageLink
        onClick={() => handleClick(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        {t('next')} &raquo;
      </S.PageLink>
    </S.PaginationWrapper>
  );
};

export default Pagination;
