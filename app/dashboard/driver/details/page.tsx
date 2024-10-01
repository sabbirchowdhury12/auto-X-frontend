'use client';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { useGetProfileQuery } from '@/redux/api/profileApi';
import { format } from 'date-fns';
import { StarIcon } from 'lucide-react';

const DriverDetails = ({ driver }: any) => {
  const { data } = useGetProfileQuery(driver?.userId);

  const expireDate =
    driver?.licenseExpire && !isNaN(new Date(driver.licenseExpire).getTime())
      ? format(new Date(driver.licenseExpire), 'MMMM do, yyyy')
      : 'N/A';

  const joiningDate =
    data?.createdAt && !isNaN(new Date(data.createdAt).getTime())
      ? format(new Date(data.createdAt), 'MMMM do, yyyy')
      : 'N/A';

  return (
    <div className="text-center flex flex-col gap-2 items-center justify-center">
      <Avatar>
        <AvatarImage src={data?.image} />
      </Avatar>
      <p>{data?.name}</p>
      <p>+{data?.contactNo}</p>

      <div className="flex">
        {' '}
        <StarIcon className="h-6 w-6 fill-primary" />
        <StarIcon className="h-6 w-6 fill-primary" />
        <StarIcon className="h-6 w-6 fill-primary" />
        <StarIcon className="h-6 w-6 fill-primary" />
      </div>

      <Table>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Address</TableCell>
            <TableCell className="text-right">{data?.address}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Email</TableCell>
            <TableCell className="text-right">{data?.user?.email}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Gender</TableCell>
            <TableCell className="text-right">{data?.gender}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">License Expire</TableCell>
            <TableCell className="text-right">{expireDate}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Joining Date</TableCell>
            <TableCell className="text-right">{joiningDate}</TableCell>
          </TableRow>
          <TableCell></TableCell>
        </TableBody>
      </Table>
    </div>
  );
};

export default DriverDetails;
