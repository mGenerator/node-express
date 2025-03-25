const express = require('express');

const campsiteRouter = express.Router();

campsiteRouter.route('/')
.all((req, res, next) => {
  //.all acts as a catch all response for http all verbs
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  next(); //passes the control of the application routing to the next relevant routing method after this one. otherwise it would stop here
})
.get((req, res) => {
  //for handling http get requests
  res.end("Will send all the campsites to you");
})
.post((req, res) => {
  //for handling http post requests
  res.end(
    `Will add the campsite: ${req.body.name} with description: ${req.body.description}`
  );
})
.put((req, res) => {
  res.statusCode = 403;
  res.end("PUT operation not supported on /campsites.");
})
.delete((req, res) => {
  res.end("Deleting all campsites");
});

module.exports = campsiteRouter;