using namespace std;
#include <vector>

class Solution {
public:
    /*  Check if each number is lower to or equal to the previous number.
        If the number before the previous number is smaller than the current number,
        make the current number equal to the previous number.
        Otherwise, make the previous number equal to the current number. */
    bool checkPossibility(vector<int>& nums) {
        int check=0;

        for(auto i=1; i<nums.size(); ++i){
            if(nums[i-1] > nums[i]){
                check++;
                if(i-2<0 || nums[i-2]<=nums[i]){
                    nums[i-1] = nums[i];
                }else{
                    nums[i] = nums[i-1];
                }
                if(check>1) return false;
            }
        }

        return true;
    }
};