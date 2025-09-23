// backend/src/seed.ts
import initDb from "./db";

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
    },
  ];
  db.data.posts = [
    {
      id: uuidv4(),
      title: "Bienvenue !",
      content: "Mon premier post.",
      date: new Date().toISOString(),
    },
  ];
  await db.write();
  console.log("Seed completed");
}
seed().catch((err) => console.error("Seed error:", err));
