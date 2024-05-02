require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Country = require('./models/countryModel');
app.use(express.json());

/*In .env file declare your port*/
const port = process.env.PORT || 3000;

/*In .env file declare your database URL*/
const mongoDBUri = process.env.DATABASE_URL;


app.get('/', (req,res) => {
    res.send("good to go");
})

app.post('/data', async (req, res) => {
    const country = new Country(req.body);
    try {
        await country.save();
        res.status(201).send(country);
    } catch (e) {
        res.status(400).send(e);
    }
});

app.get('/data', async (req,res) => {
    try {
        const countries = await Country.find({});
        res.send(countries);
    } catch (e) {
        res.status(500).send();
    }
});

mongoose
    .connect(mongoDBUri)
    .then(() => {
        console.log("MongoDB connection successful");

        // Start the server after a successful database connection
        app.listen(port, () => {

            console.log(`Server running on port ${port}`);
        });
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err);
    });