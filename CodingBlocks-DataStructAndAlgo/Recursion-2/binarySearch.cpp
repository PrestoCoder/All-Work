#include<iostream>
using namespace std;

int binarySearch(int arr[], int x, int start, int end) {
    if(start > end) {
        return -1;
    }
    int midIndex = (start + end + 1)/2;
    int mid = arr[midIndex];
    if(x == mid) {
        return midIndex;
    } else if(x > mid) {
        return binarySearch(arr, x, midIndex + 1, end);
    } else {
        return binarySearch(arr, x, start, midIndex - 1);
    }
}

int main() {
    int arr[] = {1, 3, 5, 6, 7, 8, 9};
    cout << binarySearch(arr, 9, 0, 6);
    return 0;
}