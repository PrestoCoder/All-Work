#include<bits/stdc++.h>
#include<unordered_map>
#include<iostream>
using namespace std;

// unordered map returns 0 if there is no corresponding key.
unordered_map<int, int> map1;

// normal fibo

int fiboNormal(int n) {
    if(n < 2) {
        return n;
    }
    return fiboNormal(n - 1) + fiboNormal(n - 2);
}

// With memoization
int fibo(int n) {
    if(n < 2) {
        return n;
    }
    if(map1[n]) {
        return map1[n];
    }
    map1[n] = fibo(n - 1) + fibo(n - 2);
    return map1[n];
}

int main() {
    int n;
    cin >> n;
    cout << fibo(n);
    return 0;
}