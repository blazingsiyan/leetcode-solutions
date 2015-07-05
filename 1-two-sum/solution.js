/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var d = {};
    for (var i=0; i < nums.length; ++i) {
        var diff = target - nums[i];
        if (d.hasOwnProperty(diff)) {
            return [d[diff]+1, i+1];
        }
        d[nums[i]] = i;
    }
};
