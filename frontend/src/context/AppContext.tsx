// frontend/src/context/AppContext.tsx
import React, { createContext, useState, ReactNode } from "react";
import { Project, Post } from "../../../backend/src/db";

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
