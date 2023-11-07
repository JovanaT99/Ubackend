import { Router } from "express";
import {
  deleteCourseById,
  getCourseById,
  getCourses,
  updateCourse,
} from "./handlers/course";
import { postCourse } from "./handlers/course";
import { body, param } from "express-validator";

const router = Router();

router.get("/courses", getCourses);
router.post(
  "/courses",

  body("title").isString().notEmpty(),
  body("duration").isFloat().notEmpty(),
  body("desc").isString().notEmpty(),
  body("instructorId").isInt().optional(),
  postCourse
);

router.get("/course/:id", param("id").isInt(), getCourseById);
router.delete("/course/:id", param("id").isInt(), deleteCourseById);
router.put("/course/:id", param("id").isInt(), updateCourse);

export default router;
