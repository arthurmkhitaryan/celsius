import React, { useState } from 'react';
import * as S from './order-history.styled';
import OrderHistoryImage from '@/public/images/order-history.png';
import Image from 'next/image';
// @ts-ignore
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useTranslations } from 'next-intl';

const OrderHistory = () => {
  const t = useTranslations('Account');
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [toDate, setToDate] = useState<Date | null>(null);

  const handleSearch = () => {
    console.log('Searching from:', fromDate, 'to:', toDate);
  };

  const handleClear = () => {
    setFromDate(null);
    setToDate(null);
  };

  const orders: any[] = [
    // {
    //   id: 1,
    //   pic: OrderHistoryImage,
    //   date: '08.06.2024',
    //   quantity: 3,
    //   total: '$860',
    // },
    // {
    //   id: 2,
    //   pic: OrderHistoryImage,
    //   date: '08.06.2024',
    //   quantity: 1,
    //   total: '$2400',
    // },
    // {
    //   id: 3,
    //   pic: OrderHistoryImage,
    //   date: '24.05.2024',
    //   quantity: 3,
    //   total: '$860',
    // },
  ];

  return (
    <S.OrderHistory>
      <S.OrderTitle>{t('orders.title')}</S.OrderTitle>
      <S.FilterWrapper>
        <div>
          <S.FilterGroup>
            <S.FilterLabel>{t('orders.from')}</S.FilterLabel>
            <S.DateSelectWrapper>
              <DatePicker
                selected={fromDate}
                onChange={(date: any) => setFromDate(date)}
                placeholderText="Select Date"
                dateFormat="dd.MM.yyyy"
                className="custom-date-picker"
              />
            </S.DateSelectWrapper>
          </S.FilterGroup>

          <S.FilterGroup>
            <S.FilterLabel>{t('orders.to')}</S.FilterLabel>
            <S.DateSelectWrapper>
              <DatePicker
                selected={toDate}
                onChange={(date: any) => setToDate(date)}
                placeholderText="Select Date"
                dateFormat="dd.MM.yyyy"
                className="custom-date-picker"
              />
            </S.DateSelectWrapper>
          </S.FilterGroup>
        </div>
        <div>
          <S.ClearButton onClick={handleClear}>
            {t('orders.clear')}
          </S.ClearButton>
          <S.SearchButton onClick={handleSearch}>
            {t('orders.search')}
          </S.SearchButton>
        </div>
      </S.FilterWrapper>
      <S.OrderTable>
        <thead>
          <tr>
            <S.TableHeader>{t('orders.table.pic')}</S.TableHeader>
            <S.TableHeader>{t('orders.table.date')}</S.TableHeader>
            <S.TableHeader>{t('orders.table.qty')}</S.TableHeader>
            <S.TableHeader>{t('orders.table.total')}</S.TableHeader>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <S.TableCell>
                <S.OrderImage>
                  <Image width="100" src={order.pic} alt="product" />
                </S.OrderImage>
              </S.TableCell>
              <S.TableCell>{order.date}</S.TableCell>
              <S.TableCell>{order.quantity}</S.TableCell>
              <S.TableCell>{order.total}</S.TableCell>
            </tr>
          ))}
        </tbody>
      </S.OrderTable>
    </S.OrderHistory>
  );
};

export default OrderHistory;
