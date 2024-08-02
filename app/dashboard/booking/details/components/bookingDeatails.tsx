'use client';
import CustomImage from '@/components/customImage';
import DashboardHeading from '@/components/dashboardHeading';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import { USER_ROLE } from '@/constants/role';
import { useGetSingleBookingQuery } from '@/redux/api/bookingApi';
import { getClientUserInfo } from '@/services/auth.service';
import { useParams } from 'next/navigation';

import DriverDetails from '@/app/dashboard/driver/details/page';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog';

const BookingDeatails = () => {
  const { bookingId } = useParams();

  const { data } = useGetSingleBookingQuery(bookingId);
  const driver = data?.vehicle?.driver;
  const user = getClientUserInfo();

  return (
    <Dialog>
      <div className="flex justify-between">
        <DashboardHeading
          title={`Reservation no ${data?.bookingId}`}
          description={'Reservation deatails'}
        />
        {user?.role !== USER_ROLE.CUSTOMER ? (
          <div>
            <Button size={'sm'}>Accept</Button>
            <Button
              size={'sm'}
              variant={'defaultOutline'}
              className="ml-4 text-black"
            >
              Decline
            </Button>
          </div>
        ) : (
          <Button size={'sm'}>Payment</Button>
        )}
      </div>
      <Separator />

      <div className="reservation grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between  gap-6 text-sm ">
        <div className="shadow border p-5 ">
          <p className="text-center font-semibold pb-4">General Inforamtion</p>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Reservation no</TableCell>
                <TableCell className="text-right">{data?.bookingId}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Booking status</TableCell>
                <TableCell className="text-right">
                  {data?.bookingStatus}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Payment Status</TableCell>
                <TableCell className="text-right">
                  {data?.paymentStatus}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Pick up date</TableCell>
                <TableCell className="text-right">
                  {/* {formatDate(new Date(data?.pickUpDateTime), 'MMMM do, yyyy')} */}{' '}
                  23 janury
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Return date time</TableCell>
                <TableCell className="text-right">
                  {/* {formatDate(new Date(data?.pickUpDateTime), 'MMMM do, yyyy')} */}{' '}
                  23 janury
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Price</TableCell>
                <TableCell className="text-right">$2000</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className="shadow border p-5">
          <p className="text-center font-semibold pb-4">Customer Inforamtion</p>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Name</TableCell>
                <TableCell className="text-right">
                  {data?.user?.profile?.name}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Email</TableCell>
                <TableCell className="text-right">
                  {data?.user?.email}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Address</TableCell>
                <TableCell className="text-right">
                  {data?.user?.profile?.address}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Contact</TableCell>
                <TableCell className="text-right">
                  {data?.user?.profile?.contactNo}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="font-medium">Gender</TableCell>
                <TableCell className="text-right">
                  {data?.user?.profile?.gender}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className="shadow border p-5">
          <p className="text-center font-semibold pb-4">Diver Inforamtion</p>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Driver Id</TableCell>
                <TableCell className="text-right">{driver?.driverId}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Licesnce NO</TableCell>
                <TableCell className="text-right">
                  {driver?.licenseNo}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">License Expire</TableCell>
                <TableCell className="text-right">
                  {driver?.licenseExpire}
                </TableCell>
              </TableRow>
              <TableCell>
                <Button
                  variant={'defaultOutline'}
                  className="text-black text-right mt-6"
                  size={'sm'}
                >
                  <DialogTrigger>Deatails For Driver</DialogTrigger>
                </Button>
                <DialogContent>
                  <DialogHeader>
                    <DialogDescription>
                      <DriverDetails driver={driver} />
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </TableCell>
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="grid grid-col-1 md:grid-cols-3 mt-6  gap-4">
        <div className="car col-span-2 flex gap-2 flex-col md:flex-row justify-between items-center bg-white border p-4">
          <div className="">
            <p className="text-center font-semibold pb-4">Car Inforamtion</p>

            <CustomImage
              src={data?.vehicle?.images[1]}
              alt=""
              className="h-full w-full"
            />
          </div>
          <div className="car-details">
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Brand</TableCell>
                  <TableCell className="text-right">
                    {data?.vehicle?.brand}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Model</TableCell>
                  <TableCell className="text-right">
                    {data?.vehicle?.model}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Color</TableCell>
                  <TableCell className="text-right">
                    {data?.vehicle?.color}
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    registrationNumber
                  </TableCell>
                  <TableCell className="text-right">
                    {data?.vehicle?.registrationNumber}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
        <div className="documents">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Download voucher</TableCell>
                <TableCell className="text-right">
                  {data?.vehicle?.brand}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Model</TableCell>
                <TableCell className="text-right">
                  {data?.vehicle?.model}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Color</TableCell>
                <TableCell className="text-right">
                  {data?.vehicle?.color}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">
                  registrationNumber
                </TableCell>
                <TableCell className="text-right">
                  {data?.vehicle?.registrationNumber}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </Dialog>
  );
};

export default BookingDeatails;
