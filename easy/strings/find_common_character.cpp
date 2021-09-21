/*
https://leetcode.com/problems/find-common-characters/
Given a string array words, return an array of all characters that show up 
in all strings within the words (including duplicates).
You may return the answer in any order.
*/

using namespace std;
#include <vector>
#include <string>
#include <climits>

class Solution {
public:
    vector<string> commonChars(vector<string>& A) {
    /*  Create a root hash table to store letters that occur more than once. */
        vector<int> cnt(26, INT_MAX);
        vector<string> res;
        
    /*  For each string in A: create a hash table for the letters in the string.
        Update each letter count in the root table to be equal to the 
        least frequent occurence of that letter in each word. */
        for(auto s : A){
            vector<int> cnt1(26,0);
            for(auto c : s) ++cnt1[c-'a'];
            for(auto i=0; i<26; ++i) cnt[i] = min(cnt[i], cnt1[i]);
        }
    /*  For each letter: add the number of times that letter appeared
        in every word from the aray. Cast the char as a string. */
        for(auto i=0; i<26; ++i)
            for(auto j=0; j<cnt[i]; ++j) res.push_back(string(1, i+ 'a'));
        return res;
    }
};