'use strict';
import env = require('dotenv');
import Twitter = require('twit');
import moment = require('moment');
import twitterFace = require('./twitter-face');

twitterFace.messageNewFollower();