var mouse_event="empty";
canvas = document.getElementById("myCanvas");
 ctx = canvas.getContext("2d");

 color = "red" ;
 widthofline = 2 ;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e)
{
color = document.getElementById("color").value;
widthofline = document.getElementById("widthofline").value;
radius = document.getElementById("radius").value;
 mouse_event = "mouseDown"; 
    
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e) {
    var current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    var current_position_of_mouse_y =  e.clientY - canvas.offsetTop;

    if( mouse_event == "mouseDown" )
    {
        console.log("current position of mouse X and Y coordinates = ")
        console.log("X ="+ current_position_of_mouse_x + "Y =" + current_position_of_mouse_y);

        ctx.beginPath()
        ctx.strokeStyle = color
        ctx.lineWidth= widthofline
        ctx.arc( current_position_of_mouse_x , current_position_of_mouse_y , radius,0 , 2* Math.PI);
        ctx.stroke();
    }
     
}


canvas.addEventListener("mouseup",my_mouseup)
function my_mouseup(e){
    mouse_event = "mouseUp" 
           
}
canvas.addEventListener("mouseleave",my_mouseleave)

function my_mouseleave(e){
    mouse_event = "mouseleave" 
           
}


    function cleararea(){
        ctx.clearRect(0 , 0 , canvas.width , canvas.height )
}