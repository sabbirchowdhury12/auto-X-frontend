'use client';

import CustomImage from '@/components/customImage';
import DashboardHeading from '@/components/dashboardHeading';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useGetProfileQuery } from '@/redux/api/profileApi';
import { getClientUserInfo } from '@/services/auth.service';
import { Plus } from 'lucide-react';
import Link from 'next/link';

const ProfileCard = () => {
  const user = getClientUserInfo();
  const { data } = useGetProfileQuery(user.id);
  return (
    <div className="p-4">
      <div className="flex items-center justify-between">
        <DashboardHeading
          title="Your Profile"
          description="Manage your profile"
        />
        <Link href={`/account/edit`}>
          <Button size={'sm'}>
            <Plus className="mr-2 h-4 w-4" /> Edit Profile
          </Button>
        </Link>
      </div>
      <Separator />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 border shadow-sm p-5 md:p-10 rounded-lg ">
        <CustomImage
          src={data?.image}
          alt="profile image"
          className="col-span-1 md:col-span-2 lg:col-span-1 h-48 w-48 rounded-md"
        />

        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <h2 className="text-xl md:text-2xl font-bold">Basic Information</h2>
          <Separator />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 justify-center w-full text-md">
            <div className="space-y-2">
              <p>Name : {data?.name}</p>
              <p>Email : {data?.user?.email}</p>
              <p>Address : {data?.address}</p>
              <p>Contact No : {data?.contactNo}</p>
            </div>
            <div className="space-y-2">
              <p>Gender : {data?.gender ? data?.gender : 'N/A'}</p>
              <p>
                dateOfBirth :{' '}
                {data?.dateOfBirth
                  ? new Date(data?.dateOfBirth).toISOString().split('T')[0]
                  : 'N/A'}
              </p>
              <p>
                emergContact : {data?.emergContact ? data?.emergContact : 'N/A'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
