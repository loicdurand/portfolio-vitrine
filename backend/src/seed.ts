// backend/src/seed.ts
import initDb from "./db/db";

async function seed() {
  const db = await initDb();
  await db.read();
  const mod = import("uuid");
  const { v4: uuidv4 } = await mod;

  db.data.projects = [
    {
      id: uuidv4(),
      name: "Portfolio",
      description: "Site vitrine en React/Node",
      langs: {
        backend: ["nodejs", "express", "nosql"],
        frontend: ["react", "typescript", "sass"],
      },
      startedAt: new Date("2025-09-15T21:00:00.000-04:00").toISOString(),
      delivredAt: new Date("2099-12-31T17:00:00.000-04:00").toISOString(),
    },
    {
      id: uuidv4(),
      name: "Vote",
      description: "Site de vote en ligne",
      langs: {
        backend: ["php", "symfony", "mysql"],
        frontend: ["js", "sass"],
      },
      startedAt: new Date("2025-09-05T08:00:00.000-04:00").toISOString(),
      delivredAt: new Date("2025-09-16T17:00:00.000-04:00").toISOString(),
    },
  ];
  // db.data.posts = [
  //   {
  //     id: uuidv4(),
  //     title: "Bienvenue !",
  //     content: "Mon premier post.",
  //     date: new Date().toISOString(),
  //   },
  // ];
  await db.write();
  console.log("Seed completed");
}
seed().catch((err) => console.error("Seed error:", err));
