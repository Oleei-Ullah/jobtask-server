const express = require("express");
const controller = require("../controlllers/controller");
const taskController = require("../controlllers/taskController");

const router = express.Router();
router.route('/').get(controller.home)
router.route('/jwt').get(controller.jwt)
router.route('/users')
.post(controller.saveUser)

router.route('/user')
.get(controller.getUser)




router.route('/update/:id')
.post(taskController.updated)


router.route('/tasks')
.get(taskController.getmytasks)


router.route('/deleteproduct/:id')
.delete(taskController.deleteTask)









module.exports = router;