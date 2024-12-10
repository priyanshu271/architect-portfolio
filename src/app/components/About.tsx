import React from "react";
import { Grid, Typography, Paper } from "@mui/material";

const About: React.FC = () => {
  return (
    <Grid container spacing={2} className="my-4 px-4">
      <Grid item xs={12} sm={6}>
        <Paper className="p-4 bg-cream w-full">
          <Typography variant="h6" className="text-brown">About</Typography>
          <Typography variant="body2">
            I am passionate about architecture and design, striving to create spaces that enhance the human experience.
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper className="p-4 bg-cream w-full">
          <Typography variant="h6" className="text-brown">Experience</Typography>
          <Typography variant="body2">
            With over 5 years of experience, I have worked on various projects, ranging from residential to commercial buildings.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default About;
