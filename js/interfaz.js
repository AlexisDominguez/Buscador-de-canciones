export class Ui{

   showMessage(message, type){
      if(type === "error"){
         const div = document.querySelector("#mensajes");
         div.innerHTML = "";
         div.innerHTML = message;
         div.classList.add(type);
      }else if(type === ""){
         const div = document.querySelector("#mensajes");
         div.innerHTML = "";
         div.classList.remove("error");
      }
   }

}