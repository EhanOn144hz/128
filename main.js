song="";
lwy=0;
lwx=0;
rwx=0;
rwy=0;
function preload()
{
    song = loadSound("music.mp3")
}
function setup(){
    canvas = createCanvas(600,500) ;
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    pn = ml5.poseNet(video, modelloaded);
    pn.on('pose', gotPoses)
}
function modelloaded()
{
    console.log('Posenet is initialized')
}
function draw(){
    image(video,0,0,600,500);
}
function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function gotPoses(results)
{
    if(results.length > 0){
        console.log(results);
        lwx=results[0].pose.leftWrist.x;
        rwx=results[0].pose.rightWrist.x;
        lwy=results[0].pose.leftWrist.y;
        rwy=results[0].pose.rightWrist.y;
    }    
}