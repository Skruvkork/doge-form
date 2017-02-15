var stuff = Array();

var meme = true;

var things = document.getElementById('such-text');

var box = document.getElementById('saying');

box.addEventListener('change', moar);

// you can always say more! 
function moar () { 
var word = box.value;
    
if (word  === 'doggo'  || word  === 'doge' ) {
word = word.toUpperCase();
} 
    
word = makeItem(word);
meme = true 
    
var flyer = document.createElement('div');
flyer.className = 'flyer' 
flyer.innerHTML = word.text 
stuff.push(word);
things.appendChild(flyer);
    
box.value = '' 
} 

// such animation 
function magic (thing, there) { 
var flyers = document.querySelectorAll('.flyer');
var flyer = flyers[there];
thing.fly();
var up = thing.whereUp + 'px' ;
var left = thing.whereSide + 'px' ;
var color = thing.color;
flyer.style.top = up 
flyer.style.left = left 
flyer.style.color = colors();
} 

// not very doge, but it does such job 
function makeItem (text) { 
var thingy = {};
thingy.text = text 
thingy.whereUp = numbers(window.innerHeight);
thingy.whereSide = numbers(window.innerWidth);
thingy.fly = function() { 
var newUp = numbers(window.innerHeight);
var newSide = numbers(window.innerWidth);
        
this.whereUp = newUp 
this.whereSide = newSide 
} 
thingy.color = colors();
return thingy;
} 

// random numbers are hard in doge 
function numbers (biggest) { 
var anything = Math.random();
anything = anything * biggest 
var low = Math.floor(anything);
return low;
} 

function colors () { 
var red = numbers(255);
var green = numbers(255);
var blue = numbers(255);
var color = `rgb(${red}, ${green}, ${blue})` ;
return color;
} 

setInterval(function () {
var scramble = stuff.map(magic);
meme = false 
}, 4000)
