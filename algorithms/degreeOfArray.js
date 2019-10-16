var degreeOfArray = (arr) => {
    let left = new Map();
    let right = new Map();
    let count = new Map();
    
    for(let i = 0; i < arr.length; i++){
        if( left.get(arr[i]) == undefined ){
            left.set(arr[i], i);
        }
        right.set(arr[i], i);
        count.set(arr[i], count.get(arr[i])? (count.get(arr[i]) + 1) : 1 );
        
    }
    
    let degree = Math.max(...count.values());

    let ans = arr.length;
    
    for(let [key, value] of count){
        if( value == degree ){
            ans = Math.min(ans, right.get(key) - left.get(key) + 1);
        }
    }
    return ans;
}

export default degreeOfArray;