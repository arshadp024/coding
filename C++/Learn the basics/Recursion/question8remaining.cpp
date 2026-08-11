#include<iostream>
#include<cstring>
using namespace std;
void reversestring(char s[], int n)
{
    if (n > 1)
    {
        for (int i = 0; i < n - 1; i++)
        {
            int temp = s[i];
            s[i] = s[i + 1];
            s[i + 1] = temp;
        }
        reversestring(s, n - 1);
    }
    
}
int main(){
char name[]="Hello  ";
int length =strlen(name);
reversestring(name,length);
    cout<<name;
return 0;
}
