# msg-on-twitter-follow

A simple app that follows users back and sends them a direct message on Twitter.

##Prerequisites
**Twitter App Account**

See [Twitter Apps](http://apps.twitter.com) for instructions.

**Node**

See [nodejs.org](https://nodejs.org) for instructions.

**TypeScript**

`npm install -g typescript`

##Setup
Clone the repo.

    git clone https://github.com/dev-mastery/msg-on-twitter-follow.git

Edit the included `dotenv-sample.txt` file and save it as `.env` in the cloned root directory `~\msg-on-twitter-follow`. 
Your `.env` file should have the following structure (with your own info, of course):

    T_MY_NAME = YourTwitterUsername
    T_GREETING = default message to send when someone follows you
    T_CONSUMER_KEY = Your Twitter API Consumer Key
    T_CONSUMER_SECRET = Your Twitter API Consumer Secret
    T_ACCESS_TOKEN = Your Twitter API Access Token
    T_ACCESS_TOKEN_SECRET = Your Twitter API Access Token Secret

For more info on `.env` see [dotenv](https://www.npmjs.com/package/dotenv)

##Run
Before running the following commands, please ensure you have the Prerequisites and have followed the Setup instryctions! 
From the cloned directory. 

    tsc
    npm install
    npm start

<a name="module_twitBot"></a>
## twitBot API

* [twitBot](#module_twitBot)
    * [~startMessagingNewFollowers([msg])](#module_twitBot..startMessagingNewFollowers)
    * [~followUser(user)](#module_twitBot..followUser)
    * [~sendMessage(user, [msg])](#module_twitBot..sendMessage)
    * [~stopMessagingNewFollowers()](#module_twitBot..stopMessagingNewFollowers)

<a name="module_twitBot..startMessagingNewFollowers"></a>

### twitBot~startMessagingNewFollowers([msg])
When a user follows you, follow them back and send a message

**Kind**: inner method of <code>[twitBot](#module_twitBot)</code>  

| Param | Type | Description |
| --- | --- | --- |
| [msg] | <code>string</code> | the message to send. Defaults to the environment variable: `process.env.T_GREETING`. Can also use merge tags in the form, `%FIELD_NAME%` where `FIELD_NAME` is one of: `DAY_OF_WEEK`, `FIRST_NAME`, or the upper case form of any Twitter User field found at: https://dev.twitter.com/overview/api/users |

<a name="module_twitBot..followUser"></a>

### twitBot~followUser(user)
Follows a user.

**Kind**: inner method of <code>[twitBot](#module_twitBot)</code>  

| Param | Type | Description |
| --- | --- | --- |
| user | <code>Twit.Twitter.User</code> | the user to follow. |

<a name="module_twitBot..sendMessage"></a>

### twitBot~sendMessage(user, [msg])
Sends a direct message (DM) to a user.

**Kind**: inner method of <code>[twitBot](#module_twitBot)</code>  

| Param | Type | Description |
| --- | --- | --- |
| user | <code>Twit.Twitter.User</code> | the user to message |
| [msg] | <code>string</code> | the message to send. Defaults to the environment variable: `process.env.T_GREETING`. Can also use merge tags in the form, `%FIELD_NAME%` |

<a name="module_twitBot..stopMessagingNewFollowers"></a>

### twitBot~stopMessagingNewFollowers()
Stops tracking new followers

**Kind**: inner method of <code>[twitBot](#module_twitBot)</code>  

##License 
Copyright (c) 2016 Dev Mastery

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
