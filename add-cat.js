'use strict';

const jimp = require('jimp');

var addCatFace = function(dimensions) {
    var faceAddedPromise =  new Promise(function(resolve, reject) {
        console.log('addCatFace called with', dimensions);
        jimp.read(process.env.INPUT_FILE).then(function (inputFile) {
            jimp.read('./images/catface.png').then(function (cat) {
                inputFile.composite(cat, dimensions.x, dimensions.y)
                    .write('./images/cattedFace.png');
                    resolve();
                });
            }).catch(function (err) {
                reject(err);
            });
    });
    return faceAddedPromise;
}

module.exports = addCatFace();
