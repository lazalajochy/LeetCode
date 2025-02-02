function maxAscendingSum(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            currentSum += nums[i];
        } else {
            currentSum = nums[i];
        }
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}

//maxAscendingSum([10,20,30,5,10,50]) //waiting for 65
//  maxAscendingSum([10,20,30,40,50]) //waiting for 150
maxAscendingSum([12, 17, 15, 13, 10, 11, 12]) //waiting for 33
