const passport = require('passport');
const {Strategy} = require('passport-local').Strategy;
const {User} = require('../models');
const md5 = require('md5');