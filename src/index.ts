'use strict';
import env = require('dotenv');
import Twitter = require('twit');
import moment = require('moment');

// grab all my secrets
env.config(); 

const weekdays: Array<string> = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const T = new Twitter({
  consumer_key: process.env.T_CONSUMER_KEY,
  consumer_secret: process.env.T_CONSUMER_SECRET,
  access_token: process.env.T_ACCESS_TOKEN,
  access_token_secret: process.env.T_ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000,  // optional HTTP request timeout to apply to all requests. 
});

// setup a user stream, as per Twitter's Streaming API (https://dev.twitter.com/streaming/overview)
var stream = T.stream('user');

// when someone new follows me
stream.on('follow', (data) => {
  // get the screen name of the user who followed me
  let screen_name = data.source.screen_name;
  // get the user who followed me's real name
  let real_name = data.source.name;
  // get the user who followed me's timezone as an offset from utc
  let utcOffest = data.source.utc_offset;
  // get the day it is for the user following me (0=Sunday, 6=Saturday)
  let dayIndex: number = moment().utcOffset(utcOffest).day();
  // get the name of the day of the week
  let dayOfWeek: string = weekdays[dayIndex];
  // setup a direct message
  let dm: string = `Hi ${real_name}, thanks for following me. I hope you're having a great ${dayOfWeek}!`
  // ignore the follow back
  if (screen_name !== process.env.T_MY_NAME) {
    // follow the user back
    T.post('friendships/create', { screen_name: screen_name });
    // send them a DM
    T.post('direct_messages/new', { screen_name: screen_name, text: dm });
  }
});