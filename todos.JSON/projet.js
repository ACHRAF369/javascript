//  import uuidv4 from "./uuid.js"

//  class Projet{
    
//     constructor(title,description,date){

//             this.id = uuidv4()
//             this.title = title
//             this.description = description
//             this.date = date 
//             this.completed = false

//     }
//     getId = ()=> this.id;

//     setTitle = ( title ) => ( this.title = title );
//     getTitle = () => this.title;

//     setDescription = (Description)=> (this.Description = Description);
//     getDescription = () => this.Description;

//     setDate= (date) => (this.date = date);
//     getDate= () => this.date;
   
//     setCompleted = (completed) => (this.completed = completed);
//     getCompleted = () => this.completed;

//  }

// let title = document.querySelector(".title").value  ;
// let titl = [] ;
 const titl = [] ;
 function addTitle(){

    const title = document.querySelector(".title").value  ;
  
            titl.push(title)
            console.log(titl)

 }







