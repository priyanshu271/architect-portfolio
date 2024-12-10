import React from 'react';
import { Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cream text-black text-center p-4">
      <Typography variant="body2">Abhishek Srivastava</Typography>
      <Typography variant="body2">1234 Architecture Lane, Lucknow, UP</Typography>
      <div className="flex justify-center space-x-4">
        <a href="#" className="text-black">Facebook</a>
        <a href="#" className="text-black">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;
