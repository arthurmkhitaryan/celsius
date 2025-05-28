'use client';

import React, { useEffect, useState } from 'react';
import '../../../components/styles/main.scss';
import './page.scss';
import Newsroom from '@/components/Newsroom';
import Achievements from '@/components/Achievements';
import Filter from '@/components/Products/Filter';
import ProductList from '@/components/ProductList';
import ProductItem from '@/app/[locale]/products/ProductItem';
import { useLazyGetProductsQuery } from '@/features';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useClientMediaQuery } from '@/store/useClientMediaQuery';
import FilterOptionsIcon from '@/public/images/product/filter-options.svg';
import { toggleFilterMenu } from '@/features/header/header.slice';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import Pagination from '@/components/Pagination';

const PAGE_SIZE = 14;

export default function Products() {
  const { locale } = useParams();
  const isTablet = useClientMediaQuery('(max-width: 768px)');
  const dispatch = useAppDispatch();
  const user = useAppSelector((state: any) => state.auth.user);
  const filters = useAppSelector((state: any) => state.filters.filters);
  const [triggerGetProducts, { data: productsData }] = useLazyGetProductsQuery();
  const [filterSubCategory, setFilterSubCategory] = useState<string[]>([]);
  const [filterProductTypes, setFilterProductTypes] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (filters) {
      handleChangeCategories(filters);
    }
  }, [filters])

  const handleChangeCategories = (filters: string[]) => {
    const productTypes = filters
      .filter((item) => item.split(':')[0] === 'productType')
      .map((item) => item.split(':')[1]);

    const subCategories = filters
      .filter((item) => item.split(':')[0] === 'sub_category')
      .map((item) => item.split(':')[1]);

    setFilterSubCategory(subCategories)
    setFilterProductTypes(productTypes)
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const renderProducts = () => {
    if (!productsData?.data?.length) return null;
    return productsData.data.map((product, index) => (
      <ProductItem key={index} product={product} />
    ));
  };

  useEffect(() => {
    triggerGetProducts({
      limit: PAGE_SIZE,
      page: currentPage,
      subCategories: filterSubCategory,
      productTypes: filterProductTypes,
      role: user?.role,
      locale: locale as string,
    });
  }, [triggerGetProducts, user?.role, filters, currentPage, filterSubCategory, filterProductTypes]);

  const openFilterMobile = () => {
    dispatch(toggleFilterMenu());
  };

  return (
    <div className="product_page">
      <div className="inner_container">
        <ProductList />
        {isTablet && (
          <button className="filter-button" onClick={openFilterMobile}>
            <Image
              src={FilterOptionsIcon.src}
              alt="filter options"
              width={20}
              height={20}
            />
            <span>FILTER</span>
          </button>
        )}
        <div className="product_sell_container">
          <div className="filters_block">
            <Filter onFilterChange={handleChangeCategories} />
          </div>
          <div className="product_block">{renderProducts()}</div>
        </div>
        <div className="pagination-wrapper">
          <Pagination
            currentPage={currentPage}
            onPageChange={handlePageChange}
            totalPages={Math.ceil((productsData?.totalCount || 0) / PAGE_SIZE)}
          />
        </div>
        <Achievements />
        <Newsroom />
      </div>
    </div>
  );
}
