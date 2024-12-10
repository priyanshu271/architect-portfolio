import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const Profile: React.FC = () => {
  return (
    <Card className="my-8 mx-auto max-w-md sm:max-w-lg bg-cream">
      <CardContent className="text-center px-4"> {/* Added padding left and right */}
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-32 h-32 sm:w-48 sm:h-48 object-cover mx-auto rounded-full"
        />
        <Typography variant="h5" className="text-brown mt-4 text-lg sm:text-xl">
          Hi, I am Abhishek Srivastava, an architect based in Lucknow.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Profile;
