import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("stat route GET METHOD");
});

export default router;
