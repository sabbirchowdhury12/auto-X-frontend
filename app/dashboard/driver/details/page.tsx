'use client';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { StarIcon } from 'lucide-react';

const DriverDetails = ({ driver }: any) => {
  return (
    <div className="text-center flex flex-col gap-2 items-center justify-center">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
      </Avatar>
      <p>Name</p>
      <p>+56489494</p>

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
            <TableCell className="font-medium">Driver Id</TableCell>
            <TableCell className="text-right">{driver?.driverId}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Licesnce NO</TableCell>
            <TableCell className="text-right">{driver?.licenseNo}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">License Expire</TableCell>
            <TableCell className="text-right">
              {driver?.licenseExpire}
            </TableCell>
          </TableRow>
          <TableCell></TableCell>
        </TableBody>
      </Table>
    </div>
  );
};

export default DriverDetails;
