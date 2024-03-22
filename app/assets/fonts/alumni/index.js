import localFont from 'next/font/local';

export const alumni = localFont({
  src: [
    {
      path: './AlumniSans-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
});
