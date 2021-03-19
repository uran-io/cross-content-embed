(function () {

    var updateHeight = function () {

        var target = window.location.hash.replace('#', '') || '*';

        // WE DON'T KNOW WHO INVOKE US, SO WE USE '*'
        parent.postMessage({
            height: document.body.clientHeight
        }, target);

    }
    var timer;

    // CHECK IF WE ARE EMBEDDED
    if (parent !== self) {

        window.onresize = function () {

            clearTimeout(timer);

            timer = setTimeout(function () {

                updateHeight();

            }, 500);

        }

        updateHeight();

    } else {

        console.warn('!!! This site is meant to be embed on Panasonic partners sites');

    }
})()
