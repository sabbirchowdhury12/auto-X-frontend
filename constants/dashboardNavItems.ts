import { TSideNavItemsProps } from '@/types/common';
import {
  Car,
  History,
  KanbanSquare,
  LineChart,
  MessageSquare,
  User,
} from 'lucide-react';
import { USER_ROLE } from './role';

const dashboardNavItems = ({ role }: { role: string | undefined | null }) => {
  console.log(role);

  const defaultItems: TSideNavItemsProps = [
    {
      title: 'Overview',
      label: '',
      link: `/dashboard`,
      key: 'overview',
      icon: LineChart,
      variant: 'ghost',
    },
  ];
  const customerItems: TSideNavItemsProps = [
    {
      title: 'Manage Booking',
      label: '',
      link: `/dashboard/booking`,
      key: 'booking',
      icon: KanbanSquare,
      variant: 'ghost',
    },
    {
      title: 'Trip History',
      label: '',
      link: `/dashboard/history`,
      key: 'history',
      icon: History,
      variant: 'ghost',
    },
    {
      title: 'Reviews',
      label: '',
      link: `/dashboard/reviews`,
      key: 'reviews',
      icon: MessageSquare,
      variant: 'ghost',
    },
  ];

  const superAdminSidebarItems: TSideNavItemsProps = [
    ...defaultItems,
    {
      title: 'Manage Booking',
      label: '',
      link: `/dashboard/booking`,
      key: 'booking',
      icon: KanbanSquare,
      variant: 'ghost',
    },
    {
      title: 'Manage Driver',
      label: '',
      link: `/dashboard/driver`,
      key: 'driver',
      icon: User,
      variant: 'ghost',
    },
    {
      title: 'Manage Vehicle',
      label: '',
      link: `/dashboard/vehicle`,
      key: 'vehicle',
      icon: Car,
      variant: 'ghost',
    },
  ];

  if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
  else if (role === USER_ROLE.ADMIN) return superAdminSidebarItems;
  else if (role === USER_ROLE.CUSTOMER) return customerItems;
  else {
    return defaultItems;
  }
};

export default dashboardNavItems;
