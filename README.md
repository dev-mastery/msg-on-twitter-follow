# msg-on-twitter-follow

A simple app that follows users back and sends them a direct message on Twitter.

**PLEASE NOTE:** This app was made for training and demo purposes, please do not use in a real production environment.

##Prerequisites
**Twitter App Account**

See [Twitter Apps](http://apps.twitter.com) for instructions.

**Node**

See [nodejs.org](https://nodejs.org) for instructions.

**TypeScript**

`npm install -g typescript`

##Setup

Create a `.env` file in the root directory, using your own info, with the following structure:

    T_MY_NAME = AwesomeTwit
    T_GREETING = Hey %FIRST_NAME%, thanks for the follow! I hope you're having an awesome %DAY_OF_WEEK%. Message me any time!
    T_CONSUMER_KEY = XXX
    T_CONSUMER_SECRET = XXX
    T_ACCESS_TOKEN = XXX
    T_ACCESS_TOKEN_SECRET = XXX

For more info on `.env` see [dotenv](https://www.npmjs.com/package/dotenv)

##Run

    git clone https://github.com/dev-mastery/msg-on-twitter-follow.git
    cd msg-on-twitter-follow
    tsc
    npm install
    touch ".env"
    #edit your .env file
    npm start