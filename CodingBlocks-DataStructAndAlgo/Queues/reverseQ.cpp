#include<iostream>
#include<queue>
#include<stack>
using namespace std;

int main() {
    // Inputting a queue till -1
    queue<int> q1;
    while(1) {
        int data;
        cin >> data;
        if(data == -1) {
            break;
        }
        q1.push(data);
    }

    // Reversing a queue
    stack<int> s1;
    // Empty queue into a stack, then empty stack back into the queue
    while(q1.size() > 0) {
        int x = q1.front();
        s1.push(x);
        q1.pop();
    }

    while(s1.size() > 0) {
        int x = s1.top();
        q1.push(x);
        s1.pop();
    }

    // Printing reversed queue
    int n = q1.size();
    while(n > 0) {
        int x = q1.front();
        cout << x << " ";
        q1.pop();
        // This keeps the queue same as before after loop finishes
        q1.push(x);
        n--;
    }

    
}