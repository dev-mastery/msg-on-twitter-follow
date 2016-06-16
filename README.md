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

Edit the included `dotenv-sample.txt` file and save it as `.env` in the root directory
Your `.env` file should have the following structure (with your own info, of course):

    T_MY_NAME = YourTwitterUsername
    T_GREETING = default message to send when someone follows you
    T_CONSUMER_KEY = Your Twitter API Consumer Key
    T_CONSUMER_SECRET = Your Twitter API Consumer Secret
    T_ACCESS_TOKEN = Your Twitter API Access Token
    T_ACCESS_TOKEN_SECRET = Your Twitter API Access Token Secret

For more info on `.env` see [dotenv](https://www.npmjs.com/package/dotenv)

##Run

    git clone https://github.com/dev-mastery/msg-on-twitter-follow.git
    cd msg-on-twitter-follow
    #edit dotenv-sample.txt and rename to .env as per setup instructions
    tsc
    npm install
    npm start