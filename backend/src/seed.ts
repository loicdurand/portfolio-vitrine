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
      description: `
      Mon site vitrine: celui que vous êtes en train de consulter. 
      Réalisé avec Nodejs côté backend, React côté front. 
      Il me permet de vous présenter mon parcours, mes compétences dans d'autres technologies que Php, et ma volonté de vous rejoindre à Singapour. 
      J'ai fait le choix de ne pas utiliser de système de design tel que Bootstrap ou Tailwind, afin que vous puissiez vous forger une opinion honnête quant à mes compétences en CSS.`,
      langs: {
        backend: ["NodeJS", "Express", "nosql"],
        frontend: ["React", "TypeScript", "Sass"],
      },
      startedAt: new Date("2025-09-15T21:00:00.000-04:00").toISOString(),
      delivredAt: new Date("2099-12-31T17:00:00.000-04:00").toISOString(),
      source: "https://github.com/loicdurand/portfolio-vitrine",
    },
    {
      id: uuidv4(),
      name: "Eleksyon 971",
      description: `
      Une application permettant à chacun de créer son élection en ligne.
      L'anonymat du vote est garanti. Pourtant, le scrutin demeure transparent.
      `,
      langs: {
        backend: ["Php", "Symfony", "MySQL"],
        frontend: ["JS", "Sass"],
      },
      startedAt: new Date("2025-09-05T08:00:00.000-04:00").toISOString(),
      delivredAt: new Date("2025-09-16T17:00:00.000-04:00").toISOString(),
      source: "https://github.com/loicdurand/vote",
    },
    {
      id: uuidv4(),
      name: "Accueil - COMGENDGP",
      description: `Un portail principal, permettant à chaque personnel du COMGENDGP de retrouver facilement ses applications locales.`,
      langs: {
        backend: ["Php", "Symfony", "MySQL"],
        frontend: ["CSS"],
      },
      startedAt: new Date("2025-05-06T08:00:00.000-04:00").toISOString(),
      delivredAt: new Date("2025-05-23T17:00:00.000-04:00").toISOString(),
      source: "https://github.com/loicdurand/accueil",
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
