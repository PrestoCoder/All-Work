#include<iostream>
#include<queue>
#include "LLNode.h"
using namespace std;

// Traverse from head to tail, putting all data in a queue
// Start verifying when reach the tail.
// This way, the tail will get compared to head, and so on.
// In queue, front will be LL's head, and back would be LL's tail.
// And again, vector can be used instead of this.
bool isPalindrome(LLNode* head, queue<int> &q1) {
    if(head == NULL) {
        return true;
    }
    q1.push(head -> data);
    bool subAns = isPalindrome(head -> next, q1);
    if(subAns) {
        if(head -> data == q1.front()) {
            q1.pop();
            return true;
        } else {
            return false;
        }
    }
    return false;
    
}

int main() {
    // Inputting LLNode
    // Creating and chaining nodes until we enter -1
    int data;
    cin >> data;
    LLNode* head = new LLNode(data);
    LLNode* currNode = head;
    while(1) {
        int data;
        cin >> data;
        if(data == -1) {
            break;
        }
        LLNode * node = new LLNode(data);
        currNode -> next = node;
        currNode = node;
    }

    queue<int> q1;
    cout << isPalindrome(head, q1);
}