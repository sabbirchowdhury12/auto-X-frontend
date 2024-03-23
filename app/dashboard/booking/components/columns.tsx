'use client';
import { DataTableColumnHeader } from '@/components/ui/columHeader';
import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';

export type Booking = {
  id?: string;
  bookingId: string;
  pickUpDate: string;
  pickUpTime: string;
  dropOffDate: string;
  dropOffTime: string;
  pickUpLocation: string;
  dropOffLocation: string;
  rentType: string;
  bookingStatus: string;
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
    accessorKey: 'rentType',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Rent type" />
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
    accessorKey: 'pickUpDate',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Pick date" />
    ),
  },
  {
    accessorKey: 'pickUpTime',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Pick time" />
    ),
  },
  {
    accessorKey: 'dropOffDate',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Drop date" />
    ),
  },
  {
    accessorKey: 'dropOffTime',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Drop time" />
    ),
  },
  {
    accessorKey: 'bookingStatus',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
  },

  {
    accessorKey: 'Actions',
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
