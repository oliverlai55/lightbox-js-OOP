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
