'use strict';
import env = require('dotenv');
import Twit = require('twit');
import moment = require('moment');

// grab all my secrets
env.config();

export = {
    messageNewFollower
}

function messageNewFollower(msg?: string): void {

    const T = new Twit({
        consumer_key: process.env.T_CONSUMER_KEY,
        consumer_secret: process.env.T_CONSUMER_SECRET,
        access_token: process.env.T_ACCESS_TOKEN,
        access_token_secret: process.env.T_ACCESS_TOKEN_SECRET,
        timeout_ms: 60 * 1000,  // optional HTTP request timeout to apply to all requests. 
    });

    // setup a user stream, as per Twitter's Streaming API (https://dev.twitter.com/streaming/overview)
    let stream = T.stream('user');

    // when someone new follows me
    stream.on('follow', onFollow);

    function onFollow(data: any): void {
        let follower: Twit.Twitter.User = data.source;
        followBack(T, follower);
        sendMessage(T, follower, msg)
    }
}

function followBack(T: Twit, follower: any): void {
    T.post('friendships/create', { screen_name: follower.screen_name });
}

function sendMessage(T: Twit, follower: any, msg?: string) {
    let dayOfWeek: string = getDayOfWeek(follower.utc_offset);
    msg = msg || `Hi ${follower.name}, thanks for following me. I hope you're having a great ${dayOfWeek}!`;
    T.post('direct_messages/new', { screen_name: follower.screen_name, text: msg });
}

function getDayOfWeek(utcOffset: number): string {
    let weekdays: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    // get the day that it is for the user following me (0=Sunday, 6=Saturday)
    let dayIndex: number = moment().utcOffset(utcOffset).day();
    // get the name of the day of the week
    return weekdays[dayIndex];
}
