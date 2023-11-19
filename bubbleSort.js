//  O(n^2)

let arr = [7, 4, 2, 3];

function bubbleSort(array) {
	let temp = [];
	for (let i = 0; i < array.length; i++) {
		let x = array[i];
		for (let j = i + 1; j < array.length; j++) {
			let y = array[j];
			if (x > y) {
				let temp = x;
				array[i] = array[j];
				array[j] = temp;
			}
		}
		// let y = array[i + 1]
		// if(x > y) {
		//     let temp = x;
		//     x = y;
		//     y = temp;
		// }
	}
}

bubbleSort(arr);

str = "TenET";
const normalizeStr = str.toLowerCase().replace(/[^a-zA-Z0-9 -]/g, "");
