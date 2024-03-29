import { Globe, Mail, MapPin } from 'lucide-react';
import logo from '../assets/logo.png';
import CustomImage from './customImage';

const Footer = () => {
  const companies = [
    'About Us',
    'Meet Our People',
    'Community & Sustainability',
    'Careers',
  ];

  const businesses = [
    'Solutions for Business',
    'Enterprise Truck Rental',
    'Travel Administrator',
    'Enterprise CarShare',
  ];

  return (
    <footer className="bg-secondary text-white py-20">
      <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
        <div className="grid grid-cols-12">
          <div className="pb-6 col-span-full md:pb-0 md:col-span-6 w-40 h-20">
            <CustomImage src={logo} alt="logo" />
          </div>
          <div className="col-span-6 text-center md:text-left md:col-span-3">
            <p className="pb-1 text-md font-medium">THE COMPANY</p>
            {companies?.map(item => (
              <p key={item} className="text-xs my-2 opacity-80">
                {item}
              </p>
            ))}
          </div>
          <div className="col-span-6 text-center md:text-left md:col-span-3">
            <p className="pb-1 text-md font-medium">BUSINESSES</p>
            {businesses?.map(item => (
              <p key={item} className="text-xs my-2 opacity-80">
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="grid justify-center pt-6 lg:justify-between">
          <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6 text-primary">
            <span>Autox ©2024 All rights reserved</span>
          </div>
          <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
            <div className="bg-slate-900 w-10 h-10 rounded-full flex justify-center items-center">
              <Mail className="text-primary" />
            </div>
            <div className="bg-slate-900 w-10 h-10 rounded-full flex justify-center items-center">
              <Globe className="text-primary" />
            </div>
            <div className="bg-slate-900 w-10 h-10 rounded-full flex justify-center items-center">
              <MapPin className="text-primary" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
