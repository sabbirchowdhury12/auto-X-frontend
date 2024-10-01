/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import SecondaryNavBar from '@/components/secondaryNavBar';
import SideBar from '@/components/sideBar';
import { authKey } from '@/constants/authKey';
import dashboardNavItems from '@/constants/dashboardNavItems';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

type User = {
  role: string;
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const userString = localStorage.getItem(authKey);
    if (!userString) {
      router.push('/login');
    } else {
      try {
        const userData = JSON.parse(userString);

        setUser(userData as User);
      } catch (error) {
        router.push('/login');
      }
    }
  }, []);

  if (!user) {
    return null;
  }

  const role = user.role;

  return (
    <div className="">
      <SecondaryNavBar />
      <SideBar sideNavItems={dashboardNavItems({ role })}>{children}</SideBar>
    </div>
  );
}
