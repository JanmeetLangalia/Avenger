var canvas = new fabric.Canvas(`myCanvas`);
block_image_width=20;
block_image_height=20;
player_x=10;
player_y=10;
var player_object="";
var block_image_object="";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        
    });
    canvas.add(player_object);

    });
}
if (keypressed=='70') 
   /* Press f for face*/
{
    new_image('ironman_face.png');
    console.log("f");
}
if (keypressed=='66')
 /* Press b for face*/
{
    new_image('hulk_body.png');
    console.log("b");
}
if (keypressed=='72')
 /* Press h for lh*/
{
    new_image('captain_america_left_hand.png');
    console.log("h");
}
if (keypressed=='82')
 /* Press r for rh*/
{
    new_image('thor_right_hand.png');
    console.log("r");
}
if (keypressed=='76')
 /* Press l for legs*/
{
    new_image('spiderman_legs.png');
    console.log("l");
}

function up(){
    if(player_y>=0){
    
    
        player_y=player_y-block_image_height;
        console.log("blockimgheight="+block_image_height);
        console.log ("When Up arrow key is pressed x="+player_x+"y="+player_y);
        canvas.remove(player_object);
        player_update()
    }
    }
    
    
    function down(){
        if(player_y<=500){
        
        
            player_y=player_y+block_image_height;
            console.log("blockimgheight="+block_image_height);
            console.log ("When Down arrow key is pressed x="+player_x+"y="+player_y);
            canvas.remove(player_object);
            player_update()
        }
        }
        function right(){
            if(player_x<=850){
            
            
                player_x=player_x+block_image_width;
                console.log("blockimgheight="+block_image_width);
                console.log ("When Right arrow key is pressed x="+player_x+"y="+player_y);
                canvas.remove(player_object);
                player_update()
            }
            }
            function left(){
                if(player_x>=0){
                
                
                    player_x=player_x-block_image_width;
                    console.log("blockimgheight="+block_image_width);
                    console.log ("When Left arrow key is pressed x="+player_x+"y="+player_y);
                    canvas.remove(player_object);
                    player_update()
                }
                }