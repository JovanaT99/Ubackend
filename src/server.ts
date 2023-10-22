import { PrismaClient } from "@prisma/client";
import express from "express";
import morgan from "morgan";

const app = express();
const prisma = new PrismaClient();

// app.use((req, res, next) => {
//   console.log(`${req.url} ${new Date()}`);
//   next(); //call the newxt midleeware
// });

//apply third part middleware

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello");
});

//GET api/course
app.get("/course", async (req, res) => {
  //fetch all the courses from db
  //create a new instructor

  const courses = await prisma.course.findMany();

  //get the prisma
  //get the course from the prisma object
  //call the many method
  //send back to user as a json
  res.status(200);
  return res.json(courses);
});
//create endpoint
app.post("/api/course", async (req, res) => {
  //create new record

  // const instructor = await prisma.instructor.create({
  //   data: {
  //     name: "Jovana",
  //     city: "London",
  //     country: "UK",
  //     email: "jovana@gmail.com",
  //     zip: "2300",
  //   },
  // });

  const course = await prisma.course.create({
    //add manually
    data: {
      title: "Learn Sails.js",
      desc: "Build apis with Sailsjs",
      duration: 12.4,
      instructorId: 1,
      // Instructor: {
      //   connect: {
      //     id: 1,
      //   },
      // },
    },
  });

  res.status(200);
  return res.json(course);
});

//create endpoint

//create new record

//manually input here

export default app;
