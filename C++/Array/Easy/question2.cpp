#include<bits/stdc++.h>
using namespace std;
int SecondlargestElement(vector<int>& nums) {
  int largestElement=nums[0];
      for(int i=0;i<nums.size()-1;i++){
        if(largestElement<nums[i+1]){
            largestElement=nums[i+1];
        }
      }
      for(int i=0;i<=nums.size()-1;i++){
      if(largestElement=nums[i])
}
}

    