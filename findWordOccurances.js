//Find occurances of word balloon in a larger String

var balloon = new Map([
    ['b',1],
    ['a',1],
    ['l',2],
    ['o',2],
    ['n',1]
]);

 


var balloonTest = new Map([
    ['b',2],
    ['a',2],
    ['l',4],
    ['o',4],
    ['n',5]
]);

 

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    var str = S;

 

    var map = new Map([
        ['b',0],
        ['a',0],
        ['l',0],
        ['o',0],
        ['n',0]
    ]);
    
    for(var [l, i] of str){
        var val = map.get(l)
        if( val !== undefined)
            map.set(l, val + 1)
    }
    
    console.log(map)
    return findOccurancesOf(balloon, map);
}

 


function findOccurancesOf(m1, m2){
    let total = [];
    for( [key, val] of m1){
        total.push(Math.floor(m2.get(key) / m1.get(key)))
    }
    return Math.min(...total);
}

 

console.log(solution("balloonTestballoon"))
// console.log(findOccurancesOf(balloon, balloonTest));
