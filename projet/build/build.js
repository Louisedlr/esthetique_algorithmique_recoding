var gui = new dat.GUI();
var params = {
    Download_Image: function () { return save(); },
    N: 50,
};
gui.add(params, "Download_Image");
gui.add(params, "N", 10, 200, 1);
function draw() {
    randomSeed(101);
    background(253, 241, 229);
    translate(width / 2, height / 2);
    var l = 200;
    var p1x = width / 2 - 70 - l;
    var p2x = p1x + l;
    var p1y = height / 2 - 50;
    var p2y = p1y - l;
    var p1xr = width / 2 - 50 - l;
    var p2xr = p1xr + l;
    var p1yr = height / 2 - 50 - 40;
    var p2yr = p1yr - l;
    var p1xb = width / 2 - 50 - l + 30;
    var p2xb = p1xb + l;
    var p1yb = height / 2 - 50;
    var p2yb = p1yb - l;
    var p1xo = width / 2 - 50 - l + 30;
    var p2xo = p1xo + l;
    var p1yo = height / 2 - 50 - 40;
    var p2yo = p1yo - l;
    var count = 0;
    stroke(225, 20, 0);
    strokeWeight(1);
    line(p1xr, p1yr, p2xr, p1yr);
    stroke(34, 62, 103);
    strokeWeight(1);
    line(p1xb, p1yb, p2xb, p1yb);
    stroke(225, 20, 0);
    strokeWeight(0.8);
    line(p1xo, p1yo, p2xo, p1yo);
    stroke(0);
    strokeWeight(4);
    line(p1x, p1y, p2x, p1y);
    stroke(225, 20, 0);
    strokeWeight(1);
    line(p1xr, p1yr, p1xr, p2yr);
    stroke(34, 62, 103);
    strokeWeight(1);
    line(p1xb, p1yb, p1xb, p2yb);
    stroke(225, 20, 0);
    strokeWeight(0.8);
    line(p1xo, p1yo, p1xo, p2yo);
    stroke(0);
    strokeWeight(4);
    line(p1x, p1y, p1x, p2y);
    while (count < params.N) {
        if (count % 2 == 0) {
            l = random(3, 100);
            if (random() < 0.5 && p1x - l - 150 > -width / 2) {
                stroke(225, 20, 0);
                strokeWeight(1);
                line(p1xr, p2yr, p1xr - l, p2yr);
                stroke(34, 62, 103);
                strokeWeight(1);
                line(p1xb, p2yb, p1xb - l, p2yb);
                stroke(225, 20, 0);
                strokeWeight(0.8);
                line(p1xo, p2yo, p1xo - l, p2yo);
                stroke(0);
                strokeWeight(4);
                line(p1x, p2y, p1x - l, p2y);
                p1x = p1x - l;
                p1xr = p1xr - l;
                p1xb = p1xb - l;
                p1xo = p1xo - l;
            }
            else if (p1x + l + 150 < width / 2) {
                stroke(225, 20, 0);
                strokeWeight(1);
                line(p1xr, p2yr, p1xr + l, p2yr);
                stroke(34, 62, 103);
                strokeWeight(0.8);
                line(p1xb, p2yb, p1xb + l, p2yb);
                stroke(225, 20, 0);
                strokeWeight(0.8);
                line(p1xo, p2yo, p1xo + l, p2yo);
                stroke(0);
                strokeWeight(4);
                line(p1x, p2y, p1x + l, p2y);
                p1x = p1x + l;
                p1xr = p1xr + l;
                p1xb = p1xb + l;
                p1xo = p1xo + l;
            }
            else {
                count--;
            }
        }
        else {
            l = random(100, 400);
            if (random() < 0.5 && p2y - l - 30 > -height / 2) {
                stroke(225, 20, 0);
                strokeWeight(1);
                line(p1xr, p2yr, p1xr, p2yr - l);
                stroke(34, 62, 103);
                strokeWeight(1);
                line(p1xb, p2yb, p1xb, p2yb - l);
                stroke(225, 20, 0);
                strokeWeight(0.8);
                line(p1xo, p2yo, p1xo, p2yo - l);
                stroke(0);
                strokeWeight(4);
                line(p1x, p2y, p1x, p2y - l);
                p2y = p2y - l;
                p2yr = p2yr - l;
                p2yb = p2yb - l;
                p2yo = p2yo - l;
            }
            else if (p2y + l + 100 < height / 2) {
                stroke(225, 20, 0);
                strokeWeight(1);
                line(p1xr, p2yr, p1xr, p2yr + l);
                stroke(34, 62, 103);
                strokeWeight(1);
                line(p1xb, p2yb, p1xb, p2yb + l);
                stroke(225, 20, 0);
                strokeWeight(0.8);
                line(p1xo, p2yo, p1xo, p2yo + l);
                stroke(0);
                strokeWeight(4);
                line(p1x, p2y, p1x, p2y + l);
                p2y = p2y + l;
                p2yr = p2yr + l;
                p2yb = p2yb + l;
                p2yo = p2yo + l;
            }
            else {
                count--;
            }
        }
        count++;
    }
}
function setup() {
    p6_CreateCanvas();
}
function windowResized() {
    p6_ResizeCanvas();
}
var __ASPECT_RATIO = 1;
var __MARGIN_SIZE = 25;
function __desiredCanvasWidth() {
    var windowRatio = windowWidth / windowHeight;
    if (__ASPECT_RATIO > windowRatio) {
        return windowWidth - __MARGIN_SIZE * 2;
    }
    else {
        return __desiredCanvasHeight() * __ASPECT_RATIO;
    }
}
function __desiredCanvasHeight() {
    var windowRatio = windowWidth / windowHeight;
    if (__ASPECT_RATIO > windowRatio) {
        return __desiredCanvasWidth() / __ASPECT_RATIO;
    }
    else {
        return windowHeight - __MARGIN_SIZE * 2;
    }
}
var __canvas;
function __centerCanvas() {
    __canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);
}
function p6_CreateCanvas() {
    __canvas = createCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
function p6_ResizeCanvas() {
    resizeCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
var p6_SaveImageSequence = function (durationInFrames, fileExtension) {
    if (frameCount <= durationInFrames) {
        noLoop();
        var filename_1 = nf(frameCount - 1, ceil(log(durationInFrames) / log(10)));
        var mimeType = (function () {
            switch (fileExtension) {
                case 'png':
                    return 'image/png';
                case 'jpeg':
                case 'jpg':
                    return 'image/jpeg';
            }
        })();
        __canvas.elt.toBlob(function (blob) {
            p5.prototype.downloadFile(blob, filename_1, fileExtension);
            setTimeout(function () { return loop(); }, 100);
        }, mimeType);
    }
};
//# sourceMappingURL=../src/src/build.js.map