import * as path from 'path';
import express from 'express';

const app = express();

app.use('/', express.static(path.resolve('.', 'public')));
app.listen(8090, function(){
    console.log('starts.... at 8090');
});