const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const User = require('./models/user');

const app = express();
const port = 3001;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


mongoose.connect('mongodb://localhost:27017/userdb', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));


app.use(express.static(path.join(__dirname, 'public')));


app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'register.html'));
});


app.post('/register', (req, res) => {
    const { username, password, gender, skills } = req.body;
    //console.log('Received data:', req.body); 
    const newUser = new User({
        username,
        password,
        gender,
        skills
    });

    newUser.save()
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
