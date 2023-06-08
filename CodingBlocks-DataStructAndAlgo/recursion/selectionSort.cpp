#include<iostream>
using namespace std;

void selectionSort(int* arr, int n) {
    if(n == 0) {
        return;
    }
    // Selecting max element and putting it at the end by swapping
    for(int i = 0; i < n - 1; i++) {
        if(arr[i] > arr[i + 1]) {
            swap(arr[i], arr[i + 1]);
        }
    }

    selectionSort(arr, n - 1);
}

int main() {
    int arr[] = {3, 5, 7, 3, 2, 8, 9};
    int n = 7;
    selectionSort(arr, n);
    for(int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
}