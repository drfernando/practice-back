const my_friend = require("../models").my_friends;

// Retrieve all Tutorials from the database.

module.exports = {
    getAllFriends(req, res) {
        return my_friend.findAll().then(friend =>{ 
            res.status(200).send(friend)
        }).catch((error) => res.status(400).send(error));      
      },
    updateFriend(req,res){
        return my_friend.update({
            name: req.body.name,
            gender: req.body.gender  
        },{
            where: {
                id: req.params.id
            }
        }).then((friend) => res.status(200).send(friend))
        .catch((error) => res.status(400).send(error));     
    }
}
