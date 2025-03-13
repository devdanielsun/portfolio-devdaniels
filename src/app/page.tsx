"use client";
import { Container, Typography, Button } from "@mui/material";
import Link from "next/link";

export default function Home() {

  const title = "Portfolio DevDaniels";
  const firstAlinea = " I'm a DevOps developer specializing in Azure, C#, AI & React (TypeScript). test.";

  return (
    <Container maxWidth="md" sx={{ textAlign: "center", mt: 10 }}>
      <Typography variant="h2" gutterBottom>
        Welcome to {title}
      </Typography>
      <Typography variant="h6" color="textSecondary">
        {firstAlinea}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 4 }}
        component={Link}
        href="/projects"
      >
        View My Work
      </Button>
    </Container>
  );
}
