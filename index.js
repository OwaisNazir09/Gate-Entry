const express = require('express');
const mongoose = require('mongoose');
const Student = require("./model/students"); // Import the Student model
const EntryDetails = require("./model/entry"); // Import the EntryDetails model

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/Mewar")
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.error('MongoDB connection error:', err));

const port = 8000;
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render("home");
});

app.post('/', async (req, res) => {
    const enrollmentNumber = req.body.enrollmentnumber;

    try {
        const student = await Student.findOne({ enrollment_number: enrollmentNumber });

        if (student) {
            res.render('home', { student });
        } else {
            res.render('home', { student: undefined });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/entry', async (req, res) => {
    const { activity, action, enrollmentnumber, studentName, studentDetails } = req.body;

    const details = JSON.parse(studentDetails);

    const newEntry = new EntryDetails({
        name: studentName,
        enrollment_number: enrollmentnumber,
        activity: activity,
        details: details, 
        action: action,
    });

    try {
        await newEntry.save(); 
        res.send(`Entry saved for ${studentName}: ${activity} - Access ${action === 'allow' ? 'Allowed' : 'Denied'}.`);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});
app.get("/gatekeeper",(req,res)=>{
    res.render("gatekeeper")
})

app.post("/gatekeeper", async (req, res) => {
    const enrollment_number = req.body.enrollment;
    try {
        const entry = await EntryDetails.findOne({enrollment_number: enrollment_number })

        if (entry) {
            res.render('gatekeeper', { student:entry });
        } else {
            res.render('gatekeeper', { student: undefined });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});



app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
