var express = require('express');
var router = express.Router();

const friendController = require('../controllers/').friendController;
/* GET users listing. */
router.get('/',friendController.getAllFriends);

router.put('/:id',friendController.updateFriend);

module.exports = router;
/* 
my_friend.update({
  name: req.body.name,
  gender: req.body.gender
}, {
  where: {
      id: req.params.id
  }
}).then(result =>{
  res.json(result)
}).catch(err =>
  res.send(err)
) */