"use client";
import React, { useState } from "react";
import { Button, TextField, Typography, Paper } from "@mui/material";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setIsOpen(false);
  };

  return (
    <div className="my-8 mx-8">
      <Button variant="contained" onClick={() => setIsOpen(true)} className="bg-peach text-white">
        Send Message
      </Button>
      {isOpen && (
        <Paper className="mt-4 p-4">
          <Typography variant="h6" className="text-brown">Contact Me</Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              onChange={handleChange}
              required
              className="my-2"
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              onChange={handleChange}
              required
              className="my-2"
            />
            <TextField
              fullWidth
              label="Message"
              name="message"
              multiline
              rows={4}
              onChange={handleChange}
              required
              className="my-2"
            />
            <Button type="submit" variant="contained" className="bg-brown text-white">
              Send
            </Button>
          </form>
        </Paper>
      )}
    </div>
  );
};

export default ContactForm;
