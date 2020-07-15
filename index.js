const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const e = require("express");

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended: true
  }));
  const C = [];
  const A = ['Item A1','Item A2','Item A3','Item A4','Item A5','Item A6'];
  const B = ['Item B1','Item B2','Item B3','Item B4','Item B5','Item B6'];
  app.get("/", function(req, res) {
        res.render('index', {
            data: A
             });
  });
  app.post("/", function(req, res) {
    if(req.body.select == 'A'){
        C = A;
    }else{
        C = B;
    }
      res.render('index', {
        data: C
         });
         res.status(200)
         console.log(req.body+C)

});
app.listen(process.env.PORT || 3000, function() {
});