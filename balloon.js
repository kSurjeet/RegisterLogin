$('document').ready(function () {
    function loopOne() {
        var randleft = 1700 * Math.random();
        var randtop = 900 * Math.random();
        $('#b1').animate({
            left: randleft,
            bottom: randtop
        }, 10000, function () {
            loopOne();
        });
    }

    function loopTwo() {
        var randleft = 1700 * Math.random();
        var randtop = 900 * Math.random();
        $('#b2').animate({
            left: randleft,
            bottom: randtop
        }, 10000, function () {
            loopTwo();
        });
    }

    function loopThree() {
        var randleft = 1700 * Math.random();
        var randtop = 900 * Math.random();
        $('#b3').animate({
            left: randleft,
            bottom: randtop
        }, 10000, function () {
            loopThree();
        });
    }

    function loopFour() {
        var randleft = 1700 * Math.random();
        var randtop = 900 * Math.random();
        $('#b4').animate({
            left: randleft,
            bottom: randtop
        }, 10000, function () {
            loopFour();
        });
    }

    function loopFive() {
        var randleft = 1700 * Math.random();
        var randtop = 900 * Math.random();
        $('#b5').animate({
            left: randleft,
            bottom: randtop
        }, 10000, function () {
            loopFive();
        });
    }

    function loopSix() {
        var randleft = 1700 * Math.random();
        var randtop = 900 * Math.random();
        $('#b6').animate({
            left: randleft,
            bottom: randtop
        }, 10000, function () {
            loopSix();
        });
    }

    function loopSeven() {
        var randleft = 1700 * Math.random();
        var randtop = 900 * Math.random();
        $('#b7').animate({
            left: randleft,
            bottom: randtop
        }, 10000, function () {
            loopSeven();
        });
    }

    function loopEight() {
        var randleft = 1700 * Math.random();
        var randtop = 900 * Math.random();
        $('#b8').animate({
            left: randleft,
            bottom: randtop
        }, 10000, function () {
            loopSeven();
        });
    }

    function loopNine() {
        var randleft = 1700 * Math.random();
        var randtop = 900 * Math.random();
        $('#b9').animate({
            left: randleft,
            bottom: randtop
        }, 10000, function () {
            loopSeven();
        });
    }

    function loopTen() {
        var randleft = 1700 * Math.random();
        var randtop = 900 * Math.random();
        $('#b10').animate({
            left: randleft,
            bottom: randtop
        }, 10000, function () {
            loopSeven();
        });
    }

    function loopEleven() {
        var randleft = 1700 * Math.random();
        var randtop = 900 * Math.random();
        $('#b11').animate({
            left: randleft,
            bottom: randtop
        }, 10000, function () {
            loopSeven();
        });
    }

    function loopTwelve() {
        var randleft = 1700 * Math.random();
        var randtop = 900 * Math.random();
        $('#b12').animate({
            left: randleft,
            bottom: randtop
        }, 10000, function () {
            loopSeven();
        });
    }

    function loopThirteen() {
        var randleft = 1700 * Math.random();
        var randtop = 900 * Math.random();
        $('#b13').animate({
            left: randleft,
            bottom: randtop
        }, 10000, function () {
            loopSeven();
        });
    }

    function loopForteen() {
        var randleft = 1700 * Math.random();
        var randtop = 900 * Math.random();
        $('#b14').animate({
            left: randleft,
            bottom: randtop
        }, 10000, function () {
            loopSeven();
        });
    }

    $('#b1,#b4,#b5,#b7,#b9,#b11,#b13').addClass('balloons-rotate-behaviour-one');
    $('#b2,#b3,#b6,#b8,#b10,#b12,#b14').addClass('balloons-rotate-behaviour-two');
    loopOne();
    loopTwo();
    loopThree();
    loopFour();
    loopFive();
    loopSix();
    loopSeven();
    loopForteen();
    loopThirteen();
    loopTwelve();
    loopEleven();
    loopTen();
    loopNine();
    loopEight();
});