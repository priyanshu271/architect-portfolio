// components/SocialMediaLinks.tsx
import React from 'react';
import { Box, Link } from '@mui/material';

const socialLinks = [
  { name: 'Facebook', url: 'https://facebook.com' },
  { name: 'Instagram', url: 'https://instagram.com' },
];

const SocialMediaLinks = () => {
  return (
    <Box className="flex justify-center space-x-4 mt-2">
      {socialLinks.map(link => (
        <Link key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">{link.name}</Link>
      ))}
    </Box>
  );
};

export default SocialMediaLinks;
