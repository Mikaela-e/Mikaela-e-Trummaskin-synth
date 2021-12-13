
//Ljud effekt på varje block(Divarna)
document.getElementById("squareOne").addEventListener("click", function(){
    var sound = document.getElementById("myAudioOne"); 
    sound.play()
});
document.getElementById("squareTwo").addEventListener("click", function(){
    var sounds = document.getElementById("myAudiosTwo");
    sounds.play();
})
document.getElementById("squareThree").addEventListener("click", function(){
    var soundThree = document.getElementById("myAudiosThree");
    soundThree.play(); 
})
document.getElementById("squareFour").addEventListener("click", function(){
    var soundThree = document.getElementById("myAudiosFour");
    soundThree.play(); 
})
///Ljudet för knapparna  1, 2 ,3 ,4
document.addEventListener("keydown", function(evt){
if (evt.key == "1") {
    var sound = document.getElementById("myAudioOne");
    sound.play(); 
};
document.addEventListener("keydown", function(evt){
if (evt.key == "2") {
    var sounds = document.getElementById("myAudiosTwo");
    sounds.play(); 
}
document.addEventListener("keydown", function(evt){
if (evt.key == "3") {
    var soundThree = document.getElementById("myAudiosThree");
    soundThree.play(); 
}
document.addEventListener("keydown", function(evt){
if (evt.key == "4") {
    var soundThree = document.getElementById("myAudiosFour");
    soundThree.play(); 
}});
});
});
});
