#include <iostream>
#include <string>

using namespace std;

int main() {
    int n;
    cin >> n;
    string res = "";
    while(n > 0) {
        int rem = n % 2;
        n = n / 2;
        char c = rem + '0';
        res = c + res;
    }
    cout << res;
}   