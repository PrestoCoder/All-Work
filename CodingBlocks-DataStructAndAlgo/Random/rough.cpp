#include<iostream>
#include<limits.h>
#include<cstdlib>
#include<algorithm>
using namespace std;

int main() {
    int t;
    cin >> t;
    for(int j = 0; j < t; j++) {
        int n;
        cin >> n;
        long arr[n];
        for(int i = 0; i < n; i++) {
            cin >> arr[i];
        }

        long maxAns = LONG_MAX;
        long ans1, ans2;
        for(int i = 0; i < n; i++) {
            // Alice chooses
            // Alice ko pata hai, woh jo choose karegi, uske aas paas ka Bob max choose karlega.
            // Toh woh hi element choose karegi jiske aas paas mein se badha overall bakiyon se kam ho.
\
            ans1 = (i > 0) ? abs(arr[i] - arr[i - 1]) : LONG_MIN;
            ans2 = (i < n - 1) ? abs(arr[i] - arr[i + 1]) : LONG_MIN;
            long currMax = max(ans1, ans2);

            // Agar min se kam hua toh set kar denge.
            // Par iss price pe nahin ki max prize badh jaae.
            // Phir koi point hi ni ra min karne ka.
            // Kyunki ne toh correponding 
            if(currMax < maxAns) { 
                maxAns = currMax;
            }
            
        }
        cout << maxAns << endl;        
    }
}