// src/app/projects/[id]/page.tsx
import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';
import ProjectDetails from './ProjectDetails';

interface ProjectPageProps {
  params: { id: string; }
  searchParams?: { [key: string]: string | string[] | undefined };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.id === params.id);
  
  if (!project) {
    notFound();
  }
  
  return <ProjectDetails project={project} />;
}