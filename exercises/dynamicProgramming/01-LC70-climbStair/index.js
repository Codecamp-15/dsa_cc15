const climbStairs = (n) => {
	if (n <= 3) return n;
	// n = 1 => 1
	// n = 2 => 2
	// n = 3 => 1+2 = 3
	// n = 4 => 3+2 = 5
	// n = 5 => 5+3 = 8
	// n = 6 => 8+5 = 13

	// [1, 2, 3, 5, 8, 13]
	let ways = [1, 2, 3];
	// // n = 4
	// ways[3] = ways[2] + ways[1]
	// // n = 5
	// ways[4] = ways[3] + ways[2]
	for (let i = 3; i < n; i++) {
		// 3 <= 4
		// way[i-1] = way[3-1] = 3
		// way[i-2] = way[3-2] = 2
		ways.push(ways[i - 1] + ways[i - 2]);
	}
	// return ways[n - 1];
	return ways.pop();
};

module.exports = climbStairs;
