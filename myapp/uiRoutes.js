const express = require('express'),
 app = express(),
 router = express.Router(),
 viewsPath = __dirname + "/views"

router.get("/",(req, res) => {
    res.sendFile(viewsPath + "/home/index.html");
});

module.exports = router;