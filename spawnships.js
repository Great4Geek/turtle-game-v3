
function spawnships() {

    //cruiseship.visible = true;
    //cruiseship.addImage(cruiseimage) 
   
   
    if(frameCount%130===0)
    {
     trash = createSprite(cruiseship.x,cruiseship.y,30,30);
     var p = Math.round(random(1,5))    
     if(p === 1){
      trash.addImage(trashimage)
     }
     if(p === 2){
      trash.addImage(trashimage2)
     }

     if(p===3){
      trash.addImage(trashimage3)
     }

     if(p===4){
      trash.addImage(trashimage4)
     }

     if(p===5){
      trash.addImage(trashimage5)
     }

     trash.scale = 0.6
     trash.velocityY = 3
     trash.velocityX = random(-1,1)
     trash.lifetime = 200;
     //console.log(trash.x)
 
     trashgroup.add(trash)
    }

    
    
   

    //console.log(gamestate)

    trashgroup.debug = true;

  }

    