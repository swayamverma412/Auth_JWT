const express = require('express');
const router = express.Router();
const employeesController = require('../../controllers/employeesController');
const verifyJWT = require('../../middleware/verifyJWT')
const Roles_list = require('../../config/roles_list')
const verifyroles = require('../../middleware/verifyRoles')

router.route('/')
  //  .get( verifyJWT, employeesController.getAllEmployees) //selected route
    .get( employeesController.getAllEmployees)
    .post( verifyroles(Roles_list.Admin, Roles_list.Editor) ,employeesController.createNewEmployee)
    .put(verifyroles(Roles_list.Admin, Roles_list.Editor) ,employeesController.updateEmployee)
    .delete(verifyroles(Roles_list.Admin) ,employeesController.deleteEmployee);

router.route('/:id')
    .get(employeesController.getEmployee);

module.exports = router;