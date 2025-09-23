// frontend/src/context/AppContext.tsx
import React, { createContext, useState, ReactNode } from "react";

interface Project {
  id: string;
  name: string;
  description: string;
}
interface Post {
  id: string;
  title: string;
  content: string;
  date: string;
}
interface AppContextType {
  projects: Project[];
  setProjects: (projects: Project[]) => void;
  posts: Post[];
  setPosts: (posts: Post[]) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  return (
    <AppContext.Provider value={{ projects, setProjects, posts, setPosts }}>
      {children}
    </AppContext.Provider>
  );
};
