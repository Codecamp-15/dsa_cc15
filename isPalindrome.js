function isPalindrome(s) {
	// let left = s[0]
	// let right = s.[s.length -1]
	for (let i = 0; i < s.length / 2; i++) {
		let left = s[i];
		let right = s[s.length - 1 - i];
		if (left !== right) return false;
	}
	return true;
}

console.log(isPalindrome("TENET"));
