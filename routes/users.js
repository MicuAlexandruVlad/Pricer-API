var express = require('express');
var router = express.Router();
var app = express();
var fs = require('fs');
var mongo = require('mongodb')
var mongoose = require('mongoose');
var User = require('../models/User')
var UserModel = mongoose.model('User', User.UserSchema);

var httpStatus = require('http-status-codes');



module.exports = router;
