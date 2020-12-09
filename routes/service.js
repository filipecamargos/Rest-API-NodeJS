//Importing express
const express = require("express");

//Getting the logic saved in the controller file
const controller = require('../controllers/service')

//Stating the routers
const router = express.Router();

//service welcome message
router.get('/getServiceMessage', controller.serviceMessage)

//get Hello little friend message
router.get('/get_service', controller.getHelloLittleFriendMessage)

//my friend today router
router.post('/post_my_friend_today', controller.postWhoIsMyFriend)



module.exports = router;