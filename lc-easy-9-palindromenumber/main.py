class Solution:
    def isPalindrome(self, x: int) -> bool:
#         Easy way, convert to string and compare to its reverse
        return str(x) == str(x)[::-1]
