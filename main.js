Webcam.set({
    width:310,
    height:280,
    image_format:'jpeg',
    jpeg_quality:90
});

camera = document.getElementById("camera");
Webcam.attach(camera);

function photo(){
    Webcam.snap(function(image){
        document.getElementById("result").innerHTML = "<img src="+image+" class='photo'>"
    });
}