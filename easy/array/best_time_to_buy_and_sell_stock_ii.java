/*
https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/564/
You are given an integer array prices where prices[i] is the price of a given stock on the ith day.
On each day, you may decide to buy and/or sell the stock.
You can only hold at most one share of the stock at any time.
However, you can buy it then immediately sell it on the same day.
Find and return the maximum profit you can achieve.
*/

// Non-greedy solution, finding local mins and maxes
class Solution {
    public int maxProfit(int[] prices) {
        int profit = 0;
        int i = 0;

        while(i < prices.length){
            // Find the local minimum
            while((i < prices.length - 1) && (prices[i+1] <= prices[i])) i++;
            int local_min = prices[i++];

            // Find the local maximum
            while((i < prices.length - 1) && (prices[i+1] >= prices[i])) i++;
            profit += (i < prices.length) ? (prices[i++] - local_min) : 0;
        }

        return profit;
    }
}

/*
// Greedy solution, buy today and sell tomorrow if our single stock is worth more tomorrow
class Solution {
    public int maxProfit(int[] prices) {
        int profit = 0;
        int current_value;
        int next_value;

        for(int i = 0; i < prices.length-1; i++){
            current_value = prices[i];
            next_value = prices[i+1];
            if(next_value > current_value){
                profit += next_value - current_value;
            }
        }

        return profit;
    }
}
*/