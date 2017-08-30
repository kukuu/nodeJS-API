# TOKEN based Authentication

Authentication is one of the big parts of every application. Security is always something that is changing and evolving. In the past, we have gone over Node authentication using the great Passport npm package.

However, session based authentication has problems as they do not scale very well, with Web Services API that can be consumed across many devices and services.

In this exercise, I will be showing how to build  a very simple Node API using tokens to authenticate users that request access.


## The work flow:

We'll build a quick API using Node and Express and we'll be using POSTman to test it.


1. Have unprotected and protected routes

2. A user will authenticate by passing in a name and a password and get back a token

3. The user will store this token on their client-side and send it for every request

4. We will validate this token, and if all is good, pass back information in JSON format



## Our API will be built with:

1. Normal routes (not authenticated)

2. Route to authenticate a user and password and get a token

3. Route middleware to authenticate the token

4. Authenticated routes to get all users


## Tools Needed

1. node and npm

2. POSTman

## Requirements

- node and npm



## File Structure

- app/

----- models/

---------- user.js

- config.js

- package.json

- server.js


## Usage


1. Install dependencies: `npm install`

2. Change SECRET in `config.js`

3. Add your own MongoDB database to `config.js`

4. Start the server: `node server.js`

5. Create sample user by visiting: `http://localhost:8080/setup`

Once everything is set up, we can begin to use our app by creating and verifying tokens.


### Getting a Token

Send a `POST` request to `http://localhost:8080/api/authenticate` with test user parameters as `x-www-form-urlencoded`. 

```
  {
    name: 'Luca Trinca',
    password: 'password'
  }
```


### Verifying a Token and Listing Users

Send a `GET` request to `http://localhost:8080/api/users` with a header parameter of `x-access-token` and the token.

You can also send the token as a URL parameter: `http://localhost:8080/api/users?token=YOUR_TOKEN_HERE`

Or you can send the token as a POST parameter of `token`.


# Set Up Our Node Application 

1. First, we need to set up our package.json file. This is our beginning file for our Node application.

```
{
  "name": "node-token-jwt",
  "main": "server.js"
}


2.  Install our packages.

``` 

$ npm install express body-parser morgan mongoose jsonwebtoken --save


```

i. express is the popular Node framework

ii. mongoose is how we interact with our MongoDB database

iii. morgan will log requests to the console so we can see what is happening

iv. body-parser will let us get parameters from our POST requests

v. jsonwebtoken is how we create and verify our JSON Web Tokens


3. User Model (app/models/user.js)

The user model that we define will be used when creating and getting users. The schema will be defined here as well. To create a Mongoose model, let's create the file app/models/user.js


get an instance of mongoose and mongoose.Schema

```
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

```
// set up a mongoose model and pass it using module.exports

```
module.exports = mongoose.model('User', new Schema({ 
    name: String, 
    password: String, 
    admin: Boolean 
}));

```

4. Config File (config.js)

 This is where we can store different variables and configuration for our application. For this file, you will need to create MongoDB database.

```
module.exports = {

    'secret': 'ilovesJS',
    'database': 'mongodb://noder:noderauth&54;proximus.modulusmongo.net:27017/so9pojyN'

};

```

i. secret: used when we create and verify JSON Web Tokens

ii. database: the URI with username and password to your MongoDB installation

5.  server.js

A. 

i. Grab All the Packages This will include the packages we installed earlier (express, body-parser, morgan, mongoose, and jsonwebtoken) and also we'll be grabbing the model and config that we created.

ii. Configure Our Application We will set our important variables, configure our packages, and connect to our database here.

iii. Create Basic Routes These are the unprotected routes like the home page (http://localhost:8080). We'll also create a /setup route here so that we can create a sample user in our new database. For initial test purposes we create a test-user in the server.js. This should be saved to the db


B.

Create API Routes This includes the following routes:

i. POST http://localhost:8080/api/authenticate Check name and password against the database and provide a token if authentication successful. This route will not require a token because this is where we get the token.

ii. GET http://localhost:8080/api Show a random message. This route is protected and will require a token.

iii. GET http://localhost:8080/api/users List all users. This route is protected and will require a token.


```

