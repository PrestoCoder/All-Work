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