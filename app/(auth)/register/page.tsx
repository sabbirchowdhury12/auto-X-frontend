import { Metadata } from 'next';

import Register from '../components/register';

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Authentication forms built using the components.',
};

const RegisterPage = () => {
  return <Register />;
};

export default RegisterPage;
