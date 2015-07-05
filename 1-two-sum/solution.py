class Solution:
    # @param {integer[]} nums
    # @param {integer} target
    # @return {integer[]}
    def twoSum(self, nums, target):
        d = {}
        for i, num in enumerate(nums):
            diff = target - num
            if diff in d:
                return d[diff]+1, i+1
            d[num] = i
