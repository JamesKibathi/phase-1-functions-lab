// Code your solution in this file!
function distanceFromHqInBlocks(d){

    if(d>42){
        return d-42;
     }

    else{
        return 42-d;
    }

}

const dB=distanceFromHqInBlocks(43);

console.log("The Db dist is"+dB);


function distanceFromHqInFeet(dFeet){

    //const feetToDb=264*(dFeet-42);
    const feetToDb=264*(distanceFromHqInBlocks(dFeet));

     return feetToDb;

}

function distanceTravelledInFeet(start,destination){
    
    if(destination>start){
        return 264*(destination-start);
    }else{
        return 264*(start-destination);
    }

}

function calculatesFarePrice(start, destination){

const totalDistance=distanceTravelledInFeet(start,destination);

let chargePerFoot;

if(totalDistance<=400){
    return chargePerFoot=0;
}
else if(totalDistance>400 && totalDistance<=2000){
   return (totalDistance-400)*0.02

}else if(totalDistance>2000 && totalDistance<=2500){
    chargePerFoot=25;
    return chargePerFoot;

}else if(totalDistance>2500){
    chargePerFoot="cannot travel that far";
    return chargePerFoot;
}

}



