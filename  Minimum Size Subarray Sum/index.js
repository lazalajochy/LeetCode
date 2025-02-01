
        //https://leetcode.com/problems/minimum-size-subarray-sum/description/

        function minSubArrayLen(target, nums) {
            let left = 0, sum = 0, minLength = Infinity;
            for (let right = 0; right < nums.length; right++) {
                sum += nums[right]; 
                while (sum >= target) { 
                    minLength = Math.min(minLength, right - left + 1);
                    sum -= nums[left]; 
                    left++;
                }
            }
            return minLength === Infinity ? 0 : minLength;
        }

        minSubArrayLen(7, [2, 3, 1, 2, 4, 3]) //waiting for 2
        // minSubArrayLen(4,[1,4,4]) //waiting for 1
        //     minSubArrayLen(11,[1,1,1,1,1,1,1,1]) //waiting for 0
        // minSubArrayLen(11, [1, 2, 3, 4, 5]) //waiting for 3

