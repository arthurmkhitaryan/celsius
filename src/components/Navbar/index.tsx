'use client';

import React from 'react';
import Link from 'next/link';

// styles
import * as S from './Navbar.styled';

function Navbar() {
  return (
    <S.NavbarWrapper>
      <S.Navbar>
        <S.NavList>
          <S.NavListItem>
            <Link href="/products" passHref>
              Products
            </Link>
          </S.NavListItem>
          <S.NavListItem>
            <Link href="/careers" passHref>
              Career
            </Link>
          </S.NavListItem>
          <S.NavListItem>
            <Link href="/newsroom" passHref>
              Newsroom
            </Link>
          </S.NavListItem>
          <S.NavListItem>
            <Link href="/about-us" passHref>
              About Us
            </Link>
          </S.NavListItem>
          <S.NavListItem>
            <Link href="/contact-us" passHref>
              Contact Us
            </Link>
          </S.NavListItem>
        </S.NavList>
      </S.Navbar>
    </S.NavbarWrapper>
  );
}

export default Navbar;
