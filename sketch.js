const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg){
        background(backgroundImg);
    }


    Engine.update(engine);

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("https://worldtimeapi.org/api/timezone/America/Los_Angeles");
    var responseJSON = await response.json();    
    // write code slice the datetime
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,  13);
    // add conditions to change the background images from sunrise to sunset
    if(hour >= 3 && hour < 5){
        bg = "sunrise1.png";
    } else if(hour >= 5 && hour < 7){
        bg = "sunrise2.png";
    } else if(hour >= 7 && hour < 9){
        bg = "sunrise3.png";
    } else if(hour >= 9 && hour < 11){
        bg = "sunrise4.png";
    } else if(hour >= 11 && hour < 13){
        bg = "sunrise5.png";
    } else if(hour >= 13 && hour < 15){
        bg = "sunrise6.png";
    } else if(hour >= 15 && hour < 17){
        bg = "sunset7.png";
    } else if(hour === 17 && hour < 19){
        bg = "sunset8.png";
    } else if(hour >= 19 && hour < 21){
        bg = "sunset9.png";
    } else if(hour >= 21 && hour < 23){
        bg = "sunset10.png";
    } else if(hour <= 23 && hour < 1){
        bg = "sunset11.png";
    } else{
        bg = "sunset12.png";
    }
     
    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
}
