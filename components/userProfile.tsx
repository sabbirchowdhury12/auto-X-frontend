'use client';

import { authKey } from '@/constants/authKey';
import { useGetProfileQuery } from '@/redux/api/profileApi';
import { getClientUserInfo, removeUserInfo } from '@/services/auth.service';
import {
  CircleUserRoundIcon,
  LayoutDashboard,
  LogOut,
  Settings,
  User,
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import CustomImage from './customImage';
import { Avatar } from './ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export default function UserProfile() {
  const router = useRouter();

  const user = getClientUserInfo();

  const { data } = useGetProfileQuery(user.id);

  const handleLogout = () => {
    removeUserInfo(authKey);
    localStorage.removeItem(authKey);
    router.refresh();
    router.push('/');
    toast.success('Logout successfully');
  };

  return (
    <DropdownMenu>
      {data?.user?.email ? (
        <DropdownMenuTrigger asChild>
          {data?.image ? (
            <Avatar>
              <CustomImage src={data?.image} alt="user image" priority={true} />
            </Avatar>
          ) : (
            <User className="w-full h-full text-white" />
          )}
        </DropdownMenuTrigger>
      ) : (
        <Link href={'/login'} className="flex items-center gap-2">
          <CircleUserRoundIcon color="#fffafa" strokeWidth={1.75} />
          <span className="text-white font-bold">LOGIN</span>
        </Link>
      )}

      <DropdownMenuContent className=" w-48 mt-2 mr-2">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href={`/account`}>
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Manage Account</span>
            </DropdownMenuItem>
          </Link>
          <Link href={`/dashboard`}>
            <DropdownMenuItem>
              <LayoutDashboard className="mr-2 h-4 w-4" />
              <span>Dashboard</span>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => handleLogout()}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Sign out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
