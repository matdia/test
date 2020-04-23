let modal = document.getElementById('modal__form');

// let body = document.getElementsByTagName('body');

let span = document.getElementsByClassName('close-main');

let links = document.getElementsByClassName('modal__form__link');


var i;
for (i = 0; i<links.length; i++) {
    links[i].onclick = function(){
            modal.style.display = "block";
            document.body.style.overflow = 'hidden';
        };
};

var j;
for (j = 0; j<span.length; j++) {
    span[j].onclick = function(){
        modal.style.display = "none";
        document.body.style.overflow = 'auto';
        };
};
span.onclick = function(){
    modal.style.display = "none";
    document.body.style.overflow = 'auto';
};

window.onclick = function(e) {
    if (e.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = 'auto';
    }
}



