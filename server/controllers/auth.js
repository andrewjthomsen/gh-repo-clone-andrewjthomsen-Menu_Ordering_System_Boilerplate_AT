const User = require('../models/user');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
const _ = require('lodash');

const {sendEmailWithNodemailer} = require("../helpers/email");
const {resetPasswordValidator} = require("../validators/auth");

exports.signup = (req, res) => {
    const {name, email, password} = req.body;

    User.findOne({email}).exec((err, user) => {
        if (user) {
            return res.status(400).json({
                error: "Email is taken",
            });
        }

        const token = jwt.sign(
            {name, email, password},
            process.env.JWT_ACCOUNT_ACTIVATION,
            {expiresIn: "10m"}
        );

        const emailData = {
            from: "athomsen2639@gmail.com", // MAKE SURE THIS EMAIL IS YOUR GMAIL FOR WHICH YOU GENERATED APP PASSWORD
            to: email, // WHO SHOULD BE RECEIVING THIS EMAIL? IT SHOULD BE THE USER EMAIL (VALID EMAIL ADDRESS) WHO IS TRYING TO SIGNUP
            subject: "ACCOUNT ACTIVATION LINK",
            html: `
                <h1>Please use the following link to activate your account</h1>
                <p>http://localhost:3000/auth/activate/${token}</p>
                <hr />
                <p>This email may contain sensitive information</p>
                <p>http://localhost:3000</p>
            `,
        };

        sendEmailWithNodemailer(req, res, emailData);

    });
};

exports.accountActivation = (req, res) => {
    //const {token} = req.body;
    const token = req.body;
    //if (token){

    //Try to change from JWT_ACCOUNT_ACTIVATION to JWT_SECRET
    if(token){
        jwt.verify(token, process.env.JWT_ACCOUNT_ACTIVATION, function (err, decoded) {
            if (err) {
                console.log('JWT VERIFY IN ACCOUNT ACTIVATION ERROR', err, token);
                return res.status(401).json({
                    error: 'Expired link. Signup again'
                });
            }

            req.user = decoded;

            //const {name, email, password} = jwt.decode(token);

            //const user = new User({name, email, password});

            user.save((err, user) => {
                if (err) {
                    console.log('SAVE USER IN ACCOUNT ACTIVATION ERROR', err);
                    return res.status(401).json({
                        error: 'Error saving user in database. Try signup again'
                    });
                }
                return res.json({
                    message: 'Signup success. Please signin.'
                });
            });
        });
    } else {
        return res.json({
            message: 'Something went wrong. Try again.'
        });
    }
};

exports.signin = (req, res) => {
    const {email, password} = req.body;
    // check if user exist
    User.findOne({email}).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User with that email does not exist. Please signup'
            });
        }
        // authenticate
        if (!user.authenticate(password)) {
            return res.status(400).json({
                error: 'Email and password do not match'
            });
        }
        // generate a token and send to client
        const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, {expiresIn: '7d'});
        const {_id, name, email, role} = user;

        return res.json({
            token,
            user: {_id, name, email, role}
        });
    });
};

// forgotPassword, resetPassword

exports.forgotPassword = (req, res) => {
    //
    const {email} = req.body

    User.findOne({email}, (err, user) => {
        // if there isn't a user
        if (err || !user) {
            return res.status(400).json({
                error: 'User with that email does not exist!'
            });
        }
        // otherwise, generate token
        const token = jwt.sign({_id: user._id, name: user.name}, process.env.JWT_RESET_PASSWORD,
            {expiresIn: "10m"});

        const emailData = {
            from: "athomsen2639@gmail.com", // MAKE SURE THIS EMAIL IS YOUR GMAIL FOR WHICH YOU GENERATED APP PASSWORD
            to: email, // WHO SHOULD BE RECEIVING THIS EMAIL? IT SHOULD BE THE USER EMAIL (VALID EMAIL ADDRESS) WHO IS TRYING TO SIGNUP
            subject: "PASSWORD RESET LINK",
            html: `
                <h1>Please use the following link to reset your password</h1>
                <p>http://localhost:3000/auth/password/reset/${token}</p>
                <hr />
                <p>This email may contain sensitive information</p>
                <p>http://localhost:3000</p>
            `,
        };
        // Added 11/15/23
        return user.updateOne({resetPasswordLink: token}, (err, success) => {
            if (err) {
                console.log('RESET PASSWORD LINK ERROR', err);
                return res.status(400).json({
                    error: 'Database connection error on user forgot password request.'
                });
            } else {
                sendEmailWithNodemailer(req, res, emailData);
            }
        })

        // sendEmailWithNodemailer(req, res, emailData);

    });
// }
// })
}

exports.resetPassword = (req, res) => {
    //
    const {resetPasswordLink, newPassword} = req.body;

    if (resetPasswordLink) {
        jwt.verify(resetPasswordLink, process.env.JWT_RESET_PASSWORD, (err, decoded) => {
            if (err) {
                return res.status(400).json({
                    error: 'Link has expired.'
                });
            }
            User.findOne({resetPasswordLink}, (err, user) => {
                if (err || !user) {
                    return res.status(400).json({
                        error: 'Something went wrong. Please try again later.'
                    });
                }
                ;
                // Update old password with new password
                const updatedFields = {
                    password: newPassword,
                    resetPasswordLink: ''

                }
                user = _.extend(user, updatedFields);

                // save user info back to db
                user.save((err, result) => {
                    if (err) {
                        return res.status(400).json({
                            error: 'Failed to save new user password to the database.'
                        });
                    }
                    res.json({
                        message: `Password was successfully updated! Please login.`
                    })
                })
            })
        })

    }
};