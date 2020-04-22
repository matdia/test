let modal = document.getElementById('modal__form');

let span = document.getElementsByClassName('close-main');

let links = document.getElementsByClassName('modal__form__link');


var i;
for (i = 0; i<links.length; i++) {
    links[i].onclick = function(){
            modal.style.display = "block";
        };
};

var j;
for (j = 0; j<span.length; j++) {
    span[j].onclick = function(){
        modal.style.display = "none";
        };
};
span.onclick = function(){
    modal.style.display = "none";
};

window.onclick = function(e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}



