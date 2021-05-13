var express = require('express');
var router = express.Router();
var db = require('../models/index');

function createPath(path){
    return 'tasks/' + path;
};

router.get('/', async (req, res) => {
    let tasks = await db.tasks.findAll();
    if(tasks){
        res.render(createPath('index'), {tasks: tasks});
    }else{
        res.render(createPath('index'), {tasks: "Didn't catch a request."});
    }
});

router.post('/add', async (req, res) => {
    const task = req.body.task;
    await db.tasks.create({task: task});
    res.redirect('/tasks');
});

router.get('/edit/:id', (req, res) => {
    const id = req.params.id;
    res.render(createPath('edit'), {id: id});
});
router.post('/edit/:id', async (req, res) => {
    const id = req.params.id;
    const reqTask = req.body.task;
    await db.tasks.update({task: reqTask}, {
        where: {
            id: id
        }
    });
    res.redirect('/tasks');
});

router.post('/delete/:id', async (req, res) => {
    const id = req.params.id;
    await db.tasks.destroy({
        where: {
            id: id
        }
    });
    res.redirect('/tasks');
});

module.exports = router;
