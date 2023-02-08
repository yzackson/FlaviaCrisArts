const express = require('express');

const app = new express();

const appRoot = require('app-root-path');

app.use(express.static(appRoot.path));

app.get('/', (request, response) => {
    response.sendFile(`${appRoot.path}\\pages\\index.html`)
});

app.listen(3300, () => console.log("Servidor UP!"));