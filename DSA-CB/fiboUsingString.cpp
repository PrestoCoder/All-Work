#include <iostream>
#include <cstdint>
#include<string>
using namespace std;
string add2Strings(string s1, string s2) {
    string output = "";
    int len1 = s1.length();
    int len2 = s2.length();
    int carry = 0;
    while(len1 > 0 && len2 > 0) {
        int digit1 = s1[len1 - 1] - '0';
        int digit2 = s2[len2 - 1] - '0';
        int sumOfDigits = digit1 + digit2 + carry;
        char addent = sumOfDigits % 10 + '0';
        output = addent + output;
        carry = sumOfDigits / 10;
        len1--;
        len2--;
    }
    if(len1 <= 0) {
        while(len2 > 0) {
            int digit = s2[len2 - 1] - '0';
            int sumOfDigits = digit + carry;
            char addent = sumOfDigits % 10 + '0';
            output = addent + output;
            carry = sumOfDigits / 10;
            len2--;
        }
    } else if(len2 <= 0) {
         while(len1 > 0) {
            int digit = s1[len1 - 1] - '0';
            int sumOfDigits = digit + carry;
            char addent = sumOfDigits % 10 + '0';
            output = addent + output;
            carry = sumOfDigits / 10;
            len1--;
        }
    }
    if(carry > 0) {
        char addent = carry + '0';
        output = addent + output;
    }
    return output;
}
int main() {
    int n;
    cin >> n;
    string n1 = "0", n2 = "1";
    string sum;
    for(int i = 2; i <= n; i++) {
        sum.assign(add2Strings(n1, n2));
        n1.assign(n2);
        n2.assign(sum);
    }
    cout << sum;
    
}
