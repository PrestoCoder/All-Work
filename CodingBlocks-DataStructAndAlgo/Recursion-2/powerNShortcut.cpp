#include<iostream>
using namespace std;

int powerN(int x, int n) {
    if(n == 0) {
        return 1;
    }
    if(n == 1) {
        return x;
    }
    int subans = powerN(x, n/2);
    if(n%2 == 1) {
        return subans * subans * x;
    } else {
        return subans * subans;
    }
}

int main() {
    cout << powerN(77, 3);
    return 0;
}