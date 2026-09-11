-----------------------------------------------------Brute-------------------------------------------------------
class Solution {
public:
    int maxProduct(vector<int>& nums) {
        int n=nums.size();
        int mul=nums[0];
        int largest_product=nums[0];
        for(int i=0;i<n;i++){
            mul=nums[i];
            largest_product=max(largest_product,mul);
            for(int j=i+1;j<n;j++){
              mul*=nums[j];
              largest_product=max(largest_product,mul);
            }
        }
        return largest_product;
    }
};
---------------------------------------------------Optimal----------------------------------------------------------
