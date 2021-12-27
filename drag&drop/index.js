var draggingid; 
let Valinput = document.querySelector('#Valinput').value;

console.log(Valinput);

var id = {load:`<div class='code-box' style='background-color:rgb(125, 253, 125);'>${Valinput}<br></div><br><br>`,
          var:"var <div id='vare' class='action' style='display:inline-block; ' block-accept='none'><input id='texte' type='text' block-accept='none'> = <div class='action' id='varoute' style='background-color:#FF8C00;' block-accept='indicator'>&nbsp;&nbsp;&nbsp;&nbsp;</div> ;</div><br>",
          color:"white",
          text:"\"<input id='texte' type='text' block-accept='none'>\"",
          varee:"<input id='varee' type='text' block-accept='elementget'>",
          getbyid: "document.getElementById(<div id='varoute' class='action' style='background-color:white;' block-accept='indicator'>&nbsp;&nbsp;&nbsp;&nbsp;</div> </div>)",
          getbyclass: "document.getElementsByClassName(<div id='alerte' class='action' style='background-color:white;' block-accept='indicator'>&nbsp;&nbsp;&nbsp;&nbsp;</div> </div>)",
          alert: "alert(<div id='varoute' class='action' style='background-color:#FF8C00;' block-accept='indicator'>&nbsp;&nbsp;&nbsp;&nbsp;</div>);<br>"
          };

function add(parameter){
  $('.editor').append(id[parameter]);
}


function drag(ev) {
   var target_id = ev.target.id;
   ev.dataTransfer.setData('Text/html', ev.target.id);
   ev.dataTransfer.setData('type', $("#" + ev.target.id).attr("block-type"));

}

function allowDrop(ev) {
  ev.preventDefault();
} 

function drop(ev) {
  var targetid = ev.target.id;
  var target_type = $("#" + ev.target.id).attr("block-accept");
  var draggingid = ev.dataTransfer.getData("text/html");
  var dragging_type = ev.dataTransfer.getData("type");
  if (target_type.indexOf(dragging_type) >= 0){
    ev.target.insertAdjacentHTML( 'beforeend', id[draggingid] );
  }
} 




function dragEnter(event) {
       // event.target.style.border = "3px dotted red";
}


