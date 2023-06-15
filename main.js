left_wrist_x = 0;
right_wrist_x = 0;
difference = 0;

function setup(){
    canvas= createCanvas(400,400);
    canvas.position(600,200);

    video = createCapture(VIDEO);
    video.size(400,400);
    video.position(100,200);

    poseNet = ml5.poseNet(video,modelDone);
    poseNet.on('pose',gotPoses);
   }

   function modelDone(){
    console.log("POSENET IS INITIALIZED AND LOADED!")
   }

   function draw(){
    background("#653780");
    document.getElementById("font_size").innerHTML = "Font Size Of The Text Will Be = "+difference+"px";
    fill("#00ff0a");
    textSize(difference);
    text('Pranaya',50,250);
   }

   function gotPoses(results,error){
    if(error){
            console.error(error);
    }
    if(results.length > 0){
        console.log(results);

        right_wrist_x = results[0].pose.rightWrist.x;
        left_wrist_x = results[0].pose.leftWrist.x;

        difference = floor(left_wrist_x - right_wrist_x);

        console.log("rightwrist_x = "+results[0].pose.rightWrist.x+" rightwrist_y = "+results[0].pose.rightWrist.y);
        console.log("leftwrist_x = "+results[0].pose.leftWrist.x+" leftwrist_y = "+results[0].pose.leftWrist.y);
    }
   }