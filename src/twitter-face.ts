'use strict';
import env = require('dotenv');
import Twit = require('twit');
import moment = require('moment');
import { Readable } from 'stream';

let T: Twit;
let stream: Twit.Twitter.Stream;
env.config();

export = {
    followUser,
    sendMessage,
    startMessagingNewFollowers,
    stopMessagingNewFollowers
}

function startMessagingNewFollowers(msg?: string): void {

    // when someone new follows me
    getUserStream().on('follow', onFollow);

    function onFollow(data: any): void {
        let follower: Twit.Twitter.User = data.source;
        followUser(follower);
        sendMessage(follower, msg)
    }
}

function followUser(user: Twit.Twitter.User): void {
    getT().post('friendships/create', { screen_name: user.screen_name });
}

function sendMessage(user: Twit.Twitter.User, msg?: string) {
    let dayOfWeek: string = getDayOfWeek(user.utc_offset);
    msg = msg || `Hi ${user.name}, thanks for following me. I hope you're having a great ${dayOfWeek}!`;
    getT().post('direct_messages/new', { screen_name: user.screen_name, text: msg });
}

function stopMessagingNewFollowers(): void {
    getUserStream().stop();
}

function getDayOfWeek(utcOffset: number): string {
    let weekdays: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    // get the day that it is for the user following me (0=Sunday, 6=Saturday)
    let dayIndex: number = moment(new Date()).utcOffset(utcOffset).day();
    console.log(utcOffset)
    // get the name of the day of the week
    return weekdays[dayIndex];
}

function getT(): Twit {
    if (!T) {
        console.log("T set");
        T = new Twit({
            consumer_key: process.env.T_CONSUMER_KEY,
            consumer_secret: process.env.T_CONSUMER_SECRET,
            access_token: process.env.T_ACCESS_TOKEN,
            access_token_secret: process.env.T_ACCESS_TOKEN_SECRET,
            timeout_ms: 60 * 1000,  // optional HTTP request timeout to apply to all requests. 
        });
    }
    return T;
}

function getUserStream(): Twit.Twitter.Stream {
    if(!stream) {
        stream = <Twit.Twitter.Stream>getT().stream("user")
    }
    return stream;
}