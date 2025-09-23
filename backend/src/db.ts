import { join } from "path";

export interface Data {
  projects: { id: string; name: string; description: string }[];
  posts: { id: string; title: string; content: string; date: string }[];
}

async function initDb() {
  const lowdb = await import("lowdb");
  const { Low } = lowdb;
  const { JSONFile } = await import("lowdb/node");
  const adapter = new JSONFile<Data>(join(__dirname, "db.json"));
  const db = new Low(adapter, { projects: [], posts: [] });
  // await db.read();
  // db.data ||= { projects: [], posts: [] };
  // await db.write();
  return db;
}

export default initDb;
