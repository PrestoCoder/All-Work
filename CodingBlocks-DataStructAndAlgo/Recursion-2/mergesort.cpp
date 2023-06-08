#include<bits/stdc++.h>
#include<iostream>
using namespace std;

int* mergeSortedArrays(int arr[], int start1, int end1, int start2, int end2) {
    int* mergedArr = new int[100];
    int index = 0;
    // Below '=' also there coz for single elements, start and end would be the same from the starting
    while((start1 <= end1) && (start2 <= end2)) {
        if(arr[start1] <= arr[start2]) {
            mergedArr[index] = arr[start1];
            start1++;
        } else {
            mergedArr[index] = arr[start2];
            start2++;
        }
        index++;
    }
    // Means 1st array exhausted
    if(start1 > end1) {
        while(start2 <= end2) {
            mergedArr[index] = arr[start2];
            index++;
            start2++;
        }
    }

    // Means 2nd array exhausted
    if(start2 > end2) {
        while(start1 <= end1) {
            mergedArr[index] = arr[start1];
            index++;
            start1++;
        }
    }
    return mergedArr;

}

void mergeSort(int arr[], int start, int end) {
    if(start >= end) {
        return;
    }
    int midIndex = (start + end) / 2;
    // Recursive calls
    mergeSort(arr, start, midIndex);
    mergeSort(arr, midIndex + 1, end);

    // Merging 2 sorted halves
    int* mergedArray = mergeSortedArrays(arr, start, midIndex, midIndex + 1, end);

    // Copying merged array into the original array
    int index = 0;
    for(int i = start; i <= end; i++) {
        arr[i] = mergedArray[index];
        index++;
    }
    delete [] mergedArray;
}

int main() {
    int n;
    cin >> n;
    int * arr = new int[n];

    for(int i = 0; i < n; i++ ){
        cin >> arr[i];
    }

    mergeSort(arr, 0, n - 1);

    for(int i = 0; i < n; i++ ){
        cout << arr[i] << " ";
    }
    return 0;
}