const express = require('express');

const app = new express();

const appRoot = require('app-root-path');

app.use(express.static(appRoot.path));

app.get('/', (request, response) => {
    response.sendFile(`${appRoot.path}\\pages\\index.html`)
});

var port = server.listen(process.env.PORT || 3000);

app.listen(port, () => console.log("Servidor UP!"));