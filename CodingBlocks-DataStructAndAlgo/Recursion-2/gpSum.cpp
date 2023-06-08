#include<iostream>
#include<math.h>
using namespace std;

float gpSum(int n) {
    if(n == 0) {
        return 1;
    }

    return pow(2, -n) + gpSum(n - 1);
}

int main() {
    int n;
    cin >> n;
    cout << gpSum(n);
}