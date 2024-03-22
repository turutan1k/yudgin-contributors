'use client';

import './aos.css';

import AOS from 'aos';
import { useEffect } from 'react';

export const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 50,
      duration: 800,
    });
  }, []);
};

export default AOSInit;
