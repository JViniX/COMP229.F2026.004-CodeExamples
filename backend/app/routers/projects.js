var express = require('express');
var router = express.Router();

var projectsController = require('../controllers/projects');
var authController = require('../controllers/auth');

router.get('/', authController.logtoken, authController.validateToken, projectsController.projectsList);
router.get('/:id', authController.validateToken,projectsController.getByID);

router.put('/:id', authController.validateToken,projectsController.processEdit);

router.delete('/:id',authController.validateToken, projectsController.processDelete);

router.post('/',authController.validateToken, projectsController.processAdd);


module.exports = router;
