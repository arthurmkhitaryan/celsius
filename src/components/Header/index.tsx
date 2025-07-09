'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// styles & images
import * as S from './Header.styled';
import Logo from '@/public/images/logo.svg';
import BasketLogo from '@/public/images/basket.svg';
import HamburgerIcon from '@/public/images/hamburger-icon.svg';
import CrossIcon from '@/public/images/cross-icon.svg';
import arrowRight from '@/public/images/arrow-right.svg';

// components
import Button from '@/components/shared/Button';
import Language from '@/components/Language';
import LoginForm from '../forms/LoginForm';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { useClientMediaQuery } from '@/store/useClientMediaQuery';
import MobileNavbar from '@/components/MobileNavbar';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { closeFilterMenu } from '@/features/header/header.slice';
import Filter from '../Products/Filter';
import { setFilters } from '@/features/filters/filters.slice';
import NavbarButton from '../shared/NavbarButton';
import ProfileModal from '../ProfileModal';
import Drawer from './Drawer';
import { CardItem } from '../CardItem';
import { useTranslations } from 'next-intl';

function Header() {
  const t = useTranslations('Header');
  const tCart = useTranslations('Cart');
  const isFilterMenuVisible = useAppSelector(
    (state: any) => state.header.isFilterMenuVisible,
  );
  const user = useAppSelector((state: any) => state.auth.user) as any;

  // Get cart items count from Redux store
  const cartItemsCount = useAppSelector(
    (state: any) => state.cart.productCount,
  );

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Retrieve cart items from Redux
  const cartItems = useAppSelector((state) => state.cart.items);

  const toggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const [formVisible, setFormVisible] = useState(false);
  const [profileModalVisible, setProfileModalVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { locale } = useParams();

  const handleChangeCategories = (filters: string[]) => {
    dispatch(setFilters(filters));
  };

  const isTablet = useClientMediaQuery('(max-width: 768px)');

  const handleOpenLoginForm = () => {
    setFormVisible(!formVisible);
  };

  const handleOpenProfileModal = () => {
    setProfileModalVisible(!profileModalVisible);
  };

  const handleBecomeAPartner = () => {
    router.push('/sign-up-partner');
  };

  const handleRedirectProfilePage = () => {
    router.push(`/profile`);
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
    if (menuVisible) {
      dispatch(closeFilterMenu());
    }
  };

  const handleOrderNow = () => {
    setIsDrawerOpen(false);
    router.push('/checkout');
    setIsDrawerOpen(false);
  };

  useEffect(() => {
    setMenuVisible(isFilterMenuVisible);
  }, [isFilterMenuVisible]);

  return (
    <S.HeaderWrapper>
      <S.MainWrapper isFilterMenuVisible={isFilterMenuVisible}>
        <S.HeaderLeftSide>
          <Link href={`/${locale}`}>
            <Image
              src={Logo}
              alt="Celsius Logo"
              width={136}
              height={50}
              priority
            />
          </Link>
          {!isTablet && <S.Phones>
            <a href="tel:+37444842222">+374 (44) 842 222</a>
          </S.Phones>}
        </S.HeaderLeftSide>

        {isTablet ? (
          <S.HamburgerWrapper>
            <Language locale={locale as string} />
            <S.CartButton onClick={toggleDrawer}>
              <Image
                src={BasketLogo}
                alt="Basket Logo"
                priority
                className="basket"
              />
              {cartItemsCount > 0 && <span>{cartItemsCount}</span>}
            </S.CartButton>
            {!menuVisible ? (
              <Image
                src={HamburgerIcon}
                alt="Hamburger Icon"
                width={30}
                height={30}
                onClick={toggleMenu}
              />
            ) : (
              <Image
                src={CrossIcon}
                alt="Cross Icon"
                width={30}
                height={30}
                onClick={toggleMenu}
              />
            )}
            <S.Phones>
            <a href="tel:+37444842222">+374 (44) 842 222</a>
          </S.Phones>
          </S.HamburgerWrapper>
        ) : (
          <S.HeaderRightSide>
            <Language locale={locale as string} />
            <NavbarButton
              btnStyle="bordered"
              px={32}
              py={16}
              width={208}
              onClick={handleBecomeAPartner}
            >
              {t('partner')}
              <Image src={arrowRight} width={12} alt="arrow right" />
            </NavbarButton>
            <S.SignInWrapper>
              {user ? (
                <NavbarButton
                  className="sign-in"
                  btnStyle="filled"
                  onClick={handleOpenProfileModal}
                  px={32}
                  py={16}
                >
                  {`${user?.firstName} ${user?.lastName}`}
                </NavbarButton>
              ) : (
                <NavbarButton
                  className="sign-in"
                  btnStyle="filled"
                  onClick={handleOpenLoginForm}
                  px={32}
                  py={16}
                  width={110}
                >
                  {t('sign')}
                </NavbarButton>
              )}
              {user && (
                <ProfileModal
                  userName={`${user?.firstName} ${user?.lastName}`}
                  visible={profileModalVisible}
                  onChangeVisibility={setProfileModalVisible}
                />
              )}
              <LoginForm
                visible={formVisible}
                onChangeVisibility={setFormVisible}
              />
            </S.SignInWrapper>
            <S.CartButton onClick={toggleDrawer}>
              <Image
                src={BasketLogo}
                alt="Basket Logo"
                priority
                className="basket"
              />
              {cartItemsCount > 0 && <span>{cartItemsCount}</span>}
            </S.CartButton>
          </S.HeaderRightSide>
        )}

        {/* Drawer */}
        <Drawer isOpen={isDrawerOpen} onClose={closeDrawer}>
          {cartItems.length > 0 ? (
            <S.DrawerContent>
              {cartItems.map((item) => (
                <CardItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  quantity={item.quantity}
                />
              ))}
              <S.TotalPrice style={{ fontWeight: 'bold', marginTop: '20px' }}>
                <p>{tCart('total')}:</p>
                <S.Price>
                  {cartItems
                    .reduce((sum, item) => sum + item.price * item.quantity, 0)
                    .toLocaleString()}
                  <span>֏</span>
                </S.Price>
                <S.OrderButton onClick={handleOrderNow}>
                  {tCart('order_now')}
                </S.OrderButton>
              </S.TotalPrice>
            </S.DrawerContent>
          ) : (
            <p style={{ paddingLeft: '15px' }}>Your cart is empty.</p>
          )}
        </Drawer>

        {isTablet && menuVisible && (
          <S.MobileMenu>
            {isFilterMenuVisible ? (
              <Filter onFilterChange={handleChangeCategories} />
            ) : (
              <MobileNavbar changeToggleMenu={toggleMenu} />
            )}
          </S.MobileMenu>
        )}
      </S.MainWrapper>
      {isTablet && (
        <S.TabletButtonWrapper>
          <S.FullWidthButton>
            <Button
              btnStyle="bordered"
              px={32}
              py={16}
              onClick={handleBecomeAPartner}
            >
              {t('partner')}
              <Image src={arrowRight} width={16} alt="arrow right" />
            </Button>
          </S.FullWidthButton>
          <S.FullWidthButton>
            <S.SignInWrapper>
              {user ? (
                <Button
                  className="sign-in"
                  btnStyle="filled"
                  onClick={handleRedirectProfilePage}
                  px={32}
                  py={16}
                >
                  {`${user?.firstName} ${user?.lastName}`}
                </Button>
              ) : (
                <Button
                  className="sign-in"
                  btnStyle="filled"
                  onClick={handleOpenLoginForm}
                  px={32}
                  py={16}
                >
                  {t('sign')}
                </Button>
              )}

              <LoginForm
                visible={formVisible}
                onChangeVisibility={setFormVisible}
              />
            </S.SignInWrapper>
          </S.FullWidthButton>
        </S.TabletButtonWrapper>
      )}
    </S.HeaderWrapper>
  );
}

export default Header;
