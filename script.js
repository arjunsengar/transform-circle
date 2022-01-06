var global_circle;
var circle = document.createElement('div');
circle.id = 'Circle';
circle.setAttribute('style','width:100px; height:100px;');
//circle.setAttribute('style','height:100px');
circle.style.border = "2px solid black";
circle.style.borderRadius = '50%';
circle.style.animation = 'axis 8s ease infinite'
document.body.appendChild(circle);
console.log(circle);
//document.getElementById("myDiv").style.animation = "[animation_name] [Duration] [TimingFunction] [Delay] [IterationCount] [Direction] [fillMode] [playState]";
styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
document.head.appendChild(styleSheet);
styleSheet.sheet.insertRule(`
@keyframes axis {
  25% { transform: translate(93vw ,86vh);
       border-radius: 50%; }
  50% { transform: translate(93vw ,0vh); 
        border-radius: 0%; }
  75% { transform: translate(0vw , 86vh);
        broder-radius: 50%; }
 100% { transform: translate(0vw , 0vh);
        border-radius: 50%; }
}`,0);
console.log(styleSheet);
function createCircle(){
var circle1 = document.createElement('div'); 
circle1.id = 'circle1';
circle1.setAttribute('style','width:100px; height:100px; position:absolute; left:0px; top:0px');
//circle.setAttribute('style','height:100px');
circle1.style.border = "3px solid red";
circle1.style.borderRadius = '50%';
circle1.style.animation = 'new_axis 2s ease infinite';
document.body.appendChild(circle1);
global_circle = circle1;
setTimeout("deleteCircle()" ,2000);
}
styleSheet.sheet.insertRule(`
@keyframes new_axis {
  0% { transform: translate(0vw ,86vh);
       border-radius: 50%; }
 100% { transform: translate(92vw , 86vh);
        border-radius: 50%; }
}`,styleSheet.length);
function deleteCircle(){
      console.log(global_circle);
    //document.body.remove(global_circle);
}

setInterval( 'createCircle()',6000);