

/* 1.Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence. You must write an algorithm that runs in O(n) time. Example 1: Input: nums = [100,4,200,1,3,2]Output: 4Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4. Example 2: Input: nums = [0,3,7,2,5,8,4,6,0,1]Output: 9 */
 
// var nums = [100,4,200,1,3,2];
// var nums2 = [0,3,7,2,5,8,4,6,0,1];
// let len=nums.length;
//   for(let i=0, j=len; i<len, j>0;  i++, j--)
//   {
//   	if(nums[i]>nums[j]) 

function longestConsecutive(nums) {
    const numSet = new Set(nums);
    let maxLength = 0;

    for (let num of nums) {
        if (!numSet.has(num - 1)) {
            let currentLength = 1;
            while (numSet.has(num + 1)) {
                num++;
                currentLength++;
            }
            maxLength = Math.max(maxLength, currentLength);
        }
    }

    return maxLength;
}

// Example usage
const nums1 = [100, 4, 200, 1, 3, 2];
console.log("Example 1: Length of longest consecutive sequence:", longestConsecutive(nums1));  // Output: 4

const nums2 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
console.log("Example 2: Length of longest consecutive sequence:", longestConsecutive(nums2));  // Output: 9
