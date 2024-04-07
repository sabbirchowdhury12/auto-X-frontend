import { JwtPayload } from 'jwt-decode';
import { LucideIcon } from 'lucide-react';

export type IMeta = {
  limit: number;
  page: number;
  size: number;
};

export type ResponseSuccessType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  meta?: IMeta;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export type IRegisterResponse = {
  data: {
    id: string;
    email: string;
    role: string;
  };
  accessToken: string;
};

export type CustomJwtPayload = {
  id: string;
  role: string;
} & JwtPayload;

export type TSideNavItemsProps = {
  title: string;
  label: string;
  link: string;
  key: string;
  icon: LucideIcon;
  variant:
    | 'ghost'
    | 'link'
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | null
    | undefined;
}[];

export type User = {
  id: string;
  role: string;
};

export type IDriverProps = {
  id: string;
  driverId: string;
  licenseNo: string;
  licenseExpire: string;
  nidNo: string;
  status: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
};

export type IVehicleProps = {
  id: string;
  vehicleId: string;
  model: string;
  mileage: number;
  color: string;
  images: string[];
  overview: string;
  basePrice: number;
  fuelType: string;
  passengerCapacity: number;
  location: string;
  plateNo: string;
  chassisNo: string;
  status: string;
  owner: string;
  vehicleType: string;
  brand: string;
  year: string;
  registrationNumber: string;
  rentalRate: number;
  driverId: string;
  createdAt: string;
  updatedAt: string;
  driver: IDriverProps;
};
