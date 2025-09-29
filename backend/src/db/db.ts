import { join } from "path";
import { Project } from "./project";

// export interface Post {
//   id: string;
//   title: string;
//   content: string;
//   startedAt: string;
// }

export interface Data {
  projects: Project[];
  // posts: Post[];
}

async function initDb() {
  const lowdb = await import("lowdb");
  const { Low } = lowdb;
  const { JSONFile } = await import("lowdb/node");
  const adapter = new JSONFile<Data>(join(__dirname, "db.json"));
  const db = new Low(adapter, {
    projects: [],
    // posts: []
  });

  return db;
}

export default initDb;
