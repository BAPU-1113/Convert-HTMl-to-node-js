const express = require('express');
const validateDataRequest = require('./middleware/validation');

const application = express();
const portNumber = 8000;

application.use(express.json());

application.post("/", validateDataRequest, (request, response) => {
    response.status(200).send("data received");
});

application.listen(portNumber, () => {
    console.log(`Server Running on http://localhost:${portNumber}`);
});