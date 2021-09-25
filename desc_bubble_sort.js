


const bubble = (array) => {
	array = [array,0]

	let sort = () => {

		let switchit = () => {
		array[0].splice(array[1]+2,0,array[0][array[1]])
		array[0].splice(array[1],1)
		array[1] = 0
		sort()
		}

		let update = () => {
		array[1]++
		sort()
		}


		console.log(array)
		if(array[0].length == array[1]+1){
		return
		}

		array[0][array[1]] > array[0][array[1]+1] ? update():switchit()


	}


	sort()
	return array[0]

}


bubble([1,2,3,4,8])
