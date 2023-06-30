#include<iostream>
#include<queue>
using namespace std;

int main() {
    queue<int> q1;

    q1.push(5);
    q1.push(4);
    q1.push(3);
    q1.push(2);
    // Return element at the front of the queue
    cout << q1.front() << endl;
    // Returns element at the back of the queue
    cout << q1.back() << endl;
    // Pops front most element, doesn't return anything
    q1.pop();
    cout << q1.front() << endl;
}