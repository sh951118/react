import express from 'express';
import * as path from 'path';
import cors from 'cors';
import fs from 'fs';

const PORT = 8888;
express()
    .use(cors())
    // .use('/', express.static(path.resolve('.','public')))
    .use(express.json())
    .get('/emaillist', (req, resp) => resp.status(200) .json({
            result: "success",
            message: null,
            data: JSON.parse(fs.readFileSync(path.resolve('.', 'data', 'emaillist', 'data.json')).toString())
        }))
    .get('/kanban/cards', (req, resp) => resp.status(200) .json({
        result: "success",
        message: null,
        data: JSON.parse(fs.readFileSync(path.resolve('.', 'data', 'kanban', 'data.json')).toString())
    }))
    .post('/kanban/cards/:cardId/tasks', (req, resp) => {
        let task = req.body;
        console.log(`card id : ${req.param.cardId}에 task name : ${task.name} 추가`);
        task.id = Date.now();

        resp.status(200) .json({
            result: "success",
            message: null,
            data: task
        });
    })
    .listen(PORT, ()=>console.log('starts API server on port ' + PORT));