'use strict';
import env = require('dotenv');
import Twit = require('twit');
import moment = require('moment');

let T: Twit,
    stream: Twit.Stream;

// grab all the secrets
env.config();

export = {
    followUser,
    sendMessage,
    startMessagingNewFollowers,
    stopMessagingNewFollowers
}

/**
 * When a user follows you, follow them back and send a message
 * 
 * @param {string} [msg] - the message to send. 
 * Defaults to `Hi ${user.name}, thanks for following me. I hope you're having a great ${dayOfWeek}!`; 
 */
function startMessagingNewFollowers(msg?: string): void {
    getUserStream().on('follow', onFollow);

    function onFollow(data: any): void {
        let follower: Twit.Twitter.User = data.source;
        // if this is NOT the follow back event, follow the user back and send a message
        if (follower.screen_name !== process.env.T_MY_NAME) {
            // NOTE: followUser() will trigger another 'follow' event, hence the enclosing if statement
            followUser(follower);
            sendMessage(follower, msg);
        }
    }
}

/**
 * Follows a user
 * 
 * @param {Twit.Twitter.User} user - the user to follow.
 */
function followUser(user: Twit.Twitter.User): void {
    getT().post('friendships/create', { screen_name: user.screen_name });
}

/**
 * Sends a direct message (DM) to a user.
 * 
 * @param {Twit.Twitter.User} user - the user to message
 * @param {string} [msg] - the message to send. 
 * Defaults to `Hi ${firstName}, thanks for following me! I hope you're having a great ${dayOfWeek}.`; 
 */
function sendMessage(user: Twit.Twitter.User, msg?: string) {
    let dayOfWeek: string = getDayOfWeek(user.utc_offset);
    msg = msg || `Hi ${user.name.split(' ')[0]}, thanks for following me! I hope you're having a great ${dayOfWeek}.`;
    getT().post('direct_messages/new', { screen_name: user.screen_name, text: msg });
}

/**
 * Stops tracking new followers
 */
function stopMessagingNewFollowers(): void {
    getUserStream().stop();
}

/**
 * Gets the current day of the week for a given UTC offset
 * @private
 * 
 * @param {number} utcOffset - the offset to apply to the date
 * @returns {string} - full name of the current weekday for the given UTC offset
 */
function getDayOfWeek(utcOffset: number): string {
    let weekdays: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    // get the day that it is for the user following me (0=Sunday, 6=Saturday)
    let dayIndex: number = moment(new Date()).utcOffset(utcOffset).day();
    console.log(utcOffset)
    // get the name of the day of the week
    return weekdays[dayIndex];
}

/**
 * Gets an instance of Twit
 * @private
 * 
 * @returns {Twit} an instance of Twit
 */
function getT(): Twit {
    // if we don't already have a Twit instance
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

/**
 * Gets a user stream from the Twitter Streaming API
 * @private 
 * 
 * @returns {Twit.Stream} - a user stream
 */
function getUserStream(): Twit.Stream {
    if (!stream) {
        stream = <Twit.Stream>getT().stream("user")
    }
    return stream;
}