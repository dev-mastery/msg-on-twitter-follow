/** @module twitBot  */
'use strict';
import env = require('dotenv');
import Twit = require('twit');
import moment = require('moment');

export = {
    followUser, 
    sendMessage, 
    startMessagingNewFollowers, 
    stopMessagingNewFollowers 
}

/////////////////////////////

let T: Twit,
    stream: Twit.Stream;

// grab all environment variables (including the very secret, hush, hush ones)
env.config();

/**
 * When a user follows you, follow them back and send a message
 * 
 * @param {string} [msg] - the message to send. 
 * Defaults to the environment variable: `process.env.T_GREETING`.
 * Can also use merge tags in the form, `%FIELD_NAME%` where `FIELD_NAME` is one of:
 * `DAY_OF_WEEK`, `FIRST_NAME`, or the upper case form of any Twitter User field
 * found at: https://dev.twitter.com/overview/api/users
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
 * Follows a user.
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
 * Defaults to the environment variable: `process.env.T_GREETING`.
 * Can also use merge tags in the form, `%FIELD_NAME%`
 */
function sendMessage(user: Twit.Twitter.User, msg?: string) {
    let mergedMessage: string;
    msg = msg || <string>process.env.T_GREETING;
    mergedMessage = mergeMessage(user, msg);
    getT().post('direct_messages/new', { screen_name: user.screen_name, text: mergedMessage });
}

/**
 * Stops tracking new followers
 */
function stopMessagingNewFollowers(): void {
    getUserStream().stop();
}

/**
 * Merges user details into the message by using merge tags in the form,
 * `%FIELD_NAME%` where `FIELD_NAME` is one of
 * `DAY_OF_WEEK`, `FIRST_NAME`, or the upper case form of any Twitter User field
 * found at: https://dev.twitter.com/overview/api/users
 * @private
 * 
 * @param {Twit.Twitter.User} user - a Twitter user whose details you'd like to include in a message.
 * @param {string} msg - the message into which you wish to merge user details.
 */
function mergeMessage(user: Twit.Twitter.User, msg: string): string {
    let mergedMessage = msg;
    if (msg.indexOf("%DAY_OF_WEEK%") > -1) {
        let offset: number = adjustOffset(user.utc_offset),
            dayOfWeek: string = getDayOfWeek(offset);
        mergedMessage = mergedMessage.replace("%DAY_OF_WEEK%", dayOfWeek);
    }
    
    if(msg.indexOf("%FIRST_NAME%") > -1) {
        let firstName = user.name.split(' ')[0];
        mergedMessage = mergedMessage.replace("%FIRST_NAME%", firstName);
    }
    
    // map merge tags to user fields.
    Object.keys(user).forEach(v => mergedMessage = mergedMessage.replace(`%${v.toUpperCase()}%`, user[v]));
    
    return mergedMessage;
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

/**
 * Gets an instance of Twit
 * @private
 * 
 * @returns {Twit} - an instance of Twit
 */
function getT(): Twit {
    // if we don't already have a Twit instance
    if (!T) {
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
 * Helper function for working with momentjs that 
 * converts a utc offset from seconds to minutes and avoids hours.
 * @private
 * 
 * @param {number} utcOffsetInSeconds - the utc offset in seconds, as provided by Twitter
 * @returns {number} - the UTC offset in minutes. 
 */
function adjustOffset(utcOffsetInSeconds: number): number {
    // convert utc offset from seconds to minutes (don't divide 0!)
    let offset = (utcOffsetInSeconds !== 0) ? utcOffsetInSeconds / 60 : utcOffsetInSeconds;
    
    // momentjs interprets values between -16 and 16 as hours instead of minutes. So we adjust accordingly. 
    // I don't think this will ever happen because offsets are generally not expressed 
    // to this degree of precision. But, just in case, this *hack* is precise enough for our purposes (for now).
    if (offset >= -16 && offset <= 16) {
        offset = 0;
    }
    return offset;
}

/**
 * Gets the current day of the week for a given UTC offset
 * @private
 * 
 * @param {number} utcOffset - the offset to apply to the date
 * @returns {string} - full name of the current weekday for the given UTC offset
 */
function getDayOfWeek(utcOffsetInMinutes: number): string {
    let weekdays: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    // get the day that it is for the user following me (0=Sunday, 6=Saturday)
    let dayIndex: number = moment().utc().utcOffset(utcOffsetInMinutes).day();
    // get the name of the day of the week
    return weekdays[dayIndex];
}