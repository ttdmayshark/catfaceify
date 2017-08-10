const Faced = require('faced'),
    faced = new Faced();

var detectedPromise = new Promise(function(resolve, reject) {
    faced.detect(process.env.INPUT_FILE, function (faces) {
        if (!faces) {
            reject('no faces found');
        }
        else {
            face = faces[0];
            resolve({
                "x": face.getX(),
                "y": face.getY(),
                "width": face.getWidth(),
                "height": face.getHeight()
            });
        }
    });
    return detectedPromise;
});

var returnValue = function() {
    return detectedPromise;
};

module.exports = returnValue();
