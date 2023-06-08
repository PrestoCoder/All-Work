#include<iostream>
using namespace std;

// Without incrementing arr pointer
// int findIndex(int arr[], int size, int target, int index) {
//     if(size == index) {
//         return -1;
//     }
//     if(arr[index] == target) {
//         return index;
//     }
//     return findIndex(arr, size, target, index + 1);
// }

int findIndex(int arr[], int size, int target) {
    if(size == 0) {
        return -1;
    }
    if(arr[0] == target) {
        return 0;
    }
    int subAns = findIndex(arr + 1, size - 1, target);
    if(subAns == -1) {
        return -1;
    } else {
        return 1 + subAns;
    }
}

int main() {
    int arr[] = {0, 1, 2, 3, 4, 5, 6};
    cout << findIndex(arr, 7, 6);
}