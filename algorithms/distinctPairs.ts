// function countPairs(arr, k) {
//     // Write your code here
//     let pairs = [];
//     for(let i = 0; i < arr.length -1; i++) {
//         for(let j = i + 1; j < arr.length; j++) {
//             if(arr[i] + arr[j] == k){
//                 pairs.push([arr[i], arr[j]])
//             }
//         }
//     }
//     let pairsToString = pairs.map(function(p){
//         return p.sort().join("");
//     });
//     return [...new Set(pairsToString)].length;
// }


function countPairs(arr, k) {
    // Write your code here
    let ptr1 = 0, ptr2 = arr.length - 1;
    let pairs = [];
    arr = arr.sort(function(a, b){return a-b});
    while(ptr1 !== ptr2) {
        if( (arr[ptr1] + arr[ptr2]) > k ) {
            ptr2--;
        } else if ( (arr[ptr1] + arr[ptr2]) < k ) {
            ptr1++;
        } else {
            pairs.push([arr[ptr1], arr[ptr2]]);
            ptr1++;
        }
    }
    let pairsToString = pairs.map(function(p){
        return p.join("");
    });
    return [...new Set(pairsToString)].length;
}

// let res = countPairs([1,3,46,1,3,9], 47);
let res2 = countPairs([5,7,9,13,11,6,6,3,3], 12);

console.log(res2)
// console.log(res)