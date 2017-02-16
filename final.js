var stuff = Array();
var things = document.getElementById('such-text');
var box = document.getElementById('saying');
box.addEventListener('change', moar);
// you can always say more! 
function moar() {
    var word = box.value;
    if (word === 'doggo' || word === 'doge') {
        word = word.toUpperCase();
    }
    word = makeItem(word);
    word.fly();
    var flyer = document.createElement('div');
    flyer.className = 'flyer'
    flyer.id = word.id
    flyer.innerHTML = word.text
    stuff.push(word);
    flyer.style.top = '70px'
    flyer.style.left = '30px'
    flyer.style.color = colors();
    things.appendChild(flyer);
    box.value = ''
}
// such animation 
function magic(thing) {
    var flyer = document.getElementById(thing.id);
    // thing dose fly 
    var up = thing.whereUp + 'px';
    var left = thing.whereSide + 'px';
    var color = thing.color;
    flyer.style.top = up
    flyer.style.left = left
    flyer.style.color = colors();
}
// not very doge, but it does such job 
function makeItem(text) {
    var thingy = {};
    thingy.text = text
    thingy.id = numbers(1000);
    thingy.whereUp = numbers(window.innerHeight);
    thingy.whereSide = numbers(window.innerWidth);
    thingy.fly = function () {
        var what = this;
        setInterval(function () {
            var newUp = numbers(window.innerHeight);
            var newSide = numbers(window.innerWidth);
            what.whereUp = newUp
            what.whereSide = newSide
            magic(what);
        }, 2000)
    }
    thingy.color = colors();
    return thingy;
}
// random numbers are hard in dogescript 
function numbers(biggest) {
    var anything = Math.random();
    anything = anything * biggest
    var low = Math.floor(anything);
    return low;
}

function colors() {
    var red = numbers(255);
    var green = numbers(255);
    var blue = numbers(255);
    var color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}