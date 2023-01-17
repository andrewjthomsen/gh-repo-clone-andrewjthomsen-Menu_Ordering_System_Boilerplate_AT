const User = require('../models/user');

exports.read = (req, res) => {
    const userId = req.params.id
    // query db and fnd specific user
    User.findById(userId).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User not found.'
            })
        }
        user.hashed_password = undefined;
        user.salt = undefined;
        res.json(user);
    });
};

exports.update = (req, res) => {
    console.log('UPDATE USER' - req.user, 'UPDATE DATA', req.body);
    const {name, password} = req.body
    User.findOne({
        _id: req.user._id
    }, (err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User was not found.'
            });
        }
        if (!name) {
            return res.json(400).json({
                error: 'Name is required! Please try again...'
            });
        } else {
            user.name = name
        }
        if (password) {
            if (password.length < 6) {
                return res.json(400).json({
                    error: 'Password must be at least 6 characters long!'
                });
            } else {
                user.password = password
            }
        }
        user.save((err, updatedUser) => {
            if (err) {
                console.log('USER UPDATE ERROR', err)
                return res.status(400).json({
                    error: 'User update failed.'
                });
            }
            updatedUser.hashed_password = undefined;
            updatedUser.salt = undefined;
            res.json(updatedUser);
        });

    });
};