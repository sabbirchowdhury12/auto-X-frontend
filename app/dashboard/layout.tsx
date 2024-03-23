'use client';

import { redirect } from 'next/navigation';
import React from 'react';

import SecondaryNavBar from '@/components/secondaryNavBar';
import SideBar from '@/components/sideBar';
import dashboardNavItems from '@/constants/dashboardNavItems';
import { getClientUserInfo } from '@/services/auth.service';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const role = 'super_admin';
  const user = getClientUserInfo();

  if (!user) {
    redirect('/login');
  }

  return (
    <div className="max-w-7xl mx-auto">
      <SecondaryNavBar />

      <SideBar sideNavItems={dashboardNavItems({ role })}>{children}</SideBar>
    </div>
  );
}
