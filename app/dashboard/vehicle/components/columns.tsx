'use client';
import { DataTableColumnHeader } from '@/components/ui/columHeader';
import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';

export type Vehicle = {
  id?: string;
  vehicleId?: string;
  model?: string;
  mileage?: number;
  color?: string;
  images?: string[];
  overview?: string;
  basePrice?: number;
  fuelType?: string;
  passengerCapacity?: number;
  location?: string;
  plateNo?: string;
  chassisNo?: string;
  status?: string;
  owner?: string;
  vehicleType?: string;
  brand?: string;
  driverId?: string;
  createdAt?: string;
  updatedAt?: string;
};

export const columns: ColumnDef<Vehicle>[] = [
  {
    accessorKey: 'model',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Model" />
    ),
  },
  {
    accessorKey: 'brand',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Brand" />
    ),
  },
  {
    accessorKey: 'color',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Color" />
    ),
  },
  {
    accessorKey: 'owner',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Owner" />
    ),
  },
  {
    accessorKey: 'status',
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
