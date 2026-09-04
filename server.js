const express = require("express");
const cors = require("cors");
const path = require("path");

const gameList = require("./data.json");

const app = express();
const PORT = 3000;


app.use(cors());
app.use(express.json());

//TODO

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Endpoint non trovato."
    });
});

app.listen(PORT, () => {
    console.log(`Server avviato sulla porta:${PORT}`);
});
