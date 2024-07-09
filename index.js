
function calculateBodyMass(){
let height  = Number(document.getElementById('height').value);
let weight = Number(document.getElementById('weight').value);
let bodyMass = weight / height/height*(10000);

let results = document.getElementById('display');


if (bodyMass < 18.5  &&  height != isNaN  && weight != isNaN ) {
    document.getElementById('display').style.color= "orange";
    results.innerHTML = `Your body mass is ${bodyMass.toFixed(1)} kg (underweight)`
  
}
 
  

else if (bodyMass >= 18.5  && bodyMass <=  24.9 && height != isNaN  && weight != isNaN ){
    document.getElementById('display').style.color= "purple";

    results.innerHTML = `Your body mass is    ${bodyMass.toFixed(1)} kg  (Normal)`
} 


    else if(bodyMass >= 18.5  && bodyMass <=  24.9 && height != isNaN  && weight != isNaN ){
    document.getElementById('display').style.color= "purple";

    results.innerHTML = `Your body mass is    ${bodyMass.toFixed(1)} kg  (Normal)`
} 


else  if (bodyMass >= 25  && bodyMass <= 29.9 && height != isNaN  && weight != isNaN )   {
    document.getElementById('display').style.color= "blue";


    results.innerHTML = `Your body mass is  ${bodyMass.toFixed(1)} kg (overweight)`
}





else if( bodyMass >= 30 && height != isNaN  && weight != isNaN )  
{ 
    document.getElementById('display').style.color= "red";

    results.innerHTML = `Your body mass is  ${ bodyMass.toFixed(1)} kg ( obess)`
}

else {

    document.getElementById('display').style.color= "black";

    results.innerHTML = `enter valid inputs `
}
};



function resetCalculation (){
        
    document.getElementById('height').value= ' ';
    document.getElementById('weight').value = ' ';
    document.getElementById('display').innerHTML =' ';
    };

    



    