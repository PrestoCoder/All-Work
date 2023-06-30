#include<iostream>
#include<queue>
#include "LLNode.h"
using namespace std;

// Assuming there can be a need to introduce a new head, like 999 + 1 = 1000, new head is 1, previously was 9.
LLNode* addOneToLL(LLNode* head, int& carry, int index) {
    if(head -> next == NULL) {
        int data = head -> data;
        int sum = (data + 1) % 10;
        carry = (data + 1) / 10;
        head -> data = sum;
        return head;
    }
    addOneToLL(head -> next, carry, index + 1);
    int data = head -> data;
    int sum = (data + carry) % 10;
    carry = (data + carry) / 10;
    head -> data = sum;

    // In case we need a new head, ex:- 99 + 1 = 100
    if(index == 0) {
        if(carry > 0) {
            LLNode* newHead = new LLNode();
            newHead -> data = carry;
            newHead -> next = head;
            return newHead;
        }
    }
    return head;
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

    int carry = 0;
    LLNode* newHead = addOneToLL(head, carry, 0);
    printLL(newHead);
}