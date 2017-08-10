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
                destFile = process.env.INPUT_FILE.split('/')[2].split('.')[0];                cat.resize(face.width*1.1, face.height*1.1);
                inputFile.composite(cat, face.x, face.y)
                .write(`./output/${destFile}-catted.png`);
            }).catch (function (err) {
                console.error(err);
            });
        });
    });
}
