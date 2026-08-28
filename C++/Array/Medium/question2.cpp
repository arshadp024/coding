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