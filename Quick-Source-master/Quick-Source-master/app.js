const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const port = 3000;
const Grid = require('gridfs-stream');
const multer = require('multer');
const crypto = require('crypto');
const fs = require('fs');
const { error } = require('console');
const app = express();
const { GridFsStorage } = require('multer-gridfs-storage');





// Connect to MongoDB using Mongoose
// mongoose.connect("mongodb://127.0.0.1:27017/Quick_Source", { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect('mongodb://127.0.0.1:27017/Quick_source', { useNewUrlParser: true, useUnifiedTopology: true });

// const conn = mongoose.connection;

// Create a GridFS storage engine
const storage = new GridFsStorage({
	url: 'mongodb://127.0.0.1:27017/Quick_source',
	options: { useNewUrlParser: true, useUnifiedTopology: true },
	file: (req, file) => {
		return {
			filename: file.originalname,
			bucketName: 'pdfs'
		};
	}
});

const sem1 = multer({ storage });
const sem2 = multer({ storage });
const sem3 = multer({ storage });
const sem4 = multer({ storage });
const sem5 = multer({ storage });
const sem6 = multer({ storage });
const sem7 = multer({ storage });
const sem8 = multer({ storage });


// Create a schema for the sem one  files
const Semester_one_Schema = new mongoose.Schema({
	Name: String,
	filename: String,
	contentType: String,
	size: Number,
	uploadDate: Date,
	data: Buffer
});

// Create a schema for the sem 2  files
const Semester_two_Schema = new mongoose.Schema({
	filename: String,
	contentType: String,
	size: Number,
	uploadDate: Date,
	data: Buffer
});

// Create a schema for the sem 3  files
const Semester_three_Schema = new mongoose.Schema({
	filename: String,
	contentType: String,
	size: Number,
	uploadDate: Date,
	data: Buffer
});

// Create a schema for the sem 4  files
const Semester_four_Schema = new mongoose.Schema({
	filename: String,
	contentType: String,
	size: Number,
	uploadDate: Date,
	data: Buffer
});

// Create a schema for the sem 5  files
const Semester_five_Schema = new mongoose.Schema({
	filename: String,
	contentType: String,
	size: Number,
	uploadDate: Date,
	data: Buffer
});

// Create a schema for the sem 6  files
const Semester_six_Schema = new mongoose.Schema({
	filename: String,
	contentType: String,
	size: Number,
	uploadDate: Date,
	data: Buffer
});

// Create a schema for the sem 7  files
const Semester_seven_Schema = new mongoose.Schema({
	filename: String,
	contentType: String,
	size: Number,
	uploadDate: Date,
	data: Buffer
});

// Create a schema for the sem 8  files
const Semester_eight_Schema = new mongoose.Schema({
	Name: String,
	filename: String,
	contentType: String,
	size: Number,
	uploadDate: Date,
	data: Buffer
});



// Schema for sign up page 
var signupSchema = new mongoose.Schema({
	Name: {
		type: String,
		// required: true
	},
	lastname: {
		type: String,
		// required: true
	},
	email: {
		type: String,
		// required: true,
		unique: true
	},
	mobile_no: {
		type: Number,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	confirm_password: {
		type: String,
		required: true
	}

})


// admin login schema 
var adminloginschema = new mongoose.Schema({
	UserName: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	}
});


// Create a model for the books from sem 1 to 8 files
const Semester_one = mongoose.model('Semester_one', Semester_one_Schema);
const Semester_two = mongoose.model('Semester_two', Semester_one_Schema);
const Semester_three = mongoose.model('Semester_three', Semester_one_Schema);
const Semester_four = mongoose.model('Semester_four', Semester_one_Schema);
const Semester_five = mongoose.model('Semester_five', Semester_one_Schema);
const Semester_six = mongoose.model('Semester_six', Semester_one_Schema);
const Semester_seven = mongoose.model('Semester_seven', Semester_one_Schema);
const Semester_eight = mongoose.model('Semester_eight', Semester_one_Schema);


// creating model for sign up / registration of users 
var Registereduser = mongoose.model('Registereduser', signupSchema);


// creating model for admin login page schemas 
var Adminloginpanel = mongoose.model('Adminloginpanel', adminloginschema);




// middle ware to bring data to database
// app.use(bodyParser.json);
app.use(bodyParser.urlencoded({
	extended: true
}));




// upload route for semester one 
app.post('/upload', sem1.single('pdf'), async (req, res) => {
	try {
		const pdf = new Semester_one({
			Name: req.body.Name,
			filename: req.file.originalname,
			contentType: req.file.mimetype,
			size: req.file.size,
			uploadDate: new Date(),
			data: req.file.buffer
		});
		await pdf.save();
		res.send('File uploaded successfully!');
	} catch (error) {
		res.status(500).send(`Internal server error ${error}`);
	}
});

// upload route for semester two 
app.post('/upload_2', sem2.single('pdf'), async (req, res) => {
	try {
		const pdf = new Semester_two({
			filename: req.file.originalname,
			contentType: req.file.mimetype,
			size: req.file.size,
			uploadDate: new Date(),
			data: req.file.buffer
		});
		await pdf.save();
		res.send('File uploaded successfully!');
	} catch (error) {
		res.status(500).send(`Internal server error ${error}`);
	}
});


// upload route for semester three 
app.post('/upload_3', sem3.single('pdf'), async (req, res) => {
	try {
		const pdf = new Semester_three({
			filename: req.file.originalname,
			contentType: req.file.mimetype,
			size: req.file.size,
			uploadDate: new Date(),
			data: req.file.buffer
		});
		await pdf.save();
		res.send('File uploaded successfully!');
	} catch (error) {
		res.status(500).send(`Internal server error ${error}`);
	}
});

// upload route for semester four 
app.post('/upload_4', sem4.single('pdf'), async (req, res) => {
	try {
		const pdf = new Semester_four({
			filename: req.file.originalname,
			contentType: req.file.mimetype,
			size: req.file.size,
			uploadDate: new Date(),
			data: req.file.buffer
		});
		await pdf.save();
		res.send('File uploaded successfully!');
	} catch (error) {
		res.status(500).send(`Internal server error ${error}`);
	}
});


// upload route for semester five 
app.post('/upload_5', sem5.single('pdf'), async (req, res) => {
	try {
		const pdf = new Semester_five({
			filename: req.file.originalname,
			contentType: req.file.mimetype,
			size: req.file.size,
			uploadDate: new Date(),
			data: req.file.buffer
		});
		await pdf.save();
		res.send('File uploaded successfully!');
	} catch (error) {
		res.status(500).send(`Internal server error ${error}`);
	}
});


// upload route for semester six 
app.post('/upload_6', sem6.single('pdf'), async (req, res) => {
	try {
		const pdf = new Semester_six({
			filename: req.file.originalname,
			contentType: req.file.mimetype,
			size: req.file.size,
			uploadDate: new Date(),
			data: req.file.buffer
		});
		await pdf.save();
		res.send('File uploaded successfully!');
	} catch (error) {
		res.status(500).send(`Internal server error ${error}`);
	}
});


// upload route for semester seven 
app.post('/upload_7', sem7.single('pdf'), async (req, res) => {
	try {
		const pdf = new Semester_seven({
			filename: req.file.originalname,
			contentType: req.file.mimetype,
			size: req.file.size,
			uploadDate: new Date(),
			data: req.file.buffer
		});
		await pdf.save();
		res.send('File uploaded successfully!');
	} catch (error) {
		res.status(500).send(`Internal server error ${error}`);
	}
});


// upload route for semester eight 
app.post('/upload_8', sem8.single('pdf'), async (req, res) => {
	try {
		const pdf = new Semester_eight({
			filename: req.file.originalname,
			contentType: req.file.mimetype,
			size: req.file.size,
			uploadDate: new Date(),
			data: req.file.buffer
		});
		await pdf.save();
		res.send('File uploaded successfully!');
	} catch (error) {
		res.status(500).send(`Internal server error ${error}`);
	}
});



// post request for sign up form fot the users 
app.post("/signup", async (req, res) => {
	try {
		const password = req.body.password;
		const c_password = req.body.confirm_password;

		// console.log(pass)
		// console.log(c_password)
		if (password === c_password) {
			const signup = new Registereduser({
				Name: req.body.Name,
				lastname: req.body.lastname,
				email: req.body.email,
				mobile_no: req.body.mobile_no,
				password: req.body.password,
				confirm_password: req.body.confirm_password

			})

			await signup.save();
			res.status(201).sendFile(path.join(__dirname, 'home.html'))

		}
		else {
			res.send("password are not matching")
		}
	}
	catch (error) {
		res.status(400).send(error)
	}
})


// login page post requst handling 
app.post('/login', async (req, res) => {
	try {
		const checkuser = await Registereduser.findOne({ email: req.body.email })
		// console.log(checkuser);
		if (checkuser.password === req.body.password) {
			res.status(201).sendFile(path.join(__dirname, 'home.html'))
		}
		else {
			res.send("Incorrect password ")
		}
	}
	catch (error) {
		res.send(error)
	}
})


// Admin login page post requst handling 
app.post('/adminlogin', async (req, res) => {
	try {
		const admincheck = await Adminloginpanel.findOne({ UserName: req.body.UserName })
		// console.log(admincheck);
		if (admincheck.password === req.body.password) {
			res.status(201).sendFile(path.join(__dirname, 'admin.html'))
		}
		else {
			res.send("Incorrect password ")
		}
	}
	catch (error) {
		res.send(error)
	}
})



// serving the static i.e style and js files 
app.use(express.static('static'));

// serving the html main file 
app.get('/home', (req, res) => {
	res.sendFile(path.join(__dirname, 'home.html'))
});

// serving the logiv page 
app.get('/login', (req, res) => {
	res.sendFile(path.join(__dirname, 'login.html'))
});

// serving the signup page 
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'signup.html'))
});

// serving html admin page 
app.get('/admin', (req, res) => {
	res.sendFile(path.join(__dirname, 'admin.html'))
});

//serving admin login page 
app.get('/adminlogin', (req, res) => {
	res.sendFile(path.join(__dirname, 'adminlogin.html'))
});

// serving the semester books page
app.get('/SemesterBooks', (req, res) => {
	res.sendFile(path.join(__dirname, 'SemesterBooks.html'))
});

// serving the programming books page 
app.get('/programmingBooks', (req, res) => {
	res.sendFile(path.join(__dirname, 'programmingBooks.html'))
});


// Downloding route for sem 1 books 
//------------------------------------------------------------------------------------------------------------------------
app.get('/download-EM1/:id', async (req, res) => {
	try {
		const pdf = await Semester_one.findById(req.params.id);
		// const pdf = await Pdf.findBy(req.body);
		res.set({
			'Content-Type': pdf.contentType,
			'Content-Disposition': `attachment; filename=${pdf.filename}`,
		});
		res.send(pdf.data);
		console.log("downloaded")
	} catch (error) {
		console.log(error);
		res.status(500).send('Internal server error');
	}
});
app.get('/download-EP1/:id', async (req, res) => {
	try {
		const pdf = await Semester_one.findById(req.params.id);
		// const pdf = await Pdf.findBy(req.body);
		res.set({
			'Content-Type': pdf.contentType,
			'Content-Disposition': `attachment; filename=${pdf.filename}`,
		});
		res.send(pdf.data);
		console.log("downloaded")
	} catch (error) {
		console.log(error);
		res.status(500).send('Internal server error');
	}
});
app.get('/download-EC1/:id', async (req, res) => {
	try {
		const pdf = await Semester_one.findById(req.params.id);
		// const pdf = await Pdf.findBy(req.body);
		res.set({
			'Content-Type': pdf.contentType,
			'Content-Disposition': `attachment; filename=${pdf.filename}`,
		});
		res.send(pdf.data);
		console.log("downloaded")
	} catch (error) {
		console.log(error);
		res.status(500).send('Internal server error');
	}
});
app.get('/download-BEE/:id', async (req, res) => {
	try {
		const pdf = await Semester_one.findById(req.params.id);
		// const pdf = await Pdf.findBy(req.body);
		res.set({
			'Content-Type': pdf.contentType,
			'Content-Disposition': `attachment; filename=${pdf.filename}`,
		});
		res.send(pdf.data);
		console.log("downloaded")
	} catch (error) {
		console.log(error);
		res.status(500).send('Internal server error');
	}
});
app.get('/download-MEC/:id', async (req, res) => {
	try {
		const pdf = await Semester_one.findById(req.params.id);
		// const pdf = await Pdf.findBy(req.body);
		res.set({
			'Content-Type': pdf.contentType,
			'Content-Disposition': `attachment; filename=${pdf.filename}`,
		});
		res.send(pdf.data);
		console.log("downloaded")
	} catch (error) {
		console.log(error);
		res.status(500).send('Internal server error');
	}
});
app.get('/download-C2/:id', async (req, res) => {
	try {
		const pdf = await Semester_one.findById(req.params.id);
		// const pdf = await Pdf.findBy(req.body);
		res.set({
			'Content-Type': pdf.contentType,
			'Content-Disposition': `attachment; filename=${pdf.filename}`,
		});
		res.send(pdf.data);
		console.log("downloaded")
	} catch (error) {
		console.log(error);
		res.status(500).send('Internal server error');
	}
});
app.get('/download-CPP/:id', async (req, res) => {
	try {
		const pdf = await Semester_one.findById(req.params.id);
		// const pdf = await Pdf.findBy(req.body);
		res.set({
			'Content-Type': pdf.contentType,
			'Content-Disposition': `attachment; filename=${pdf.filename}`,
		});
		res.send(pdf.data);
		console.log("downloaded")
	} catch (error) {
		console.log(error);
		res.status(500).send('Internal server error');
	}
});
app.get('/download-JS/:id', async (req, res) => {
	try {
		const pdf = await Semester_one.findById(req.params.id);
		// const pdf = await Pdf.findBy(req.body);
		res.set({
			'Content-Type': pdf.contentType,
			'Content-Disposition': `attachment; filename=${pdf.filename}`,
		});
		res.send(pdf.data);
		console.log("downloaded")
	} catch (error) {
		console.log(error);
		res.status(500).send('Internal server error');
	}
});

//------------------------------------------------------------------------------------------------------------------------------

// sem 2 book 

app.get('/download-EM2/:id', async (req, res) => {
	try {
		const pdf = await Semester_two.findById(req.params.id);
		// const pdf = await Pdf.findBy(req.body);
		res.set({
			'Content-Type': pdf.contentType,
			'Content-Disposition': `attachment; filename=${pdf.filename}`,
		});
		res.send(pdf.data);
		console.log("downloaded")
	} catch (error) {
		console.log(error);
		res.status(500).send('Internal server error');
	}
});
app.get('/download-EP2/:id', async (req, res) => {
	try {
		const pdf = await Semester_two.findById(req.params.id);
		// const pdf = await Pdf.findBy(req.body);
		res.set({
			'Content-Type': pdf.contentType,
			'Content-Disposition': `attachment; filename=${pdf.filename}`,
		});
		res.send(pdf.data);
		console.log("downloaded")
	} catch (error) {
		console.log(error);
		res.status(500).send('Internal server error');
	}
});
app.get('/download-EC2/:id', async (req, res) => {
	try {
		const pdf = await Semester_two.findById(req.params.id);
		// const pdf = await Pdf.findBy(req.body);
		res.set({
			'Content-Type': pdf.contentType,
			'Content-Disposition': `attachment; filename=${pdf.filename}`,
		});
		res.send(pdf.data);
		console.log("downloaded")
	} catch (error) {
		console.log(error);
		res.status(500).send('Internal server error');
	}
});
app.get('/download-G/:id', async (req, res) => {
	try {
		const pdf = await Semester_two.findById(req.params.id);
		// const pdf = await Pdf.findBy(req.body);
		res.set({
			'Content-Type': pdf.contentType,
			'Content-Disposition': `attachment; filename=${pdf.filename}`,
		});
		res.send(pdf.data);
		console.log("downloaded")
	} catch (error) {
		console.log(error);
		res.status(500).send('Internal server error');
	}
});
app.get('/download-C/:id', async (req, res) => {
	try {
		const pdf = await Semester_two.findById(req.params.id);
		// const pdf = await Pdf.findBy(req.body);
		res.set({
			'Content-Type': pdf.contentType,
			'Content-Disposition': `attachment; filename=${pdf.filename}`,
		});
		res.send(pdf.data);
		console.log("downloaded")
	} catch (error) {
		console.log(error);
		res.status(500).send('Internal server error');
	}
});
//-------------------------------------------------------------------------------------------------------------------------
// sem 3
app.get('/download-EM3/:id', async (req, res) => {
	try {
		const pdf = await Semester_three.findById(req.params.id);
		// const pdf = await Pdf.findBy(req.body);
		res.set({
			'Content-Type': pdf.contentType,
			'Content-Disposition': `attachment; filename=${pdf.filename}`,
		});
		res.send(pdf.data);
		console.log("downloaded")
	} catch (error) {
		console.log(error);
		res.status(500).send('Internal server error');
	}
});
app.get('/download-DS/:id', async (req, res) => {
	try {
		const pdf = await Semester_three.findById(req.params.id);
		// const pdf = await Pdf.findBy(req.body);
		res.set({
			'Content-Type': pdf.contentType,
			'Content-Disposition': `attachment; filename=${pdf.filename}`,
		});
		res.send(pdf.data);
		console.log("downloaded")
	} catch (error) {
		console.log(error);
		res.status(500).send('Internal server error');
	}
});
app.get('/download-CG/:id', async (req, res) => {
	try {
		const pdf = await Semester_three.findById(req.params.id);
		// const pdf = await Pdf.findBy(req.body);
		res.set({
			'Content-Type': pdf.contentType,
			'Content-Disposition': `attachment; filename=${pdf.filename}`,
		});
		res.send(pdf.data);
		console.log("downloaded")
	} catch (error) {
		console.log(error);
		res.status(500).send('Internal server error');
	}
});
app.get('/download-DLCA/:id', async (req, res) => {
	try {
		const pdf = await Semester_three.findById(req.params.id);
		// const pdf = await Pdf.findBy(req.body);
		res.set({
			'Content-Type': pdf.contentType,
			'Content-Disposition': `attachment; filename=${pdf.filename}`,
		});
		res.send(pdf.data);
		console.log("downloaded")
	} catch (error) {
		console.log(error);
		res.status(500).send('Internal server error');
	}
});
app.get('/download-J/:id', async (req, res) => {
	try {
		const pdf = await Semester_three.findById(req.params.id);
		// const pdf = await Pdf.findBy(req.body);
		res.set({
			'Content-Type': pdf.contentType,
			'Content-Disposition': `attachment; filename=${pdf.filename}`,
		});
		res.send(pdf.data);
		console.log("downloaded")
	} catch (error) {
		console.log(error);
		res.status(500).send('Internal server error');
	}
});
app.get('/download-DM/:id', async (req, res) => {
	try {
		const pdf = await Semester_three.findById(req.params.id);
		// const pdf = await Pdf.findBy(req.body);
		res.set({
			'Content-Type': pdf.contentType,
			'Content-Disposition': `attachment; filename=${pdf.filename}`,
		});
		res.send(pdf.data);
		console.log("downloaded")
	} catch (error) {
		console.log(error);
		res.status(500).send('Internal server error');
	}
});
//---------------------------------------------------------------------------------------------------------------------------

// sem 4
app.get('/download-EM4/:id', async (req, res) => {
	try {
		const pdf = await Semester_four.findById(req.params.id);
		// const pdf = await Pdf.findBy(req.body);
		res.set({
			'Content-Type': pdf.contentType,
			'Content-Disposition': `attachment; filename=${pdf.filename}`,
		});
		res.send(pdf.data);
		console.log("downloaded")
	} catch (error) {
		console.log(error);
		res.status(500).send('Internal server error');
	}
});
app.get('/download-AOA/:id', async (req, res) => {
	try {
		const pdf = await Semester_four.findById(req.params.id);
		// const pdf = await Pdf.findBy(req.body);
		res.set({
			'Content-Type': pdf.contentType,
			'Content-Disposition': `attachment; filename=${pdf.filename}`,
		});
		res.send(pdf.data);
		console.log("downloaded")
	} catch (error) {
		console.log(error);
		res.status(500).send('Internal server error');
	}
});
app.get('/download-OS/:id', async (req, res) => {
	try {
		const pdf = await Semester_four.findById(req.params.id);
		// const pdf = await Pdf.findBy(req.body);
		res.set({
			'Content-Type': pdf.contentType,
			'Content-Disposition': `attachment; filename=${pdf.filename}`,
		});
		res.send(pdf.data);
		console.log("downloaded")
	} catch (error) {
		console.log(error);
		res.status(500).send('Internal server error');
	}
});
app.get('/download-DBMS/:id', async (req, res) => {
	try {
		const pdf = await Semester_four.findById(req.params.id);
		// const pdf = await Pdf.findBy(req.body);
		res.set({
			'Content-Type': pdf.contentType,
			'Content-Disposition': `attachment; filename=${pdf.filename}`,
		});
		res.send(pdf.data);
		console.log("downloaded")
	} catch (error) {
		console.log(error);
		res.status(500).send('Internal server error');
	}
});
app.get('/download-MP/:id', async (req, res) => {
	try {
		const pdf = await Semester_four.findById(req.params.id);
		// const pdf = await Pdf.findBy(req.body);
		res.set({
			'Content-Type': pdf.contentType,
			'Content-Disposition': `attachment; filename=${pdf.filename}`,
		});
		res.send(pdf.data);
		console.log("downloaded")
	} catch (error) {
		console.log(error);
		res.status(500).send('Internal server error');
	}
});
app.get('/download-PY/:id', async (req, res) => {
	try {
		const pdf = await Semester_four.findById(req.params.id);
		// const pdf = await Pdf.findBy(req.body);
		res.set({
			'Content-Type': pdf.contentType,
			'Content-Disposition': `attachment; filename=${pdf.filename}`,
		});
		res.send(pdf.data);
		console.log("downloaded")
	} catch (error) {
		console.log(error);
		res.status(500).send('Internal server error');
	}
});
//-----------------------------------------------------------------------------------------------------------------------

//sem 5
app.get('/download-LPMY/:id', async (req, res) => {
	try {
		const pdf = await Semester_five.findById(req.params.id);
		// const pdf = await Pdf.findBy(req.body);
		res.set({
			'Content-Type': pdf.contentType,
			'Content-Disposition': `attachment; filename=${pdf.filename}`,
		});
		res.send(pdf.data);
		console.log("downloaded")
	} catch (error) {
		console.log(error);
		res.status(500).send('Internal server error');
	}
});
app.get('/download-SE/:id', async (req, res) => {
	try {
		const pdf = await Semester_five.findById(req.params.id);
		// const pdf = await Pdf.findBy(req.body);
		res.set({
			'Content-Type': pdf.contentType,
			'Content-Disposition': `attachment; filename=${pdf.filename}`,
		});
		res.send(pdf.data);
		console.log("downloaded")
	} catch (error) {
		console.log(error);
		res.status(500).send('Internal server error');
	}
});
app.get('/download-CN/:id', async (req, res) => {
	try {
		const pdf = await Semester_five.findById(req.params.id);
		// const pdf = await Pdf.findBy(req.body);
		res.set({
			'Content-Type': pdf.contentType,
			'Content-Disposition': `attachment; filename=${pdf.filename}`,
		});
		res.send(pdf.data);
		console.log("downloaded")
	} catch (error) {
		console.log(error);
		res.status(500).send('Internal server error');
	}
});
app.get('/download-DWM/:id', async (req, res) => {
	try {
		const pdf = await Semester_five.findById(req.params.id);
		// const pdf = await Pdf.findBy(req.body);
		res.set({
			'Content-Type': pdf.contentType,
			'Content-Disposition': `attachment; filename=${pdf.filename}`,
		});
		res.send(pdf.data);
		console.log("downloaded")
	} catch (error) {
		console.log(error);
		res.status(500).send('Internal server error');
	}
});

//------------------------------------------------------------------------------------------------------------------------

// sem 6
app.get('/download-CC/:id', async (req, res) => {
	try {
		const pdf = await Semester_six.findById(req.params.id);
		// const pdf = await Pdf.findBy(req.body);
		res.set({
			'Content-Type': pdf.contentType,
			'Content-Disposition': `attachment; filename=${pdf.filename}`,
		});
		res.send(pdf.data);
		console.log("downloaded")
	} catch (error) {
		console.log(error);
		res.status(500).send('Internal server error');
	}
});
app.get('/download-IT/:id', async (req, res) => {
	try {
		const pdf = await Semester_six.findById(req.params.id);
		// const pdf = await Pdf.findBy(req.body);
		res.set({
			'Content-Type': pdf.contentType,
			'Content-Disposition': `attachment; filename=${pdf.filename}`,
		});
		res.send(pdf.data);
		console.log("downloaded")
	} catch (error) {
		console.log(error);
		res.status(500).send('Internal server error');
	}
});
app.get('/download-MC/:id', async (req, res) => {
	try {
		const pdf = await Semester_six.findById(req.params.id);
		// const pdf = await Pdf.findBy(req.body);
		res.set({
			'Content-Type': pdf.contentType,
			'Content-Disposition': `attachment; filename=${pdf.filename}`,
		});
		res.send(pdf.data);
		console.log("downloaded")
	} catch (error) {
		console.log(error);
		res.status(500).send('Internal server error');
	}
});
app.get('/download-SP/:id', async (req, res) => {
	try {
		const pdf = await Semester_six.findById(req.params.id);
		// const pdf = await Pdf.findBy(req.body);
		res.set({
			'Content-Type': pdf.contentType,
			'Content-Disposition': `attachment; filename=${pdf.filename}`,
		});
		res.send(pdf.data);
		console.log("downloaded")
	} catch (error) {
		console.log(error);
		res.status(500).send('Internal server error');
	}
});

//-------------------------------------------------------------------------------------------------------------------------

// sem7
app.get('/download-BDA/:id', async (req, res) => {
	try {
		const pdf = await Semester_seven.findById(req.params.id);
		// const pdf = await Pdf.findBy(req.body);
		res.set({
			'Content-Type': pdf.contentType,
			'Content-Disposition': `attachment; filename=${pdf.filename}`,
		});
		res.send(pdf.data);
		console.log("downloaded")
	} catch (error) {
		console.log(error);
		res.status(500).send('Internal server error');
	}
});
app.get('/download-NLP/:id', async (req, res) => {
	try {
		const pdf = await Semester_seven.findById(req.params.id);
		// const pdf = await Pdf.findBy(req.body);
		res.set({
			'Content-Type': pdf.contentType,
			'Content-Disposition': `attachment; filename=${pdf.filename}`,
		});
		res.send(pdf.data);
		console.log("downloaded")
	} catch (error) {
		console.log(error);
		res.status(500).send('Internal server error');
	}
});
app.get('/download-ML/:id', async (req, res) => {
	try {
		const pdf = await Semester_seven.findById(req.params.id);
		// const pdf = await Pdf.findBy(req.body);
		res.set({
			'Content-Type': pdf.contentType,
			'Content-Disposition': `attachment; filename=${pdf.filename}`,
		});
		res.send(pdf.data);
		console.log("downloaded")
	} catch (error) {
		console.log(error);
		res.status(500).send('Internal server error');
	}
});
app.get('/download-BC/:id', async (req, res) => {
	try {
		const pdf = await Semester_seven.findById(req.params.id);
		// const pdf = await Pdf.findBy(req.body);
		res.set({
			'Content-Type': pdf.contentType,
			'Content-Disposition': `attachment; filename=${pdf.filename}`,
		});
		res.send(pdf.data);
		console.log("downloaded")
	} catch (error) {
		console.log(error);
		res.status(500).send('Internal server error');
	}
});
//------------------------------------------------------------------------------------------------------------------------

// sem 8
app.get('/download-ADS/:id', async (req, res) => {
	try {
		const pdf = await Semester_eight.findById(req.params.id);
		// const pdf = await Pdf.findBy(req.body);
		res.set({
			'Content-Type': pdf.contentType,
			'Content-Disposition': `attachment; filename=${pdf.filename}`,
		});
		res.send(pdf.data);
		console.log("downloaded")
	} catch (error) {
		console.log(error);
		res.status(500).send('Internal server error');
	}
});
app.get('/download-DC/:id', async (req, res) => {
	try {
		const pdf = await Semester_eight.findById(req.params.id);
		// const pdf = await Pdf.findBy(req.body);
		res.set({
			'Content-Type': pdf.contentType,
			'Content-Disposition': `attachment; filename=${pdf.filename}`,
		});
		res.send(pdf.data);
		console.log("downloaded")
	} catch (error) {
		console.log(error);
		res.status(500).send('Internal server error');
	}
});
app.get('/download-HMI/:id', async (req, res) => {
	try {
		const pdf = await Semester_eight.findById(req.params.id);
		// const pdf = await Pdf.findBy(req.body);
		res.set({
			'Content-Type': pdf.contentType,
			'Content-Disposition': `attachment; filename=${pdf.filename}`,
		});
		res.send(pdf.data);
		console.log("downloaded")
	} catch (error) {
		console.log(error);
		res.status(500).send('Internal server error');
	}
});
app.get('/download-PM/:id', async (req, res) => {
	try {
		const pdf = await Semester_eight.findById(req.params.id);
		// const pdf = await Pdf.findBy(req.body);
		res.set({
			'Content-Type': pdf.contentType,
			'Content-Disposition': `attachment; filename=${pdf.filename}`,
		});
		res.send(pdf.data);
		console.log("downloaded")
	} catch (error) {
		console.log(error);
		res.status(500).send('Internal server error');
	}
});
//----------------------------------------------------------------------------------------------------------------------------






// Start your server
app.listen(port, () => {
	console.log('Server is running on port 3000');
});
