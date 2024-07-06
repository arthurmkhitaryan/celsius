import 'styled-components';
import { theme } from '../styles/theme';

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme {
    gradient: string;
    borderRadius: string;
    palette: {
      common: {
        black: string;
        white: string;
        bgSecondary: string;
        mainBlue: string;
        hoverBlue: string;
        hoverBlueLight: string;
        secondaryBlue: string;
        graySecondary: string;
        grayShadow: string;
        textGray: string;
        textGrayLight: string;
        textDefault: string;
        borderLight: string;
        gray6: string;
        gray5: string;
        gray4: string;
      };
    };
  }
}
