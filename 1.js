// Write a JavaScript function that reverses a number.
// Sample Data and output:
// Example x = 32243;
// Expected Output: 34223

// Solution
function reverse_a_number(n)
{
	n = n + "";
	return n.split("").reverse().join("");
}
console.log(Number(reverse_a_number(32243)));