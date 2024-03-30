'use client';
import { AlertModal } from '@/components/modals/alertModal';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useDeleteProfileMutation } from '@/redux/api/profileApi';
import { getClientUserInfo } from '@/services/auth.service';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';
import { ChangePasswordForm } from './components/changePasswordFrom';
import Heading from '@/components/heading';

const SettingsPage = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const user = getClientUserInfo();

  const [deleteUser] = useDeleteProfileMutation();

  const onDelete = async () => {
    setLoading(true);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const res: any = await deleteUser(user.id);

    if (res?.data?._id) {
      toast.success('Account deleted successfully');
      router.push('/');
    }

    if (res?.error) {
      toast.error(res?.error?.message);
    }

    setLoading(false);
    setOpen(false);
  };
  return (
    <div>seeting page</div>
    // <div className="m-4 p-6  border shadow-md rounded-md">
    //   <AlertModal
    //     isOpen={open}
    //     onClose={() => setOpen(false)}
    //     onConfirm={onDelete}
    //     loading={loading}
    //   />

    //   <Heading title="Account settings" sub_title="Manage your account" />

    //   <Separator />
    //   <ChangePasswordForm />

    //   <div className="mt-12">
    //     <h2 className="text-xl font-semibold mt-2 mb-4">Manage account</h2>
    //     <Button
    //       disabled={loading}
    //       variant="destructive"
    //       size="sm"
    //       onClick={() => setOpen(true)}
    //     >
    //       Delete Your Account
    //     </Button>
    //   </div>
    // </div>
  );
};

export default SettingsPage;
