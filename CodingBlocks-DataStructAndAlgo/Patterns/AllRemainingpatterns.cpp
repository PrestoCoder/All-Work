#include<iostream>
using namespace std;

// int main()
// {
//     int n = 0;
//     cin >> n;
//     for(int i = 0; i < n; i++) {
//         for(int j = 0; j < n; j++) {
//             if(j <= i) {
//                 int num = j + 1;
//                 cout << num;
//             }
//         }
//         cout << endl;
//     }
//     return 0;
// }

/*
1
12
123
....
*/

// int main()
// {
//     int n = 0;
//     cin >> n;
//     for(int i = 0; i < n; i++) {
//         for(int j = 0; j < n; j++) {
//             if(j <= i) {
//                 char c = 'A' + 2*i + j;
//                 cout << c;
//             }
//         }
//         cout << endl;
//     }
//     return 0;
// }

/*
A
CD
EFG
HIJK
....
*/

// int main()
// {
//     int n = 0;
//     cin >> n;
//     for(int i = 0; i < n; i++) {
//         for(int j = 0; j < n; j++) {
//             if(j <= i) {
//                 char c = '*';
//                 cout << c;
//             }
//         }
//         cout << endl;
//     }
//     return 0;
// }

/*
- For i >= j
*
**
***
****

And for i <= j

****
 ***
  **
   *

*/

/*
n=1
*

n=2
*
**

n=3
*
**
***
*/

int main()
{
    int n = 0;
    cin >> n;
    for(int i = 0; i < n; i++) {
        for(int j = 0; j < n; j++) {
            if(i + j >= n - 1) {
                cout << "*";
            } else {
                cout << " ";
            }
        }
        cout << endl;
    }
    return 0;
}


/*

n=1
*

n=2
 *
**

n=3i|
  *0
 **1
***2
012 <- j
*/
