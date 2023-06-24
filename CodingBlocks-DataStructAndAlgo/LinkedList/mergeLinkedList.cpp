#include<iostream>
using namespace std;

class LLNode {
    int data;
    LLNode* next;

    public:
    LLNode() {
        this -> data = 0;
        this -> next = NULL;
    }

    LLNode(int data, LLNode* next) {
        this -> data = data;
        this -> next = next;
    }

    void setData(int data) {
        this -> data = data;
    }

    void setNextNode(LLNode* node) {
        this -> next = node;
    }

    int getData() {
        return this -> data;
    }

    LLNode* getNextNode() {
        return this -> next;
    }
};

LLNode* mergeSortedLL(LLNode* h1, LLNode* h2) {
    if(h1 == NULL) {
        return h2;
    }
    if(h2 == NULL) {
        return h1;
    }
    LLNode* newHead = new LLNode();
    if(h1 -> getData() <= h2 -> getData()) {
        newHead -> setData(h1 -> getData());
        newHead -> setNextNode(mergeSortedLL(h1 -> getNextNode(), h2));
    } else {
        newHead -> setData(h2 -> getData());
        newHead -> setNextNode(mergeSortedLL(h1, h2 -> getNextNode()));
    }
    return newHead;
}

int main() {
    int n1;
    cin >> n1;
    LLNode* head = new LLNode();
    int data;
    cin >> data;
    head -> setData(data);
    LLNode* temp = head;
    for(int i = 1; i < n1; i++) {
        
        LLNode* newNode = new LLNode();
        temp -> setNextNode(newNode);

        cin >> data;
        newNode -> setData(data);
        temp = newNode;
    }

    int n2;
    cin >> n2;
    LLNode* head2 = new LLNode();
    cin >> data;
    head2 -> setData(data);
    temp = head2;
    for(int i = 1; i < n2; i++) {
        
        LLNode* newNode = new LLNode();
        temp -> setNextNode(newNode);

        int data;
        cin >> data;
        newNode -> setData(data);
        temp = newNode;
    }

    LLNode* mergedHead = mergeSortedLL(head, head2); 
    while(1) {
        if(mergedHead != NULL) {
            cout << mergedHead -> getData() << endl;
            mergedHead = mergedHead -> getNextNode();
        } else {
            break;
        }
    }
}