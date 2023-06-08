#include<iostream>
using namespace std;

int main()
{
    int n = 0;
    cin >> n;
    for(int i = 0; i < n; i++) {
        for(int j = 0; j < n; j++) {
            char c = 'A' + n - i - 1;
            cout << c << "";
        }
        cout << endl;
    }
    return 0;
}

/*
C C C
B B B
A A A
*/