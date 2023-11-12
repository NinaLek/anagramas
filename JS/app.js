const forma = document.forms['forma'];
const palabra1 = forma['palabra1'];
const palabra2 = forma['palabra2'];
const btnComprobar = document.getElementById('btn-comprobar');
const btnReset = document.getElementById('nuevo');
const caracteresValidos = /^[ a-zA-ZñÑáéíóúüçÁÉÍÓÚÜÇ]+$/;
const animados = ['green','blue','yellow','pink','orange'];
let c= 0;
function cambiarColor(){
   document.getElementById('animalo').style.color=animados[c];
   document.getElementById('animalo2').style.color=animados[c];
   c++;
   if(c == animados.length){
      c=0
   };
}
const cambiale=setInterval(cambiarColor,1000);

function ordenarAZ(cadena,arreglo){
   let posi=0;
   for(let i=0; i<cadena.length;i++){
      if(cadena[i] !== ' '){
         arreglo[posi] = cadena[i];
         posi++;
      }
   }
   arreglo= arreglo.sort();
}

function esAnagrama(texto,texto2){
   let vale= true, resultado;
   const arr1=[], arr2=[];
   ordenarAZ(texto.toLowerCase(),arr1);
   ordenarAZ(texto2.toLowerCase(),arr2);
   let pos=0;
   while(vale && pos<arr1.length){    
      if(arr1[pos]==arr2[pos]){
         pos++;
      }else{
         vale=false;
      }
   }
   if(vale){
        resultado = 'Son anagramas';
   }
   else{
        resultado = 'No son anagramas';
   }
   document.getElementById('resultado').innerHTML=resultado;

}

function resolver(){
   if(palabra1.value.length > 0 && palabra2.value.length > 0){
      if((caracteresValidos.test(palabra1.value)) && (caracteresValidos.test(palabra2.value))){
         esAnagrama(palabra1.value,palabra2.value);
      }else{
         if(!caracteresValidos.test(palabra1.value) && !caracteresValidos.test(palabra2.value)){
            document.getElementById('resultado').innerHTML =`Debe completar ambos campos con una palabra cada uno (con letras únicamente)`;  
         }else if(!caracteresValidos.test(palabra1.value)){
            document.getElementById('resultado').innerHTML =`${palabra1.value} no es una palabra válida \n Ingrese únicamente letras`;  
         }else if(!caracteresValidos.test(palabra2.value)){
            document.getElementById('resultado').innerHTML =`${palabra2.value} no es una palabra válida \n Ingrese únicamente letras`;  
         }
      }
   }else{
      document.getElementById('resultado').innerHTML ='Debe completar ambos campos con una palabra cada uno (con letras únicamente)';  
   }
};


btnComprobar.addEventListener('click', ()=>{
   resolver();
}); 


btnReset.addEventListener('click', ()=>{
   palabra1.value='';
   palabra2.value='';
   document.getElementById('resultado').innerHTML='';
   palabra1.focus();
});

palabra1.addEventListener('keydown',(event)=>{
   if(event.key === "Enter"){
   palabra2.focus();
   }
});

palabra2.addEventListener('keydown',(event)=>{
   if(event.key === "Enter"){
      resolver();
      btnReset.focus(event.preventDefault());
   }
});

btnComprobar.addEventListener('keydown',(e)=>{
   if(e.key === "Enter"){
      btnReset.focus(e.preventDefault());
   }
})



