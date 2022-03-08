noseX = 0;
noseY = 0;

function preload(){

clown_noseY = loadImage("https://i.postimg.cc/3xq5BQ4f/mustache-removebg-preview.png");


}

function setup(){

canvas= createCanvas(525, 400);
canvas.center();

video = createCapture(VIDEO);
video.size(525, 400);
video.hide();
video.center();

poseNet = ml5.poseNet(video, modelLoqded);
poseNet.on('pose', gotPoses);


}



function modelLoqded(){

    console.log("pingspoofedby14")
}

function gotPoses(results){

    if(results.length > 0){

        console.log(results);
        console.log("The X co-ordinate of Nose is:"+results[0].pose.nose.x);
        console.log("The Y co-ordinate of Nose is:"+results[0].pose.nose.y);
        noseX = results[0].pose.nose.x - 35;
        noseY = results[0].pose.nose.y + 15;
    }
}


function draw(){
    image(video, 0, 0, 525, 400);
    image(clown_noseY, noseX, noseY, 85, 45);
    
}


function snapishoti(){

save('LAla#2.png');
}