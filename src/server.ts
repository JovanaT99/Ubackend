import { PrismaClient } from "@prisma/client";
import express from "express";

const app = express();
const prisma = new PrismaClient();

app.get("/", (req, res) => {
  res.send("Hello");
});

//GET api/course
app.get("/course", async (req, res) => {
  //fetch all the courses from db
  const courses = await prisma.course.findMany();
  //get the prisma
  //get the course from the prisma object
  //call the many method
  //send back to user as a json
  res.status(200);
  res.json(courses);
});
export default app;
