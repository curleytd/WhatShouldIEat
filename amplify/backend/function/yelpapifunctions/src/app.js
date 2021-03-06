/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/


/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION

Amplify Params - DO NOT EDIT */

var express = require('express')
var bodyParser = require('body-parser')
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// declare a new express app
var app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
});


/**********************
 * Example get method *
 **********************/

app.get('/yelp', function(req, res) {
  const yelp = require('yelp-fusion');
  const client = yelp.client('qXiT_AqB2jMdw-kCO6nM_ykuvl6z3FO6GXfXWmNbLBnal6zsCiMLech8MicwoSgRWSUBIA5cYPaVH9BR_BzjV4efynw4NWzfxe_7y8jMMTPTD4j187COT4ruwXyoXXYx');

  client.search({
    categories: 'restaurant',
    location: req.query.location,
  }).then(response => {
    return response.jsonBody.businesses;
  }).catch(e => {
    console.log(e);
  });
});

app.get('/yelp/*', function(req, res) {
  const yelp = require('yelp-fusion');
  const client = yelp.client('qXiT_AqB2jMdw-kCO6nM_ykuvl6z3FO6GXfXWmNbLBnal6zsCiMLech8MicwoSgRWSUBIA5cYPaVH9BR_BzjV4efynw4NWzfxe_7y8jMMTPTD4j187COT4ruwXyoXXYx');

  client.search({
    categories: 'restaurant',
    location: req.query.location,
  }).then(response => {
    return response.jsonBody.businesses;
  }).catch(e => {
    console.log(e);
  });
});

/****************************
* Example post method *
****************************/

app.post('/yelp', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

app.post('/yelp/*', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

/****************************
* Example put method *
****************************/

app.put('/yelp', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

app.put('/yelp/*', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

/****************************
* Example delete method *
****************************/

app.delete('/yelp', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.delete('/yelp/*', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
