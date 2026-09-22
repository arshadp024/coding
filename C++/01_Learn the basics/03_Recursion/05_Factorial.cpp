#include <iostream>
using namespace std;
int Sum(int x){
    if(x>0){
        return x+Sum(x-1);
    }else{
        return 0;
    }
}
int main() {
    int n;
    cout<<"Enter a Number:";
    cin >> n;
    cout<<Sum(n);
    return 0;
}
---------------------------------------------New Striver(Optimal)-----------------------------------------
class Solution {
   public:
    long long int factorial(int n) {
        if (n == 0) {
            return 1;
        }
        return n * factorial(n - 1);
    }
};
