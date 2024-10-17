'use client';

import { useEffect, useState } from 'react';
import { useAppDispatch } from '@/store/hooks';
import { setUser } from '@/features';
import { useClientMediaQuery } from './useClientMediaQuery';

export default function ClientWrapper({
  user,
  children,
}: {
  user: any;
  children: React.ReactNode;
}) {
  const dispatch = useAppDispatch();
  const isTablet = useClientMediaQuery('(max-width: 768px)');
  const [paddingTop, setPaddingTop] = useState(0); 

  useEffect(() => {
    if (user) {
      dispatch(setUser(user));
    }
  }, [user, dispatch]);

  useEffect(() => {
    setPaddingTop(isTablet ? 50 : 0);
  }, [isTablet]);

  return (
    <div style={{ paddingTop: `${paddingTop}px` }}>
      {children}
    </div>
  );
}
