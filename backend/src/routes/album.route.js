import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("album route GET METHOD");
});

export default router;
