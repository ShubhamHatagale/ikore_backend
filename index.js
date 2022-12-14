const express = require('express');
const bodyParser = require('body-parser');
// const token = "cJPzDoVlSY6ZqnNZUz-NhV:APA91bFU6uGeEZHOun_alX9kKb9N7LlI_t_E31GBNXUL4mhW9JCHQZCJ2PvY8AeDumFiYiCpTiUHAwtbkdUu0XOeLQd8aAzsXdyNzil-EeaGw01yjsjE-XZ7sat4Q1aoDmmivGkxH7Ra";
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.listen(9000, () => {
    console.log("Server Running on port 9000");
});

app.get("/", (req, res) => {
    res.send("Ikore Backend working");
});

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'x-www-form-urlencoded, Origin, X-Requested-With, Content-Type, Accept, Authorization, *');
    // res.setHeader('Access-Control-Alow-Headers', 'Content-Type, Authorization');
    // res.setHeader('Content-Type', 'text/json')
    next();
});

