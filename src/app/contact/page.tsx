"use client";
import { Container, TextField, Button, Typography } from "@mui/material";

export default function Contact() {
  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Typography variant="h3" gutterBottom>
        Contact Me
      </Typography>
      <form action="https://formspree.io/f/your-form-id" method="POST">
        <TextField fullWidth label="Your Name" name="name" required sx={{ mb: 3 }} />
        <TextField fullWidth label="Your Email" name="email" required sx={{ mb: 3 }} />
        <TextField fullWidth label="Your Message" name="message" required multiline rows={4} sx={{ mb: 3 }} />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Send Message
        </Button>
      </form>
    </Container>
  );
}
