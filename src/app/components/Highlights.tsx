"use client";
import React, { useState } from 'react';
import { Grid, CardMedia, Typography } from '@mui/material';

const Highlights: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const highlights = [
    { title: "Project 1", description: "Description for Project 1", imgSrc: "/images/download.jpg" },
    { title: "Project 2", description: "Description for Project 2", imgSrc: "/images/download.jpg" },
    { title: "Project 3", description: "Description for Project 3", imgSrc: "/images/download.jpg" },
  ];

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="my-8 mx-8">
      <Grid container spacing={4} justifyContent="center">
        {highlights.map((highlight, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} className="my-4">
            <div>
              <CardMedia
                component="img"
                image={highlight.imgSrc}
                alt={highlight.title}
                onClick={() => handleToggle(index)}
                className="cursor-pointer w-[30rem] h-[30rem] object-cover"
              />
              <div
                className={`overflow-hidden transition-all duration-1000 ease-in-out ${expandedIndex === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="bg-cream text-brown p-4 mt-2">
                  <Typography variant="body2">{highlight.description}</Typography>
                </div>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Highlights;
