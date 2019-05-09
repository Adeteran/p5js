// highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"), "542 -214");

function highAndLow(numbers){
	let nums = [];

	for(let i = 0; i < numbers.length; i++){
		if(numbers[i] == " "){
			continue;
		}else{
			nums.push(numbers[i]);
		}
	}
	console.log(nums);
}

highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6");