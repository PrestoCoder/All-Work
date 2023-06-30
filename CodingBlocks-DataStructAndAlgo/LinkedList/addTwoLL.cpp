#include<iostream>
#include<queue>
#include "LLNode.h"
using namespace std;

// Here, the best way is to reverse both LLs and then add.
// Coz otherwise, syncing recursion with the correct nodes to be added gets v. complex unnecessarily.
// Without much impact on Time complexity.
LLNode* addTwoLL(LLNode* head1, LLNode* head2, int carry = 0) {

    // If LL1 exhausted:-
    if(head1 == NULL) {

        // If LL2 still left, keep adding carries and updating LL2.
        if(head2 != NULL) {

            int totalSum = head2 -> data + carry;
            int sum = totalSum % 10;
            int newCarry = totalSum / 10;
            head2 -> data = sum;
            head2 -> next = addTwoLL(head1, head2 -> next, newCarry);
            return head2;

        // If LL2 also exhausted, create a new node to carry the last carry.
        // If carry != 0
        } else if(carry != 0){

            LLNode* newHead = new LLNode();
            newHead -> data = carry;
            return newHead;

        // If carry = 0;
        } else {
            return NULL;
        }

    // If only LL2 exhausted, keep adding carries and updating LL1.
    } else if(head2 == NULL) {

        int totalSum = head1 -> data + carry;
        int sum = totalSum % 10;
        int newCarry = totalSum / 10;
        head1 -> data = sum;
        head1 -> next = addTwoLL(head1 -> next, head2, newCarry);
        return head1;
    }

    int totalSum = head1 -> data + head2 -> data + carry;
    int sum = totalSum % 10;
    int newCarry = totalSum / 10;

    LLNode* newHead = new LLNode();
    newHead -> data = sum;
    LLNode* subNode = addTwoLL(head1 -> next, head2 -> next, newCarry);
    newHead -> next = subNode;

    return newHead;
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

    head1 = reverseLL(head1);
    head2 = reverseLL(head2);

    LLNode* newHead = addTwoLL(head1, head2);

    // Reversing back to get the actual sum
    newHead = reverseLL(newHead);
    printLL(newHead);
}