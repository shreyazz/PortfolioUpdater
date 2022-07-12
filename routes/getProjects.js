const express = require('express');
const router = express.Router();
const ProjectSchema = require('../model/project.model')

router.get('/', async (req, res) => {
    try {
        
    } catch (error) {
        return res
        .status(401)
        .json({ message: "Some error occurred while adding projects! 🔴" });
    }
})