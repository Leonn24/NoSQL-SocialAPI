const { User } = require('../models');

const UserController = {

// Get all users
    getAllUsers(req,res) {
        User.find({})
        .then(user => res.json(user))
        .catch(err => res.status(500).json(err));
    },

// Get one user by ID
    getUserById(req,res) {
        User.findById(req.params.userId)
        .then(user => res.json(user))
        .catch(err => res.status(500).json(err));
    },

// Create a user
    createUser(req,res) {
        User.create(req.body)
        .then(user => res.json(user))
        .catch(err => res.status(500).json(err));
    },

// Update user by ID
    updateUserById(req, res) {
        User.findOneAndUpdate(req.params.id, req.body, { new: true })
          .then(user => {
            if (!user) {
              return res.status(404).json({ message: 'User not found' });
            }
            res.json(user);
          })
          .catch(err => res.status(500).json(err));
      },

 // Delete user
      deleteUserById(req, res) {
        User.findOneAndDelete(req.params.id)
          .then(user => {
            if (!user) {
              return res.status(404).json({ message: 'User not found' });
            }
            res.json({ message: 'User deleted successfully' });
          })
          .catch(err => res.status(500).json(err));
      },

// Add friend to user's friend list
      addFriend(req, res) {
        User.findOneAndUpdate(
          { _id: req.params.userId },
          { $addToSet: { friends: req.body.friendId || req.params.friendId} },
          { new: true }
        )
          .then(user => {
            if (!user) {
              return res.status(404).json({ message: 'User not found' });
            }
            res.json(user);
          })
          .catch(err => res.status(500).json(err));
      },

// Remove friend from user's friend list
      removeFriend({ params }, res) {
        User.findOneAndUpdate(
          { _id: params.userId },
          { $pull: { friends: params.friendId } },
          { new: true }
        )
          .then((dbuser) => {
            if (!dbuser) {
              return res.status(404).json({ message: "No user with this id!" });
            }
            // check if friend was removed
            const removed = !dbuser.friends.includes(params.friendId);
            // return response with appropriate message
            if (removed) {
              res.json({ message: "Friend removed successfully!", dbuser });
            } else {
              res.json(dbuser);
            }
          })
          .catch((err) => res.status(400).json(err));
      },
};

module.exports = UserController;