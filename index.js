
function calculateBodyMass(){
let height  = Number(document.getElementById('height').value);
let weight = Number(document.getElementById('weight').value);
let bodyMass = weight / height/height*(10000);

let results = document.getElementById('display');



   if( height == " "  &&  weight == " " ) {
    document.getElementById('display').style.color= "black";
    results.innerHTML = `Enter valid height and weight`
 
 }

 else if( weight == " "  ) {
    document.getElementById('display').style.color= "black";
    results.innerHTML = `Enter valid weight`
 
 }

 else if( height == " "  ) {
    document.getElementById('display').style.color= "black";
    results.innerHTML = `Enter valid height`
 
 }

 



else if (bodyMass < 18.5   ) {
    document.getElementById('display').style.color= "orange";
    results.innerHTML = `Your body mass is ${bodyMass.toFixed(1)}  (underweight)`
  
}
 
  

else if (bodyMass >= 18.5  && bodyMass <=  24.9 ){
    document.getElementById('display').style.color= "purple";

    results.innerHTML = `Your body mass is    ${bodyMass.toFixed(1)}   (Normal)`
} 


    


else  if (bodyMass >= 25  && bodyMass <= 29.9  )   {
    document.getElementById('display').style.color= "blue";


    results.innerHTML = `Your body mass is  ${bodyMass.toFixed(1)}  (overweight)`
}





else 
{  
    document.getElementById('display').style.color= "red";

    results.innerHTML = `Your body mass is  ${ bodyMass.toFixed(1)}  ( obess)`
}
};



function resetCalculation (){
        
    document.getElementById('height').value= ' ';
    document.getElementById('weight').value = ' ';
    document.getElementById('display').innerHTML =' ';
    };

    



    