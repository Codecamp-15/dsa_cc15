function maxProfit(prices) {
	// let currentProfit = [];
	// for (let i = 0; i <= prices.length; i++) {
	// 	for (let j = i + 1; j <= prices.length; j++) {
	// 		if (i < j) {
	// 			if (prices[j] > prices[i]) {
	// 				currentProfit.push(prices[j]);
	// 			}
	// 		}
	// 	}
	// }
	// let result = max(currentProfit);
	// return result;
	let buy = prices[0];
	let sell;
	let maxProfile = 0;

	for (let i = 1; i < prices.length; i++) {
		// move buy pointer
		if (prices[i] < buy && i !== prices.length) {
			buy = prices[i];
			sell = prices[i + 1];

			if (sell - buy > maxProfile) {
				maxProfile = sell - buy;
			}
		}
		// move sell pointer
		if (prices[i] - buy > maxProfile) {
			maxProfile = prices[i] - buy;
			sell = prices[i];
		}
	}
	return maxProfile;
}

maxProfit([7, 6, 4, 3, 1, 10]);
console.log(maxProfit([7, 6, 4, 3, 1, 10]));
module.exports = maxProfit;
