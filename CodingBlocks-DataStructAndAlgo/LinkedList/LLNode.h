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
void printPrettyLL(LLNode* head) {
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

// Normal input and print LL
LLNode* inputLL(int count) {
	if(count == 0) {
		return NULL;
	}
    LLNode* head = new LLNode();
	int data;
	cin >> data;
	head -> data = data;
	head -> next = inputLL(count - 1);
    return head;
}

void inputLL2(LLNode* head, int count = 0) {
    if(count == 0) {
        int data;
        cin >> data;
        head = new LLNode(data);
        inputLL2(head, count + 1);
        return;
    }
    int data;
    cin >> data;
    if(data != -1) {
        head -> next = new LLNode(data);
        head = head -> next;
        inputLL2(head);
        return;
    } else {
        return;
    }
}

void printLL(LLNode* head) {
	if(head == NULL) {
		return;
	}
	cout << head -> data << " ";
	printLL(head -> next);
}
