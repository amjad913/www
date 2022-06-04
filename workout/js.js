
let
 myElement = document.getElementById('myImg')
myImgs = [
    '../workout/1.jpg',
    '../workout/2.jpg',
    '../workout/3.jpg',
    '../workout/4.jpg',
    '../workout/5.jpg',
    '../workout/6.jpg',
    '../workout/7.jpg',
    '../workout/8.jpg',
    '../workout/10.jpg',
    '../workout/11.jpg',
    '../workout/12.jpg',
    '../workout/13.jpg',
    '../workout/14.jpg',
    '../workout/15.jpg',
    '../workout/16.jpg',
    '../workout/17.jpg',
    '../workout/18.jpg',
    '../workout/19.jpg',
    '../workout/20.jpg'
];

function changeImage(myElement,myImgs){
    setInterval(function(){
        let myRandomNum = Math.floor(Math.random() * myImgs.length);
        console.log(myRandomNum);
        myElement.src=myImgs[myRandomNum];
    }, 1000);
}
changeImage(myElement,myImgs);

function sat(){
    alert ("wasaaaaaaaap")
}

function sun(){
    alert ("wasaaaaaaaap")
}

function mon(){
    alert ("wasaaaaaaaap")
}

function thur(){
}

function wed(){
}


