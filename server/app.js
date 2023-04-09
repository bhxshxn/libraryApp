var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var XLSX = require('xlsx');
var multer = require('multer');
var cors = require('cors')

//multer
var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './public/uploads')
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname)
	}
});

var upload = multer({ storage: storage });

//connect to db
const url = "mongodb+srv://bhxshxn:bhxshxn9@cluster0.ixoza.mongodb.net/LibraryApp?retryWrites=true&w=majority"
mongoose.connect(url, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
	console.log('Database is connected successfully on port 27017!!!');
});

//init app
var app = express();

//set the template engine
app.set('view engine', 'ejs');

//fetch data from the request
app.use(express.json())
app.use(cors())
//static folder path
app.use(express.static(path.resolve(__dirname, 'public')));

//collection schema
var bookSchema = new mongoose.Schema({
	accNo: Number,
	author: String,
	title: String,
	count: Number,
	price: String,
	dateOfAcc: String,
	vendor: String,
	billNo: String,
	year: String,
	publisher: String,
	place: String,
	pages: Number,
	subject: String,
	semester: String
});

var booksModel = mongoose.model('Books', bookSchema);


app.post('/book', async (req, res) => {
	if (req.params.search !== '') {
		await booksModel.find({ title: { $regex: `.*${req.body.search}.`, $options: "i" } }).then((data) => {
			res.send(data).status(200);
		}).catch((err) => { res.send({ msg: err.msg }).status(501); })
	} else {
		await booksModel.find().then((data) => {
			res.send(data).status(200);
		}).catch((err) => { res.send({ msg: err.msg }).status(501); })
	}
});

app.get('/uploadBooksExcel', (req, res) => {
	excelModel.find((err, data) => {
		if (err) {
			console.log(err)
		} else {
			if (data != '') {
				res.render('home', { result: data });
			} else {
				res.render('home', { result: {} });
			}
		}
	});
});

app.post('/singleBook', async (req, res) => {
	const { id } = req.body
	await booksModel.find({ _id: id }).then((data) => {
		res.send(data).status(200);
	}).catch((err) => { res.send({ msg: err.msg }).status(501); })
});

app.post('/', upload.single('excel'), (req, res) => {
	var workbook = XLSX.readFile(req.file.path);
	var sheet_namelist = workbook.SheetNames;
	var x = 0;
	sheet_namelist.forEach(element => {
		var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_namelist[x]]);
		booksModel.insertMany(xlData, (err, data) => {
			if (err) {
				console.log(err);
			} else {
				console.log(data);
			}
		})
		x++;
	});
	res.redirect('/');
});

//assign port
var port = process.env.PORT || 5000;
app.listen(port, () => console.log('server run at ' + port));
