const express = require("express");
const router = express.Router();
const ProjectSchema = require("../model/project.model");
router.post("/", async (req, res) => {
  const { title, description, icon, workInProgress, useLink, repoLink } = req.body;
  try {
    const project = await ProjectSchema.findOne({ title: title });
    console.log(req.body)
    if (project) {
      return res.status(409).json({ message: "A similar project exists! 🔴 " });
    }
    const newProject = await ProjectSchema.create({
      title,
      description,
      icon,
      workInProgress,
      useLink,
      repoLink,
    });
    if (!newProject) {
      res.json({
        message: "Some error occurred while adding a new project! 🔴 ",
      });
    }
    res.status(201).json({ message: "Project added! 🟢" });
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Some error occurred while adding projects! 🔴 ", error: error });
  }
});

module.exports = router;
