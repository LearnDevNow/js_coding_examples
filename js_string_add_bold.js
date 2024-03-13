// 2.Given a string s and an array of strings words. You should add a closed pair of bold tag <b> and </b> to wrap the substrings in s that exist in words. 
// If two such substrings overlap, you should wrap them together with only one pair of closed bold-tag. 
// If two substrings wrapped by bold tags are consecutive, you should combine them. Return s after adding the bold tags. 
// Example 1: Input: s = "abcxyz123", words = ["abc","123"]Output: "<b>abc</b>xyz<b>123</b>"Explanation: The two strings of words are substrings of s as following: "abcxyz123". We add <b> before each substring and </b> after each substring. 
// Example 2: Input: s = "aaabbb", words = ["aa","b"]Output: "<b>aaabbb</b>".has context menu */
function addBoldTags(s, words) {
    // Initialize an array to store intervals
    const intervals = [];

    // Find occurrences of words in s
    for (const word of words) {
        let start = s.indexOf(word);
        while (start !== -1) {
            const end = start + word.length;
            intervals.push([start, end]);
            start = s.indexOf(word, end);
        }
    }

    // Merge overlapping intervals
    intervals.sort((a, b) => a[0] - b[0]);
    const mergedIntervals = [];
    for (const interval of intervals) {
        if (!mergedIntervals.length || interval[0] > mergedIntervals[mergedIntervals.length - 1][1]) {
            mergedIntervals.push(interval);
        } else {
            mergedIntervals[mergedIntervals.length - 1][1] = Math.max(mergedIntervals[mergedIntervals.length - 1][1], interval[1]);
        }
    }

    // Construct the modified string
    let result = '';
    let prevEnd = 0;
    for (const [start, end] of mergedIntervals) {
        result += s.substring(prevEnd, start);
        result += '<b>' + s.substring(start, end) + '</b>';
        prevEnd = end;
    }
    result += s.substring(prevEnd);

    return result;
}

// Example usage
const s1 = "abcxyz123";
const words1 = ["abc", "123"];
console.log(addBoldTags(s1, words1)); // Output: "<b>abc</b>xyz<b>123</b>"

const s2 = "aaabbb";
const words2 = ["aa", "b"];
console.log(addBoldTags(s2, words2)); // Output: "<b>aaabbb</b>"

