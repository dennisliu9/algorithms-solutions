class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # loop through all combinations
        # don't need to loop through entirety of nums twice, just remaining elements
        for i, elem in enumerate(nums):
            for j in range(i+1, len(nums)):
                if nums[i] + nums[j] == target: return [i,j]
