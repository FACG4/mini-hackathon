const express = require('express');
const app =express()
const controllers = require('./controllers');
const bodyParser = require('body-parser');
const exhbs = require('express-handlebars');
const path = require('path');
const favicon = require('serve-favicon');

const fileUpload = require('express-fileupload');
const helpers = require("./views/helpers/index");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'hbs');
app.engine(
	"hbs",
	exhbs({
		extname: "hbs",
		layoutsDir: path.join(__dirname, "views", "layouts"),
		partialsDir: path.join(__dirname, "views", "partials"),
		defaultLayout: "main",
		helpers
	})
);
app.use(fileUpload())
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.static(path.join(__dirname, 'database','images')));
app.use(express.static(path.join(__dirname, 'database','profile_images')));
app.use(favicon(path.join(__dirname, '..', 'favicon.ico')));




app.use(controllers)
module.exports=app
