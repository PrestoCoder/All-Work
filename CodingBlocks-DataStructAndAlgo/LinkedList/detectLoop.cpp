#include<bits/stdc++.h>
#include<iostream>
#include "LLNode.h"
using namespace std;

// Printing whole linked list
void printLL(LLNode* head) {
    if(head == NULL) {
        cout << "NULL" << endl;
        return;
    }
    cout << head -> data << "->";
    printLL(head -> next);
}

// Checking if there is a loop inside the linked list.
// It means that the end of the LL points to some node of the LL itself, and not NULL
// Assuming all data values are >= 0. 
// Allowing myself to alter the LL' data.
// Thus, we set data of each visited LL Node to -1.
// If while traversing we find a node with this value, implies that we have looped into a previous node.
bool checkLoop(LLNode* head) {
    if(head == NULL) {
        return false;
    }
    if(head -> data < 0) {
        return true;
    }
    head -> data = -1;
    bool subans = checkLoop(head -> next);
    return subans;
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
    // Introducing loop
    // currNode -> next = head;
    cout << checkLoop(head);

    return 0;
}