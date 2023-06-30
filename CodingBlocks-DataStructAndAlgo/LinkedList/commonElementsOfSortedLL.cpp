#include<iostream>
#include<queue>
#include "LLNode.h"
using namespace std;

// Print common elements of 2 sorted LLs
void printIntersection(LLNode* h1, LLNode* h2) {
    if(h1 == NULL || h2 == NULL) {
        return;
    }
    int d1 = h1 -> data;
    int d2 = h2 -> data;
    if(d1 == d2) {
        cout << d1 << " ";
    }
    if(d1 < d2) {
        printIntersection(h1 -> next, h2);
    } else {
        printIntersection(h1, h2 -> next);
    }
}

int main() {
    // Inputting LLNode
    // Creating and chaining nodes until we enter -1
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
    
    printIntersection(head1, head2);
}