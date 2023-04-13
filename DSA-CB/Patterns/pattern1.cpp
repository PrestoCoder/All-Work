#include<iostream>
using namespace std;

int main()
{
    int n = 0;
    cin >> n;
    for(int i = 0; i < n; i++) {
        for(int j = 0; j < n; j++) {
            char c = n*i + j + 'A';
            cout << c << "";
        }
        cout << endl;
    }
    return 0;
}

/*
A B C
D E F
G H I
*/