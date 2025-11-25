export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
  type: 'past' | 'present';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  status: 'ongoing' | 'completed';
}