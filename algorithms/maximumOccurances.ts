function maximumOccurringCharacter(text) {
    // Write your code here
    let occurances = new Map();
    let firstOccurance = new Map();
    for(var i = 0; i < text.length; i++) {
        occurances.set(text.charAt(i), occurances.get(text.charAt(i)) ? occurances.get(text.charAt(i)) + 1 : 1 )
        firstOccurance.get(text.charAt(i)) ? false : firstOccurance.set(text.charAt(i), i); 
    }
    let maxOccurances = 0;
    for(let [key, value] of occurances) {
        value > maxOccurances ? (maxOccurances = value) : false;
    }

    for(let [key] of firstOccurance) {
        if(occurances.get(key) === maxOccurances) {
            return key;
        }
    }
}

