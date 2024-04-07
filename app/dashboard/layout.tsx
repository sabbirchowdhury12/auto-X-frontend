'use client';
import SecondaryNavBar from '@/components/secondaryNavBar';
import SideBar from '@/components/sideBar';
import { authKey } from '@/constants/authKey';
import dashboardNavItems from '@/constants/dashboardNavItems';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [user, setUser] = useState(null); // Initialize user state to null

  useEffect(() => {
    const userString = localStorage.getItem(authKey);
    if (!userString) {
      router.push('/login');
    } else {
      try {
        const userData = JSON.parse(userString);
        setUser(userData); // Set user state with parsed user data
      } catch (error) {
        console.error('Error parsing user data from localStorage:', error);
        router.push('/login');
      }
    }
  }, []);

  const role = user ? user.role : '';

  if (!user) {
    return null;
  }

  return (
    <div className="">
      <SecondaryNavBar />
      <SideBar sideNavItems={dashboardNavItems({ role })}>{children}</SideBar>
    </div>
  );
}
