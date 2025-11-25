import yaml from 'js-yaml';

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface Event {
  id: string;
  title: string;
  date?: string;
  image: string;
  buttonText: string;
  featured: boolean;
  status: 'upcoming' | 'past';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
}

export interface TeamData {
  members: TeamMember[];
}

export interface EventsData {
  events: Event[];
}

export interface ProjectsData {
  projects: Project[];
}

async function loadYaml<T>(path: string): Promise<T> {
  const response = await fetch(path);
  const text = await response.text();
  return yaml.load(text) as T;
}

export async function loadTeamMembers(): Promise<TeamMember[]> {
  const data = await loadYaml<TeamData>('/content/team.yaml');
  return data.members;
}

export async function loadEvents(): Promise<Event[]> {
  const data = await loadYaml<EventsData>('/content/events.yaml');
  return data.events;
}

export async function loadProjects(): Promise<Project[]> {
  const data = await loadYaml<ProjectsData>('/content/projects.yaml');
  return data.projects;
}
