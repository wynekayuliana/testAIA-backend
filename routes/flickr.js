var express = require('express');
var router = express.Router();
var Flickr = require('flickr-sdk');

/* POST feed public photos */
router.post('/feeds/publicPhotos', function (req, res, next) {
    var feeds = new Flickr.Feeds();
    feeds.publicPhotos(req.body).then(function (result) {

        res.send(JSON.parse(result.text));

    }).catch(function (err) {
        console.error(err);
    });
});

module.exports = router;
