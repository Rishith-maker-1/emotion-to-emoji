prediction1="";
prediction2="";
Webcam.set({
width: 350,
height:300,
image_format:'png',
png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capturedImage" src="'+data_uri+'">';
    });
}
console.log('ml5 version:',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json',modelLoaded);
function modelLoaded() {
    console.log('modelLoaded');
}
function speak(){
    var synth = window.speechSynthesis;
    speech1 = "The first prediction is " +prediction1;
    speech2 = "and the second prediction is " +prediction2;
    utterThis= new SpeechSynthesisUtterance(speech1+speech2);
    synth.speak(utterThis);
}