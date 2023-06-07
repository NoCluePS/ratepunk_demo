import { Caveat_Brush, Noto_Sans } from 'next/font/google';

export const headerFont = Caveat_Brush({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
});
export const pFont = Noto_Sans({
  subsets: ['latin'],
  weight: ['200', '400', '700'],
  style: 'normal',
});