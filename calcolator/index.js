//*************variables************//

var scren = document.getElementById("screen");
var num ;
var char;

function display(x){
    
    scren.value += x;
    num = scren.value.length;
   char = x;
    // console.log( "total: "+ num);
    precedNum()
    checkNum()
   
}

function clearScreen(){
    scren.value = "";

}

function calcolator(){
    scren.value = eval(scren.value);
}
function precedNum(){
    preced = scren.value.substring(num-2,num-1)
    
}
function checkNum(){

    if(preced  == char){
        alert("non")
    }
}




