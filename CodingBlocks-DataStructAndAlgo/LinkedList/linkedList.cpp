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

// Summing up all Linked list nodes
int sumLL(LLNode* head) {
    if(head == NULL) {
        return 0;
    }
    return head -> data + sumLL(head -> next);
}

// Finding length of the linked list
int lengthLL(LLNode* head) {
    if(head == NULL) {
        return 0;
    }
    return 1 + lengthLL(head -> next);
}

// Delete ith node
LLNode* deleteNode(LLNode* head, int deletionIndex, int currIndex = 0) {
    if(currIndex == deletionIndex) {
        return head -> next;
    }
    LLNode* modifiedLL = deleteNode(head -> next, deletionIndex, currIndex + 1);
    head -> next = modifiedLL;
    return head;
}

int main() {
    // Inputting LLNode
    // Creating and chaining nodes until we enter -1

    // Linked list 1
    int data;
    cin >> data;
    LLNode* head1 = new LLNode(data);
    LLNode* currNode = head1;
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

    // Linked list 2
    cin >> data;
    LLNode* head2 = new LLNode(data);
    currNode = head2;
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

    head1 = deleteNode(head1, 5);

    // Printing LL
    printLL(head1);

    // LL Sum
    // cout << sumLL(head) << endl;

    // LL length
    // cout << lengthLL(head);

    return 0;
}