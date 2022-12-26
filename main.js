noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;

function setup(){
video=createCapture(VIDEO);
video.size(700, 750);
video.position(250, 50);

canvas=createCanvas(550, 550);
canvas.position(1100, 150);
background("gray");
poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on("pose", gotPoses);
}

function modelLoaded(){
console.log("Model Loaded");
}

function gotPoses(results){
if(results.length>0){
console.log(results);
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
leftWristX=results[0].pose.leftWrist.x;
rightWristX=results[0].pose.rightWrist.x;
difference=floor(leftWristX-rightWristX);
}
}

function draw(){
background("gray");
document.getElementById("square_side").innerHTML="Font Size of the text will be: "+difference+'px';
fill ("blue");
stroke("blue");
textSize(difference);
text("Ayaan Nawaz", noseX, noseY);
}