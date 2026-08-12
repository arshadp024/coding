#include<bits/stdc++.h>
using namespace std;
int SecondlargestElement(vector<int>& nums) {
   int largestElement=nums[0];
   int SecondlargestElement=nums[0];
      for(int i=0;i<=nums.size()-2;i++){
        if(largestElement<nums[i+1]){
            largestElement=nums[i+1];
        }
      }
      for(int i=0;i<=nums.size()-2;i++){
        if((SecondlargestElement<nums[i+1])&&nums[i+1]!=largestElement){
            SecondlargestElement=nums[i+1];
        }
      }
      if(largestElement>SecondlargestElement){
      return SecondlargestElement;
    }else{
        return -1;
    }
}
    