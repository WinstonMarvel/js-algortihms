//Minimum Unique Array Sum
function getMinimumUniqueSum(arr) {
    // Write your code here
    let occurances = new Map();
    let indexes = new Map();
    for(var i = 0; i < arr.length; i++) {
        occurances.set(arr[i], occurances.get(arr[i]) ? (occurances.get(arr[i]) + 1) : 1 )
        indexes.set(arr[i], indexes.get(arr[i]) ? [...indexes.get(arr[i]), i] : [i] )
    }

    for(let [key, val] of occurances) {
        if(val > 1) {
            var loc = indexes.get(key);
            for(let j = 1; j < loc.length; j++ ) {
                let ind = loc[j];
                let uniqueValues = new Set(arr);
                while( uniqueValues.has(arr[ind]) ) {
                    arr[ind]++;
                }
            }
        }
    }
    return arr.reduce( (a, c) => a + c );
}


console.log(getMinimumUniqueSum([3,22,22,22,1,22,2,2,2,2,71]))
