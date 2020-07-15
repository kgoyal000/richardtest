const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const e = require("express");
const { request } = require("express");

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
	extended: true
}));

function paginate(array, page_size, page_number) {
	return array.slice((page_number - 1) * page_size, page_number * page_size);
  }
var C = [];
var A = ['Item A1', 'Item A2', 'Item A3', 'Item A4', 'Item A5', 'Item A6'];
var B = ['Item B1', 'Item B2', 'Item B3', 'Item B4', 'Item B5', 'Item B6'];
var pagination = paginate(A, 3, 1)

app.get("/", function (req, res) {
	res.render('index', {
		data: pagination
	});
});

app.post("/", function (req, res) {
	if (req.body.select == 'A') {
		C = A;
	} else {
		C = B;
	}
	pagination = paginate(C, 3, req.body.page)
	console.log(req.body.page+"   "+req.body.select+"  "+ pagination)
	res.render('index', {
		data: pagination
	});
	res.status(200)

});
app.listen(process.env.PORT || 3000, function () {});