export const getBaseUrl = (): string => {
  return process.env.API_BASE_URL || 'https://autox-backend.vercel.app/api/v1';
};
