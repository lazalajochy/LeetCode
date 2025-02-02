//https://leetcode.com/problems/subarray-sum-equals-k/description/
function subarraySum(nums, k) {
    let sum = 0, result = 0;
    for (let i = 0; i < nums.length; i++) {
        sum = nums[i]
        if (sum == k) {
            result++
        }
        for (let j = i + 1; j < nums.length; j++) {
            sum += nums[j];
            if (sum == k) {
                result++
            }
        }

    }
    return result

}




subarraySum([1, 1, 1], 2) //waiting for 2
//   subarraySum([1,2,3],3)  //waiting for 2
// subarraySum([1,2,1,2,1],3) //waiting for 4
//  subarraySum([1,-1,0],0) //waiting for 3
//   subarraySum([0,0],0)  //waiting for 3
//subarraySum([28, 54, 7, -70, 22, 65, -6], 100) //waiting for 1