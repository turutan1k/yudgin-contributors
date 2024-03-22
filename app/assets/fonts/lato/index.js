import localFont from 'next/font/local';

export const lato = localFont({
  src: [
    {
      path: './Lato-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Lato-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    // {
    //   path: './Lato-Thin.woff2',
    //   weight: '100',
    //   style: 'normal',
    // },
    // {
    //   path: './Lato-Bold.woff2',
    //   weight: '700',
    //   style: 'normal',
    // },
    {
      path: './Lato-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    // {
    //   path: './Lato-ExtraBold.woff2',
    //   weight: '700',
    //   style: 'normal',
    // },
    // {
    //   path: './Lato-Light.woff2',
    //   weight: '300',
    //   style: 'normal',
    // },
    // {
    //   path: './Lato-ExtraLight.woff2',
    //   weight: '200',
    //   style: 'normal',
    // },
    // {
    //   path: './Lato-Black.woff2',
    //   weight: '900',
    //   style: 'normal',
    // },
  ],
  display: 'swap',
});
