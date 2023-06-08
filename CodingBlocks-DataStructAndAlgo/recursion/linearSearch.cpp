#include<iostream>
using namespace std;

bool linSearch(int arr[], int size, int element) {
    if(size == 0) {
        return false;
    }
    if(arr[0] == element) {
        return true;
    }
    return linSearch(arr + 1, size - 1, element);
}


int main() {
    int arr[] = {1, 4, 6, 3, 4, 2, 7, 6, 5};
    cout << linSearch(arr, 9, 10);
    return 0;
}
