const express = require('express');

const app = new express();

const appRoot = require('app-root-path');

app.use(express.static(appRoot.path));

app.get('/', (request, response) => {
    response.sendFile(`${appRoot.path}/pages/index.html`)
});


app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });