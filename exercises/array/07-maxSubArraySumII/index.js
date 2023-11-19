function maxSubArray(nums, k) {
	// solu1: bruteforce
	// time complexity = (n - k)(k - 1)
	// let maxSum = -Infinity;
	// let tempSum;
	// for (let i = 0; i < nums.length - k; i++) {
	// 	tempSum = 0;

	// 	for (let j = i; j < i + k; j++) {
	// 		tempSum += nums[j];
	// 	}
	// 	maxSum = Math.max(tempSum, maxSum);
	// }
	// return maxSum;

	// solu2: sliding window
	let maxSum = -Infinity;
	let tempSum = 0;

	for (let i = 0; i < k; i++) {
		tempSum += nums[i];
	}
	maxSum = tempSum;

	for (let j = k; j < nums.length; j++) {
		tempSum = tempSum + nums[j] - nums[j - k];

		maxSum = Math.max(tempSum, maxSum);
	}

	return maxSum;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4], 2));

module.exports = maxSubArray;
