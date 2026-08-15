// class Solution {
// public:
//     void moveZeroes(vector<int>& nums) {
//         int count_zero=0;
//         for(auto i=nums.begin();i<nums.end();){
//             if(*i==0){
//               nums.erase(i);
//               count_zero++;
//             }else{
//                 i++;
//             }
//         }
//         nums.insert(nums.end(),count_zero,0);
//     }
// };