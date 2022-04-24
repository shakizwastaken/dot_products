

let vectorA = [1,3];
let vectorB = [3,10];

let vectorC = [0,0];
let vectorD = [0,0];


function dot_product(firstVector , secondVector){

    let result = 0;
    for(let i=0; i < firstVector.length ; i++){
        result = result + firstVector[i]*secondVector[i];
    }

    if(result == 0){
        return [result, "the two vectors are orthogonal!"];
    }else{
        return [result, "the two vectors are not orthogonal."];
    }
}

//list of key values
let set = new Map([
    
    [vectorA,vectorB],
    [vectorC,vectorD]

]);


function dot_products (set){

    let results = [];

    set.forEach((k,v) => {
        results.push(dot_product(k,v));
    });

    return results;
}

console.log(dot_product(vectorA,vectorB));
console.log(dot_products(set));


