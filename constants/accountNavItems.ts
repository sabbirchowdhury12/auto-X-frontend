import { TSideNavItemsProps } from '@/types/common';
import { CalendarClock, History, Settings, User } from 'lucide-react';
import { USER_ROLE } from './role';

const accountNavItems = ({ role }: { role: string }) => {
  const defaultItems: TSideNavItemsProps = [
    // {
    //   title: 'Overview',
    //   label: '',
    //   link: '/account',
    //   key: 'overview',
    //   icon: LineChart,
    //   variant: 'ghost',
    // },
    {
      title: 'Profile',
      label: '',
      link: `/account`,
      key: 'profile',
      icon: User,
      variant: 'ghost',
    },
    // {
    //   title: 'Payments',
    //   label: '',
    //   link: `/account/payments`,
    //   key: 'payments',
    //   icon: CreditCard,
    //   variant: 'ghost',
    // },
  ];

  const customerSidebarItems: TSideNavItemsProps = [
    ...defaultItems,
    // {
    //   title: 'Coupons',
    //   label: '',
    //   link: `/account/coupons`,
    //   key: 'coupons',
    //   icon: Tag,
    //   variant: 'ghost',
    // },
    {
      title: 'Bookings',
      label: '',
      link: `/account/bookings`,
      key: 'bookings',
      icon: CalendarClock,
      variant: 'ghost',
    },
    {
      title: 'Trip History',
      label: '',
      link: `/account/history`,
      key: 'history',
      icon: History,
      variant: 'ghost',
    },
    // {
    //   title: 'Reviews',
    //   label: '',
    //   link: `/account/reviews`,
    //   key: 'reviews',
    //   icon: MessageSquare,
    //   variant: 'ghost',
    // },
    {
      title: 'Settings',
      label: '',
      link: `/account/settings`,
      key: 'settings',
      icon: Settings,
      variant: 'ghost',
    },
    // {
    //   title: 'Help & feedback',
    //   label: '',
    //   link: `/account/feedback`,
    //   key: 'feedback',
    //   icon: HelpCircle,
    //   variant: 'ghost',
    // },
  ];

  const driverSidebarItems: TSideNavItemsProps = [
    ...defaultItems,
    // {
    //   title: 'Trip Request',
    //   label: '',
    //   link: `/account/trip`,
    //   key: 'trip',
    //   icon: Car,
    //   variant: 'ghost',
    // },
    {
      title: 'Trip History',
      label: '',
      link: `/account/history`,
      key: 'history',
      icon: History,
      variant: 'ghost',
    },
    // {
    //   title: 'Support',
    //   label: '',
    //   link: `/account/support`,
    //   key: 'support',
    //   icon: PhoneForwarded,
    //   variant: 'ghost',
    // },
    {
      title: 'Settings',
      label: '',
      link: `/account/settings`,
      key: 'settings',
      icon: Settings,
      variant: 'ghost',
    },
  ];

  const stuffSidebarItems: TSideNavItemsProps = [
    ...defaultItems,

    {
      title: 'Settings',
      label: '',
      link: `/account/settings`,
      key: 'settings',
      icon: Settings,
      variant: 'ghost',
    },
  ];

  if (role === USER_ROLE.CUSTOMER) return customerSidebarItems;
  else if (role === USER_ROLE.DRIVER) return driverSidebarItems;
  else if (role === USER_ROLE.ADMIN) return stuffSidebarItems;
  else {
    return defaultItems;
  }
};

export default accountNavItems;
