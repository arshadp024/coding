------------------------ Brute -----------------------------------------------------
                     merge Sort 
----------------------------------------optimal------------------------------------------                     
class Solution
{
public:
    void sortColors(vector<int> &nums)
    {
        int temp = 0;
        int n = nums.size();
        for (int i = temp; i < n; i++)
        {
            if (nums[i] == 0)
            {
                swap(nums[temp], nums[i]);
                temp++;
            }
        }
        for (int i = temp; i < n; i++)
        {
            if (nums[i] == 1)
            {
                swap(nums[temp], nums[i]);
                temp++;
            }
        }
        for (int i = temp; i < n; i++)
        {
            if (nums[i] == 2)
            {
                swap(nums[temp], nums[i]);
                temp++;
            }
        }
    }
};
----------------------dutch national flag algorithm------------------------------
#include <bits/stdc++.h>
void sortArray(vector<int>& arr, int n)
{
    int low = 0, mid = 0, high = n - 1;
    while(mid <= high) {
        if(arr[mid] == 0) {
            swap(arr[low], arr[mid]);
            low++;
            mid++;
        }
        else if(arr[mid] == 1) {
            mid++;
        }
        else {
            swap(arr[mid], arr[high]);
            high--;
        }
    }
}