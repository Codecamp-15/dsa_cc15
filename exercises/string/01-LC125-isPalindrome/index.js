function isPalindrome(s) {
	// let left = s[0]
	// let right = s.[s.length -1]

	let S = s.toLowerCase().replace(/[\W_]/g, "");
	for (let i = 0; i < S.length / 2; i++) {
		let left = S[i];
		let right = S[S.length - 1 - i];
		if (left !== right) return false;
	}
	return true;
}

module.exports = isPalindrome;
