// Set Picture object, put functions inside the object, add display true or false boolean
var pictureClass = document.getElementsByClassName('picture');
var displayPicClass = document.getElementsByClassName('display-pic')[0];
var lightBoxClass = document.getElementsByClassName('lightbox-wrapper')[0];
var pictureCollecction = document.getElementsByClassName('picture-collection')[0];
var carouselPics = document.getElementsByClassName('carousel-pics');
var initialPic = pictureClass[0].getAttribute('src');
var currentPic;
var nextPic;
var prevPic;
var pictureArray = [];
var carouselArray = [];

function expand() {
  console.log(displayPicClass.getAttribute('src'));
    document.getElementsByClassName('carousel-box')[0].classList.remove('display-none');
    displayPicClass.classList.add('expand');
    document.getElementsByClassName('fa-times')[0].classList.remove('display-none');
    lightBoxClass.classList.add('expand-box');
    // pictureCollecction.classList.remove('display-none');

      if ( displayPicClass.getAttribute('src') === pictureArray[0] ) {
        carouselPics[0].setAttribute('src', pictureArray[pictureArray.length-1])
        carouselPics[1].setAttribute('src', pictureArray[0]);
        carouselPics[2].setAttribute('src', pictureArray[1]);
      }

    // carouselPics[0].setAttribute('src', pictureArray[pictureArray.length - 1]);
    // carouselPics[1].setAttribute('src', displayPicClass.getAttribute('src'));
    // carouselPics[2].setAttribute('src', pictureArray[1]);

    // displayPicClass.setAttribute('onclick', 'closePic()');
    document.getElementsByClassName('button-box')[0].classList.add('display-none');
}

function closePic() {
  document.getElementsByClassName('expand')[0].classList.remove('expand');
  document.getElementsByClassName('carousel-box')[0].classList.add('display-none');
  lightBoxClass.classList.remove('expand-box');
  pictureCollecction.classList.add('display-none');
  document.getElementsByClassName('fa-times')[0].classList.add('display-none');
  // displayPicClass.setAttribute('onclick', 'expand()');
      document.getElementsByClassName('button-box')[0].classList.remove('display-none');

  for (var i = 0; i < carouselPics.length; i++) {
    carouselPics[i].setAttribute('src', '');
  }
}


function loadInitialPic() {

  for (var i = 0; i < pictureClass.length; i++) {
    pictureArray.push(pictureClass[i].getAttribute('src'));
  }

    displayPicClass.setAttribute('src', initialPic);
}

//Try making the DOM of carousel pic render all pictures, but only have the first 3
//display , the others are display none
// Have a counter??
function loadNextPic() {
  currentPic = displayPicClass.getAttribute('src');
  displayPicClass.classList.add('fade-in');
  setTimeout(function(){
    displayPicClass.classList.remove('fade-in');}, 1000);

  for (var i = 0; i < pictureArray.length; i++) {

    if (pictureArray[i] == currentPic) {
      nextPic = pictureArray[i+1];
      displayPicClass.setAttribute('src', nextPic);


      carouselPics[0].setAttribute('src', pictureArray[i]);
      carouselPics[1].setAttribute('src', nextPic);
      carouselPics[2].setAttribute('src', pictureArray[i+2]);

      if (i == (pictureArray.length - 2)) {
        carouselPics[2].setAttribute('src', pictureArray[0]);
      }

      if (i == (pictureArray.length - 1)) {
        nextPic = pictureArray[0]
        displayPicClass.setAttribute('src', nextPic);
        carouselPics[0].setAttribute('src', pictureArray[pictureArray.length - 1]);
        carouselPics[1].setAttribute('src', nextPic);
        carouselPics[2].setAttribute('src', pictureArray[1])
      }
    }
  }
}


function loadPrevPic() {
  currentPic = displayPicClass.getAttribute('src');
  displayPicClass.classList.add('fade-in');
  setTimeout(function(){
    displayPicClass.classList.remove('fade-in');}, 1000);

  for (var i = 0; i < pictureArray.length; i++) {
    if (pictureArray[i] == currentPic) {
      prevPic = pictureArray[i-1];
      displayPicClass.setAttribute('src', prevPic);
      carouselPics[0].setAttribute('src', pictureArray[i-2]);
      carouselPics[1].setAttribute('src', prevPic);
      carouselPics[2].setAttribute('src', pictureArray[i]);

      if (i == 0) {
        console.log('previus from start');
        prevPic = pictureArray[pictureArray.length - 1];
        displayPicClass.setAttribute('src', prevPic);
        carouselPics[0].setAttribute('src', pictureArray[pictureArray.length - 2]);
        carouselPics[1].setAttribute('src', prevPic);

      }

      if (i == 1) {
        carouselPics[0].setAttribute('src', pictureArray[pictureArray.length - 1]);
      }
    }
  }
}


function uploadPic() {
  console.log(document.getElementsByClassName('fileupload')[0]);
  document.getElementsByClassName('fileupload')[0].classList.remove('display-none');
}
document.getElementById('getval').addEventListener('change', readURL, true);
function readURL(){
    var file = document.getElementById("getval").files[0];
    var reader = new FileReader();
    reader.onloadend = function(){
        pictureArray.push(reader.result);
        // document.getElementById('clock2').setAttribute('src', reader.result);
        // console.log(document.getElementById('clock').style);
        console.log(pictureArray);
        console.log(pictureArray.length);
    }
    if(file){
        reader.readAsDataURL(file);
    }else{
    }
}



// =========  REFACTOR IDEAS: Future Ideas in OO  ===========
var Pic = function(expandStatus, picSrc, caption) {
  this.expandStatus = expandStatus;
  this.picSrc = picSrc;
  this.caption = caption;
}

Pic.prototype.expandPic = function() {
  //change style of the pic

}

// Example
var pic1 = new Pic(true, 'taiwan.jpeg', 'this is a pic');

console.log(pic1.picSrc, pic1.caption);






//Random stuff
// for (var i = 0; i < pictureClass.length; i++) {
//   // var position = pictureClass[i]
//   pictureClass[i].addEventListener('click', function(position) {
//     //change position to event
//     debugger;
//     // console.log(position.target.id);
//     var pictureId = position.target.id;
//     document.getElementById(pictureId).classList.add('expand');
//     // console.log(document.getElementById(pictureId).classList);
//     document.getElementById('close-icon').style.display = "inline";
//   });
// }
