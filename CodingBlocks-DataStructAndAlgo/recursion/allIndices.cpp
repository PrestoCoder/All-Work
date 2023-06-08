#include<iostream>
using namespace std;

// Without incrementing arr pointer
void findIndex(int arr[], int size, int target, int index, bool& flag) {
    if(size == index) {
        return;
    }
    if(arr[index] == target) {
        flag = true;
        cout << index << " ";
    }
    findIndex(arr, size, target, index + 1, flag);
}

int main() {
    int arr[] = {0, 1, 6, 3, 6, 5, 6};
    bool flag = false;
    findIndex(arr, 7, 61, 0, flag);
    // flag set true hoga only if kuchh bhi print hua hai
    // Otherwise matlab kuchh ni mila
    if(!flag) {
        cout << -1;
    }
}