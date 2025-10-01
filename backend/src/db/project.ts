type Langs = {
  backend: string[];
  frontend: string[];
};

export interface Project {
  id: string;
  name: string;
  description: string;
  langs: Langs;
  startedAt: string;
  delivredAt: string;
  source: string | null;
}
