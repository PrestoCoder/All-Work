#include<bits/stdc++.h>
#include<vector>
#include<iostream>
using namespace std;

int main() {
    vector<int> v;
    v.push_back(5);
    v.emplace_back(6);
    int c = 10;
    // v.__emplace_back(c);

    cout << v[0] << v[1];
    // int n = sizeof(arr)/sizeof(arr[0])
    cout << v.size();
    
    // sort(arr, arr + n);
    sort(v.begin(), v.end());

    // Removes last element from vector.
    v.pop_back();
    // Length 12, all elements initialized with 0.
    vector<int> v1(12, 0);

    v[0] = 2;
    return 0;
}