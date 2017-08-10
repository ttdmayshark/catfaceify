const findFaces = require('./find-faces'),
    jimp = require('jimp');

if (!process.env.INPUT_FILE) {
    console.error('no `INPUT_FILE` specified');
}

else {
    findFaces.then(function(face) {
        console.log('Found face...', face);
        console.log('Face.x', face.x);
        jimp.read(process.env.INPUT_FILE).then(function (inputFile) {
            jimp.read('./images/catface.png').then(function (cat) {
                inputFile.composite(cat, face.x, face.y)
                .write('./images/cattedFace.png');
            }).catch (function (err) {
                console.error(err);
            });
        });
    });
}
