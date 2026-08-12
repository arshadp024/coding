#include<bits/stdc++.h>
using namespace std;
int largestElement(vector<int>& nums) {
    int largestElement=nums[0];
      for(int i=0;i<nums.size()-2;i++){
        if(nums[i]>nums[i+1]){
            largestElement=nums[i];
        }else{
            largestElement=nums[i+1];
        }
      }
      return largestElement;
    }
    int main(){
        vector<int> v={-4,-3,-1,-11,-8};
        cout<<largestElement(v);
    }