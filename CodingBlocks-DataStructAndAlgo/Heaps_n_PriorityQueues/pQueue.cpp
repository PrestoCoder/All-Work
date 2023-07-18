// In priority queue, we input elements random. But while pulling out, elements with highest priority come out first.
// Usually, priority is dependent on the value of the element. More value, more priority.
// Thus, inputting a priority queue can be done through a BST.

// Priority queues are same as Max heaps.

// In Min heaps, minimum element comes out first.

// Heaps are basically binary trees.

// Heaps need to be Complete binary trees. That is, the value of the top node should be such that rest of the nodes arrange
// themselves into a CBT.

#include<iostream>
#include<queue>

using namespace std;

int main() {
    // For min heap
    // priority_queue<int, vector<int>, greater<int>> pq;

    //max heap
    priority_queue<int> pq;
    pq.push(5);
    pq.push(3);
    pq.push(8);
    pq.push(2);
    pq.push(4);
    pq.push(9);
    pq.push(1);
    int n = pq.size();
    for(int i = 0; i < n; i++) {
        cout << pq.top() << endl;
        pq.pop();
    }
}
