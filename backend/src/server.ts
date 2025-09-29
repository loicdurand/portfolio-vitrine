// backend/src/server.ts
import { join } from "path";
import express from "express";
import cors from "cors";
import { Data } from "./db/db";

(async function () {
  const mod = import("uuid");
  const { v4: uuidv4 } = await mod;
  const lowdb = await import("lowdb");
  const { Low } = lowdb;
  const { JSONFile } = await import("lowdb/node");
  const adapter = new JSONFile<Data>(join(__dirname, "db/db.json"));
  const db = new Low(adapter, {
    projects: [],
    // posts: []
  });

  await db.read();

  express()
    .use(cors())
    .use(express.json())

    .get("/api/projects", async (req, res) => {
      console.log("Projects fetched:", db.data.projects);
      res.json(db.data.projects);
    })

    .post("/api/projects", async (req, res) => {
      const data = req.body;
      const project = { ...data, id: uuidv4() };
      db.data.projects.push(project);
      await db.write();
      res.json(project);
    })

    // .get("/api/posts", async (req, res) => {
    //   await db.read();
    //   console.log("Posts fetched:", db.data.posts);
    //   res.json(db.data.posts);
    // })

    // .post("/api/posts", async (req, res) => {
    //   const { title, content } = req.body;
    //   const post = {
    //     id: uuidv4(),
    //     title,
    //     content,
    //     date: new Date().toISOString(),
    //   };
    //   db.data.posts.push(post);
    //   await db.write();
    //   res.json(post);
    // })

    .listen(5000, () => console.log("Backend on 5000"));
})().catch((err) => console.error("DB error:", err));
