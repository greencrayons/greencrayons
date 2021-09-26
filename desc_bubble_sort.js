	
	
	
	const bubble = (array,index) => {
	
	 let sort = () => {
	
		// switchit transposes the current index with the next index
		let switchit = () => {
		array.splice(index + 2, 0, array[index])
		array.splice(index, 1)
		index = 0
		};
		
	    // update() increments the current iteration index then calls sort() recursively
		let update = () => {
		index++
		};
	
		
		console.log(array)
	    // if the index reaches the end of the array escape sort()
		if(array.length == index + 1){
		return
		};
		
	    // compare the current index > next index XOR current index == next index will call update() if true, else call switchit()
		((array[index] > array[index + 1]) ^ (array[index] == array[index + 1])) ? update():switchit(); 
		
		// call sort()
		sort()
	
	 };
	
	 // inital sort() call
	 sort()
	 // return sorted descending array
	 return array
	
	};
	
	
	bubble([1,2,3,4,8,8,12],0);
	
	
