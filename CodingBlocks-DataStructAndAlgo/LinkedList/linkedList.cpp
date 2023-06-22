#include<bits/stdc++.h>
#include<iostream>
using namespace std;

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

void printLL(LLNode* head) {
    if(head == NULL) {
        cout << "NULL" << endl;
        return;
    }
    cout << head -> data << "->";
    printLL(head -> next);
}

int sumLL(LLNode* head) {
    if(head == NULL) {
        return 0;
    }
    return head -> data + sumLL(head -> next);
}

int lengthLL(LLNode* head) {
    if(head == NULL) {
        return 0;
    }
    return 1 + lengthLL(head -> next);
}

LLNode* merge2SortedLL(LLNode* head1, LLNode* head2) {
    if(head1 == NULL) {
        return head2;
    }
    if(head2 == NULL) {
        return head1;
    }
    LLNode* ans = NULL;
    if(head1 -> data < head2 -> data) {
        ans = head1;
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

    // Printing LL
    // printLL(head);

    // LL Sum
    // cout << sumLL(head) << endl;

    // LL length
    // cout << lengthLL(head);

    // Merging 2 sorted LL
    printLL(merge2SortedLL(head1, head2));

    return 0;
}