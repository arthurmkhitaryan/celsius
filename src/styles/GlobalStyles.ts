'use client';

import { createGlobalStyle, css } from 'styled-components';
import { fontFamily } from '@/styles/typography';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const styles = css`
  * {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
  }

  body {
    background-color: white;
    ${fontFamily};
  }

  button {
    cursor: pointer;

    :disabled {
      cursor: default;
    }
  }

  .custom {
    margin: 0 !important;
  }
`;

const GlobalStyles = createGlobalStyle`
  ${styles}
`;

export default GlobalStyles;
