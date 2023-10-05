import { Router } from "express";
import { getTask, getTasks, createTask, updateTask, deleteTask } from "../controllers/task.controller.js";
import { requiredAuth  } from '../middlewares/tokenValidation.js';

const router = Router();

router.get('/tasks',requiredAuth, getTasks)
router.get('/task/:id',requiredAuth, getTask)
router.post('/task',requiredAuth, createTask)
router.put('/task/:id',requiredAuth, updateTask)
router.delete('/tasks/:id',requiredAuth, deleteTask)

export default router; 