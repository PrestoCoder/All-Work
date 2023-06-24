#include<iostream>
#include<queue>
#include "LLNode.h"
using namespace std;

// Node reversal

// We pass on the curr head to the recursive call.
// In the call, we get that call's curr head to point to the passed prev head.
// And then we pass that curr head to the next recursive call, and so on.
// And we return the final node.
LLNode* reverseLL(LLNode* head, LLNode* prevNode = NULL) {
    if(head -> next == NULL) {
        head -> next = prevNode;
        return head;
    }
    LLNode* nextNode = head -> next;
    head -> next = prevNode;
    return reverseLL(nextNode, head);
}

// Reverse only the data of the LL nodes, not the nodes themselves.
// Can be done with vector intead of queue as well.
void reverseLLData(LLNode* head, queue<int> &q1) {
    if(head == NULL) {
        return;
    }
    q1.push(head -> data);
    reverseLLData(head -> next, q1);
    head -> data = q1.front();
    q1.pop();
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
    reverseLLData(head, q1);
    printLL(head);


}