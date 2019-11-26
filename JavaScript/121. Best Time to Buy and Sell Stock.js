// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var maxProfit = 0;
    var minPrice = Number.MAX_SAFE_INTEGER;
    var i = 0
        while(i < prices.length){
            if(prices[i] < minPrice){
                minPrice = prices[i]
            } else if((prices[i]-minPrice) > maxProfit) {
                maxProfit = prices[i]-minPrice;
            }
            i++;
        }

    return maxProfit;
    
};