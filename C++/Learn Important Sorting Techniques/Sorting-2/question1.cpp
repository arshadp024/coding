 #include<bits/stdc++.h>
 using namespace std;
 vector<int> mergeSort(vector<int>& nums) {
    int n=nums.size();
    int temp;
    vector<int> arr;
    arr[0]=nums[0];
if(n>1){
    if(n%2==0){
       for(int i=0;i<n/2;i++){
        temp=nums[i];
        mergeSort(nums);
       }
       for(int i=n/2;i<n;i++){
        temp=nums[i];
        mergeSort(nums);
       }
    }else{
        for(int i=0;i<(n+1)/2;i++){
            temp=nums[i];
            mergeSort(nums);
        }
        for(int i=(n+1)/2;i<n;i++){
            temp=nums[i];
            mergeSort(nums);
        }
    }
}else{
    for(auto i=arr.begin();i!=arr.end();i++){
        if(temp<*i){
             arr.insert(arr.begin()+*i,temp);
        }
    }
}
return arr;
    }
    int main(){
        vector<int> v={2,1,3,5,1};
        for(auto i:mergeSort(v)){
            cout<<i<<endl;
        }
    }