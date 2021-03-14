function gamestate_4 ()

{


    if(gamestate===4)
    {
  
  
        background(255,200,255);
        
        textSize(40);
        fill(50,200,50)
        text("You lose! You let the trash touch the turtle.", displayWidth/2.5, displayHeight/10 - 30);
  
        fill(200,50,50)
        textSize(30); 

        let g = 'Reload the tab to play again. Better luck next time.'
        text(g,displayWidth/2-750, displayHeight/8);
       
        sadboi.visible = true;
  
  

          sea_urchin2.destroy();
          sea_urchin.destroy();
          rock.destroy();
          rock2.destroy();
          rock3.destroy();
          john.destroy();
          turtlesprite.destroy();
          netsprite.destroy();
          cruiseship.destroy();
          trash.destroy();
          coin.destroy();
  
    }






}