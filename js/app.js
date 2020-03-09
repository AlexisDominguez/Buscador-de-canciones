import {Ui} from "./interfaz.js";
import {Api} from "./api.js";

const form    = document.querySelector("#buscar"),
      result  = document.querySelector("#resultado");

form.addEventListener("submit", (e) =>{
   e.preventDefault();

   const artist = document.querySelector("#artista").value;
   const song = document.querySelector("#cancion").value;

   const ui = new Ui();

   if(artist === "" || song === ""){
      ui.showMessage("Por favor, rellena los dos campos", "error");
   }else{
      ui.showMessage("", "");
      const api = new Api(artist, song);
      api.getData()
         .then(data => {
            if(data.lyrics){
               result.innerHTML = "";
               result.innerHTML = data.lyrics;
            }else{
               ui.showMessage("No hay coincidencias", "error");
            }
         })
         .catch(error => {
            console.log(error);
         });
   }

});