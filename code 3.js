let miArray = []
for (let i = 0; i < 9 ; i++){
    e = Math.random (0,9);
    e *= 10;f=Math.round(e);
    miArray[i]=f;
}
console.log(miArray);

let arrayPrueba = [7,8,9,0,0,4,0,6,4,7,8,9,0,0,4,0,6,4];
console.log(" Array Original: " + miArray);

function myFunction(array){
    let salida ='';
    let temp = []
    for(let i = 0; i < array.length; i++){
      if(array[i] !== 0 && i+1 < array.length)
         temp.push(array[i])
      else{ 
         if(i+1 == array.length){
           temp.push(array[i])
           salida += temp.sort((a,b)=> a-b).join('')
         }else{
           salida += temp.sort((a,b)=> a-b).join('')+ ' ' 
           temp = [] 
         }   
         if(i+1 < array.length && array[i+1]==0)
           salida += 'X'
      }
    }
    return salida
  }
 console.log("El Bloque quedaria: "+ myFunction(arrayPrueba));

 