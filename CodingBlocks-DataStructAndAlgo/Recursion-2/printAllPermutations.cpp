#include<bits/stdc++.h>
#include<iostream>
#include<string>
#include<vector>
using namespace std;


vector<string> v1;
// 2nd method to check repetition
bool checkReptition(string s) {
    for(int i = 0; i < v1.size(); i++) {
        if(v1[i] == s) {
            return true;
        }
    }
    v1.push_back(s);
    return false;
}

void printPerm(string input, string output) {
    if(input.length() == 0) {
        if(checkReptition(output)) {
            return;
        }
        cout << output << endl;
        return;
    }
    // 1st method to check repetition
    // int arr[127] = {0};
    for(int i = 0; i < input.length(); i++) {
        // Checking for duplicate character
        // If so, skip it
        // if(arr[input[i]] > 0) {
        //     continue;
        // }
        // arr[input[i]]++;
        // Removing ith character from input string.
        // Adding ith character to the end of substring
        printPerm(input.substr(0, i) + input.substr(i + 1, input.length() - 1), output + input[i]);
    }
}

int main() {
    string s;
    cin >> s;
    printPerm(s, "");
}