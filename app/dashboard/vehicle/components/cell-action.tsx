/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { Edit, FileText, MoreHorizontal, Trash } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import { AlertModal } from '@/components/modals/alertModal';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useDeleteVehicleMutation } from '@/redux/api/vehicleApi';
import { AlertDialog } from '@radix-ui/react-alert-dialog';
import { toast } from 'sonner';
import { Vehicle } from './columns';

type CellActionProps = {
  data: Vehicle;
};

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const router = useRouter();
  const [deleteVehicle] = useDeleteVehicleMutation();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const onDelete = async () => {
    setLoading(true);
    console.log(data?.id);
    const res: any = await deleteVehicle(data?.id);

    if (res?.data?.id) {
      toast.success('Vehicle deleted successfully');
      router.refresh();
    } else if (res?.error) {
      toast.error(res?.error?.message);
    }

    setOpen(false);
    setLoading(false);
  };

  return (
    <>
      <AlertModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      />

      <AlertDialog />
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuItem
            onClick={() => router.push(`/dashboard/vehicle/details`)}
          >
            <FileText className="mr-2 h-4 w-4" /> Details
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => router.push(`/dashboard/vehicle/${data?.id}`)}
          >
            <Edit className="mr-2 h-4 w-4" /> Update
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setOpen(true)}>
            <Trash className="mr-2 h-4 w-4" /> Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
