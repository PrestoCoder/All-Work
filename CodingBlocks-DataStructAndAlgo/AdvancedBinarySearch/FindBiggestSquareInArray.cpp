#include<iostream>
#include <limits.h>
using namespace std;

// My Approach - Not related to Binary Search
int findMaxK(int arr[], int n, int start, int end) {
    if(n <= 0) {
        return 0;
    }
    int min = INT_MAX;
    int minIndex = -1;
    for(int i = start; i <= end; i++) {
        if(arr[i] <= min) {
            min = arr[i];
            minIndex = i;
        }
    }
    int maxK = (min <= n) ? min : n;
    int k1 = findMaxK(arr, end - minIndex, minIndex + 1, end);
    int k2 = findMaxK(arr, minIndex - start, start, minIndex - 1);
    int subMaxK = k1 > k2 ? k1 : k2;
    int totalMaxK = maxK > subMaxK ? maxK : subMaxK;
    return totalMaxK;
}

// Advanced Binary Search approach

int main() {
    // int arr[] = {1, 5, 6, 7, 4, 3, 1, 4, 3, 5};
    // int n = 10;
    int n;
    cin >> n;
    int* arr = new int[n];
    for(int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    cout << findMaxK(arr, n, 0, n - 1);
}