'use client';
import { DataTableColumnHeader } from '@/components/ui/columHeader';
import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';

export type Booking = {
  id?: string;
  bookingId: string;
  pickUpDateTime: string;
  pickUpTime: string;
  returnDateTime: string;
  dropOffLocation: string;
  bookingStatus: string;
  paymentStatus: string;
  createdAt?: string;
};
export const columns: ColumnDef<Booking>[] = [
  {
    accessorKey: 'bookingId',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Id" />
    ),
  },

  {
    accessorKey: 'pickUpLocation',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Pick location" />
    ),
  },
  {
    accessorKey: 'dropOffLocation',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Drop location" />
    ),
  },
  {
    accessorKey: 'pickUpDateTime',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Pick date" />
    ),
  },
  // {
  //   accessorKey: 'pickUpTime',
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Pick time" />
  //   ),
  // },
  // {
  //   accessorKey: 'returnDateTime',
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Drop date" />
  //   ),
  // },

  // {
  //   accessorKey: 'bookingStatus',
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Status" />
  //   ),
  // },

  {
    accessorKey: 'Actions',
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
