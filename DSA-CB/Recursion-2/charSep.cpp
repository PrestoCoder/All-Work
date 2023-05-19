#include<iostream>
#include<string>
using namespace std;

void charSep(string& str, string& ans, int index) {
    if(index == str.length()) {
        return;
    }
    ans += str[index];
    if(str[index] == str[index + 1]) {
        ans += '*';
    }
    charSep(str, ans, index + 1);
}

int main() {
    // If don't want to create an ans string, can use str.insert(index, char) to insert '*'.
    string str;
    cin >> str;
    string ans = "";
    charSep(str, ans, 0);
    cout << ans;
    return 0;
}