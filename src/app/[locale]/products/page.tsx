"use client";

import React, { useState, useEffect } from 'react';
import '../../../components/styles/main.scss';
import './page.scss';
import Newsroom from '@/components/Newsroom';
import Achievements from '@/components/Achievements';
import Filter from '@/components/Products/Filter';
import ProductList from '@/components/ProductList';
import ProductItem from '@/app/[locale]/products/ProductItem';
import { useLazyGetProductsQuery } from '@/features';

export default function Products() {
  const [triggerGetProducts, { data: products }] = useLazyGetProductsQuery();

  const handleChangeCategories = (filters: string[]) => {
    const productTypes = filters.length ? filters : undefined;

    triggerGetProducts({ limit: 14, productTypes });
  };

  const renderProducts = () => {
    if (!products?.length) return null;
    return products.map((product, index) => (
      <ProductItem key={index} product={product} />
    ));
  };

  useEffect(() => {
    triggerGetProducts({ limit: 14 });
  }, [triggerGetProducts]);

  return (
    <div className="product_page">
        <div className="inner_container">
            <ProductList />
            <div className="product_sell_container">
                <div className="filters_block">
                    <Filter onFilterChange={handleChangeCategories} />
                </div>
                <div className="product_block">{renderProducts()}</div>
            </div>
            <Achievements />
            <Newsroom />
      </div>
    </div>
  );
};
