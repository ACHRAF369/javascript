//*************variables************//


var scren = document.getElementById("screen");
var num ;
var curchar;
var operation = ['+','-','*','/',];

function display(x){
    
    scren.value += x;
    num = scren.value.length;
   curchar = x;
    // console.log( "total: "+ curchar);
    precedNum()
   
   
   
}

function clearScreen(){
    scren.value = "";

}

function calcolator(){
    scren.value = eval(scren.value);
}
function precedNum(){
    prechar = scren.value.substring(num-2,num-1);
    checkNum()
    
}
function checkNum(){

     if(operation.includes(prechar) && operation.includes(curchar)){
        if(prechar == curchar){

            alert("test");
        }
        else{

             scren.value = 
            console.log(scren.value.slice(0,num-2)); 
        }
    }
}
function deletChar(){
    scren.value = scren.value.substring(0,num-1);
}




