#include<iostream>
using namespace std;

int sumArray(int arr[], int size) {
    if(size == 0) {
        return 0;
    }
    return arr[0] + sumArray(arr + 1, size - 1);
}

int main() {
    int arr[] = {1, 2, 3, 4, 5, 6};
    cout << sumArray(arr, 6);
}