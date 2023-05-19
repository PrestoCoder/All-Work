#include<iostream>
#include<string>
#include<math.h>
using namespace std;

int str2num(string str, int index) {
    if(index == str.length()) {
        return 0;
    }
    int num = str[index] - '0';
    return num * pow(10, str.length() - index - 1) + str2num(str, index + 1);
}

int main() {
    string str;
    cin >> str;
    if(str[0] == '-') {
        cout << -1 * str2num(str, 1);
    } else {
        cout << str2num(str, 0);
    }
    return 0;
}