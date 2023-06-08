// Checks if there exists a subset of array that sums to a given number.
#include<bits/stdc++.h>
#include<iostream>
using namespace std;

// Using pointers
// bool checkSum(int arr[], int size, int target) {
//   if(size <= 0) {
//     return false;
//   }
//   if(target == arr[0]) {
//     return true;
//   }
//   bool ans1 = checkSum(arr + 1, size - 1, target - arr[0]);
//   bool ans2 = checkSum(arr + 1, size - 1, target);
//   return ans1 || ans2;
// }

// W/o using pointer
bool checkSum(int arr[], int size, int index, int target) {
  // Reaching end of array
  if(index > size - 1) {
    return false;
  }

  // If current element equals target
  if(arr[index] == target) {
    return true;
  }
  bool ans1 = checkSum(arr, size, index + 1, target - arr[index]);
  bool ans2 = checkSum(arr, size, index + 1, target);
  return ans1 || ans2;

}

int main() {
  int n;
  cin >> n;
  int arr[1000];
  for(int i = 0; i < n; i++) {
    cin >> arr[i];
  }
  int target;
  cin >> target;
  cout << checkSum(arr, n, 0, target);
  return 0;
}