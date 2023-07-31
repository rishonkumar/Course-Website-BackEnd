const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const PORT = 8000;

const app = express();

app.use(express.json())

app.post('/api/data', (req, res) => {
    const data = req.body;
    // Process the data or do something with it
    console.log(req.body)
    res.send('Data received and processed successfully');
});


app.listen(PORT, () => {
    console.log(`PORT running at Server ${PORT}`)
})