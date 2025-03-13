"use client";
import { Container, Typography, Card, CardContent, CardActions, Button } from "@mui/material";
import projects from "@/data/projects.json";

type Project = {
  title: string;
  description: string;
  link: string;
};

export default function Projects() {
  return (
    <Container maxWidth="md" sx={{ mt: 6 }}>
      <Typography variant="h3" gutterBottom>
        My Projects
      </Typography>
      {projects.map((project: Project, index: number) => (
        <Card key={index} sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h5">{project.title}</Typography>
            <Typography color="textSecondary">{project.description}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" href={project.link} target="_blank">
              View Project
            </Button>
          </CardActions>
        </Card>
      ))}
    </Container>
  );
}
