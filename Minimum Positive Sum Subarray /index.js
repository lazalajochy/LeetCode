
//https://leetcode.com/problems/minimum-positive-sum-subarray/submissions/1527035073/

function mininumSumSubArray(nums, l, r) {
    let maxLimit = Math.max(l, r), minLimit = Math.min(l, r), auxArr = [];
    let sum = 0, aux = 0, reuslt = Infinity, countSum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum = nums[i];
        countSum = 1
        auxArr = [];

        if (sum > 0) {

            if (auxArr.length + 1 == minLimit) {
                auxArr.push(sum);
                aux = sum;
            }

        }

        for (let j = i + 1; j < nums.length; j++) {
            if (countSum + 1 <= maxLimit) {
                sum += nums[j];
                countSum++

                if (sum > 0 && countSum >= minLimit) {
                    auxArr.push(sum)
                }
                if (countSum >= maxLimit) break
            } else {
                break
            }
        }

        if (countSum >= minLimit && auxArr.length > 0) {
            (Math.min(...auxArr) < reuslt) ? reuslt = Math.min(...auxArr) : reuslt
        }
    }
    result = (reuslt != Infinity) ? reuslt : reuslt = -1;
    console.log(reuslt)
    return reuslt
}
mininumSumSubArray([3, -2, 1, 4], 2, 3) // waiting for 1
// mininumSumSubArray([-2, 2, -3, 1], l = 2, r = 3) // wating for -1
//    mininumSumSubArray([4, -10], 1, 1) //wating for 4
//   mininumSumSubArray([-3,17],1,2) //wating for 14
//    mininumSumSubArray([25, -9], 1, 1) //waiting for 25
//  mininumSumSubArray([9, 11, -9], 3, 3) //waiting for 11
//  mininumSumSubArray([-16,18,1],3,3) //waiting for 3
// mininumSumSubArray([17,-24,22],1,2) //waiting for 17
// mininumSumSubArray([-24,13,22],1,1) //waiting for 13
// mininumSumSubArray([13,-19,16,-9,-12,-2,7,-2],1,1) //waiting for 7
