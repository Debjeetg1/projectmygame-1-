var tick

function preload()
{
   tick = loadSound("tick (2).wav");
}

function setup()
{
    createCanvas(displayWidth , displayHeight);
    tick.play();
    tick.loop();    

}


function draw()
{
    background("#68a4ff");

    sc = second();
    hr = hour();
    mn = minute();


    let scAngle2 = map(sc , 0 , 60 , -90 , 270)
    let mnAngle2 = map(mn , 0 , 60 ,-90 , 270);
    let hrAngle2 = map(hr % 12 , 0 , 12 ,-90, 270);
  
  
  
    push();
    fill(255)
    translate(displayWidth - displayWidth/2 , displayHeight - displayHeight/1.81)
    rotate(scAngle2 )
    strokeWeight(3)
    stroke("white")
    line( 0 , 0 , 280 , 0)
    pop()
  
    push();
    fill(255)
    translate(displayWidth - displayWidth/2 , displayHeight - displayHeight/1.81)
    rotate(mnAngle2 )
    strokeWeight(6)
    stroke("white")
    line( 0 , 0 , 240 , 0)
  
    pop();
  
    push();
    fill(255)
    translate(displayWidth - displayWidth/2 , displayHeight - displayHeight/1.81)
    rotate(hrAngle2 )
    strokeWeight(8)
    stroke("white")
    line( 0 , 0 , 200 , 0)
  
    pop();
  
  
  
    push();
    fill(255)
    strokeWeight(2)
    textSize(25 );
    stroke("white")
    text("XII" , displayWidth - displayWidth/1.98 , displayHeight - displayHeight/1.17)
    pop();
  
    push();
    fill(255)
    strokeWeight(2)
    textSize(25);
    stroke("white")
    text("VI" , displayWidth - displayWidth/1.98 , displayHeight - displayHeight/4)
    pop();
  
    push();
    fill(255)
    strokeWeight(2)
    textSize(25);
    stroke("white")
    text("III" , displayWidth - displayWidth/3 , displayHeight - displayHeight/1.9)
    pop();
  
    push();
    fill(255)
    strokeWeight(2)
    textSize(25);
    stroke("white")
    text("IX" , displayWidth - displayWidth/1.48 , displayHeight - displayHeight/1.9)
    pop();
  
    push();
    fill(255)
    strokeWeight(2)
    textSize(25 );
    stroke("white")
    text("I" , displayWidth - displayWidth/2.45 , displayHeight - displayHeight/1.25)
    pop();
  
  
    push();
    fill(255)
    strokeWeight(2)
    textSize(25 );
    stroke("white")
    text("II" , displayWidth - displayWidth/2.9 , displayHeight - displayHeight/1.51 )
    pop();
  
    push();
    fill(255)
    strokeWeight(2)
    textSize(25 );
    stroke("white")
    text("IV" , displayWidth - displayWidth/2.8 , displayHeight - displayHeight/2.6)
    pop();
  
    push();
    fill(255)
    strokeWeight(2)
    textSize(25 );
    stroke("white")
    text("V" , displayWidth - displayWidth/2.39 , displayHeight - displayHeight/3.6)
    pop();
    
    push();
    fill(255)
    strokeWeight(2)
    textSize(25 );
    stroke("white")
    text("VII" , displayWidth - displayWidth/1.7 , displayHeight - displayHeight/3.6)
    pop();
  
    push();
    fill(255)
    strokeWeight(2)
    textSize(25 );
    stroke("white")
    text("VIII" , displayWidth - displayWidth/1.55 , displayHeight - displayHeight/2.7)
    pop();
  
    push();
    fill(255)
    strokeWeight(2)
    textSize(25 );
    stroke("white")
    text("X" , displayWidth - displayWidth/1.5 , displayHeight - displayHeight/1.51)
    pop();
  
    push();
    fill(255)
    strokeWeight(2)
    textSize(25 );
    stroke("white")
    text("XI" , displayWidth - displayWidth/1.69 , displayHeight - displayHeight/1.25)
    pop();
  
  
    translate(displayWidth - displayWidth/2 , displayHeight - displayHeight/1.8)
  
  
    noFill();
    stroke("#599bff");
    strokeWeight(25)
    arc(0 , 0 ,625 , 625 ,0 , 180)
  
    noFill();
    stroke("#599bff");
    strokeWeight(19)
    arc(0 , 0 ,630 , 630 ,180 , 0)
  
    noFill();
    stroke(255, 255  ,255);
    strokeWeight(15)
    ellipse( 0 , 0 , 600 ,600)
  
    
    stroke(239 , 239 , 239);
    strokeWeight(15)
    ellipse( 0 , 0 , 615 ,615);

    strokeWeight(7)
    textSize(150);
    text(nf(hr%12 +": "+mn+": "+sc),-250 , 450)
}