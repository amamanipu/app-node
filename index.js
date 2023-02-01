import express from 'express';
import bodyParser from 'body-parser';
import { executeStudentCrudOperations } from './studentsCrud.js';

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/user', function (req, res) {
    executeStudentCrudOperations(req.body);
    res.send('User Created!!!');
});

app.listen(3000);
console.log('Connect Server!!!, port: 3000');