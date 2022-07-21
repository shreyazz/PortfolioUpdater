const express = require('express');
const router = express.Router();
const ProjectSchema = require('../model/project.model')

router.get('/', async (req, res) => {
    try {
        const projects = await ProjectSchema.find();
        return res.json({message: "All projects are sent! 🟢", projects: projects})
    } catch (error) {
        return res
        .status(401)
        .json({ message: "Some error occurred while adding projects! 🔴" });
    }
})

module.exports = router