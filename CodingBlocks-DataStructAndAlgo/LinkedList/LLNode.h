#include<iostream>
using namespace std;

// Linked List Node class
class LLNode {
    public:

        int data;
        LLNode* next;
    
        LLNode() {
            this -> data = 0;
            this -> next = NULL;
        }

        LLNode(int data) {
            this -> data = data;
        }
};

// Finding length of the linked list
int lengthLL(LLNode* head) {
    if(head == NULL) {
        return 0;
    }
    return 1 + lengthLL(head -> next);
}

// Printing whole linked list
void printLL(LLNode* head) {
    if(head == NULL) {
        cout << "NULL" << endl;
        return;
    }
    cout << head -> data << "->";
    printLL(head -> next);
}

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