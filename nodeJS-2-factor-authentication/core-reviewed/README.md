<!--![Authy](https://raw.githubusercontent.com/AuthySE/Authy-demo/master/authy-logo.png)-->

# Authy 2FA and Phone Verification

This exercise has been code reviewed officially with Authy and the  writer - Alex!

A simple NodeJS and AngularJS implementation of a website that uses Authy to protect all assets within a folder.  

This app uses MongoDB as a data store.  You may have to install that as well and make sure it is up and running.

#### 2FA Demo
- URL path "/protected" is protected with both user session and Authy 2FA
- Authy OneCode (SMS and Voice)
- Authy SoftTokens
- Authy OneTouch (via polling)

#### Phone Verification
- Phone Verification
- SMS or Voice Call

### Setup
- Run `npm install`
- Register for a [Twilio Account](https://www.twilio.com/).
- Setup an Authy app via the [Twilio Console](https://twilio.com/console).
- Grab an Authy API key from the Authy dashboard and save it in your demo.env
- Load the demo.env environmental variables into your shell `source demo.env`
- Check and make sure MongoDB is up and running
- Run `nodemon .` or `node .` from the repo to run the app
- BINGO! You are up and runnning !

