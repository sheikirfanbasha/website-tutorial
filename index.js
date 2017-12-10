const express = require('express'),
 app = express(),
 uiRoutes = require('./myapp/uiRoutes');

//for all views
app.get("/", uiRoutes);

//for all static files
//app.use(express.static("/myapp/assets"));
app.use('/assets', express.static(__dirname + '/myapp/assets'));
app.use('/home', express.static(__dirname + '/myapp/views/home'));

app.listen(3000, () => {
    console.log("Server is started!!");
});