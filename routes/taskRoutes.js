// Router for tasks

const express = require('express');
const router = express.Router();
const Task = require('../models/Task');
const requireLogin = require('../middlewares/requireLogin');

// Route to create task
router.post('/create', requireLogin, (req, res) => {
    const { clientName, clientPhone, clientEmail, subject, description } = req.body;

    const task = new Task ({
        clientName,
        clientPhone,
        clientEmail,
        subject,
        description,
        _user: req.user.id
    });

    task.save((err, savedTask) => {
        if (err) return res.json(err);
        res.send('Task saved');
    });
});

// Show all tasks
router.get('/list', requireLogin, async (req, res) => {
    const tasks = await Task.find({ _user: req.user.id })
        .select({ clientName: true, subject: true });

    res.send(tasks);
});

// Show details task
router.get('/details/:id', async (req, res) => {
    const task = await Task.find({ _id : req.params.id });

    // Convert array of objects into single object for React
    res.send(task);
})

// Delete selected task
router.delete('/list/:id', requireLogin, async (req, res) => {
    const task = await Task.findByIdAndRemove({ _id : req.params.id });

    res.send(task);
});

module.exports = router;