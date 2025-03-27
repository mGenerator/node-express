const express = require("express");
const morgan = require("morgan");
const campsiteRouter = require('./routes/campsiteRouter');
const promotionRouter = require('./routes/promotionRouter');
const partnerRouter = require('./routes/partnerRouter');

const hostname = "localhost";
const port = 3000;

const app = express();
app.use(morgan("dev")); //middleware that i think handles logging the request headers
app.use(express.json()); //middleware json parser

app.use('/campsites', campsiteRouter);
app.use('/promotions', promotionRouter);//tells the server to use this as entry point
app.use('/partners', partnerRouter);

app.use(express.static(__dirname + "/public")); //setting point for serving static files

app.use((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<html><body><h1>This is an Express Server</h1></body></html>");
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
