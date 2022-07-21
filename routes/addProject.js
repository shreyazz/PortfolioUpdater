const express = require('express');
const router = express.Router();
const ProjectSchema = require('../model/project.model')
router.post('/' , async (req, res) => {
    const {title, description, image, workInProgress, useLink, repoLink} = req.body;
    try {
        if(!title || !description || !image || !workInProgress || !useLink || !repoLink){
            return res.status(422).json({ message: "Please fill all the data! 🔴" });
        }
        const project = await ProjectSchema.findOne({title: title});
        if(project){
            res.status(409).json({ message: "A similar project exists! 🔴" });
        }
        const newProject = await ProjectSchema.create({
            title, description, image, workInProgress, useLink, repoLink
        })
        if(!newProject){
            res.json({
                message: "Some error occurred while adding a new project! 🔴",
              });
        }
        res.status(201).json({ message: "Project added! 🟢" });
    } catch (error) {
        return res
      .status(401)
      .json({ message: "Some error occurred while adding projects! 🔴" });
    }
})

module.exports = router