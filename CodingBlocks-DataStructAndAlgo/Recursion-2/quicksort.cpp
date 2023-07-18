// QuickSort

// In quicksort, we choose randomly an element(we refer to it as pivot) which we place at its rightful position in the array.
// We do that by counting how many elements are lesser than the pivot, lets say equal to 'x'.
// We then place it after say first 'x' elements of the array.
// Now, we place all elements smaller than the pivot before the pivot, and larger after the pivot.
// Then we call quicksort on the 2 halves, one to the left and one to the right of the pivot.

#include<bits/stdc++.h>
#include<iostream>
using namespace std;

void quickSort(int arr[], int start, int end) {
    if(start >= end) {
        return;
    }
    int pivot = arr[start]; // It doesn't matter, it could've been any other element as well.

    // Counting how many elements are smaller than pivot
    int count = 0;
    for(int i = start; i <= end; i++) {
        if(arr[i] < pivot) {
            count++;
        }
    }
    int pivotIndex = count;

    // Placing Pivot at its rightful position
    swap(arr[pivotIndex], arr[start]);

    // Placing elements around the pivot compared to pivot
    int index1 = start;
    int index2 = pivotIndex + 1;
    while(index1 < pivotIndex && index2 < end) {
        if(arr[index1] < pivot) {
            index1++;
        } else {
            if(arr[index2] < pivot) {
                swap(arr[index1], arr[index2]);
                index1++;
                index2++;
            } else {
                index2++;
            }
        }
    }

    quickSort(arr, start, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, end);

}

int main() {
    int n;
    cin >> n;
    int * arr = new int[n];

    for(int i = 0; i < n; i++ ){
        cin >> arr[i];
    }

    quickSort(arr, 0, n - 1);

    for(int i = 0; i < n; i++ ){
        cout << arr[i] << " ";
    }
    return 0;
}