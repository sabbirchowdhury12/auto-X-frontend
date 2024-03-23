'use client';

import { AppStore, store } from '@/redux/store';
import React, { useRef } from 'react';
import { Provider } from 'react-redux';

const Providers = ({ children }: { children: React.ReactNode }) => {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = store();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default Providers;
