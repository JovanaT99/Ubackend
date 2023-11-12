import { Router } from "express";
import {
  deleteCourseById,
  getCourseById,
  getCourses,
  updateCourse,
} from "./handlers/course";
import { postCourse } from "./handlers/course";
import { body, param } from "express-validator";
import { createInstructor, getInstructor } from "./handlers/instructor";

const router = Router();

router.get("/courses/:instructorId", param("instructorId").isInt(), getCourses);
router.post(
  "/course",
  body("title").isString().notEmpty(),
  body("duration").isFloat().notEmpty(),
  body("desc").isString().notEmpty(),
  body("instructorId").isInt().optional(),
  postCourse
);

router.get("/course/:id", param("id").isInt(), getCourseById);
router.delete("/course/:id", param("id").isInt(), deleteCourseById);
router.put(
  "/course/:id",
  param("id").isInt(),
  body("title").isString().optional(),
  body("duration").isFloat().optional(),
  body("desc").isString().optional(),
  body("instructorId").isInt().optional(),
  updateCourse
);

router.post(
  "/instructor",
  body("email").isString().isEmail().notEmpty(),
  body("name").isString().notEmpty(),
  body("zip").isString().notEmpty(),
  body("country").isString().notEmpty(),
  body("city").isString().notEmpty(),

  createInstructor
);

router.get("/instructor/:id", param("id").isInt(), getInstructor);

export default router;
