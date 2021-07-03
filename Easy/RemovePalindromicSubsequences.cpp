using namespace std;
#include <string>

class Solution {
public:
    /*  Note: a subarray must be consecutive, a subsequence does not.
        So return 0 if string is empty, return 1 if string is only a or b,
        or return 2 if string has a and b. */
    int removePalindromeSub(string s) {
        return 2- (s == string(s.rbegin(), s.rend())) - s.empty();
    }
};