//*************variables************//

var scren = document.getElementById("screen");
var num ;
var curchar;
var operation = ['+','-','*','/',];

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
    prechar = scren.value.substring(num-2,num-1);
    
}
function checkNum(){

    if(operation.includes(prechar) && operation.includes(curchar)){
        if(prechar == curchar){
            deletChar();
        }
    }
}
function deletChar(){
    scren.value = scren.value.substring(0,num-1);
}




