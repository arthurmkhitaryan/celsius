'use client';

import React, { useEffect } from 'react';
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

export default function Products() {
  const { locale } = useParams();
  const isTablet = useClientMediaQuery('(max-width: 768px)');
  const dispatch = useAppDispatch();

  const user = useAppSelector((state: any) => state.auth.user) as any;
  const filters = useAppSelector((state: any) => state.filters.filters);
  const [triggerGetProducts, { data: products }] = useLazyGetProductsQuery();

  const handleChangeCategories = (filters: string[]) => {
    const productTypes = filters
      .filter((item) => {
        return item.split(':')[0] === 'productType';
      })
      .map((item) => item.split(':')[1]);

    const subCategories = filters
      .filter((item) => {
        return item.split(':')[0] === 'sub_category';
      })
      .map((item) => item.split(':')[1]);

    triggerGetProducts({
      limit: 14,
      productTypes,
      subCategories,
      role: user?.role,
      locale: locale as string,
    });
  };

  const renderProducts = () => {
    if (!products?.length) return null;
    return products.map((product, index) => (
      <ProductItem key={index} product={product} />
    ));
  };

  useEffect(() => {
    triggerGetProducts({
      limit: 14,
      role: user?.role,
      productTypes: filters.length ? filters : undefined,
      locale: locale as string,
    });
  }, [triggerGetProducts, user?.role, filters]);

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
              width={18}
              height={18}
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
        {isTablet && (
          <button className="filter-button" onClick={openFilterMobile}>
            <Image
              src={FilterOptionsIcon.src}
              alt="filter options"
              width={18}
              height={18}
            />
            <span>FILTER</span>
          </button>
        )}
        <Achievements />
        <Newsroom />
      </div>
    </div>
  );
}
