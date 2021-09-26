


const bubble = (array) => {

 // array [input unsorted array of integers, index]
 array = [array, 0]

 let sort = () => {

	// switchit transposes the current index with the next index
	let switchit = () => {
	array[0].splice(array[1] + 2, 0, array[0][array[1]])
	array[0].splice(array[1], 1)
	array[1] = 0
	sort()
	};

        // update() increments the current iteration index then calls sort() recursively
	let update = () => {
	array[1]++
	sort()
	};


	console.log(array)
        // if the index reaches the end of the array escape sort()
	if(array[0].length == array[1] + 1){
	return
	}

        // compare the current index with the next index and call update() if true, else call switchit()
	array[0][array[1]] > array[0][array[1] + 1] ? update():switchit();


 };

 // inital sort() call
 sort()
 // return sorted descending array
 return array[0]

};


bubble([1,2,3,4,8,12]);
