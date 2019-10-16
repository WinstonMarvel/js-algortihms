

var isPeak = (arr, i) => {
	if( i === 0) { //Check 1st element
		return arr[i] > arr[i+1] ? true:false;
	} else if( i === arr.length - 1){ //Check last
		return arr[i] > arr[i-1] ? true:false;

	} else if( arr[i-1] < arr[i] && arr[i] > arr[i+1] ){
		return true;
	}
	return false;
};

var isValley = (arr, i) =>{
	if( i === 0) { //Check 1st element
		return arr[i] < arr[i+1] ? true:false;
	} else if( i === arr.length - 1){ //Check last
		return arr[i] < arr[i-1] ? true:false;

	} else if( arr[i-1] > arr[i] && arr[i] < arr[i+1] ){
		return true;
	}
	return false;
};

var countHillsAndValleys = (arr) => {
	total = 0;
	for(var i = 0; i < arr.length; i++){
		if(isPeak(arr, i) || isValley(arr, i))
			total++;
	}
	return total;
}


countHillsAndValleys([...new Set([2, 2, 3, 4, 3, 3, 2, 2, 1, 1, 2, 5])]);