'use strict';

let express = require('express');
let morgan = require('morgan');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');

let employeeController = require('./controllers/employee_controller');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));

app.get('/', (req, res, next) => {
  res.send('hellooooooooo world');
});

app.post('/employees', employeeController.saveEmployee); // untuk save
app.put('/employees/:code', employeeController.updateEmployee); // untuk update
app.delete('/employees/:code', employeeController.deleteEmployee);// untuk delete
app.get('/employees/:code', employeeController.getEmployee); // untuk get one employee
app.get('/employees', employeeController.getEmployees); //untuk get all employee

module.exports = app;
