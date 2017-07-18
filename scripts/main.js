var ANCHORS = document.querySelectorAll('a');
var URL = document.querySelector('[data-image-url]');
var TEXT = document.querySelector('[data-image-title]');
var MAIN_IMAGE = document.querySelector(".detail-image");
var MAIN_TEXT = document.querySelector(".detail-image-title")




function updateImage(anchor) {
    anchor.forEach(function(element) {
        element.addEventListener('click', function(event) {
            event.preventDefault();
            MAIN_IMAGE.setAttribute('src', element.getAttribute('href'));
        });
    });
};

function updateText(anchor) {
    anchor.forEach(function(element) {
        element.addEventListener('click', function(event) {
            event.preventDefault();
            MAIN_TEXT.textContent = element.getAttribute('data-image-title');
        });
    });
};


function updateRandom(anchor) {
    anchor.forEach(function(element) {
        element.addEventListener('click', function(event) {
            var randomInteger = (Math.floor((Math.random())*ANCHORS.length));
            event.preventDefault();
            MAIN_IMAGE.setAttribute('src', anchor[randomInteger].getAttribute('href'));
            var randomInteger = (Math.floor((Math.random())*ANCHORS.length));
            MAIN_TEXT.textContent = anchor[randomInteger].getAttribute('data-image-title');
        });
    });
};




// updateImage(ANCHORS);
// updateText(ANCHORS);
updateRandom(ANCHORS);
