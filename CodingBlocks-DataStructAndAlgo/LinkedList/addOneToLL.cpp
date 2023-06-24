#include<iostream>
#include<queue>
#include "LLNode.h"
using namespace std;

void addOneToLL(LLNode* head, int& carry) {
    if(head == NULL) {
        return;
    }
    

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
    cout << addOneToLL(head, carry);
}