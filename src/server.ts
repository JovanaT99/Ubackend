import { PrismaClient } from "@prisma/client";
import express from "express";
import morgan from "morgan";
import errorHandler from "error-handler";

const app = express();
const prisma = new PrismaClient();

// app.use((req, res, next) => {
//   console.log(`${req.url} ${new Date()}`);
//   next(); //call the newxt midleeware
// });

//apply third part middleware

app.use(morgan("dev"));
app.use(express.json()); //parse req body

app.get("/", (_req, _res) => {
  throw new Error("NEW ERROR");
});

//GET api/course
app.get("/course", async (_req, res) => {
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
app.post("/api/course", async (_req, res) => {
  //validate our parameters

  //validate title, duration, des and instructorId
  const course = await prisma.course.create({
    //add manually
    data: {
      title: _req.body.title,
      desc: _req.body.desc,
      duration: _req.body.duration,
      instructorId: _req.body.instructorId,
    },
  });
  //send the record back to resposnse
  res.status(200);
  return res.json(course);
});

app.use(
  (
    error: any,
    _req: express.Request,
    _res: express.Response,
    next: express.NextFunction
  ) => {
    console.log(`ERROR: ${error.message}`);
    next(error);
  }
);

//create endpoint

//create new record

//manually input here

if (process.env.NODE_ENV === "development ") {
  app.use(errorHandler);
}

export default app;
