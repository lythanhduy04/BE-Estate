import express from "express";

const router = express.Router();

router.get("/test", (req, res) => {
  console.log("route is work");
});

router.post("/test", (req, res) => {
  console.log("route is work");
});

router.put("/test", (req, res) => {
  console.log("route is work");
});

router.delete("/test", (req, res) => {
  console.log("route is work");
});

export default router;
