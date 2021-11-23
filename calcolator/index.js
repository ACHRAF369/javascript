//*************variables************//

var scren = document.getElementById("screen");
var num ;

function display(x){
    
    scren.value += x;
 
}

function clearScreen(){
    scren.value = "";

}

function calcolator(){
    scren.value = eval(scren.value);
}




