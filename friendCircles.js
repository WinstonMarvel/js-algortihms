/**
 * @param {number[][]} M
 * @return {number}
 */



var circles = [];

var addToCircle =  function(i, j){
    //Check existing circles if the members are present (Will be duplicated, but who cares? ;) )
        // If present add to circle
        // Else create new circle
    let addedToCircle = false;
    circles.map((circle)=>{
        if(circle.includes(i) || circle.includes(j)){
            circle.push(i);
            circle.push(j);
            addedToCircle = true;
        }
    });

    if(!addedToCircle){ //Create new circle
         circles.push([i,j]);
    }
};

var findCircleNum = function(M) {
    //For each friend relationship add to a circle
    for(var i = 0; i < M.length; i++ ){
        for(var j = 0; j < M[i].length; j++){
            if(M[i][j] === 1){
                //Add to a circle
                addToCircle(i, j);
            }
        }
    }
    return circles.length;
};


findCircleNum(
[[1,1,0],
 [1,1,1],
 [0,1,1]]);