const express = require("express");
const router = express.Router();
const ProjectSchema = require("../model/project.model");
router.delete("/", async (req, res) => {
  const { title} = req.body;
  try {
    const project = await ProjectSchema.findOneAndDelete({ title: title });
    res.status(200).json({ message: "Project Deleted! 🟢" });
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Some error occurred while deleting projects! 🔴 ", error: error });
  }
});

module.exports = router;
