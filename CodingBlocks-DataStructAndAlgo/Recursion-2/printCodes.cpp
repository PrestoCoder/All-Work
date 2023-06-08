#include<bits/stdc++.h>
#include<iostream>
using namespace std;

void printCodes(int arr[], int size, string s) {
    if(size <= 0) {
        cout << s << endl;
        return;
    }
    char char1 = arr[0] + 'a' - 1;
    printCodes(arr + 1, size - 1, s + char1);

    if(size > 1) {
        char char2 = 10*arr[0] + arr[1] + 'a' - 1;
        if(char2 <= 'z') {
            printCodes(arr + 2, size - 2, s + char2);
        }
    }
}

int main() {
    int arr[] = {1, 1, 2, 3};
    string s = "";
    printCodes(arr, 4, s);
    return 0;
}