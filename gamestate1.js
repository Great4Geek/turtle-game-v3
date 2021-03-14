function gamestate_1()
{

    if(gamestate===1){
        background(beachsprite)
       
        //beach_background.visible=true;
        textSize(40);
        text("Hold the right arrow to move John to the right into the ocean\n in order to get to the next level.",240,200);
        //beach_background.height = 100;
        john.visible=true;
        
        //portal_1.visible = true;
       
        
        if (keyDown(RIGHT_ARROW)){
        john.x = john.x+4;
        }
        
        if (keyDown(LEFT_ARROW)){
          john.x = john.x-4;
        }
        
        }
        
        if (john.x === portal_1.x){
        gamestate = 2
        
        }
        

}