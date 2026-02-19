const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');

const URL = process.env.BACKEND_URL || 'http://localhost:8000';

app.get('/', async (req, res) => {
    try {
        const response = await fetch(URL);
        const data = await response.json();
        res.render('index', { data });
    } catch (err) {
        console.log(err);
        res.status(500).send("Error");
    }
});

app.post('/submit', async (req, res) => {
    try {
        const response = await fetch(`${URL}/submit`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(req.body)
        });

        const result = await response.json();
        res.redirect(`/success?name=${result.name}`);
    } catch (err) {
        console.log(err);
        res.status(500).send("Error");
    }
});

app.get('/success', (req, res) => {
    res.render('success', { name: req.query.name });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
