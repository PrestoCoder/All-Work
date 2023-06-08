#include<iostream>
using namespace std;

// We can also reverse array, and then use the firstIndex code
int findIndex(int arr[], int size, int target) {
    if(size == 0) {
        return -1;
    }
    if(arr[size - 1] == target) {
        return size - 1;
    }
    return findIndex(arr, size - 1, target);
}

int main() {
    int arr[] = {0, 1, 6, 3, 6, 5, 6};
    cout << findIndex(arr, 7, 6);
}