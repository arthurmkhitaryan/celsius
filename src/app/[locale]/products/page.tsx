"use client";

import React from 'react';
import Cond from '@/public/images/product/cond.png';
import '../../../components/styles/main.scss';
import './page.scss';
import Newsroom from '@/components/Newsroom';
import Achievements from '@/components/Achievements';
import Filter from '@/components/Products/Filter';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import ProductList from '@/components/ProductList';
import ProductItem from '@/app/[locale]/products/ProductItem';
import { useGetProductsQuery } from '@/features';

const productMockList = [
  {
    image: Cond,
    name: '2-in-1 Humidifier & Diffuser',
    param: 'SLPO-324',
    size: '5L',
    about: ['smart', 'white', '360 deg'],
    price: '256,000 ֏',
    id: '1',
  },
  {
    image: Cond,
    name: '2-in-1 Humidifier & Diffuser',
    param: 'SLPO-324',
    size: '5L',
    about: ['smart', 'white', '360 deg'],
    price: '256,000 ֏',
    id: '2',
  },
  {
    image: Cond,
    name: '2-in-1 Humidifier & Diffuser',
    param: 'SLPO-324',
    size: '5L',
    about: ['smart', 'white', '360 deg'],
    price: '256,000 ֏',
    id: '3',
  },
  {
    image: Cond,
    name: '2-in-1 Humidifier & Diffuser',
    param: 'SLPO-324',
    size: '5L',
    about: ['smart', 'white', '360 deg'],
    price: '256,000 ֏',
    id: '4',
  },
];

export default function Products() {
  const { locale } = useParams();
  const router = useRouter();
  const { data: products } = useGetProductsQuery({ limit: 4 });

  const handleRedirect = (id: string) => {
    const path = `/${locale}/products/${id}`;
    router.push(path);
  };

  const handleChangeCategories = (filters: { [key: string]: string[] }) => {
    console.log(filters)
  }

  const renderProducts = () => {
    if (!products?.length) return null;
    return products.map((product, index) => {
      return (
        <ProductItem product={product} />
      );
    });
  };

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
