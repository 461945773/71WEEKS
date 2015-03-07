function On(obj) {
    obj.style.display = "block"
}

function Off(obj) {
    obj.style.display = "none"
}

function setION(objs, n) {
    for (var i = 0; i < objs.length; i++) {
        Off(objs[i]);
    }
    On(objs[n]);
}

function checkPage(n) {
    if (n < 0) {
        n = 0;
    }
    if (n > docPs.length - 1) {
        n = docPs.length - 1;
    }
    return n;
}

function opacityOn(obj) {
    On(obj);
    var speed = 2 / 2000 * 30;
    var Timer = null;
    var Op = 0;
    Timer = setInterval(function() {
        console.log("on");
        Op += speed;
        obj.style.opacity = Op;
        if (obj.style.opacity >= 2.5) {
            window.clearInterval(Timer);
            setTimeout(opacityOff(obj), 1000);
        }
    }, 30);
}

function opacityOff(obj) {
    console.log("off", obj);
    var speed = 3 / 2000 * 30;
    var timer = null;
    var Op = 1;
    timer = setInterval(function() {
        Op -= speed;
        obj.style.opacity = Op;
        if (obj.style.opacity <= 0.1) {
            window.clearInterval(timer);
        }
    }, 30);
}

function opacityOnLast(obj) {
    On(obj);
    var speed = 3 / 2000 * 30;
    var Timer = null;
    var Op = 0;
    Timer = setInterval(function() {
        console.log("on");
        Op += speed;
        obj.style.opacity = Op;
        if (obj.style.opacity >= 3.5) {
            window.clearInterval(Timer);
        }
    }, 30);
}

function Photo(objs, clearObjs) {
    isPhoto = true;
    for (var i = 0; i < clearObjs.length; i++) {
        Off(clearObjs[i]);
    }
    setTimeout(function() {
        opacityOn(objs[0]);
        setTimeout(function() {
            opacityOn(objs[1]);
            setTimeout(function() {
                opacityOn(objs[2]);
                setTimeout(function() {
                    opacityOn(objs[3]);
                    setTimeout(function() {
                        opacityOn(objs[4]);
                        setTimeout(function() {
                            opacityOn(objs[5]);
                            setTimeout(function() {
                                opacityOn(objs[6]);
                                setTimeout(function() {
                                    opacityOn(objs[7]);
                                    setTimeout(function() {
                                        opacityOn(objs[8]);
                                        setTimeout(function() {
                                            opacityOnLast(objs[9]);
                                            isPhoto = false;
                                            PhotoPause = true;
                                        }, 5000);
                                    }, 5000);
                                }, 5000);
                            }, 5000);
                        }, 5000);
                    }, 5000);
                }, 5000);
            }, 5000);
        }, 5000);
    }, 1000);
}