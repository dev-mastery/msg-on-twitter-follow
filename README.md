# msg-on-twitter-follow

**PLEASE NOTE:** This app was made for training and demo purposes, please do not use in a real production environment.

A simple app that follows users back and sends them a direct message on Twitter.

##Prerequisites
**Twitter App Account**

See [Twitter Apps](http://apps.twitter.com) for instructions.

**Node**

See [nodejs.org](https://nodejs.org) for instructions.

**TypeScript**

`npm install -g typescript`

##Setup

Modify the `.env` file to include your username and Twitter App keys.

##Run

    git clone https://github.com/dev-mastery/msg-on-twitter-follow.git
    cd msg-on-twitter-follow/src
    tsc
    cd ../dist
    npm install
    npm start