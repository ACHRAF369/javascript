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
// function e(){
    
//    var h=4;
   
//    return () => {

//        console.log(h);

//    }


// }
// e();

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
          deletChar()
          // 
        }else{

             scren.value = scren.value.slice(0, num-2) + scren.value.slice(num-1);

        //   scren.value = 
        //   console.log(num.substr(0,num) + scren.value.substr(num+1));
             
             

        }
    }
}
function deletChar(){
    scren.value = scren.value.substring(0,num-1);
}




